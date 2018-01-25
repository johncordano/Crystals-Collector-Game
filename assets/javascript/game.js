
// Creates a variable for the random number that the computer generates.
var computerGenNumber = 0;
// Creates a variable for the user score at the start of the game session.
var userTotalScoreStart = 0;
// Creates a variable for the cummulative user score.
var userTotalScore = 0;
// Creates variable for the user losses at the start of a game session.
var lossesStart = 0;
// Creates a variable for the number of times the user losses a game session.
var losses = 0;
// Creates variable for the user wins at the start of a game session.
var winsStart = 0;
// Creates a variable for the number of times the user wins a game session.
var wins = 0;

// Determines that the web page is ready for manipulation.
$(document).ready(function() {

// Creates the random computer number that the user must match by clicking the crystal icons.
 var computerGenNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

 // Creates a random number for each crystal to start the game.
 var firstCrystalNumber = Math.floor(Math.random() * 12) + 1;
 var secondCrystalNumber = Math.floor(Math.random() * 12) + 1;
 var thirdCrystalNumber = Math.floor(Math.random() * 12) + 1;
 var fourthCrystalNumber = Math.floor(Math.random() * 12) + 1;

 console.log(firstCrystalNumber)
 console.log(secondCrystalNumber)
 console.log(thirdCrystalNumber)
 console.log(fourthCrystalNumber)
 


// Displays the random computer number, and a 0 value for wins, losses, and the user score to start the game.
$("#Computer-Number").html(computerGenNumber);
$("#Losses").html(lossesStart);
$("#Wins").html(winsStart);
$("#score").html(userTotalScoreStart);


// Updates the user total score when the user clicks the first crystal image.
$("#firstButton").on("click", function () {
	if (userTotalScore < computerGenNumber) {
		userTotalScore = (userTotalScore) + (firstCrystalNumber);
		$("#score").html(userTotalScore);
	}
});

// Updates the user total score when the user clicks the second crystal image.	
$("#secondButton").on("click", function () {
 	if (userTotalScore < computerGenNumber) {
 		userTotalScore = (userTotalScore) + (secondCrystalNumber);
 		$("#score").html(userTotalScore);
 	}
}); 

// Updates the user total score when the user clicks the third crystal image.
$("#thirdButton").on("click", function () {
 	if (userTotalScore < computerGenNumber) {
 		userTotalScore = (userTotalScore) + (thirdCrystalNumber);
 		$("#score").html(userTotalScore);
 	}
});

// Updates the user total score when the user clicks the fourth crystal image.
$("#fourthButton").on("click", function () {
 	if (userTotalScore < computerGenNumber) {
 		userTotalScore = (userTotalScore) + (fourthCrystalNumber);
 		$("#score").html(userTotalScore);
 	}
});	


// Updates the win and loss data when the user clicks any crystal that wins or losses a game session.
$(".buttonCrystals").on("click", function () {			
	if (userTotalScore === computerGenNumber) {
		wins = wins + 1;
		$("#message").html("You win!");
		$("#Wins").html(wins);
		userTotalScore = 0;
		$("#score").html(userTotalScore);
		// var computerGenNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		// $("#Computer-Number").html(computerGenNumber);
		// var firstCrystalNumber = Math.floor(Math.random() * 12) + 1;
 		// var secondCrystalNumber = Math.floor(Math.random() * 12) + 1;
 		// var thirdCrystalNumber = Math.floor(Math.random() * 12) + 1;
 		// var fourthCrystalNumber = Math.floor(Math.random() * 12) + 1;
	}
	if (userTotalScore > computerGenNumber) {
		losses = losses + 1;
		$("#message").html("You lose!");
		$("#Losses").html(losses);
		userTotalScore = 0;
		$("#score").html(userTotalScore);
		// var computerGenNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		// $("#Computer-Number").html(computerGenNumber);
		// var firstCrystalNumber = Math.floor(Math.random() * 12) + 1;
 		// var secondCrystalNumber = Math.floor(Math.random() * 12) + 1;
 		// var thirdCrystalNumber = Math.floor(Math.random() * 12) + 1;
 		// var fourthCrystalNumber = Math.floor(Math.random() * 12) + 1;
		}

});







})