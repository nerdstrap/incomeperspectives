'use strict';

function initRootScope($rootScope) {
	$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		var toPath = toState.url;
		toPath = toPath.replace(new RegExp('/', 'g'), '');
		toPath = toPath.replace(new RegExp(':', 'g'), '-');
		$rootScope.state = toPath;
		if ($rootScope.state === '') {
			$rootScope.state = 'firstPage';
		}
	});
}

angular.module('ip.system', ['ui.router', 'ip-factory-interceptor'])
	.run(initRootScope);
