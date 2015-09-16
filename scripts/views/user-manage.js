define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates'
		],
	function(Backbone, Marionette, dustMarionette, templates) {
		return UserManage = Marionette.LayoutView.extend({
			template: 'user-manage.dust',
			className: 'manage-container',
			regions: {
				manageNew: '.new-task-container',
				manageTasks: '.existing-tasks-container'
			}
		})
	})