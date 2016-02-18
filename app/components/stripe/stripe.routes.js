'use strict';

function StripeRoutes($stateProvider) {

	$stateProvider
		.state('subscribe', {
			url: '/subscribe',
			templateUrl: '/components/stripe/subscribe/subscribe.view.html'
		})
}

var app = angular.module('ip.stripe');
app.config(StripeRoutes);
