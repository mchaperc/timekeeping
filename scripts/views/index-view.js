define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates',
		],
	function(Backbone, Marionette, dustMarionette, templates) {
		return IndexView = Marionette.LayoutView.extend({
			template: 'index-view.dust',
			className: 'index-container',
			regions: {
				indexHeader: '.index-header',
				indexFeatures: '.index-features',
				indexFooter: '.index-footer'
			}
		})
	})