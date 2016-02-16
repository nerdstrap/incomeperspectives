'use strict';

var app = angular.module('ip.incomePerspectives');
app.factory('IbidFactory', IbidFactory);

function IbidFactory($http) {
	var _baseUrl = 'https://incomeperspectivesapi.herokuapp.com/api/ibid';
	var ibidFactory = {};

	ibidFactory.getBaseline = function (worksheet) {
		return $http.get(urlBase + '/baseline', {
			params: worksheet
		});
	};

	ibidFactory.getBreakEvenAnalysis = function (worksheet) {
		return $http.get(urlBase + '/breakEvenAnalysis', {
			params: worksheet
		});
	};

	ibidFactory.getPdf = function (worksheet) {
		return $http.get(urlBase + '/pdf', {
			params: worksheet,
			responseType: 'arraybuffer'
		});
	};

	return ibidFactory;
}
