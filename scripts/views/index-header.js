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
				'click .exit-modal': 'hideModal'
			},
			showModal: function(e) {
				e.preventDefault();
				var modal = e.target.innerHTML;
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
			}
		})
	})