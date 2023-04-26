export const characterFetch = async () => {
	const url = 'https://rickandmortyapi.com/api/character';

	try {
		const res = await fetch(url);
		console.log(res);
		const data = await res.json();
		console.log(data.results);
		return data;
	} catch (error) {
		console.log(error.statusText);
		return error;
	}
};
