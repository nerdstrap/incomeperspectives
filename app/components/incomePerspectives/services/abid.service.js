'use strict';

var app = angular.module('ip.incomePerspectives');
app.factory('AbidFactory', AbidFactory);

function AbidFactory($http) {
	var _baseUrl = 'https://incomeperspectivesapi.herokuapp.com/api/abid';
	var abidFactory = {};

	abidFactory.getBaseline = function (worksheet) {
		return $http.get(_baseUrl + '/baseline', {
			params: worksheet
		});
	};

	abidFactory.getBreakEvenAnalysis = function (worksheet) {
		return $http.get(_baseUrl + '/breakEvenAnalysis', {
			params: worksheet
		});
	};

	abidFactory.getPdf = function (worksheet) {
		return $http.get(_baseUrl + '/pdf', {
			params: worksheet,
			responseType: 'arraybuffer'
		});
	};

	return abidFactory;
}
