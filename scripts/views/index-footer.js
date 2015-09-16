define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates'
		],
	function(Backbone, Marionette, dustMarionette, templates) {
		return FooterView = Marionette.ItemView.extend({
			template: 'footer-view.dust',
			className: 'footer-container',
			
			events: {
				'click .fa-user': 'loginModal',
				'click .fa-user-plus': 'registerModal'
			},
			loadModal: function(modal) {
				$('.' + modal.toLowerCase() + '-modal').fadeIn();
				console.log(modal.toLowerCase());
			},
			loginModal: function() {
				$('.modal').hide();
				this.loadModal('login');
			},
			registerModal: function() {
				$('.modal').hide();
				this.loadModal('register');
			}
		})
	})