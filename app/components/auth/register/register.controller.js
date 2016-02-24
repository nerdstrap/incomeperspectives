'use strict';

function RegisterController($scope, $rootScope, focus, AuthFactory) {
	var vm = this;

	vm.view = {
		title: 'Register',
		parentSref: 'home',
		parentTitle: 'Home'
	};

	vm.master = {};

	vm.status = {
		showPassword: false
	};

	function register(user) {
		vm.errors.splice(0, vm.errors.length);
		if (vm.regFrm.$valid) {
			AuthFactory.register(user)
				.then(
					function (response) {
						console.log('register success');
					},
					function (error) {
						console.log(error);
						vm.errors.push(error);
					}
				);
		}
	}

	function init() {
		vm.user = angular.copy(vm.master);
		vm.socialButtons = angular.copy(vm.master);
		vm.errors = [];
		focus('firstOpened');
	}

	function reset() {
		vm.user = angular.copy(vm.master);
		vm.socialButtons = angular.copy(vm.master);
		focus('firstOpened');
		vm.errors.splice(0, vm.errors.length);
		vm.regFrm.$setUntouched();
		vm.regFrm.$setPristine();
	}

	vm.register = register;
	vm.init = init;
	vm.reset = reset;

	vm.init();
}

var app = angular.module('ip.auth');
app.controller('RegisterController', RegisterController);
