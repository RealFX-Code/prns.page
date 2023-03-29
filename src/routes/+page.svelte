<script>
	// route: " / "
	// file : " +page.svelte "
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
	<!-- <div class="form">
        <h3>Know of a username? Look it up!</h3>
        <form on:submit={handleFormSubmit}>
            <input
                id="username-form"
                placeholder="username"
                bind:value={$user.username}>
            <br>
            <input type="submit">
        </form>
    </div> -->
</main>

<style>
	h1,
	h2,
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
