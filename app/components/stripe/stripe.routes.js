'use strict';

function StripeRoutes($stateProvider) {

	$stateProvider
		.state('stripe', {
			url: '/stripe',
			abstract: true,
			templateUrl: '/components/shared/layout.view.html'
		})
		.state('stripe.subscribe', {
			url: '/subscribe',
			templateUrl: '/components/stripe/subscribe/subscribe.view.html'
		})
}

var app = angular.module('ip.stripe');
app.config(StripeRoutes);
