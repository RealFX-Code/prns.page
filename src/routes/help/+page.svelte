<script>
	// route: " /help "
	// file : " help/+page.svelte "
</script>

<main>
	<h1>prns.page</h1>
	<div class="wiki">
		<div class="section usage">
			<h3>profile view of a specific user:</h3>
			<p>
				To get the page of a specific user navigate to the url below, but replace "username" with
				the users username.
			</p>
			<code> https://prns.realfx.rocks/@username </code>
		</div>
		<div class="section usage">
			<h3>Get a user's profile view from the username input:</h3>
			<p>Simply write the user's username in the username field in the navbar, then hit enter.</p>
		</div>
		<div class="section lang">
			<h3>Set the language for a page:</h3>
			<p>
				Add the "lang" search parameter along with your request. So to get the profile of
				"@username", with the language "es" ( spanish ) you'd have to go to:
			</p>
			<code> https://prns.realfx.rocks/@username?lang=es </code>
		</div>
	</div>
</main>

<style>
	h1,
	h3,
	p {
		text-align: center;
	}

	h1 {
		font-size: 6rem;
	}

	h3 {
		font-size: 2rem;
	}

	.section {
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 16px;
		border: 1px solid #323232;
		width: 65vw;
		margin: 2rem auto;
		padding: 2rem;
	}

	p {
		font-size: 1.25rem;
	}

	code {
		font-size: 1rem;
		padding: 1rem;
		border-radius: 4px;
		border: 1px solid #424242;
		background-color: #323232;
	}
</style>
