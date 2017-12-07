

$(document).ready(function() {
// Here we are provided an initial array of letters.
// Use this array to dynamically create buttons on the screen.
	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
	"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
	var words = ["bowser", "mario", "yoshi", "peach", "mushroom", "koopa", "toad", "luigi"]

	var random = Math.floor(Math.random() * (words.length));
	console.log(words[random]);

	$('<img src="assets/images/noose_blank.png" class = "noose">').appendTo(".noose");

	for (var i = 0; i < letters.length; i++) {

		var letterBtn = $("<button>");
		letterBtn.addClass("letter", "letter-button-color");
		letterBtn.data("letter", letters[i]);
		letterBtn.text(letters[i]);

		$(".lettercolumn").append(letterBtn);
	}

	// Takes the [random] value of 'words' and breaks it into letters
	var split = words[random].split('');

	console.log(split);

	
	for (var i = 0; i <split.length; i++) {

      // $(".blankletter").append("<div>" , {"class": "blankletter"});

		var letternumber = $("<div>", {"class": "blankletter"});
		var letternumber = split[i];
		$(".blankletter").append(letternumber);

    }


    	// Counts the number of correct guesses
		var correctsum = 0;
		// COunts the number of incorrect guesses
		var incorrectsum = 0;


		

	
	$(".letter").on("click", function() {
	// sets variable equal to letter pressed
	var checkletter = (($(this).data("letter")));	
    console.log("hello!")
    console.log(checkletter);

    var roundsum = 0;

		// For # of letters in the word, check if 'checkletter' matches
		for (var i = 0; i < split.length; i++) {
			if (checkletter === split[i]) {
				alert("matching letter!");
					var letterguess = $("<div>", {"class": "guessedletter"});
				    letterguess.text($(this).data("letter"))
				    $(".blankletter").append(letterguess);
				    
				    roundsum ++;
				    correctsum++;
				
			}

			if (correctsum === split.length) {
				alert("You Win!");
			}
			
		} //End of checking for loop

		if (roundsum === 0) {
			alert("Incorrect!");
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
				alert("YOU LOSE");
			}
		} //End of incorrect checking 

					console.log("roundsum = " + roundsum);
					console.log("checkletter = " + checkletter);
				    console.log("correctsum = " + correctsum);
				    console.log("incorrectsum = " + incorrectsum);

		
      }); //end of the button click




});



