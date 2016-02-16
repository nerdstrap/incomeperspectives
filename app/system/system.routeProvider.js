'use strict';

function $viewPath() {
	function ViewPathProvider() {
		var overrides = {};

		this.path = function (path) {
			return function () {
				return overrides[path] || path;
			};
		};

		this.override = function (defaultPath, newPath) {
			if (overrides[defaultPath]) {
				throw new Error('View already has an override: ' + defaultPath);
			}
			overrides[defaultPath] = newPath;
			return this;
		};

		this.$get = function () {
			return this;
		};
	}

	return new ViewPathProvider();
}

function $appState($stateProvider, $viewPathProvider) {
	function AppStateProvider() {
		this.state = function (stateName, data) {
			if (data.templateUrl) {
				data.templateUrl = $viewPathProvider.path(data.templateUrl);
			}
			$stateProvider.state(stateName, data);
			return this;
		};

		this.$get = function () {
			return this;
		};
	}

	return new AppStateProvider();
}

function UrlRouteProvider($appStateProvider, $urlRouterProvider) {

	$urlRouterProvider.when('/', '/home/');

	// For unmatched routes:
	$urlRouterProvider.otherwise('/home/');

}

function Html5Mode($locationProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}

var app = angular.module('ip.system');
app.provider('$viewPath', $viewPath);
app.provider('$appState', $appState);
app.config(UrlRouteProvider);
app.config(Html5Mode);
