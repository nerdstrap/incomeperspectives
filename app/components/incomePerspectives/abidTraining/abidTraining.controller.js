'use strict';

function AbidTrainingController($scope, $rootScope) {

	var vm = this;

	vm.view = {
		title: 'Index Annuity',
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
app.controller('AbidTrainingController', AbidTrainingController);
