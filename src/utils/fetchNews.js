import API_KEY from '../config/env';

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

export async function getUSANews() {
	let result = await fetch(url).then((response = response.json()));

	return result.articles;
}
