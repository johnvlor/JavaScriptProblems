"use strict";

function getString(message) {
	var messageResult = prompt("Please enter a message.");
	return messageResult;
}

function convertToArray (message) {
	var arrayString;
	
	arrayString = message.split("");
	return arrayString;
}

function reverseString (message) {
	var reverseString;

	reverseString = message.reverse();	
	return reverseString;
}

function displayReverseString (string) {
	console.log(string.join(''));
}

function runProgram () {
	
	var outputString = getString();
	var arrayString = convertToArray(outputString);
	var reverse = reverseString(arrayString);

	displayReverseString(reverse);
}

runProgram();