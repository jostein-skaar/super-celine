<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import superCelineImage from '$lib/images/super-celine-happy.png';
	import { onMount } from 'svelte';

	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<header>
		<h1 transition:fly={{ y: -40, duration: 2000 }}>Super Celine</h1>
		<p transition:fade={{ duration: 1000, delay: 200 }}>
			Assist Celine on the way to her next important meeting!
		</p>
		<img
			transition:fade={{ duration: 1000 }}
			src={superCelineImage}
			alt="Drawing of Super Celine"
		/>
		<a transition:fly={{ y: 100, duration: 2000 }} href="/game">Start Game</a>
	</header>
{/if}

