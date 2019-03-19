//Global Variable
var wordOptions = ["fangs", "witch", "skull", "pumpkin", "skeleton", "candy", "werewolves"];
var selectedWord = "";
var lettersChosen = [];
var Blanks = 0;
var blanksSuccess = [];
var wrongGuess = [];

//game counters
var wins = 0;
var losses = 0;
var guessRemain = 9;

//Version 2: building an alert
// alert(Click 'enter' to play);

//Starting the game.
function startGame () {
    
    guessRemain = 9;
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

    // *****lettersChosen is the main variable that needs to be used in multiple functions.****
    lettersChosen = selectedWord.split("");
    Blanks = lettersChosen.length;

    //testing if the word selection works.
    console.log(lettersChosen);

    blanksSuccess = [];
    wrongGuess = [];

    //push the letters into the blanks if the user guessed it right.
    for (var i=0; i< Blanks; i++) {
        blanksSuccess.push("_");
    }
    console.log(blanksSuccess);

    document.getElementById("numGuess").innerHTML = guessRemain;

    document.getElementById("blanksSuccess").innerHTML = blanksSuccess.join(" ");

    document.getElementById("wrongGuess").innerHTML = wrongGuess.join(" ");
    
}

//for the letters to show in the blanks.
function checkLetters(letters) {
    //boolean will be toggled based on whether or not the user is finding a letter in the word
    var lettersChosen = false;

    //lettersChosen is equal to an array. Using the FOR loop to check if a letter exists in this array.
    for (var i=0; i < Blanks; i++) {
        if (selectedWord[i] === letters) {
            lettersChosen = true;
        }
    }

    //if the letter exists in any of wordOption, it will show into console log.
    if (lettersChosen) {
        //Loop the wordOptions
        for (var j=0; j<Blanks; j++) {
            if (selectedWord[j] === letters) {
                blanksSuccess[j] = letters;
            }
        }

        //testing loop
        console.log(blanksSuccess);

    } else {
        wrongGuess.push(letters);
        //subtract guesses
        guessRemain--;
    }

}

//Version 2: Need add another function for images to pop up.
// function imgShown () {
//     var selectedWord;
//     var hiddenImage = [];
//     var selectImage = selectedWord[Math.floor(Math.random() * selectedWord.length)];

//     //for loop to bring one image at a time.

// }

function roundComplete () {
    console.log("Wins: " + wins + " | Losses: " + losses + " | Guess Remain: " + guessRemain);

    document.getElementById("numGuess").innerHTML = guessRemain;

    document.getElementById("blanksSuccess").innerHTML = blanksSuccess.join(" ");

    document.getElementById("wrongGuess").innerHTML = wrongGuess.join(" ");

    if (lettersChosen.toString() === blanksSuccess.toString()) {
        
        wins++;

        alert("Winner!!!");

        document.getElementById("wins").innerHTML = wins;

        startGame();

    } else if (guessRemain === 0) {
        
        losses++;

        alert("You lose!!!");

        document.getElementById("losses").innerHTML = losses;

        startGame();
    }

    //Version 2: add an eventlistener for the images pops up after wins or remainGuess goes 0. Game starts over.

}

startGame ();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.which).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
}
