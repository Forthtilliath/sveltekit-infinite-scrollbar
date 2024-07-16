import { animesSchema, type Anime } from './animeSchema';

export async function fetchAnimes(page: number = 1): Promise<Anime[]> {
	const request = await fetch(
		`https://shikimori.one/api/animes?page=${page}&limit=12&order=popularity`
	);

	let animes: Anime[] = [];
	try {
		const data = await request.json();
		const parsed = animesSchema.parse(data);
		animes = parsed;
	} catch (error) {
		console.log(error);
	}

	return animes;
}
