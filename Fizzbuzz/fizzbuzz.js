"use strict";



function getNumber (number) {
	var number = prompt("Please enter a number.");
	
	return number;
}

function calculateFizzbuzz (number) {

	for (var i = 1; i <=number; i++) {
		
		if ((i % 3 || i % 5 ) === 0 ) {
			console.log(i, " = fizzbuzz");
		}
		else if ((i % 3) === 0) {
			console.log(i, " = fizz");
		}
		else if (i % 5 === 0){
			console.log(i, " = buzz");
		}
		else {
			console.log(i);
		}
	}
}


function runProgram () {
	
	var inputNumber = getNumber();
	calculateFizzbuzz(inputNumber);
}

console.log(0);
runProgram();
