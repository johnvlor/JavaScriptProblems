"use strict";

function getStartNumber(number) {
	var numberResult = prompt("Please enter a starting number.");
	return numberResult;
}

function getEndNumber(number) {
	var numberResult = prompt("Please enter an ending number.");
	return numberResult;
}

function calculateFibonacci(startingNumber, endingNumber) {
	var numbersArray = [];
	var newArray = [];
	
	for (var x = 0; x < endingNumber; x++) {
		
		if (x < 2) {
			numbersArray[x] = x;
		}
		else {
			numbersArray[x] = numbersArray[x-2] + numbersArray[x-1];
		}
	}
	newArray = numbersArray.copyWithin(0,startingNumber,endingNumber);
	return newArray;
}		

function displayFibonacci(numbersArray) {
	console.log(numbersArray);
}

function runProgram () {
	var startNumber = getStartNumber();
	var endNumber = getEndNumber();
	var fibonacciNumbers = calculateFibonacci(startNumber, endNumber);
	displayFibonacci(fibonacciNumbers);
}

runProgram();