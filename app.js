//import fetch from "node-fetch";

let guessesCounter = 0;
const sizeFactor = 10;
let pkmn = "Darkrai";
const boxElement = document.getElementsByClassName("box-image img");
console.log(boxElement);
boxElement[0].setAttribute('width', '100%')

// boxElement[0].style.width ='100%';


function imageSize() {
    // dynamic sizing here
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
        console.log(guessesCounter);
        // document.getElementsByClassName("box-image img")[0].style.width += sizeFactor;
    } else {
        alert('Congratulations!');
        guessesCounter++;
        document.getElementsByClassName("imagebox"+guessesCounter)[0].style.backgroundColor = "green";
        console.log(guessesCounter);
    }
}