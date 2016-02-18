'use strict';

function IncomePerspectivesRoutes($stateProvider) {

	$stateProvider
		.state('abid', {
			url: '/abid',
			templateUrl: '/components/incomePerspectives/abid/abid.view.html'
		})
		.state('ibid', {
			url: '/ibid',
			templateUrl: '/components/incomePerspectives/ibid/ibid.view.html'
		});
}

var app = angular.module('ip.incomePerspectives');
app.config(IncomePerspectivesRoutes);
