function fizzBuzz (endNum) {
	for (var num = 1; num <= endNum; num ++) {
		if (num % 15 === 0){
			console.log("FizzBUZZ!");
		}
		else if (num % 5 === 0){
			console.log("Buzz");
		}
		else if (num % 3 === 0) {
			console.log("Fizz");
		}
		else {
		console.log(num);
		}
	}	
}

fizzBuzz(100);


