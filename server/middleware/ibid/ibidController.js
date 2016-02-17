'use strict';

module.exports = function (app) {

	var calculator = require('./ibidCalculator.js');

	function render(view, options, callback) {
		swig.renderFile(__dirname + '/server/views/' + view + '.html', options, callback);
	}

	return {

		report: function (req, res, next) {
			var worksheet = calculator.mapWorksheet(req.query);
			var breakEvenAnalysis = calculator.breakEvenAnalysis(worksheet.currentAge, worksheet.retirementAge, worksheet.numberOfPeriods, worksheet.annualDeposit, worksheet.growthRate, worksheet.rateOfReturn, worksheet.managementFee, worksheet.insuranceProductIncome, worksheet.initialWithdrawal, worksheet.inflationRate);
			var renderModel = {
				worksheet: worksheet,
				breakEvenAnalysis: breakEvenAnalysis
			};

			render('ibid.view', renderModel, function (err, html) {
				if (err) {
					console.error(err);
					res.send(500);
				}

				res.send(html);
				res.end();
			});
		}

	};

};
