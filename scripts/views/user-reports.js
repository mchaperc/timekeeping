define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates',
		'./analysis-item'
		],
	function(Backbone, Marionette, dustMarionette, templates, analysisItem) {
		return UserReports = Marionette.CollectionView.extend({
			template: 'reports.dust',
			className: 'reports-container',
			regions: {
				'hoursAnalysis': '.hours-analysis-container',
				'ptoAnalysis': '.pto-analysis-container',
				'taskAnalysis': '.task-analysis-container'
			},
			childView: analysisItem
		})
	})