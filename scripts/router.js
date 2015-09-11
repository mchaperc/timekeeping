define([
		'marionette', 
		'backbone',
		'views/test'
		],
	function(Marionette, Backbone, TestView) {
		return router = Marionette.AppRouter.extend({
			
			routes: {
				'': 'index'
			},

			initialize: function(app) {
				this.app = app;
			},

			index: function() {
				var test = new TestView();
				this.app.getRegion('main').show(test);
			}

		});
	}
)