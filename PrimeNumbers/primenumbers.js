"use strict";

function getNumber(number) {
	var numberResult = prompt("Please enter a number.");
	return numberResult;
}

function calculateOddNumbers(number) {
	var primeNumber = [];
	var i = 2;
	
	while (i < number) {	
		if (i === 2) {
			primeNumber.push(i);
		}
		else if (i % 2 !== 0) {
			primeNumber.push(i);
		}		
		i++;		
	}
	return primeNumber;
}

function removeThrees(primeNumber) {
	for (var i = 0; i < primeNumber.length; i++) {
		if ((primeNumber[i] !== 3) && (primeNumber[i] % 3 === 0)) {
		primeNumber.splice(i,1);
		}
	}
	return primeNumber;
}

function removeFives(primeNumber) {
	for (var i = 0; i < primeNumber.length; i++) {
		if ((primeNumber[i] !== 5) && (primeNumber[i] % 5 === 0)) {
		primeNumber.splice(i,1);
		}
	}
	return primeNumber;
}

function removeSevens(primeNumber) {
	for (var i = 0; i < primeNumber.length; i++) {
		if ((primeNumber[i] !== 7) && (primeNumber[i] % 7 === 0)) {
		primeNumber.splice(i,1);
		}
	}
	return primeNumber;
}

function removeExceptions(primeNumber) {
	for (var i = 0; i < primeNumber.length; i++) {
		for (var x = 0; x < primeNumber.length; x++) {
			if ((i !== x) && (primeNumber[i] % primeNumber[x] === 0)) {
			primeNumber.splice(i,1);
			}
		}
	}
	return primeNumber;
}

function displayPrimeNumbers (primeNumber, outputNumber) {
	console.log("There are ",primeNumber.length," Prime Numbers out of ",outputNumber,".");
	console.log(primeNumber.join(" "));
}

function runProgram () {
	var outputNumber = getNumber();
	var outputOddNumber = calculateOddNumbers(outputNumber);
	var outputRemoveThrees = removeThrees(outputOddNumber);
	var outputRemoveFives = removeFives(outputRemoveThrees);
	var outputRemoveSevens = removeSevens(outputRemoveFives);
	var outputRemoveExceptions = removeExceptions(outputRemoveSevens);

	displayPrimeNumbers(outputRemoveExceptions, outputNumber);
}

runProgram();
