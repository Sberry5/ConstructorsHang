var inquirer = require("inquirer");
//var word = require("./word.js")
//var letter = require("./letter.js")

/*--------Prompts user to begin game--------*/
inquirer.prompt([{
	name: "play",
	type: "confirm",
	message: "Want to play hangman?",
	validate: function validateUserInput(play){
		if(answer.play) {
			//newGame();
}]);
    console.log("==============================================");
    console.log("\n Guess a letter\n");
    console.log("==============================================");
  		}
		else {
			console.log("Then why are you here?")
		}
	}

}])
//.then(startGame());


// //Function to start the game
// var startGame = function(){

// //vari
// 	guesses = [];
// //Variable for user guess countdown
// 	var guessesRemaining = [10];
// 	inquirer.prompt([
// 		{
// 			type: "input"
// 			message: "Guess a letter: ",
// 			validate : function(input){
// 			return /[a-z]/.test(input.trim().toLowerCase());
// 		}
// 	])
// };


// var resetGuessesRemaining = function(){
// 	this.guessesRemaining = 10;
// },