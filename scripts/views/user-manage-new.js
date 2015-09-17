define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates'
		],
	function(Backbone, Marionette, dustMarionette, templates) {
		return NewTask = Marionette.ItemView.extend({
			template: 'new-task.dust',
			className: 'new-container',
			events: {
				
			}
		})
	})