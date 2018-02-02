
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var wrongGuesses = 0;




var electricSlide = ["e", "l","e", "c", "t", "r", "i", "c", "s", "l", "i", "d", "e"];

var macarina ="macarina";


document.onkeyup=function (event) {
    var letterGuessed = event.key.toLowerCase();



    if (macarina.indexOf(letterGuessed) !== -1){
        console.log("letter Matched");
    }
    
    else {
        guessesLeft--;
        console.log ("guesses left =" + guessesLeft)
    }
}