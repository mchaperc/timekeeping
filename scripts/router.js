define([
		'marionette', 
		'backbone',
		'views/index-view',
		'views/index-header',
		'views/index-features'
		],
	function(Marionette, Backbone, IndexView, HeaderView, FeatureView) {
		return router = Marionette.AppRouter.extend({
			
			routes: {
				'': 'index'
			},

			initialize: function(app) {
				this.app = app;
			},

			index: function() {
				this.indexView = new IndexView();
				this.app.getRegion('main').show(this.indexView);
				this.indexView.showChildView('indexHeader', new HeaderView());
				this.indexView.showChildView('indexFeatures', new FeatureView());
			}

		});
	}
)