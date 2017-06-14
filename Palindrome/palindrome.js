"use strict";

function getString(message) {
	var messageResult = prompt("Please enter a message.");
	return messageResult;
}

function determinePalindrome (inputString) {
	for (var x = 0; x < inputString.length; x++ ) {

		if (inputString[x] != inputString[(inputString.length-1)-x]) {
			console.log("This is not a palindrome.");
			return;
		}
		else {
			console.log("Ding! Ding! This is a Palindrome!");
		}
	}
	return;
}

function displayInputString (inputString) {
	console.log("Is '", inputString, "' a Palindrome?");
}

function runProgram () {
var inputString = getString();
displayInputString(inputString);
determinePalindrome(inputString);
}

runProgram();