'use strict';

angular.element(document).ready(function () {
	//facebook bug with redirect
	if (window.location.hash === '#_=_') {
		window.location.hash = '#!';
	}

	//init the app
	angular.bootstrap(document, ['ip']);
});

function processModules(modules) {
	var packageModules = [
		'ngCookies',
		'ngResource',
		'ui.bootstrap',
		'ui.router',
		'ui.select',
		'ngSanitize',
		'ip.system',
		'ip.shared',
		'ip.auth',
		'ip.home',
		'ip.stripe',
		'ip.incomePerspectives',
		'ip.bsHas',
		'ip.focus',
		'ip.chart'
	];

	angular.module('ip', packageModules);
}

jQuery.ajax('/getModules', {
	dataType: 'json',
	async: false,
	success: processModules
});
