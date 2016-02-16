'use strict';

function HomeRoutes($stateProvider) {

	$stateProvider
		.state('home', {
			url: '/home',
			abstract: true,
			templateUrl: '/components/shared/layout.view.html'
		})
		.state('home.home', {
			url: '/',
			templateUrl: '/components/home/home.view.html'
		})
		.state('home.contactUs', {
			url: '/contactUs',
			templateUrl: '/components/home/contactUs/contactUs.view.html'
		})
		.state('home.privacyPolicy', {
			url: '/privacyPolicy',
			templateUrl: '/components/home/privacyPolicy/privacyPolicy.view.html'
		})
		.state('home.termsAndConditions', {
			url: '/termsAndConditions',
			templateUrl: '/components/home/termsAndConditions/termsAndConditions.view.html'
		});
}

var app = angular.module('ip.home');
app.config(HomeRoutes);
