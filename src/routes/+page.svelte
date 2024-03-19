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
		justify-content: center;
		align-items: center;
		height: 100vh;
		flex-direction: column;
		max-width: 500px;
		margin: 0 auto;
		text-align: center;
		padding: 1rem;
	}

	h1 {
		margin: 0;
	}

	p {
		text-wrap: balance;
	}

	img {
		margin: 2rem auto;
	}

	@media (max-width: 600px) {
		img {
			max-height: 200px;
		}
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
