<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import {
		faThumbsUp,
		faThumbsDown,
		faPeopleGroup,
		faHeart,
		faLaughSquint,
		faExclamationTriangle
	} from '@fortawesome/free-solid-svg-icons';

	let yes = faHeart; // FontAwesome Heart Icon          - Pronouns.page "Yes"
	let close = faPeopleGroup; // FontAwesome People Group Icon   - Pronouns.page "Only if we're close"
	let jokingly = faLaughSquint; // FontAwesome Laught Squint Icon  - Pronouns.page "Jokingly"
	let meh = faThumbsUp; // FontAwesome Thumbs Up Icon      - Pronouns.page "okay" / meh
	let no = faThumbsDown; // FontAwesome Thumbds Down Icon   - Pronouns.page "no"
	let missing = faExclamationTriangle // FontAwesome exclamation triangle - for missing icon

	export let Value;
	export let Opinion;

	let Title = (opinion) => {
		let opinionList = [
			{ opinion: 'yes', friendlyName: 'Yes' },
			{ opinion: 'close', friendlyName: "Only if we're close" },
			{ opinion: 'jokingly', friendlyName: 'Jokingly' },
			{ opinion: 'meh', friendlyName: 'Meh' },
			{ opinion: 'no', friendlyName: 'No' },
			{ opinion: 'missing', friendlyName: 'Missing Icon'}
		];
		let friendlyName;
		try {
			friendlyName = opinionList.find((element) => element.opinion === opinion).lang;
		} catch {
			friendlyName = missing.lang;
		}
		return;
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
		<Fa icon={missing} />
	{/if}
	{String(Value)}
</div>

<style>
	div.item {
		color: white;
		padding: 4px;
	}
</style>
