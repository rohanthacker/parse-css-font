var cssFontSizeKeywords = require('css-font-size-keywords');

module.exports = {

	isSize: function(value) {
		return /^[\d\.]/.test(value)
			|| value.indexOf('/') !== -1
			|| cssFontSizeKeywords.indexOf(value) !== -1
		;
	}

};
