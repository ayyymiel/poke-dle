import fetch from "node-fetch";

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.text())
    .then(data => console.log(data));