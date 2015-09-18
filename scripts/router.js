define([
		'marionette', 
		'backbone',
		'views/index-view',
		'views/index-header',
		'views/index-features',
		'views/index-footer',
		'views/user-view',
		'views/user-header',
		'views/user-manage'
		],
	function(Marionette, Backbone, IndexView, HeaderView, FeatureView, FooterView, UserView, UserHeader, UserManage) {
		return router = Marionette.AppRouter.extend({
			
			routes: {
				'': 'index',
				'user/manage/calendar/:id': 'calendar',
				'user/manage/:id': 'manage',
				'user/pto/:id': 'pto',
				'user/reports/:id': 'reports'
			},

			initialize: function(app) {
				this.app = app;
				Parse.initialize("gWfCSea0yLehT4CM6bKr7pTDQ3M7ZqzIBukNmQWn", "6l1CBOx1uiJXTFUAQQf8mxauyCsJKyqL3jU74htt");
			},

			index: function(id) {
				if (Parse.User.current()) {
					this.navigate('#user/manage/1', true);
				} else {
					this.indexView = new IndexView();
					this.app.getRegion('main').show(this.indexView);
					this.indexView.showChildView('indexHeader', new HeaderView({router: this}));
					this.indexView.showChildView('indexFeatures', new FeatureView());
					this.indexView.showChildView('indexFooter', new FooterView());
				}
			},

			manage: function(id) {
				if (!Parse.User.current()) {
					this.navigate('', true);
				} else {
					this.userView = new UserView();
					this.app.getRegion('main').show(this.userView);
					this.userView.showChildView('userHeader', new UserHeader({router: this}));
					$('.navbar-center a:first-child').addClass('active');
					this.userView.showChildView('userContent', new UserManage());
				}
			},

			calendar: function(id) {
				this.userView = new UserView();
				this.app.getRegion('main').show(this.userView);
				this.userView.showChildView('userHeader', new UserHeader());
			},

			pto: function(id) {
				this.userView = new UserView();
				this.app.getRegion('main').show(this.userView);
				this.userView.showChildView('userHeader', new UserHeader());
			},

			reports: function(id) {
				this.userView = new UserView();
				this.app.getRegion('main').show(this.userView);
				this.userView.showChildView('userHeader', new UserHeader());
			}

		});
	}
)