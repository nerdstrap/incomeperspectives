'use strict';

function bsProcessValidator($timeout) {
	return function (scope, element, ngClass, bsClass) {
		$timeout(function () {
			var input = element.find('input');
			if (!input.length) {
				input = element.find('select');
			}
			if (!input.length) {
				input = element.find('textarea');
			}
			if (input.length) {
				scope.$watch(function () {
					return input.hasClass(ngClass) && input.hasClass('ng-dirty');
				}, function (isValid) {
					element.toggleClass(bsClass, isValid);
				});
			}
		});
	};
}

var app = angular.module('ip.bsHas');
app.factory('bsProcessValidator', bsProcessValidator);
