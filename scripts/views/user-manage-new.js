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
				var user = Parse.User.current();
				var tasks = Parse.User.current().get('tasks') || [];

				if (this.$('.new-task-task').val()) {
					var taskName = this.$('.new-task-task').val();
					var projectName = this.$('.new-task-project').val() || 'N/A';
					var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
					var uniqueId = randLetter + Date.now();
					var newTask = {
						task: taskName,
						project: projectName,
						time: '00:00:00',
						id: uniqueId
					};

					Parse.User.current().set('tasks', tasks.concat(newTask));

					Parse.User.current().save();

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