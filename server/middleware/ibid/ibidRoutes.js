'use strict';

module.exports = function (app) {

	var controller = require('./ibidController')(app);

	app.get('/api/ibid/report', controller.report);
};
