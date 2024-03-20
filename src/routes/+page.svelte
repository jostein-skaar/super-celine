<script lang="ts">
	import superCelineImage from '$lib/images/super-celine.png';
</script>

<header>
	<h1>Super Celine</h1>
	<p>Assist Celine on the way to her next important meeting!</p>
	<img src={superCelineImage} alt="Drawing of Super Celine" />
	<a href="/game">Start Game</a>
</header>

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
