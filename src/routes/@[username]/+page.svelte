<script>
	// route: " /@[username]"
	// file : " /@[username]/+page.svelte "

	/** @type {import('./$types').Pagedata} */
	export let data;
	const username = data.params.username;

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { lang } from './../lang';

	import ListItemComponent from '../../components/ListItemComponent.svelte';
	import FlagComponent from '../../components/FlagComponent.svelte';
	import FullscreenDialog from '../../components/FullscreenDialog.svelte';

	let prns;
	let langPrns;
	let langUI;

	let FullscreenDialogComponent;

	onMount(async function () {
		// Language
		let searchParams = new URL($page.url.href).searchParams;
		langPrns = 'en';
		langUI = lang['en'];
		if (searchParams.has('lang')) {
			langPrns = searchParams.get('lang');
			if (lang[langPrns]) {
				langUI = lang[langPrns];
			}
		}

		// Actually get the card
		const response = await fetch(`https://pronouns.page/api/profile/get/${username}?version=2`);
		prns = await response.json();

		// Content warning
		let showDialog = function (title, text, options, triggers) {
			FullscreenDialogComponent.showContentWarningDialog(title, text, options, triggers);
		};

		let closeDialog = function () {
			FullscreenDialogComponent.closeDialog();
		};


		// Fallback to english
		// This only affects the content itself from the users pronouns.page
		// UI lang is unaffected.
		if(!prns?.profiles?.[langPrns]){
			langPrns="en";
		}

		// check if `sensitive` array isn't empty, it's fucking wierd, i know.

		if (Array(prns?.profiles?.[langPrns]?.sensitive)[0].length !== 0) {
			showDialog(
				'Content Warning',
				'This profile contains the following content warnings:',
				[
					{
						label: 'Go back',
						id: 'back',
						function: function () {
							window.location.href =
								window.location.protocol + '//' + window.location.host + '/?from=cw&offending=' + window.location.href.split("@")[1];
						}
					},
					{
						label: 'Continue',
						id: 'continue',
						function: function () {
							closeDialog();
						}
					}
				],
				prns?.profiles?.[langPrns]?.sensitive
			);
		}
	});

	let opinionList = [
		{ opinion: 'yes', lang: 'Yes' },
		{ opinion: 'close', lang: "Only if we're close" },
		{ opinion: 'jokingly', lang: 'Jokingly' },
		{ opinion: 'meh', lang: 'Meh' },
		{ opinion: 'no', lang: 'No' },
		{ opinion: 'missing', lang: 'Missing Icon'}
	];

</script>

<FullscreenDialog bind:this={FullscreenDialogComponent} />

<main>
	{#if prns && langPrns}
		<div class="heading">
			<div class="avatar">
				<img class="image" src={prns?.avatarSource} alt="avatar" />
			</div>
			<h1 class="title">@{prns?.username}</h1>
		</div>
		<h2 class="bio">{prns?.profiles?.[langPrns]?.description}</h2>
		<div class="container">
			<div class="child names">
				<h3>{langUI.username.names}</h3>
				{#each prns?.profiles?.[langPrns]?.names as { value, opinion }, i}
					<ListItemComponent Value={value} Opinion={opinion} />
				{/each}
			</div>
			<div class="child pronouns">
				<h3>{langUI.username.pronouns}</h3>
				{#each prns?.profiles?.[langPrns]?.pronouns as { value, opinion }, i}
					<ListItemComponent Value={value} Opinion={opinion} />
				{/each}
			</div>
			<div class="child flags">
				<h3>{langUI.username.flags}</h3>
				<div class="flagContainer">
					{#each prns?.profiles?.[langPrns]?.flags as Flag, i}
						<FlagComponent flag={Flag} />
						<br />
					{/each}
				</div>
			</div>
			<div class="child links">
				<h3>{langUI.username.links}</h3>
				{#each prns?.profiles?.[langPrns]?.links as Link, i}
					<a href={Link}>
						<!-- svelte-ignore a11y-missing-attribute -->
						<img
							id="icon1"
							alt=""
							src="https://s2.googleusercontent.com/s2/favicons?domain={new URL(Link).href}"
							height="16px"
						/>
						{Link}
					</a>
					<br />
				{/each}
			</div>
			{#each prns?.profiles?.[langPrns]?.words as { Header, values }, i}
				<div class="child words {Header}">
					<h3>{langUI.username.words}</h3>
					{#each values as { value, opinion }, i}
						<ListItemComponent Value={value} Opinion={opinion} />
					{/each}
				</div>
			{/each}
			<div class="child cards">
				<h3>{langUI.username.card.title}</h3>
				{#if prns?.profiles?.[langPrns]?.card}
					<a href={prns?.profiles?.[langPrns]?.card}>{langUI.username.card.light}</a>
				{:else}
					<p class="unavailable" title="unavailable">{langUI.username.card.light}</p>
				{/if}
				{#if prns?.profiles?.[langPrns]?.cardDark}
					<a href={prns?.profiles?.[langPrns]?.cardDark}>{langUI.username.card.dark}</a>
				{:else}
					<p class="unavailable" title="unavailable">{langUI.username.card.dark}</p>
				{/if}
			</div>
		</div>
	{:else}
		<h1 id="loading">Loading</h1>
	{/if}
	<div class="container-small">
		<div class="explanation child">
			<h2>
				The following "Legends/Opinions" are implemented:
			</h2>
			<ul>
				{#each opinionList as opinion }
					<li>
						<ListItemComponent Value={opinion.lang} Opinion={opinion.opinion} />
					</li>
				{/each}
			</ul>
		</div>
	</div>
</main>

<style>
	.unavailable {
		text-decoration: line-through;
	}

	#loading {
		text-align: center;
	}

	div.avatar > .image {
		height: 100%;
		border-radius: 50%;
	}

	div.avatar {
		height: 6rem;
	}

	div.heading {
		margin-left: 1rem;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.title {
		padding-left: 1rem;
		font-family: monospace;
		font-size: 4rem;
	}

	.bio {
		margin: 2rem 1rem;
		text-align: left;
	}

	a {
		color: #9977ff;
		text-decoration: none;
		font-size: 16px;
		letter-spacing: 0.016em;
		transition: all 0.25s ease;
	}

	a:hover {
		letter-spacing: 0.025em;
		text-decoration: underline;
	}

	.flagContainer {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.child {
		background-color: #1b1b1b;
		border-radius: 16px;
		border: solid 2px #525252;
		padding: 24px;

		background: rgba(66, 66, 66, 0.29);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(6.7px);
		-webkit-backdrop-filter: blur(6.7px);
		border: 1px solid rgb(49, 49, 49);
	}

	.container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(10, fit-content); /* 3, 1fr */
		grid-column-gap: 16px;
		grid-row-gap: 16px;
	}

	.container-small {
		width: fit-content;
		margin: 16px auto;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(1, fit-content); /* 3, 1fr */
		grid-column-gap: 16px;
		grid-row-gap: 16px;
	}

	@media only screen and (max-width: 820px) {
		.container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(12, fit-content); /* 5, 1fr */
			grid-column-gap: 16px;
			grid-row-gap: 16px;
		}
	}

	@media only screen and (max-width: 580px) {
		.container {
			display: grid;
			grid-template-columns: repeat(1, 1fr);
			grid-template-rows: repeat(14, fit-content); /* 9, 1fr */
			grid-column-gap: 16px;
			grid-row-gap: 16px;
		}
		div.heading {
			flex-direction: column;
		}
		.title {
			font-size: 2rem;
			padding-left: 0;
		}
		.bio {
			text-align: center;
		}
	}
</style>
