'use strict';

function bsHasError(bsProcessValidator) {
	return {
		restrict: 'A',
		link: function (scope, element) {
			bsProcessValidator(scope, element, 'ng-invalid', 'has-error');
		}
	};
}

var app = angular.module('ip.bsHas');
app.directive('bsHasError', bsHasError);
