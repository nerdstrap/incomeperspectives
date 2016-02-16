'use strict';

var AuthEvents = {
	'loggedIn': 'loggedIn',
	'loggedOut': 'loggedOut',
	'passwordReset': 'passwordReset',
	'forgotPasswordSent': 'forgotPasswordSent'
};

var app = angular.module('ip.auth');
app.constant('AuthEvents', AuthEvents);
