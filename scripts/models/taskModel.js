define([
		'backbone', 
		'marionette'
		], 
	function(Backbone, Marionette) {
		return Task = Backbone.Model.extend({
			idAttribute: '_id',
			urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/mytasks',
			defaults: {
				task: 'N/A',
				project: 'N/A',
				time: '00:00:00'
			}
		})
})