var inquirer = require("inquirer");
var word = require("./word.js")
var letter = require("./letter.js")

//Variable for user guess countdown
var guessesRemaining = [10];

inquirer.prompt([
	{
		type: "input"
		name: "guess",
		message: "Guess a letter: ",
		validate : function(input){
		return /[a-z]/.test(input.trim().toLowerCase());
	}
])



// var resetGame = function(randomWord){

// //reset number of guesses
// 	this.resetGuessesRemaining();
// 	this.currentWord = new (randomWord).toUpperCase();
// 	console.log(currentWord);


// //Close hangman game object
// }

// var resetGuessesRemaining = function(){
// 	this.guessesRemaining = 10;
// },