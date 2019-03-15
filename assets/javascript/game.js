//Global Variable
var wordOptions = ["fangs", "witch", "skull", "pumpkin"];
var selectedWord = "";
var lettersChosen = [];
var Blanks = 0;
var blanksSuccess = [];
var rightGuess = [];
var wrongGuess = [];

//game counters
var wins = 0;
var losses = 0;
var guessRemain = 9;

//arrays and variable for holding data
function startGame () {
    
    // guessRemain = 9;
    // selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    // lettersChosen = selectedWord.split("_");
    // Blanks = lettersChosen.length;
    // console.log(letterChosen);


    // selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    Blanks = lettersinWord.length;

    // Reset
    guessesRemain =10;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //populate blanks and successes with right number of blanks.
    for (var i=0; i<Blanks; i++) {
        blanksAndSuccesses.push("_");
    }

    // Change HTML to reflect and round conditions
    document.querySelector("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.querySelector("rightGuess").innerHTML = guessRemain;
    document.querySelector("wins").innerHTML = wins;
    document.querySelector("losses").innerHTML = losses;

    //testing and debugging
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(Blanks);
}

startGame ();
