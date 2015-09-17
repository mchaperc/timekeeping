define(['backbone', 'marionette', '../models/taskModel'],
	function(Backbone, Marionette, TaskModel) {
		var TasksCollection = Backbone.Collection.extend({
			model: TaskModel,
			url: 'http://tiny-lasagna-server.herokuapp.com/collections/mytasks',
			comparator: 'project'
		});
		return TasksCollection;
})