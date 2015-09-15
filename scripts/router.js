define([
		'marionette', 
		'backbone',
		'views/index-view',
		'views/index-header'
		],
	function(Marionette, Backbone, IndexView, HeaderView) {
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
				this.indexView.showChildView('indexHeader', new HeaderView())
			}

		});
	}
)