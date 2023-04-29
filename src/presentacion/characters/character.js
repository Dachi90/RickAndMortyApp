import './character.css';
/**
 * Función para hacer la petición de los personajes.
 * @param {String} url url a la que se quiere hacer la petición.
 * @returns json con la data requerida.
 */
const charactersFetch = async (url = 'https://rickandmortyapi.com/api/character') => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

/**
 * Función para saber en que episodios aparece cada personaje
 * @param {JSON} character json del personaje en cuestión que se quiere saber los episodios
 * @returns JSON con los episodios donde aparece el personaje en cuestión
 */
const characterOnEpisodesFetch = async (character) => {
	const episode = await fetch(character.episode[0]);
	const episodeResults = await episode.json();
	const episodeName = await episodeResults.name;
	return episodeName;
};

/**
 * Función para generar las Card de cada personaje
 * @param {HTMLElement} element Elemento HTML donde se pintará la card de cada personaje
 */
export const characterCard = async (element) => {
	try {
		// Agregar indicador de carga
		element.innerHTML = '<p>Cargando...</p>';

		const data = await charactersFetch();

		element.innerHTML = '';

		for (const character of data.results) {
			const $Card = document.createElement('article');
			$Card.classList.add('characterCard');

			const $Image = document.createElement('img');
			$Image.setAttribute('src', `${character.image}`);
			$Image.classList.add('imageCard');

			const $Data = document.createElement('div');
			$Data.classList.add('dataCard');
			$Data.innerHTML = `
				<div>
					<h3>${character.name}</h3>
					<p class="status"><span>&#8226;</span>${character.status} - ${character.species}</p>
				</div>
				<div>
					<p>Last known location:</p>
					<p>${character.location.name}</p>
				</div>
				<div>
					<p>First seen in:</p>
					<p>${await characterOnEpisodesFetch(character)}</p>
				</div>
			`;

			$Card.append($Image, $Data);
			element.append($Card);
		}

		PaginationButtons(element);
	} catch (error) {
		// Mostrar mensaje de error en caso de que la solicitud falle
		element.innerHTML = `<p>Error al cargar los personajes: ${error.message}</p>`;
	}
};

export const PaginationButtons = (element) => {
	const $ButtonsPagination = document.createElement('div');
	$ButtonsPagination.classList.add('buttonsPagination');

	const $ButtonPrev = document.createElement('button');
	$ButtonPrev.innerText = '<-- Back';

	const $ButtonNext = document.createElement('button');
	$ButtonNext.innerText = 'Next -->';

	$ButtonsPagination.append($ButtonPrev, $ButtonNext);

	element.append($ButtonsPagination);
};
