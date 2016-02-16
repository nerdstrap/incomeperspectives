'use strict';

function AuthRoutes($appStateProvider, $httpProvider, jwtInterceptorProvider) {

	jwtInterceptorProvider.tokenGetter = function () {
		return localStorage.getItem('JWT');
	};

	$httpProvider.interceptors.push('jwtInterceptor');

	$appStateProvider
		.state('auth', {
			url: '/auth',
			abstract: true,
			templateUrl: '/components/shared/layout.view.html'
		})
		.state('auth.login', {
			url: '/login',
			templateUrl: '/components/auth/login/login.view.html',
			resolve: {
				isAuthenticated: function (AuthFactory) {
					return AuthFactory.isAuthenticated();
				}
			}
		})
		.state('auth.register', {
			url: '/register',
			templateUrl: '/components/auth/register/register.view.html',
			resolve: {
				isAuthenticated: function (AuthFactory) {
					return AuthFactory.isAuthenticated();
				}
			}
		})
		.state('auth.forgotPassword', {
			url: '/forgotPassword',
			templateUrl: '/components/auth/forgotPassword/forgotPassword.view.html',
			resolve: {
				isAuthenticated: function (AuthFactory) {
					return AuthFactory.isAuthenticated();
				}
			}
		})
		.state('auth.resetPassword', {
			url: '/resetPassword/:tokenId',
			templateUrl: '/components/auth/resetPassword/resetPassword.view.html',
			resolve: {
				isAuthenticated: function (AuthFactory) {
					return AuthFactory.isAuthenticated();
				}
			}
		});

}

var app = angular.module('ip.auth');
app.config(AuthRoutes);
