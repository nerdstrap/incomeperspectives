'use strict';

function HomeController($scope) {
	var vm = this;

	function init() {
		console.log('home init');
	}

	vm.init = init;

	vm.init();
}

var app = angular.module('ip.home');
app.controller('HomeController', HomeController);
