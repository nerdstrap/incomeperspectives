'use strict';

function PrivacyPolicyController($scope, $rootScope, $stateParams, focus, AuthFactory) {
	var vm = this;

	vm.view = {
		title: 'Privacy Policy',
		parentSref: 'home',
		parentTitle: 'Home'
	};
}

var app = angular.module('ip.home');
app.controller('PrivacyPolicyController', PrivacyPolicyController);
