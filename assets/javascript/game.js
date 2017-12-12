

$(document).ready(function() {
	
// Here we are provided an initial array of letters.
// Use this array to dynamically create buttons on the screen.
	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
	"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
// Here declare a list of words to use
	var words = ["bowser", "mario", "yoshi", "peach", "mushroom", "koopa", "toad", "luigi"]

// selects a random number between 0 and words.length
	var random = Math.floor(Math.random() * (words.length));
	console.log(words[random]);

// Places the Blank Noose image in the .noose div, give it the class 'noose'
	$('<img src="assets/images/noose_blank.png" class = "noose">').appendTo(".noose");

// Populates the button column with buttons equal to the array 'letters'
	for (var i = 0; i < letters.length; i++) {
		var letterBtn = $("<button>");
		letterBtn.addClass("letter", "letter-button-color");
		letterBtn.data("letter", letters[i]);
		letterBtn.text(letters[i]);
		$(".lettercolumn").append(letterBtn);
	}

// Takes the [random] value of 'words' and breaks it into letters
	var split = words[random].split('');

// prints the answer in the console as letters
	console.log(split);


// Create an array with blank tabs for each 
	var blanks = [];

	for (var i = 0; i < split.length; i++) {
	
		blanks.push("_");
		console.log(blanks);
    }

    $(".letterguess").append(blanks);

// Counts the number of correct guesses
	var correctsum = 0;
// Counts the number of incorrect guesses
	var incorrectsum = 0;
// Holds existing guesses
	var pastguess =[];
		
//******************BEGIN LETTER PRESS***********************************
	$(".letter").on("click", function() {
// sets variable equal to letter pressed
	var checkletter = (($(this).data("letter")));	
    console.log(checkletter);

    var roundsum = 0;

// Place the letter in the 'Used Letter' section
	$(".usedLetters2").append(" " + checkletter + " ");
	
// Checks to see if you have already made a guess
		for (var t = 0; t < pastguess.length; t++) {

			if (checkletter === pastguess[t]) {
				// alert("You already guessed that!");
				checkletter=0;
				// incorrectsum++;
				// 	for (var i = 0; i < split.length; i++) {
				// 		if (checkletter === split[i]) {
		  // 			    	correctsum--;
				// 		}
				// 	} 
			}
		}

// Checks to see if the user has input a correct guess
		for (var i = 0; i < split.length; i++) {
			
			console.log(i);
			if (checkletter === split[i]) {
				document.getElementById('coin').play();

				    blanks[i] = checkletter;
				    $(".letterguess").html(blanks);
					console.log(blanks);
					
				    roundsum ++;
				    correctsum++;
			}

			if (correctsum === split.length) {
				// alert("You Win!");
				document.getElementById('good_news').play();
				return
			}


		} 

//End of checking for correct guess


// Checks to see how many are wrong, and adds corresponsing picture
		if (roundsum === 0) {
			document.getElementById('mario_hurt').play();

			incorrectsum ++;

			if (incorrectsum === 1) {
				$(".noose").replaceWith('<img src="assets/images/noose_head.png" class = "noose">');
			}
			if (incorrectsum === 2) {
				$(".noose").replaceWith('<img src="assets/images/noose_body.png" class = "noose">');
			}
			if (incorrectsum === 3) {
				$(".noose").replaceWith('<img src="assets/images/noose_left.png" class = "noose">');
			}
			if (incorrectsum === 4) {
				$(".noose").replaceWith('<img src="assets/images/noose_right.png" class = "noose">');
			}
			if (incorrectsum === 5) {
				$(".noose").replaceWith('<img src="assets/images/noose_foot.png" class = "noose">');
			}
			if (incorrectsum >5) {
				$(".noose").replaceWith('<img src="assets/images/noose_full.png" class = "noose">');
				// alert("YOU LOSE");
				document.getElementById('bowser_message').play();
			}
		} 
//End of incorrect checking 


		
// add the guess to the checklist
		pastguess.push(checkletter);
      }); 


//*********END OF LETTER PRESS***************




});
