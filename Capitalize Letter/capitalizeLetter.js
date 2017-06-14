"use strict";

function getString(message) {
	var messageResult = prompt("Please enter a message.");
	return messageResult;
}

function splitString(inputString) {
	var splitString;

	splitString = inputString.split(" ");
	return splitString;
}

function convertToCapital(splitStringOutput) {
	var upperCaseString;
	var newArray = [];
	
	for (var x = 0; x < splitStringOutput.length; x++) {
			upperCaseString = splitStringOutput[x].charAt(0).toUpperCase() + splitStringOutput[x].slice(1);
			newArray.push(upperCaseString);
	}
	return newArray;
}

function displayCapitalString (upperCaseString) {
	console.log(upperCaseString.join(" "));
}

function runProgram () {
	var inputString = getString();
	var splitStringOutput = splitString(inputString);
	var upperCaseString = convertToCapital(splitStringOutput);
	
	displayCapitalString(upperCaseString);
}

runProgram();
