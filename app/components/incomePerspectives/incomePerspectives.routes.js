'use strict';

function IncomePerspectivesRoutes($stateProvider) {

	$stateProvider
		.state('abid', {
			url: '/abid',
			templateUrl: '/components/incomePerspectives/abid/abid.view.html'
		})
		.state('abidTraining', {
			url: '/abid/training',
			templateUrl: '/components/incomePerspectives/abidTraining/abidTraining.view.html'
		})
		.state('ibid', {
			url: '/ibid',
			templateUrl: '/components/incomePerspectives/ibid/ibid.view.html'
		})
		.state('ibidTraining', {
			url: '/ibid/training',
			templateUrl: '/components/incomePerspectives/ibidTraining/ibidTraining.view.html'
		});
}

var app = angular.module('ip.incomePerspectives');
app.config(IncomePerspectivesRoutes);
