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
				this.showChildView('manageNew', new NewTask());
				var tasks = new Backbone.Collection(TasksCollection)
				this.showChildView('manageTasks', new ExistingTasks({collection: tasks}));
			}
		})
	})