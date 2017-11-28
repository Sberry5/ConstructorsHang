var letter = require("./letter.js")

//Array to hold possible words
var wordArray = ["starfish", "seahorse", "whale", "dolphin", "squid", "angelfish", "barracuda", "cuttlefish"]

//Variable to select random word
var wordToGuess = wordArray[Math.floor(Math.random()*wordArray.length)];
// console.log(randomWord);



var wordSetup = function (randomWord) {
	this.wordToGuess = wordToGuess;
	this.input = process.argv;
	this.createBlanks = function() {
		for (var i = 0; i < wordToGuess.length; i++){
			if(this.wordToGuess[i].valueOf() !== " "){
				this.input.push(guesses(input));
				}
			else{
				this.input.push()
				}
		}
		}
};
console.log(wordToGuess);

module.exports = wordSetup();
