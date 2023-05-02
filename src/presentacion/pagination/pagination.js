import { charactersFetch } from '../characters/character';
import './pagination.css';

/**
 * Función para añadir los botones de paginación y la funcionalidad de paginación.
 * @param {HTMLElement} element Elemento HTML donde se añadirán los botones de paginación
 * @param {JSON} data Objeto tipo JSON con la información de los personajes y de la petición
 */
export const PaginationButtons = (task, element, data) => {
	const $ButtonsPagination = document.createElement('div');
	$ButtonsPagination.classList.add('buttonsPagination');

	const $ButtonPrev = document.createElement('button');
	$ButtonPrev.innerHTML = '&#8678;';

	const $ButtonNext = document.createElement('button');
	$ButtonNext.innerHTML = '&#8680;';

	$ButtonsPagination.append($ButtonPrev, $ButtonNext);

	element.append($ButtonsPagination);

	if (data.info.prev === null) {
		$ButtonPrev.setAttribute('disabled', 'true');
	}
	if (data.info.next === null) {
		$ButtonNext.setAttribute('disabled', 'true');
	}

	$ButtonPrev.addEventListener('click', async () => {
		const newData = await charactersFetch(data.info.prev);
		task(element, newData);
	});

	$ButtonNext.addEventListener('click', async () => {
		const newData = await charactersFetch(data.info.next);
		task(element, newData);
	});
};
