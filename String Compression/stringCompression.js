"use strict";

function getString(message) {
	var messageResult = prompt("Please enter a message.");
	return messageResult;
}

function countString (inputString) {
	var compressString = " ";
	var count = 0;

	for (var x = 0; x < inputString.length; x++ ) {

		if (inputString[x] === inputString[x+1]) {
			count++;
		}
		else {
			count++;
			compressString += count;
			compressString += inputString[x];
			count = 0;
		}
	}
	return compressString;
}

function displayInputString (inputString) {
	console.log(inputString);
}
	
function displayString(newString) {
	console.log("Compressed String = ",newString);
}

function runProgram() {
	var inputString = getString();
	var countStringResult = countString(inputString);
	
	displayInputString(inputString);
	displayString(countStringResult);
}

runProgram();
