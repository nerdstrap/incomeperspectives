'use strict';

function IbidTrainingController($scope, $rootScope) {

	var vm = this;

	vm.view = {
		title: 'Index UL',
		parentSref: 'home',
		parentTitle: 'Home'
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

var app = angular.module('ip.incomePerspectives');
app.controller('IbidTrainingController', IbidTrainingController);
