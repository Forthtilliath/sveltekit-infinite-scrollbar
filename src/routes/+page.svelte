<script lang="ts">
	import AnimeCard from '$lib/components/anime-card.svelte';
	import Spinner from '$lib/components/spinner.svelte';

	const { data } = $props();
</script>

<div class="max-w-7xl mx-auto bg-[#0F1117]">
	<main class="sm:p-16 py-16 px-8 flex flex-col gap-10">
		<h2 class="text-3xl text-white font-bold">Explore Anime</h2>

		{#await data.animes}
			Loading...
		{:then animes}
			<Spinner initial={animes} />
		{/await}
	</main>
</div>
