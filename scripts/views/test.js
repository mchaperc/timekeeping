define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates'
		],
	function(Backbone, Marionette, dustMarionette, templates) {
		return TestView = Marionette.ItemView.extend({
			template: 'test.dust'
		})
	}
)