'use strict';

function AuthFactory($rootScope, $http, $location, $stateParams, $cookies, $q, $timeout, AuthEvents) {

	var self;
	var _baseUrl = 'https://incomeperspectivesapi.herokuapp.com';
	var defaultUrl = '/';
	var cookieName = 'token';

	function escape(html) {
		return String(html)
			.replace(/&/g, '&amp;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
	}

	function toUtf8(encodedData) {
		return decodeURIComponent(escape(window.atob(encodedData)));
	}

	function decodeUser(token) {
		return decodeURI(toUtf8(token.split('.')[1]));
	}

	function decodeToken(token) {
		return JSON.parse(decodeUser(token));
	}

	function getUser(data) {
		var user;
		if (data && data.token) {
			localStorage.setItem('JWT', data.token);
			user = decodeToken(data.token);
		}
		return user;
	}

	function UserKlass() {

		self = this;

		self.name = 'users';
		self.user = {};
		self.authenticated = false;

		$http.get(_baseUrl + '/me')
			.then(
				function (response) {
					if (response) {
						if (response.data) {
							self.user = response.data;
							self.authenticated = true;
							$rootScope.$emit(AuthEvents.loggedIn, self.user);
						} else {
							if ($cookies.get('token')) {
								self.user = getUser({
									token: $cookies.get('token')
								});
								$cookies.remove('token');
								self.authenticated = true;
								$rootScope.$emit(AuthEvents.loggedIn, self.user);
							} else {
								self.authenticated = false;
								self.user = {};
							}
						}
					}
				},
				function (error) {
					console.info(error);
				}
			);
	}

	UserKlass.prototype.login = function (user) {
		return $http.post(_baseUrl + '/login', {
				email: user.email,
				password: user.password
			})
			.then(
				function (response) {
					self.user = getUser(response.data);
					self.authenticated = true;
					$rootScope.$emit(AuthEvents.loggedIn, self.user);
					$location.url('/');
				},
				function (error) {
					throw new Error('Not Authorized.');
				}
			);
	};

	UserKlass.prototype.register = function (user) {
		return $http.post(_baseUrl + '/register', {
				email: user.email,
				password: user.password,
				confirmPassword: user.confirmPassword,
				username: user.username,
				name: user.name
			})
			.then(
				function (response) {
					self.user = getUser(response.data);
					self.authenticated = true;
					$rootScope.$emit(AuthEvents.loggedIn, self.user);
					$location.url('/');
				},
				function (error) {
					if (error && error.data && error.data.length) {
						throw new Error(error.data[0].msg);
					} else {
						throw new Error('Registration Error.');
					}
				}
			);
	};

	UserKlass.prototype.forgotPassword = function (user) {
		return $http.post(_baseUrl + '/forgotPassword', {
				text: user.email
			})
			.then(
				function (response) {
					self.authenticated = true;
					$rootScope.$emit(AuthEvents.forgotPasswordSent);
				},
				function (error) {
					throw new Error('Forgot Password Error.');
				}
			);
	};

	UserKlass.prototype.resetPassword = function (user) {
		return $http.post(_baseUrl + '/resetPassword/' + $stateParams.tokenId, {
				password: user.password,
				confirmPassword: user.confirmPassword
			})
			.then(
				function (response) {
					$rootScope.$emit(AuthEvents.passwordReset);
				},
				function (error) {
					throw new Error('Reset Password Error.');
				}
			);
	};

	UserKlass.prototype.logout = function () {
		this.user = {};
		this.authenticated = false;
		this.isAdmin = false;

		$http.get(_baseUrl + '/logout')
			.then(
				function (response) {
					localStorage.removeItem('JWT');
					$rootScope.$emit(AuthEvents.loggedOut);
					$location.url('/');
				},
				function (error) {
					throw new Error('Logout Error.');
				}
			);
	};

	UserKlass.prototype.isAuthenticated = function () {
		var deferred = $q.defer();

		$http.get(_baseUrl + '/loggedIn')
			.then(
				function (response) {
					if (response !== '0') {
						$timeout(deferred.resolve);
					} else {
						$cookies.put('redirect', $location.path());
						$timeout(deferred.reject);
						$location.url('/auth/login');
					}
				},
				function (error) {
					$cookies.put('redirect', $location.path());
					$timeout(deferred.reject);
					$location.url('/auth/login');
				}
			);

		return deferred.promise;
	};

	UserKlass.prototype.isNotAuthenticated = function () {
		var deferred = $q.defer();

		$http.get(_baseUrl + '/loggedIn')
			.then(
				function (response) {
					if (response !== '0') {
						$timeout(deferred.reject);
						$location.url('/');
					} else {
						$timeout(deferred.resolve);
					}
				},
				function (error) {
					$timeout(deferred.resolve);
				}
			);

		return deferred.promise;
	};

	UserKlass.prototype.isAdmin = function () {
		var deferred = $q.defer();

		$http.get(_baseUrl + '/loggedIn')
			.then(
				function (response) {
					if (response !== '0' && response.data && response.data.roles && response.data.roles.length && response.data.roles.indexOf('admin') !== -1) {
						$timeout(deferred.resolve);
					} else {
						$timeout(deferred.reject);
						$location.url('/');
					}
				},
				function (error) {
					$timeout(deferred.reject);
					$location.url('/');
				}
			);

		return deferred.promise;
	};

	var userSingleton = new UserKlass();
	return userSingleton;
}

var app = angular.module('ip.auth');
app.factory('AuthFactory', AuthFactory);
