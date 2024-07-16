<script lang="ts">
	import type { Anime } from '$lib/animeSchema';
	import { fetchAnimes } from '$lib/fetchAnimes';
	import AnimeCard from './anime-card.svelte';

	type Props = {
		initial: Anime[];
	};
	const { initial }: Props = $props();

	let pagenumber = $state(1);
	let fetching = $state(false);
	let animeArray: Anime[] = $state(initial);

	let ancestor: HTMLElement;
	let options = {
		rootMargin: '0px',
		threshold: 1.0
	};

	async function getMoreAnimes() {
		fetching = true;
		const animes = await fetchAnimes(++pagenumber);
		try {
			animeArray.push(...animes);
		} catch (error) {
			console.log('error');
		} finally {
			fetching = false;
		}
	}

	$effect(() => {
		if (ancestor) {
			const observer = new IntersectionObserver(getMoreAnimes, options);
			observer.observe(ancestor);
		}
	});
</script>

<section class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
	{#each animeArray as anime, i}
		<AnimeCard {...anime} />
	{/each}
</section>

<div class="flex justify-center items-center w-full" bind:this={ancestor}>
	{#if fetching}
		<div>
			<img src="./spinner.svg" alt="spinner" width={56} height={56} class="object-contain" />
		</div>
	{/if}
</div>
