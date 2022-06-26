console.log('hello world!');
let pkmn = 'Darkrai';
let guessesCounter = 0;

function imageSize() {
    // dynamic sizing here
}

function thePokemon() {
    // daily pokemon
}

function sendGuess() {
    /*
    This function handles the guesses being sent by the user/player.

    Returns: none
    */
    let guess = document.getElementById("inputGuess").value;
    if (guess != pkmn) {
        alert('Incorrect!');
        guessesCounter++;
        document.getElementsByClassName("imagebox"+guessesCounter)[0].style.backgroundColor = "red"; //array DOM element of class
        console.log(guessesCounter);
    } else {
        alert('Congratulations!');
        guessesCounter++;
        document.getElementsByClassName("imagebox"+guessesCounter)[0].style.backgroundColor = "green";
        console.log(guessesCounter);
    }
}
