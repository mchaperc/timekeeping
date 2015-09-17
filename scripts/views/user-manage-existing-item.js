define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates'
		],
	function(Backbone, Marionette, dustMarionette, templates) {
		return ExistingItemView = Marionette.ItemView.extend({
			template: 'existing-task-item.dust',
			className: 'existing-item-container',
			tagName: 'li',
			events: {
				'click .edit-item': 'editItem',
				'click .delete-item': 'deleteConfirm',
				'click .delete-confirm-confirm': 'deleteItem',
				'click .delete-confirm-cancel': 'cancelDelete',
				'click .record-time': 'recordTime',
				'click .pause-time': 'pauseTime',
				'click .save-changes': 'saveChanges',
				'click .cancel-changes': 'cancelChanges'
			},

			initialize: function() {
				this.listenTo(this.model, 'change', this.render)
			},

			editItem: function(e) {
				e.preventDefault();
				this.$('.display').hide();
				this.$('.edit').show();
			},

			deleteConfirm: function(e) {
				e.preventDefault();
				this.$('.delete-confirm').fadeIn();
			},

			deleteItem: function(e) {
				e.preventDefault();
				this.model.destroy();
				$('.delete-confirm').hide();
			},

			cancelDelete: function(e) {
				e.preventDefault();
				$('.delete-confirm').hide();	
			},

			recordTime: function(e) {
				e.preventDefault();
				var self = this;
				if(!this.model.get('running')) {
					self.interval = setInterval(function() {
						var time = self.model.get('time');
						time = time.toString().split(':');
						time[2] = Number(time[2]) + 1;
						if (time[2] === 60) {
							time[2] = '00';
							time[1] = Number(time[1]) + 1;
							if (time[1] === 60) {
								time[1] = '00';
								time[0] = Number(time[0]) + 1;
							}
						}
						time = _.map(time, function(item) {
							if (Number(item) < 10) {
								return ('0' + item).slice(-2);
							} else {
								return item;
							}
						})
						self.model.set('time', time.join(':'));
						self.model.save();
					}, 1000);
					this.model.set('running', true);
				}
			},

			pauseTime: function(e) {
				e.preventDefault();
				this.model.set('running', false);
				clearInterval(this.interval);
			},

			saveChanges: function(e) {
				e.preventDefault();
				var taskName = this.$('input.task-item-task').val() || this.model.get('task');
				var projectName = this.$('input.task-item-project').val() || this.model.get('project');
				var time = this.$('input.task-item-time').val() || this.model.get('time');
				this.model.set({task: taskName, project: projectName, time: time});
				this.model.save();
				$('.edit').hide();
				$('.display').show();
			},

			cancelChanges: function(e) {
				e.preventDefault();
				var taskName = this.model.get('task') || 'N/A';
				var projectName = this.model.get('project') || 'N/A';
				var time = this.model.get('time') || '00:00:00';
				this.$('input.task-item-task').val(taskName);
				this.$('input.task-item-project').val(projectName);
				this.$('input.task-item-time').val(time);
				$('.edit').hide();
				$('.display').show();
			}
		})
	})