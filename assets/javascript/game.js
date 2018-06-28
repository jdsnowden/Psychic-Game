var losses = 0;

var wins = 0;

var guesses = 8;

var computerGuess;

var arr = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
function updateLetter() {
    computerGuess = arr[Math.floor(Math.random() * arr.length)];
    console.log("computer guess " + computerGuess)
}

updateLetter();

// All variables functioning properly 

// need to create function that allows for win, loss and guess number tracking here (else/if?)//
document.onkeyup = function (event) {
    var userGuess = event.key;

    console.log("userGuess: " + userGuess);
    if (userGuess === computerGuess) {
        wins++;
        updateScore();
        updateLetter();
        resetGame();
        console.log("You won!", wins);
    }

    else if (userGuess !== computerGuess) {
        guesses--;
    }

    document.querySelector("#guesses").innerHTML ="Guesses Left= " + guesses;

    if (guesses === 0) {
        losses++;
        resetGame();
        updateScore();
    }
    
    function updateScore() {
        document.querySelector("#wins").innerHTML = "Wins= " + wins;
        document.querySelector("#losses").innerHTML ="Losses= " + losses;
    }

    function resetGame() {
        guesses = 8;
        updateLetter();
    }

}




