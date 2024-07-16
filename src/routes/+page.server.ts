import { fetchAnimes } from '$lib/fetchAnimes';

export const load = async () => {
	return {
		animes: fetchAnimes()
	};
};
