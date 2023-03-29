<script>
	export let showOnPx = 150;
	let hidden = true;

	function goTop() {
		document.body.scrollIntoView({
			behavior: 'smooth'
		});
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="back-to-top" on:click={goTop} class:hidden>
	<img src="/icons/arrow-up-light.png" alt="Back to top" width="64px" label="Scroll back to top" />
</div>

<style>
	.back-to-top {
		border-radius: 32px;
		opacity: 1;
		transition: opacity 0.25s, visibility 0.25s;
		position: fixed;
		z-index: 99;
		right: 20px;
		user-select: none;
		bottom: 20px;
		color: white;
	}

	.back-to-top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
