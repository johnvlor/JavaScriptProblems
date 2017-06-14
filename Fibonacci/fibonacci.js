"use strict";

function calculateFibonacci() {
	var numbersArray = [];
	
	for (var x = 0; x < 100; x++) {
		
		if (x < 2) {
			numbersArray[x] = x;
		}
		else {
		
		numbersArray[x] = numbersArray[x-2] + numbersArray[x-1];
		}
	}
	return numbersArray;
}		

function displayFibonacci(numbersArray) {
	console.log(numbersArray);
}

function runProgram () {
	var fibonacciNumbers = calculateFibonacci();
	displayFibonacci(fibonacciNumbers);
}

runProgram();