//import fetch from "node-fetch";

let guessesCounter = 0;
let pkmn = "Darkrai";
const sizeFactor = 20;

document.querySelector('.box-image img').style.width = "40%";

function imageSize(guessCount) {
    /*
    This function is used to change the size of the image for every wrong guess.

    Returns: none
    */
    let sizeTotal = sizeFactor*guessCount + 40;
    String(sizeTotal);
    let totalAsString = sizeTotal + '%';
    document.querySelector('.box-image img').style.width = `${totalAsString}`;
    console.log(sizeTotal)
}

function thePokemon() {
    /*
    This function is used to get the random Pokemon via RESTapi (PokeAPI).

    Returns: string
    */
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.text())
    .then(data => {return data});
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
        imageSize(guessesCounter);
    } else {
        alert('Congratulations!');
        guessesCounter++;
        document.getElementsByClassName("imagebox"+guessesCounter)[0].style.backgroundColor = "green";
    }
}