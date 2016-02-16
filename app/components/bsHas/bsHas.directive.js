'use strict';

function bsHas(bsProcessValidator) {
	return {
		restrict: 'A',
		link: function (scope, element) {
			bsProcessValidator(scope, element, 'ng-valid', 'has-success');
			bsProcessValidator(scope, element, 'ng-invalid', 'has-error');
		}
	};
}

var app = angular.module('ip.bsHas');
app.directive('bsHas', bsHas);
