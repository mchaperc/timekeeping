define([
		'backbone',
		'marionette',
		'backbone.marionette.dust',
		'templates',
		'pickmeup',
		'highcharts'
		],
	function(Backbone, Marionette, dustMarionette, templates, pickmeup, highcharts) {
		return UserPTO = Marionette.ItemView.extend({
			template: 'pto.dust',
			className: 'pto-container',
			initialize: function() {
				this.model.ptoTaken = this.model.get('ptoTaken');
			},
			onRender: function() {
				var self = this;
				setTimeout(function() {
					$('.pto-container').pickmeup({
						calendars: 3,
						select_year: false,
						min: '01/01/2015',
						max: '12/31/2015'
					});
					$('.pto-container').pickmeup('show');
					$('.pto-info-visual').highcharts({
						chart: {
				            type: 'pie'
				        },
				        title: {
				            text: 'Paid Time Off'
				        },
				        subtitle: {
				            text: 'break down'
				        },
				        plotOptions: {
				            pie: {
				                innerSize: 100,
				                depth: 45
				            }
				        },
				        series: [{
				            name: 'Days',
				            data: [
				                ['Total PTO', self.model.get('totalPTO')],
				                ['PTO Used', self.model.get('ptoTaken').length],
				                ['Remaining PTO', (self.model.get('totalPTO') - self.model.get('ptoTaken').length)]
				            ]
				        }]
					})
					$('.pmu-button').on('click', function() {
						var parent = $(this).parent().siblings($('.pmu-months')).text();
						var index = parent.indexOf(',') - 1;
						parent = parent.split('');
						parent = parent.splice(1, index);
						console.log(parent.join(''));
					});
				}, 1);
				$(document).ready(function() {

				})
			}
		})
	})