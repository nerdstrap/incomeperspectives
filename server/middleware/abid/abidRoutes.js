'use strict';

module.exports = function (app) {

	var controller = require('./abidController')(app);

	app.get('/api/abid/report', controller.report);
};
