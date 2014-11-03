var _ = require('underscore');

module.exports = {
	createStore: function(spec) {
		var result = {};
		_.each(_.keys(spec), function (key) {
			result[key] = _.isFunction(spec[key]) ? spec[key]() : spec[key];
		});
		return result;
	}
};
