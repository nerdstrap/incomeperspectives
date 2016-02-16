'use strict';

function focus($rootScope, $timeout) {
	return function (name) {
		$timeout(function () {
			$rootScope.$broadcast('focusOn', name);
		});
	}
}

var app = angular.module('ip.focus');
app.factory('focus', focus);
