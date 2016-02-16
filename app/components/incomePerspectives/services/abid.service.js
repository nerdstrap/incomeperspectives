'use strict';

var app = angular.module('ip.incomePerspectives');
app.factory('AbidFactory', AbidFactory);

function AbidFactory($http) {
	var _baseUrl = 'https://incomeperspectivesapi.herokuapp.com/api/abid';
	var abidFactory = {};

	abidFactory.getBaseline = function (worksheet) {
		return $http.get(urlBase + '/baseline', {
			params: worksheet
		});
	};

	abidFactory.getBreakEvenAnalysis = function (worksheet) {
		return $http.get(urlBase + '/breakEvenAnalysis', {
			params: worksheet
		});
	};

	abidFactory.getPdf = function (worksheet) {
		return $http.get(urlBase + '/pdf', {
			params: worksheet,
			responseType: 'arraybuffer'
		});
	};

	return abidFactory;
}
