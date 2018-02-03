
var wins = 0;
var losses = 0;
var guessesLeft = 20;
var wrongGuesses = 0;




var macarena ="macarena";
var word1 = macarena.toUpperCase().split(""); 

var electricSlide = "electric slide";
var word2 = electricSlide.toUpperCase().split(""); 


console.log ("word: ", word1);


for (i=0; i<word1.length; i++){
    document.getElementById("guessedCorrect" +word1[i]);
}

document.onkeyup=function (event) {
    var letterGuessed = event.key.toUpperCase();



    if (macarena.indexOf(letterGuessed) !== -1){
        console.log("letter Matched");
        var index= macarena.indexOf(letterGuessed);
        macarena[index]=letterGuessed;
    }
    
    else {
        guessesLeft--;
        console.log ("guesses left =" + guessesLeft)
    }
}