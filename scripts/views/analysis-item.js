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
				this.$('.analysis-item-content').slideToggle();
				this.$('.fa-angle-double-down').toggle();
				this.$('.fa-angle-double-up').toggle();
			},
			hours: function() {
				var self = this;
				this.$('.chart-1').highcharts({
					chart: {
			            plotBackgroundColor: null,
			            plotBorderWidth: null,
			            plotShadow: false,
			            type: 'pie'
			        },
			        title: {
			            text: 'Hours Logged vs Hours Remaining'
			        },
			        tooltip: {
			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			        },
			        plotOptions: {
			            pie: {
			                allowPointSelect: true,
			                cursor: 'pointer',
			                dataLabels: {
			                    enabled: true,
			                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
			                    style: {
			                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
			                    }
			                }
			            }
			        },
			        series: [{
			            name: " ",
			            colorByPoint: true,
			            data: [{
			                name: "Hours Logged",
			                y: self.checkTime()
			            }, 
			            {
			                name: "Hours Remaining",
			                y: (40 - self.checkTime()),
			                sliced: true,
			                selected: true
			            }]
			        }]
				})
				this.$('.chart-2').highcharts({
					chart: {
			            type: 'column'
			        },
			        title: {
			            text: 'Weekly Hour Totals'
			        },
			        xAxis: {
			            categories: [
			                '9/3-9/7',
			                '9/10-9/14',
			                '9/17-9/21',
			                '9/24-9/28'
			            ],
			            crosshair: true
			        },
			        yAxis: {
			            min: 0,
			            title: {
			                text: 'Hours (hr)'
			            }
			        },
			        tooltip: {
			            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			                '<td style="padding:0"><b>{point.y:.1f} hr</b></td></tr>',
			            footerFormat: '</table>',
			            shared: true,
			            useHTML: true
			        },
			        plotOptions: {
			            column: {
			                pointPadding: 0.2,
			                borderWidth: 0
			            }
			        },
			        series: [{
			        	name: "Projected Hours",
			        	data: [45, 45, 45, 45]
			        }, 
			        {
			        	name: "Required Hours",
			        	data: [40,40,40,40]
			        }, 
			        {
			        	name: "Logged Hours",
			            data: [50, 71.5, 60, 47]

			        }]
				})
			},
			pto: function() {
				var self = this;
				this.$('.chart-1').highcharts({
					chart: {
			            plotBackgroundColor: null,
			            plotBorderWidth: null,
			            plotShadow: false,
			            type: 'pie'
			        },
			        title: {
			            text: 'Hours Logged vs Hours Remaining'
			        },
			        tooltip: {
			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			        },
			        plotOptions: {
			            pie: {
			                allowPointSelect: true,
			                cursor: 'pointer',
			                dataLabels: {
			                    enabled: true,
			                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
			                    style: {
			                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
			                    }
			                }
			            }
			        },
			        series: [{
			            name: " ",
			            colorByPoint: true,
			            data: [{
			                name: "Hours Logged",
			                y: self.checkTime()
			            }, 
			            {
			                name: "Hours Remaining",
			                y: (40 - self.checkTime()),
			                sliced: true,
			                selected: true
			            }]
			        }]
				})
				this.$('.chart-2').highcharts({
					chart: {
			            type: 'column'
			        },
			        title: {
			            text: 'Weekly Hour Totals'
			        },
			        xAxis: {
			            categories: [
			                '9/3-9/7',
			                '9/10-9/14',
			                '9/17-9/21',
			                '9/24-9/28'
			            ],
			            crosshair: true
			        },
			        yAxis: {
			            min: 0,
			            title: {
			                text: 'Hours (hr)'
			            }
			        },
			        tooltip: {
			            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			                '<td style="padding:0"><b>{point.y:.1f} hr</b></td></tr>',
			            footerFormat: '</table>',
			            shared: true,
			            useHTML: true
			        },
			        plotOptions: {
			            column: {
			                pointPadding: 0.2,
			                borderWidth: 0
			            }
			        },
			        series: [{
			        	name: "Projected Hours",
			        	data: [45, 45, 45, 45]
			        }, 
			        {
			        	name: "Required Hours",
			        	data: [40,40,40,40]
			        }, 
			        {
			        	name: "Logged Hours",
			            data: [50, 71.5, 60, 47]

			        }]
				})
			},
			tasks: function() {
				var self = this;
				this.$('.chart-1').highcharts({
					chart: {
			            plotBackgroundColor: null,
			            plotBorderWidth: null,
			            plotShadow: false,
			            type: 'pie'
			        },
			        title: {
			            text: 'Hours Logged vs Hours Remaining'
			        },
			        tooltip: {
			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			        },
			        plotOptions: {
			            pie: {
			                allowPointSelect: true,
			                cursor: 'pointer',
			                dataLabels: {
			                    enabled: true,
			                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
			                    style: {
			                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
			                    }
			                }
			            }
			        },
			        series: [{
			            name: " ",
			            colorByPoint: true,
			            data: [{
			                name: "Hours Logged",
			                y: self.checkTime()
			            }, 
			            {
			                name: "Hours Remaining",
			                y: (40 - self.checkTime()),
			                sliced: true,
			                selected: true
			            }]
			        }]
				})
				this.$('.chart-2').highcharts({
					chart: {
			            type: 'column'
			        },
			        title: {
			            text: 'Weekly Hour Totals'
			        },
			        xAxis: {
			            categories: [
			                '9/3-9/7',
			                '9/10-9/14',
			                '9/17-9/21',
			                '9/24-9/28'
			            ],
			            crosshair: true
			        },
			        yAxis: {
			            min: 0,
			            title: {
			                text: 'Hours (hr)'
			            }
			        },
			        tooltip: {
			            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			                '<td style="padding:0"><b>{point.y:.1f} hr</b></td></tr>',
			            footerFormat: '</table>',
			            shared: true,
			            useHTML: true
			        },
			        plotOptions: {
			            column: {
			                pointPadding: 0.2,
			                borderWidth: 0
			            }
			        },
			        series: [{
			        	name: "Projected Hours",
			        	data: [45, 45, 45, 45]
			        }, 
			        {
			        	name: "Required Hours",
			        	data: [40,40,40,40]
			        }, 
			        {
			        	name: "Logged Hours",
			            data: [50, 71.5, 60, 47]

			        }]
				})
			},
			checkTime: function() {
				return 30;
			}
		})
	})