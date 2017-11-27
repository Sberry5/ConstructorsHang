//Export function to select word from array
//var selectWord = function(){

//Array to hold possible words
var wordArray = ["starfish", "seahorse", "whale", "dolphin", "squid", "angelfish", "barracuda", "cuttlefish"]

//Variable to select random word
var randomWord = wordArray[Math.floor(Math.random()*wordArray.length)];
console.log(randomWord);



var wordSetup = function (randomWord) {
	this.wordToGuess = randomWord

};
module.exports = wordSetup();
