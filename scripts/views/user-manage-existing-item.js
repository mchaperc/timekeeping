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
				this.$('.record-time').hide();
				this.$('.pause-time').show();
			},

			pauseTime: function(e) {
				e.preventDefault();
				this.$('.pause-time').hide();
				this.$('.record-time').show();
			}
,
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