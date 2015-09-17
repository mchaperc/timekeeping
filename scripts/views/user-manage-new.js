define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates'
		],
	function(Backbone, Marionette, dustMarionette, templates) {
		return NewTask = Marionette.ItemView.extend({
			template: 'new-task.dust',
			className: 'new-container',
			events: {
				'click .add-new-task': 'addTask'
			},
			addTask: function(e) {
				e.preventDefault();
				if (this.$('.new-task-task').val()) {
					var taskName = this.$('.new-task-task').val();
					var projectName = this.$('.new-task-project').val() || 'N/A';
					this.collection.create({
						task: taskName,
						project: projectName,
						time: '00:00:00'
					});
					this.$('.new-task-project').val('')
					this.$('.new-task-task').val('');
					this.$('.new-task-task').css({'outline': 'none'});
					this.$('.new-task-task').focus();
				} else {
					this.$('.new-task-task').css({'outline': '2px solid rgba(255,0,0,1'}).focus();
				}
			}
		})
	})