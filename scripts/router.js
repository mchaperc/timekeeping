define([
		'marionette', 
		'backbone',
		'views/index-view',
		'views/index-header',
		'views/index-features',
		'views/index-footer',
		'views/user-view',
		'views/user-header',
		'views/user-manage',
		'views/user-pto',
		'views/user-reports'
		],
	function(Marionette, Backbone, IndexView, HeaderView, FeatureView, FooterView, UserView, UserHeader, UserManage, UserPTO, UserReports) {
		return router = Marionette.AppRouter.extend({
			
			routes: {
				'': 'index',
				'user/manage/calendar': 'calendar',
				'user/manage': 'manage',
				'user/pto': 'pto',
				'user/reports': 'reports'
			},

			initialize: function(app) {
				this.app = app;
				Parse.initialize("gWfCSea0yLehT4CM6bKr7pTDQ3M7ZqzIBukNmQWn", "6l1CBOx1uiJXTFUAQQf8mxauyCsJKyqL3jU74htt");
			},

			index: function(id) {
				if (Parse.User.current()) {
					this.navigate('#user/manage', true);
				} else {
					if ($('.pickmeup')) {
						$('.pickmeup').remove();
					}
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
					if ($('.pickmeup')) {
						$('.pickmeup').remove();
					}
					this.userView = new UserView();
					this.app.getRegion('main').show(this.userView);
					this.userView.showChildView('userHeader', new UserHeader({model: Parse.User.current(), router: this}));
					this.userView.showChildView('userContent', new UserManage());
				}
			},

			calendar: function() {
				this.userView = new UserView();
				this.app.getRegion('main').show(this.userView);
				this.userView.showChildView('userHeader', new UserHeader());
			},

			pto: function() {
				
				this.userView = new UserView();
				this.app.getRegion('main').show(this.userView);
				this.userView.showChildView('userHeader', new UserHeader({model: Parse.User.current(), router: this}));
				this.userView.showChildView('userContent', new UserPTO({model: Parse.User.current(), router: this}));
			},

			reports: function() {
				if ($('.pickmeup')) {
					$('.pickmeup').remove();
				}
				Parse.User.current().fetch().then(function(user) {
					var reports = new Backbone.Collection(user.get('reports'));
					this.userView = new UserView();
					this.app.getRegion('main').show(this.userView);
					this.userView.showChildView('userHeader', new UserHeader({model: Parse.User.current(), router: this}));
					this.userView.showChildView('userContent', new UserReports({collection: reports, model: user}));
				}.bind(this));
			}

		});
	}
)