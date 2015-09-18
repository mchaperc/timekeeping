define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates'
		],
	function(Backbone, Marionette, dustMarionette, templates) {
		return HeaderView = Marionette.ItemView.extend({
			template: 'header-view.dust',
			className: 'header-container',
			events: {
				'click .nav-item': 'showModal',
				'click .exit-modal': 'hideModal',
				'click .fa-user': 'loginModal',
				'click .fa-user-plus': 'registerModal',
				'click .login-submit': 'login',
				'click .register-submit': 'register'
			},
			initialize: function(options) {
				this.router = options.router;
			},
			showModal: function(e) {
				e.preventDefault();
				var modal = e.target.innerHTML;
				$('.modal').hide();
				this.loadModal(modal);
			},
			loadModal: function(modal) {
				$('.' + modal.toLowerCase() + '-modal').fadeIn();
			},
			hideModal: function(e) {
				e.preventDefault();
				$('.modal').hide();
			},
			login: function(e) {
				e.preventDefault();
				var self = this;
				var username = $('.login-modal-form-input-email').val();
				var password = $('.login-modal-form-input-password').val();
				Parse.User.logIn(username, password, {
					success: function(user) {
						self.router.navigate('#user/manage/' + user.id, true);
					},
					error: function(user, error) {
						console.log('user:', user, 'error:', error);
					}
				});
			},
			register: function(e) {
				e.preventDefault();
				var self = this;

				if (this.checkRegisterInputs()) {
					var user = new Parse.User();

					user.set({'email': $('.register-modal-form-input-email').val(),
							'firstName': $('.register-modal-form-input-first-name').val(),
							'lastName': $('.register-modal-form-input-last-name').val(),
							'username': $('.register-modal-form-input-email').val(),
							'password': $('.register-modal-form-input-password').val()
					});

					user.signUp(null, {
					  success: function(user) {
					    self.router.navigate('#user/manage/' + user.id, true);
					  },
					  error: function(user, error) {
					    console.log('user:', user.attributes, 'error:', error);
					  }
					});
				}
			},

			checkRegisterInputs: function() {
				if ($('.register-modal-form-input-email').val() && $('.register-modal-form-input-first-name').val() && $('.register-modal-form-input-last-name').val() && $('.register-modal-form-input-password').val()) {
					return true;
				} else {
					alert('Please, fill in all fields.')
					return false;
				}
			},

			checkLoginInputs: function() {

			}
		})
	})