'use strict';

function IncomePerspectivesRoutes($stateProvider) {

	$stateProvider
		.state('incomePerspectives', {
			url: '/incomePerspectives',
			templateUrl: '/components/shared/layout.view.html'
		})
		.state('incomePerspectives.abid', {
			url: '/abid',
			templateUrl: '/components/incomePerspectives/abid/abid.view.html'
		})
		.state('incomePerspectives.ibid', {
			url: '/ibid',
			templateUrl: '/components/incomePerspectives/ibid/ibid.view.html'
		});
}

var app = angular.module('ip.incomePerspectives');
app.config(IncomePerspectivesRoutes);
