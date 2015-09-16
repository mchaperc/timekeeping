define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates'
		],
	function(Backbone, Marionette, dustMarionette, templates) {
		return UserView = Marionette.LayoutView.extend({
			template: 'user-view.dust',
			className: 'user-container',
			regions: {
				userHeader: '.user-header',
				userContent: '.user-content'
			}
		})
	})