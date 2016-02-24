'use strict';

function TermsAndConditionsController($scope, $rootScope, $stateParams, focus, AuthFactory) {
	var vm = this;

	vm.view = {
		title: 'Terms and Conditions',
		parentSref: 'home',
		parentTitle: 'Home'
	};
}

var app = angular.module('ip.home');
app.controller('TermsAndConditionsController', TermsAndConditionsController);
