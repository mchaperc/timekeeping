define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates'
		],
	function(Backbone, Marionette, dustMarionette, templates) {
		return HeaderView = Marionette.ItemView.extend({
			template: 'header-view.dust',
			className: 'header-container'
		})
	})