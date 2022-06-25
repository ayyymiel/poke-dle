console.log('hello world!');
let pkmn = 'Darkrai';
let guessesCounter = 1;

function sendGuess() {
    let guess = document.getElementById("inputGuess").value;
    if (guess != pkmn) {
        alert('Incorrect!');
        guessesCounter++;
        document.getElementsByClassName("imagebox1")[0].style.backgroundColor = "red"; //array DOM element of class
    } else {
        alert('Congratulations!');
        guessesCounter = 0;
        document.getElementsByClassName("imagebox1")[0].style.backgroundColor = "green";
        console.log()
    }
}
