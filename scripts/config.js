require.config({
	baseUrl: "scripts",
	paths: {
		jquery: '../node_modules/jquery/dist/jquery',
    	templates: '../dist/scripts/templates',
		underscore: '../node_modules/underscore/underscore',
		backbone: '../node_modules/backbone/backbone',
		'backbone.wreqr': '../node_modules/backbone.wreqr/lib/backbone.wreqr',
		'backbone.babysitter': '../node_modules/backbone.babysitter/lib/backbone.babysitter',
		bootstrap: '../node_modules/bootstrap/dist/js/bootstrap',
		dust: '../node_modules/dustjs-linkedin/dist/dust-core',
		marionette: '../node_modules/backbone.marionette/lib/core/backbone.marionette',
		'backbone.marionette.dust': '../node_modules/backbone.marionette.dust/src/backbone.marionette.dust',
		slick: '../node_modules/slick-carousel/slick/slick',
    	main: 'main',
    	pickmeup: '../node_modules/pickmeup/pickmeup.min',
    	highcharts: '../node_modules/highcharts/highcharts'
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		'dust': {
			exports: 'dust'
		},
		'bootstrap': {
			deps: ['jquery'],
			exports: 'jQuery.fn.popover'
		},
		'marionette': {
			deps: ['backbone', 'backbone.wreqr', 'backbone.babysitter'],
			exports: 'Marionette'
		},
	    'templates': {
	      deps: ['dust']
	    },
	    'slick': {
	    	deps: ['jquery']
	    }
	},
  map: {
    '*': {'dust': 'dust'}
  }
});

require(['templates', 'main']);