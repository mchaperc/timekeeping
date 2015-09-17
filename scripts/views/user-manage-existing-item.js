define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates'
		],
	function(Backbone, Marionette, dustMarionette, templates) {
		return ExistingItemView = Marionette.ItemView.extend({
			template: 'existing-task-item.dust',
			className: 'existing-item-container',
			tagName: 'li',
			events: {
				'click .edit-item': 'editItem'
			},

			editItem: function(e) {
				e.preventDefault();
				this.$('.display').hide();
				this.$('.edit').show();
			}
		})
	})