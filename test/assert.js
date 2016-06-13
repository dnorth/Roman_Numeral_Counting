var assert = require('assert');
var main = require('../lib/main');

describe('Add Two Numbers', function() {
	it('Returns II', function() {
		assert.equal("II", main.addRomanNumerals("I", "I"))
	});

	it('returns III', function() {
		assert.equal("III", main.addRomanNumerals("I", "II"))
	});

	it('returns IV', function() {
		assert.equal("IV", main.addRomanNumerals("I", "III"))
		assert.equal("IV", main.addRomanNumerals("III", "I"))
	});

	it('returns V', function(){
		assert.equal("V", main.addRomanNumerals("III", "II"));
		assert.equal("V", main.addRomanNumerals("I", "IV"));
		assert.equal("V", main.addRomanNumerals("IV", "I"));
	});

	it('returns VI', function() {
		assert.equal("VI", main.addRomanNumerals("I", "V"));
		assert.equal("VI", main.addRomanNumerals("V", "I"));
	});

	it('returns VII', function() {
		assert.equal("VII", main.addRomanNumerals("II", "V"));
	});

	it('returns VIII', function() {
		assert.equal("VIII", main.addRomanNumerals("IV", "IV"));
	});

	it('returns IX', function() {
		assert.equal("IX", main.addRomanNumerals("V", "IV"));
	});

	it('returns X', function() {
		assert.equal("X", main.addRomanNumerals("IV", "VI"));
		assert.equal("X", main.addRomanNumerals("IX", "I"));
	});

	it('returns XX', function() {
		assert.equal("XX", main.addRomanNumerals("IX", "XI"));
	});

	it('returns XL', function() {
		assert.equal("XL", main.addRomanNumerals("XXVII", "XIII"));
	});

	it('returns XLV', function() {
		assert.equal("XLV", main.addRomanNumerals("XX", "XXV"));
	});

	it('returns XLIX', function() {
		assert.equal("XLIX", main.addRomanNumerals("XXIV", "XXV"));
	});

	it('returns L', function() {
		assert.equal("L", main.addRomanNumerals("XL", "X"));
	});

	it('returns XC', function() {
		assert.equal("XC", main.addRomanNumerals("XL", "L"));
	});

	it('returns C', function() {
		assert.equal("C", main.addRomanNumerals("XC", "X"));
	});

	it('returns CD', function() {
		assert.equal("CD", main.addRomanNumerals("CC", "CC"));
	});

	it('returns D', function(){
			assert.equal("D", main.addRomanNumerals("CD", "C"));
	});

	it('returns CM', function() {
		assert.equal("CM", main.addRomanNumerals("CD", "D"));
	});

	it('returns M', function(){
		assert.equal("M", main.addRomanNumerals("CD", "DC"));
		assert.equal("M", main.addRomanNumerals("DC", "CD"));
		assert.equal("M", main.addRomanNumerals("CM", "C"));
	});

	it('returns MMMCMXCIX', function(){
		assert.equal("MMMCMXCIX", main.addRomanNumerals("MMDIX", "MCDXC"));
	});
});
