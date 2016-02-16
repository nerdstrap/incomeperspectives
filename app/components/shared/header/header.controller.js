'use strict';

function HeaderController($scope, $rootScope, $state, AuthEvents, AuthFactory) {
	var vm = this;

	vm.master = {};

	vm.status = {
		collapsed: false,
		loginVisible: true,
		logoutVisible: false
	};

	function logout() {
		AuthFactory.logout();
	}

	$rootScope.$on(AuthEvents.loggedIn, function (event, user) {
		vm.status.loginVisible = false;
		vm.status.logoutVisible = true;
		vm.user = user;
	});

	$rootScope.$on(AuthEvents.loggedOut, function () {
		vm.status.loginVisible = true;
		vm.status.logoutVisible = false;
		vm.user = angular.copy(vm.master);
	});

	function init() {
		vm.user = angular.copy(vm.master);
	}

	function reset() {
		vm.init();
	}

	vm.logout = logout;
	vm.init = init;
	vm.reset = reset;

	vm.init();
}

var app = angular.module('ip.shared');
app.controller('HeaderController', HeaderController);
