'use strict';

function HomeRoutes($stateProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/components/home/home.view.html'
		})
		.state('contactUs', {
			url: '/contactUs',
			templateUrl: '/components/home/contactUs/contactUs.view.html'
		})
		.state('privacyPolicy', {
			url: '/privacyPolicy',
			templateUrl: '/components/home/privacyPolicy/privacyPolicy.view.html'
		})
		.state('termsAndConditions', {
			url: '/termsAndConditions',
			templateUrl: '/components/home/termsAndConditions/termsAndConditions.view.html'
		});
}

var app = angular.module('ip.home');
app.config(HomeRoutes);
