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
				if (Parse.User) {
					console.log(Parse.User.current());
				}
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
				console.log(modal.toLowerCase());
			},
			hideModal: function(e) {
				e.preventDefault();
				console.log(e.target);
				$('.modal').hide();
			},
			login: function(e) {
				e.preventDefault();
			},
			register: function(e) {
				e.preventDefault();
				var self = this;

				if (this.checkRegisterInputs()) {
					var user = new Parse.User();

					user.set({'email': $('.register-modal-form-input-email').val(),
							'firstName': $('.register-modal-form-input-first-name').val(),
							'lastName': $('.register-modal-form-input-last-name').val(),
							'username': $('.register-modal-form-input-first-name').val() + ' ' + $('login-modal-form-input-last-name').val(),
							'password': $('.register-modal-form-input-password').val()
					});

					user.signUp(null, {
					  success: function(user) {
					    self.router.navigate('#user/manage/:id', true);
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