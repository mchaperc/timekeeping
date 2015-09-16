define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates'
		],
	function(Backbone, Marionette, dustMarionette, templates) {
		return FooterView = Marionette.ItemView.extend({
			template: 'footer-view.dust',
			className: 'footer-container'
		})
	})