'use strict';

function bsHasSuccess(bsProcessValidator) {
	return {
		restrict: 'A',
		link: function (scope, element) {
			bsProcessValidator(scope, element, 'ng-valid', 'has-success');
		}
	};
}

var app = angular.module('ip.bsHas');
app.directive('bsHasSuccess', bsHasSuccess);
