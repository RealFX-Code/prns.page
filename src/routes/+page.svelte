<script>
	// route: " / "
	// file : " +page.svelte "

	import { page } from '$app/stores';

	let fromCW = false;
	const url = $page.url;

	if (url.searchParams.has('from')) {
		if (url.searchParams.get('from') === 'cw') {
			fromCW = true;
		}
	}
</script>

<main>
	<div class="heading">
		<div class="title">
			<h1>prns.page</h1>
		</div>
		<div class="subtitle">
			<h2>
				An alternate front-end to
				<a href="https://pronouns.page/"> pronouns.page </a>
			</h2>
		</div>
	</div>
	<div class="content">
		{#if fromCW}
			<h3>You've just returned from a Content Warning.</h3>
			<p>
				Prnouns.page lets you put a content warning on your profile, And the profile you were trying
				to visit had a content warning.
			</p>
		{/if}
	</div>
</main>

<style>
	h1,
	h2,
	h3,
	p,
	a {
		text-align: center;
	}

	h1 {
		font-size: 6rem;
	}

	a {
		color: #9977ff;
		text-decoration: none;
		letter-spacing: 0.016em;
		transition: all 0.25s ease;
	}

	a:hover {
		letter-spacing: 0.025em;
		text-decoration: underline;
	}
</style>
