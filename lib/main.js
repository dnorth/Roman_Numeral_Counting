module.exports = {

	addRomanNumerals: function(num1, num2) {
		num1 = reduce(num1);
		num2 = reduce(num2);

		return unduce(num1 + num2);
	}

};

var valueMap = [
	['CM', 'DCD'],
	['M', 'DD'],
	['CD', 'CCCC'],
	['D', 'CCCCC'],
	['XC', 'LXL'],
	['C', 'LL'],
	['XL', 'XXXX'],
	['L', 'XXXXX'],
	['IX', 'VIV'],
	['X', 'VV'],
	['IV','IIII'],
	['V', 'IIIII'],
];

function reduce(num) {
	return valueMap.reduce(function(prev, current){
		var regex = new RegExp(current[0],'g');
		return prev.replace(regex, current[1])
	}, num);
}

function unduce(num) {
		for(var i = valueMap.length - 1; i >= 0; i--){
			var regex = new RegExp(valueMap[i][1],'g');
			num = num.replace(regex, valueMap[i][0]);
		}
		return num;
}
