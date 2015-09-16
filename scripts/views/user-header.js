define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates'
		],
	function(Backbone, Marionette, dustMarionette, templates) {
		return UserHeader = Marionette.ItemView.extend({
			template: 'user-header.dust',
			className: 'user-header-container'
		})
	})