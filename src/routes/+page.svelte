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

<style>
	header {
		display: flex;
		gap: 2rem;
		align-items: center;
		flex-direction: column;
		max-width: 500px;
		margin: 0 auto;
		text-align: center;
		text-wrap: balance;
		padding: 1rem;
	}

	img {
		height: clamp(100px, 35vh, 350px);
	}

	a {
		display: block;
		font-size: 1.5rem;
		margin-top: 2rem;
		padding: 1rem;
		text-decoration: none;
		border-radius: 5px;
		background-color: var(--secondary-color);
		transition: filter 0.3s ease;
		width: 100%;
	}
	a:hover {
		filter: brightness(1.2);
	}
</style>
