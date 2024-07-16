<script lang="ts">
	// route: " <layout> "
	// file : " +layout.svelte "

	import { writable } from 'svelte/store';

	const user = writable({
		username: ''
	});

	function handleFormSubmit() {
		if ($user.username === '') {
			alert("Username can't be empty!");
		} else {
			window.location.href = `/@${$user.username}`;
		}
	}

	const links = [
		{
			label: 'Home',
			link: '/'
		},
		{
			label: 'Inclusivity',
			link: '/inclusivity'
		},
		{
			label: 'Help',
			link: '/help'
		}
	];
</script>

<svelte:head>
	<!-- Cloudflare Web Analytics -->
	<script
		defer
		src='https://static.cloudflareinsights.com/beacon.min.js'
		data-cf-beacon='{JSON.stringify({"token": "2444487a15464617b6c3cb46649305a4"})}'
	></script>
	<!-- End Cloudflare Web Analytics -->
	<link rel="stylesheet" href="/global.css" />
	<script type="text/javascript">
		!(function () {
			setInterval(function () {
				console.log(
					"You seem to know what you're doing, Why not look at some code? It's more readable than whatever you'll find here... https://github.com/RealFX-Code/prns.page"
				);
			}, 1000);
		})();
	</script>
</svelte:head>

<div class="layout">
	<noscript>
		<div class="wrapper" style="width: fit-content; margin: 0 25%; padding: 16px; border: 2px white solid;">
			You need to enable JavaScript to use this site. How to enable JavaScript: <a style="color: #7777ff;" href="https://enable-javascript.com/">https://enable-javascript.com/</a>
			<div class="section" style="margin-top: 8px;">
				<p style="color: rgba(255,255,255,0.75);">"JavaScript is for the cool people" -me</p>
			</div>
		</div>
	</noscript>
	<nav>
		{#each links as link}
			<a href="{link.link}">{link.label}</a>
		{/each}
		<form id="username-form" on:submit="{handleFormSubmit}">
			<label id="username-label" for="username-input">https://prns.realfx.rocks/@</label>
			<input id="username-input" placeholder="username" bind:value="{$user.username}" />
		</form>
	</nav>
	<div class="content">
		<slot></slot>
	</div>
	<footer>
		<div class="contrib">
			<p>
				<span class="color">Contributor? →</span>
				Check out this project's
				<a class="color" href="https://github.com/RealFX-Code/prns.page"> Github </a>
				!
			</p>
		</div>
		<div class="copy">
			<p>© {new Date().getFullYear()}, sometime</p>
		</div>
	</footer>
</div>


<style>
	.color {
		--accent: 124, 58, 237;
		--accent-gradient: linear-gradient(45deg, rgb(var(--accent)), #da62c4 30%, white 60%);
		background-image: var(--accent-gradient);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 400%;
		background-position: 0%;
	}

	a {
		text-decoration: none;
		letter-spacing: 0.016em;
		transition: all 0.25s ease;
	}

	a:hover {
		letter-spacing: 0.025em;
		text-decoration: underline;
	}

	p {
		color: rgba(255, 255, 255, 50%);
		text-align: center;
	}

	nav {
		align-items: center;
		width: 100vw;
		height: 5vh;
		display: flex;
		flex-direction: row;
	}

	nav > #username-form {
		margin-left: auto;
		margin-right: 2rem;
	}

	nav > a {
		color: white;
		margin: 16px;
		text-decoration: none;
		transition: all 0.25 ease;
	}

	nav > a:hover {
		text-decoration: underline;
	}
	footer {
		margin: 4rem auto;
	}

	#username-label {
		margin-right: 0px;
		padding-right: 0px;
	}

	#username-input {
		border: 0px;
		border-bottom: 1px white solid;
		background-color: rgba(0, 0, 0, 0);
		color: white;
		margin-left: 0px;
		padding-left: 0px;
		transition: 1s ease all;
	}

	@media screen and (max-width: 700px) {
		#username-label {
			display: none;
		}
	}
</style>