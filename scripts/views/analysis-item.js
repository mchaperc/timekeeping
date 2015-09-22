define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates'
		],
	function(Backbone, Marionette, dustMarionette, templates) {
		return AnalysisItem = Marionette.ItemView.extend({
			template: 'analysis-item.dust',
			className: 'analysis-container',
			events: {
				'click .fa-angle-double-down': 'expandReport',
				'click .fa-angle-double-up': 'expandReport'
			},
			onRender: function() {
				if (this.model.get('reportType') === 'Hours Analysis') {
					this.hours();
				} else if (this.model.get('reportType') === 'PTO Analysis') {
					this.pto();
				} else if (this.model.get('reportType') === 'Tasks Analysis') {
					this.tasks();
				}
			},
			expandReport: function() {
				this.$('.analysis-item-content').toggle();
				this.$('.fa-angle-double-down').toggle();
				this.$('.fa-angle-double-up').toggle();
			},
			hours: function() {
				console.log('hours');
			},
			pto: function() {
				console.log('pto');
			},
			tasks: function() {
				console.log('tasks');
			}
		})
	})