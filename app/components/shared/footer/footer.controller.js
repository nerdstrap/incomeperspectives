'use strict';

function FooterController($scope, $rootScope, $state) {
	var vm = this;

	vm.master = {};

	vm.status = {
		collapsed: false
	};

	function init() {
	}

	function reset() {
		vm.init();
	}

	vm.init = init;
	vm.reset = reset;

	vm.init();
}

var app = angular.module('ip.shared');
app.controller('FooterController', FooterController);
