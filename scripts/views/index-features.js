define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates',
		'slick'
		],
	function(Backbone, Marionette, dustMarionette, templates, slick) {
		return FeaturesView = Marionette.ItemView.extend({

			template: 'features-view.dust',
			className: 'features-container',

			onRender: function() {
				setTimeout(function() {
					$('.features-carousel').slick({
						dots: true, 
						variableWidth: true
					});
				}, 1)
			}
		})
	})