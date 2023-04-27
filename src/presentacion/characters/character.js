import './character.css';

const charactersFetch = async (url = 'https://rickandmortyapi.com/api/character') => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

export const characterCard = async (element) => {
	const data = await charactersFetch();

	data.results.forEach((character) => {
		const $Card = document.createElement('article');
		$Card.classList.add('characterCard');

		const $Image = document.createElement('img');
		$Image.setAttribute('src', `${character.image}`);
		$Image.classList.add('imageCard');

		const $Data = document.createElement('div');
		$Data.classList.add('dataCard');
		$Data.innerHTML = `
    <div>
      <p>${character.name}</p>
      <p>${character.status} - ${character.species}</p>
    </div>
    <div>
      <p>Last known location:</p>
      <p>${character.location.name}</p>
    </div>
    <div>
      <p>First seen in:</p>
      <p></p>
    </div>
    `;

		$Card.append($Image, $Data);
		element.append($Card);
	});

	const $ButtonsPagination = document.createElement('div');
	$ButtonsPagination.classList.add('buttonsPagination');

	const $ButtonPrev = document.createElement('button');
	$ButtonPrev.innerText = '<-- Back';

	const $ButtonNext = document.createElement('button');
	$ButtonNext.innerText = 'Next -->';

	$ButtonsPagination.append($ButtonPrev, $ButtonNext);

	element.append($ButtonsPagination);
};
