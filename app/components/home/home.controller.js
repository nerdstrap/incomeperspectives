'use strict';

function HomeController($scope) {
	var vm = this;

	vm.init = init;

	vm.init();
}

var app = angular.module('ip.home');
app.controller('HomeController', HomeController);
