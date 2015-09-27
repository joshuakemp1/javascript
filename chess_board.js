// We need to make an 8 x 8 chess board
// After solving this issue, we need to make it into a function that we can pass any sized number to and it will automatically generate a chess board by those dimensions: For example if we passed in the number ( 4 ) we would get a chess board that is 4 x 4, if we passed into the function number (64) we would get a chess board that is a 64 x 64 grid.

// To solve:
// We need to first print out one '#'
// Next we need to print out one '#' vertically and one '#' horizontal
// Next we need to print out 8 '#' on every line for 8 lines

// console.log('#' + '#' + '#' + '#' + '#' + '#' + '#' + '#');

// console.log('#' + '#' + '#' + '#' + '#' + '#' + '#' + '#');

// console.log('#' + '#' + '#' + '#' + '#' + '#' + '#' + '#');

// console.log('#' + '#' + '#' + '#' + '#' + '#' + '#' + '#');

// console.log('#' + '#' + '#' + '#' + '#' + '#' + '#' + '#');

// console.log('#' + '#' + '#' + '#' + '#' + '#' + '#' + '#');

// console.log('#' + '#' + '#' + '#' + '#' + '#' + '#' + '#');

// console.log('#' + '#' + '#' + '#' + '#' + '#' + '#' + '#');


// have a loop that prints out 8 hashes
// lets have a line_counter that is set to 8
// lets have a counter that gets incremented every time the loop occurs and prints
// When the counter reaches the same '<=' to the line_counter that is the end of the program



// var line_depth = 8;

// for (var hash = '#'; hash.length <= 8; hash = hash + '#') {

// 	for ( var hash_depth = '#'; hash_depth.length <= 8; hash_depth + '#') {

// 	}

// 	console.log(hash);
// 	// console.log(hash_depth);
// }


// var line_counter = 8;
// var hashes = "########";


// for (counter = 0; counter < line_counter; counter++) {
// 	console.log(hashes);
// 	// line_counter = line_counter + 1;
// }

 function chessBoard (boardSize) {

	 var boardSize = boardSize;


	 for (var hash = '#'; hash.length <= boardSize; hash += '#'){
		 //console.log(hash)
		 if (hash.length = boardSize) {
			 chessBoardLength = hash
		 }
	 }


	 for (var counter = 0; counter < boardSize; counter ++) {
		 console.log(chessBoardLength);
	 }
 }

 chessBoard(19);










































