let pkmn = 'Darkrai';

function sendGuess() {
    let guess = document.getElementById("inputGuess").value;
    if (guess != pkmn) {
        alert('Incorrect!');
    } else {
        alert('Congratulations!');
    }
}
