import { PaginationButtons } from '../pagination/pagination';
import './episodes.css';

const episodesFetch = async (url = 'https://rickandmortyapi.com/api/episode') => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

export const episodeCard = async (element, data) => {
	try {
		// Agregar indicador de carga
		element.innerHTML = '<p>Cargando...</p>';

		if (!data) {
			data = await episodesFetch();
		}

		element.innerHTML = '';
		for (const episode of data.results) {
			const $Card = document.createElement('article');
			$Card.classList.add('episode-card');

			$Card.innerHTML = `
        
          <h2>${episode.name}</h2>
        
        <div class="episode-data">
          
            <p><span>Id:</span> ${episode.id}</p>
            <p><span>Release date:</span> ${episode.air_date}</p>
            <p><span>Code:</span> ${episode.episode}</p>
          
            <p><span>Number of characters:</span> ${episode.characters.length}</p>
            <p><span>Created:</span> ${episode.created}</p>
           
        </div>
      `;
			element.append($Card);
		}
		PaginationButtons(episodeCard, element, data);
	} catch (error) {
		element.innerHTML = `<p>Error al cargar las localizaciones: ${error.message}</p>`;
	}
};
