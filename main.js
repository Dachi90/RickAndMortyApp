import { characterCard } from './src/presentacion/characters/character';
import './style.css';

document.querySelector('#app').innerHTML = `
  <header class="header">
    <h1>Rick And Morty App</h1>
  </header>

  <section class="buttons">
    <button class="button" id="characterButton">Character</button>
    <button class="button">Location</button>
    <button class="button">Episodes</button>
  </section>

  <section class="data"> </section>
`;

const $Element = document.querySelector('.data');
const $CharacterButton = document.querySelector('#characterButton');

// document.addEventListener('DOMContentLoaded', () => {
// 	characterCard($Element);
// });

$CharacterButton.addEventListener('click', () => {
	characterCard($Element);
});
