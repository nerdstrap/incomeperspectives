'use strict';

function focusOn() {
	return function (scope, elem, attr) {
		scope.$on('focusOn', function (e, name) {
			if (name === attr.focusOn) {
				elem[0].focus();
			}
		});
	};
}

var app = angular.module('ip.focus');
app.directive('focusOn', focusOn);
