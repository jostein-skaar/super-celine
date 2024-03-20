<script context="module" lang="ts">
	import { createGameConfig } from '$lib/game/config';
	import { adjustForPixelRatio } from '@jostein-skaar/common-game';

	let isDebug = true;
	if (import.meta.env.PROD) {
		isDebug = false;
	}

	let scaleModePhaser = Phaser.Scale.ScaleModes.NONE;

	const height = 600;
	const maxWantedWidth = 800;
	let width = maxWantedWidth;
	if (window.innerHeight < height) {
		scaleModePhaser = Phaser.Scale.ScaleModes.FIT;
		const scaleRatio = window.innerHeight / height;
		console.log('scaleRatio', scaleRatio);
		// Compensate scale ratio to be able to fill width of screen when FIT is used.
		width = Math.min(window.innerWidth / scaleRatio, maxWantedWidth);
	} else {
		width = Math.min(window.innerWidth, maxWantedWidth);
	}

	const gameConfig = createGameConfig(
		width,
		height,
		scaleModePhaser,
		Phaser.Scale.Center.NO_CENTER,
		adjustForPixelRatio(1),
		isDebug
	);

	setTimeout(() => {
		const phaserGame = new Phaser.Game(gameConfig);
	});
</script>

<div class="game-container">
	<div id="game"></div>
</div>

<style>
	/* :global(body) {
		overflow: hidden;
	} */

	.game-container {
		container-type: size;
		container-name: game-container;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		height: 100svh;
	}
	#game {
		max-width: 800px;
		max-height: 600px;
		/* background-color: green; */
	}

	@container game-container (min-width: 820px) and (min-height: 620px) {
		#game {
			background-color: yellow;
			box-sizing: content-box;
			border: 10px dashed var(--secondary-color);
		}
	}
</style>
