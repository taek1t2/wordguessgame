//Global Variable
var wordOptions = ["fangs", "witch", "skull"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//game counters
var winCount = 0;
var lossCount = 0;
var guessRemain = 9;

//arrays and variable for holding data
function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    // Reset
    guessesRemain =10;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //populate blanks and successes with right number of blanks.
    for (var i=0; i<numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    // Change HTML to reflect and round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("numGuess").innerHTML = guessRemain;
    document.getElementById("winCount").innerHTML = winCount;
    document.getElementById("lossCount").innerHTML = lossCount;

    //testing and debugging
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
}
