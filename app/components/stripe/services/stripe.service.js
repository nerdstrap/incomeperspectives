'use strict';

function StripeFactory($http) {
	var _baseUrl = 'https://incomeperspectivesapi.herokuapp.com/api/stripe';
	var stripeFactory = {};

	stripeFactory.getSettings = function () {
		return $http.get(_baseUrl + '/settings');
	};

	stripeFactory.getPlans = function () {
		return $http.get(_baseUrl + '/plans');
	};

	stripeFactory.getCustomer = function () {
		return $http.get(_baseUrl + '/customer');
	};

	stripeFactory.addCustomer = function (token) {
		return $http.post(_baseUrl + '/customer', {
			token: token
		});
	};

	stripeFactory.addSubscription = function (planId) {
		return $http.post(_baseUrl + '/subscription', {
			planId: planId
		});
	};

	stripeFactory.removeCustomer= function () {
		return $http.delete(_baseUrl + '/customer');
	};

	return stripeFactory;
}

var app = angular.module('ip.stripe');
app.factory('StripeFactory', StripeFactory);
