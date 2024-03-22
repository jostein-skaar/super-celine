<script lang="ts">
	import superCelineImage from '$lib/images/super-celine-sad.png';

	import { page } from '$app/stores';
	const score = $page.url.searchParams.get('score');		
</script>

<header>
	<h1>Score: {score}</h1>
	<p>Perhaps you should hang out with us more often?</p>
	<img src={superCelineImage} alt="Drawing of Super Celine" />
	<a href="/game">Try Again</a>
</header>
