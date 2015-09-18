define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates',
		'./user-manage-new',
		'./user-manage-existing',
		'collections/tasksCollection'
		],
	function(Backbone, Marionette, dustMarionette, templates, NewTask, ExistingTasks, TasksCollection) {
		return UserManage = Marionette.LayoutView.extend({
			template: 'user-manage.dust',
			className: 'manage-container',
			regions: {
				manageNew: '.new-task-container',
				manageTasks: '.existing-tasks-container'
			},
			onRender: function() {
				var self = this;

				Parse.User.current().fetch().then(function(user) {
					var userTasks = user.get('tasks') || [];
					var userModel = new Backbone.Model(user);
					var tasks = new Backbone.Collection(userTasks);

					self.showChildView('manageNew', new NewTask({model: userModel, collection: tasks}));
					self.showChildView('manageTasks', new ExistingTasks({collection: tasks}));
				});
			}
		})
	})