var Promise = require('es6-promise').Promise;
var _ = require('underscore');

var logger = require('./logger');

function action(name, fn) {
	return function () {
		logger.logActionStart(name, arguments);
		var promise = fn.apply(action, arguments);
		logger.logActionPromiseResult(name, promise);			
		return promise;		
	};
}

module.exports = {
	action: action
};
