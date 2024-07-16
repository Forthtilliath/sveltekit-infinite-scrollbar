import { z } from 'zod';

export const animeSchema = z.object({
	id: z.number(),
	name: z.string(),
	image: z.object({
		original: z.string()
	}),
	kind: z.string(),
	episodes: z.number(),
	episodes_aired: z.number(),
	score: z.string()
});

export const animesSchema = z.array(animeSchema);
export type Anime = z.infer<typeof animeSchema>;
