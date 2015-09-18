define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates',
		'./user-manage-existing-item'
		],
	function(Backbone, Marionette, dustMarionette, templates, ExistingItemView) {
		var existingItem = ExistingItemView;
		return ExistingTasks = Marionette.CollectionView.extend({
			template: '',
			className: 'existing-tasks-collection',
			tagName: 'ul',
			childView: existingItem
		})
	})