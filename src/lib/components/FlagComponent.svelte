<script>
	export let flag;
</script>

<p>
	<img src="https://en.pronouns.page/flags/{flag}.png" alt={flag} height="100%" />
	<a class="flagLink" href="https://en.pronouns.page/dictionary/terminology#{flag}">{flag}</a>
</p>

<style>
	img {
		padding-right: 8px;
	}
	p {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		display: flex;
		height: 2.5vh;
		width: fit-content;
		font-size: 2.125vh;
		border-radius: 8px;
		border: solid 1px #5c5c5c;
		padding: 7px;
		color: white;
		background-color: #161616;
		margin: 0.25vh;
		transition: all ease 0.25s;
		white-space: nowrap;
	}
	p:hover {
		height: calc(2.5vh * 1.1);
		font-size: calc(2.125vh * 1.1);
	}
	.flagLink {
		color: white;
		text-decoration: none;
		transition: 0.25s ease all;
	}
	.flagLink:hover {
		color: #88aaff;
		text-decoration: underline;
	}
</style>
