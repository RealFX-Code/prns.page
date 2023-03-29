<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import {
		faThumbsUp,
		faThumbsDown,
		faPeopleGroup,
		faHeart,
		faLaughSquint
	} from '@fortawesome/free-solid-svg-icons';

	let yes = faHeart; // FontAwesome Heart Icon          - Pronouns.page "Yes"
	let close = faPeopleGroup; // FontAwesome People Group Icon   - Pronouns.page "Only if we're close"
	let jokingly = faLaughSquint; // FontAwesome Laught Squint Icon  - Pronouns.page "Jokingly"
	let meh = faThumbsUp; // FontAwesome Thumbs Up Icon      - Pronouns.page "okay" / meh
	let no = faThumbsDown; // FontAwesome Thumbds Down Icon   - Pronouns.page "no"

	export let Value;
	export let Opinion;

	let Title = (opinion) => {
		let opinionList = [
			{ opinion: 'yes', lang: 'Yes' },
			{ opinion: 'close', lang: "Only if we're close" },
			{ opinion: 'jokingly', lang: 'Jokingly' },
			{ opinion: 'meh', lang: 'Meh' },
			{ opinion: 'no', lang: 'No' }
		];
		return opinionList.find((element) => element.opinion === opinion).lang;
	};
</script>

<div class="item" title={Title(Opinion)}>
	{#if Opinion == 'yes'}
		<Fa icon={yes} />
	{:else if Opinion == 'close'}
		<Fa icon={close} />
	{:else if Opinion == 'jokingly'}
		<Fa icon={jokingly} />
	{:else if Opinion == 'meh'}
		<Fa icon={meh} />
	{:else if Opinion == 'no'}
		<Fa icon={no} />
	{:else}
		NO ICON
	{/if}
	{String(Value)}
</div>

<style>
	div.item {
		color: white;
		padding: 4px;
	}
</style>
