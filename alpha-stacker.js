// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var row = "";
// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
	for (var i = 0; i < theAlphabetArray.length; i++) {
		
		// 	if (){
		// 		theAlphabetArray.join(" ");
			// }
			if ((row.length) % 4 == 0) {
				row += " ";
			}
			row += theAlphabetArray[i];
		console.log(row);

	}

}
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */


// Invoke the function and pass in the array
stackLetters(alphabet);

// string methods, array methods, operators = math

// splice(theAlphabetArray[]);
// join();