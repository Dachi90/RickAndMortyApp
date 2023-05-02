import { characterCard } from './src/presentacion/characters/character';
import { locationCard } from './src/presentacion/locations/locations';
import './style.css';

document.querySelector('#app').innerHTML = `
  <header class="header">
    <h1>The Rick And Morty App</h1>
  </header>

  <section class="buttons">
    <button class="button" id="characterButton">Character</button>
    <button class="button" id="locationButton">Location</button>
    <button class="button">Episodes</button>
  </section>

  <section class="data"> </section>
`;

const $Element = document.querySelector('.data');
const $CharacterButton = document.querySelector('#characterButton');
const $LocationButton = document.querySelector('#locationButton');

$CharacterButton.addEventListener('click', () => {
	characterCard($Element);
});

$LocationButton.addEventListener('click', () => {
	locationCard($Element);
});
