<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import superCelineImage from '$lib/images/super-celine-sad.png';
	import { onMount } from 'svelte';

	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<header>
		<h1 transition:fly={{ y: -40, duration: 2000 }}>So sad</h1>
		<p transition:fade={{ duration: 1000, delay: 200 }}>
			Perhaps you should hang out with us more often?
		</p>
		<img
			transition:fade={{ duration: 1000 }}
			src={superCelineImage}
			alt="Drawing of Super Celine"
		/>
		<a href="/game">Try Again</a>
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
