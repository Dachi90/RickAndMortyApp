import { PaginationButtons } from '../pagination/pagination';
import './locations.css';

const locationsFetch = async (url = 'https://rickandmortyapi.com/api/location') => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

export const locationCard = async (element, data) => {
	try {
		// Agregar indicador de carga
		element.innerHTML = '<p>Cargando...</p>';

		if (!data) {
			data = await locationsFetch();
		}

		element.innerHTML = '';
		for (const location of data.results) {
			const $Card = document.createElement('article');
			$Card.classList.add('location-card');

			$Card.innerHTML = `
        
          <h2>${location.name}</h2>
        
        <div class="location-data">
          
            <p><span>Id:</span> ${location.id}</p>
            <p><span>Type:</span> ${location.type}</p>
            <p><span>Dimensions:</span> ${location.dimension}</p>
          
            <p><span>Number of residents:</span> ${location.residents.length}</p>
            <p><span>Created:</span> ${location.created}</p>
           
        </div>
      `;
			element.append($Card);
		}
		PaginationButtons(locationCard, element, data);
	} catch (error) {
		element.innerHTML = `<p>Error al cargar las localizaciones: ${error.message}</p>`;
	}
};
