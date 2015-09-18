define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates'
		],
	function(Backbone, Marionette, dustMarionette, templates) {
		return UserHeader = Marionette.ItemView.extend({
			template: 'user-header.dust',
			className: 'user-header-container',
			events: {
				'mouseenter .nav-user': 'showOptions',
				'mouseleave .nav-user': 'hideOptions',
				'click .logout': 'logOut'
			},

			initialize: function(options) {
				this.router = options.router;
			},

			showOptions: function(e) {
				e.preventDefault();
				$('.nav-user-options').fadeIn('fast');
			},

			hideOptions: function(e) {
				e.preventDefault();
				$('.nav-user-options').hide();
			},

			logOut: function(e) {
				e.preventDefault();
				Parse.User.logOut();
				this.router.navigate('', true);
			}
		})
	}) 