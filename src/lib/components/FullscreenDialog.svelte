<script>
	export let dialogOpen = false;

	let dialogTitle = '';
	let dialogText = '';
	let dialogOptions = [];
	let dialogTriggers = [];

	export function closeDialog() {
		dialogOpen = false;
	}

	/**
	 *
	 * @param title
	 * @param text
	 * @param options
	 * @param triggers
	 */
	export function showContentWarningDialog(
		title = 'Content Warning',
		text = 'The following profile contains potentially disturbing content.',
		options = [
			{
				label: 'Go back',
				id: 'back',
				function: function () {
					window.location.href =
						window.location.protocol + '//' + window.location.host + '/?from=cw';
				}
			},
			{
				label: 'Continue',
				id: 'continue',
				function: function () {
					// closing logic goes here
				}
			}
		],
		triggers = []
	) {
		dialogOpen = !dialogOpen;
		dialogTitle = title;
		dialogText = text;
		dialogOptions = options;
		dialogTriggers = triggers;
	}
</script>

{#if dialogOpen}
	<div class="dialogContainer">
		<div class="dialog">
			<h1>{dialogTitle}</h1>
			<p>{dialogText}</p>
			<div class="triggers">
				<ul>
					{#each dialogTriggers as trigger}
						<li>{trigger}</li>
					{/each}
				</ul>
			</div>
			<div class="buttons">
				{#each dialogOptions as dialogOptionObj}
					<div class="button {dialogOptionObj.id}">
						<button id={dialogOptionObj.id} on:click={dialogOptionObj.function}>
							{dialogOptionObj.label}
						</button>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style>
	.dialogContainer {
		position: fixed;
		top: 0;
		left: 0;
		margin: 0px;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.75);
		overflow: hidden;
		z-index: 100;
		backdrop-filter: blur(15px);
	}

	.dialog {
		position: absolute;
		width: 25rem;
		height: fit-content;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: 0;
		border-radius: 16px;
		border: solid 2px #525252;
		padding: 24px;
		background: rgba(66, 66, 66, 0.29);
		backdrop-filter: blur(6.7px);
		-webkit-backdrop-filter: blur(6.7px);
		border: 1px solid rgb(49, 49, 49);
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(4, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	.buttons {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	.dialog > h1,
	.dialog > p,
	.dialog > .triggers > ul > li,
	.dialog > .buttons > .button > button {
		margin-left: unset;
		margin-top: 16px;
		margin-bottom: 16px;
	}

	.button {
		margin: 0 auto;
		display: flex; /* Use flexbox layout */
		justify-content: center; /* Center horizontally */
		align-items: center; /* Center vertically */
	}

	button {
		border-radius: 16px;
		border: solid 2px #525252;
		background: rgba(66, 66, 66, 0.29);
		color: #fff;
		cursor: pointer;
		line-height: 1.5;
		text-decoration: none;
		margin: 0 auto;
		transition: all 0.42s cubic-bezier(0.25, 0.8, 0.25, 1);
		padding: 8px 16px;
		height: fit-content;
		width: fit-content;
	}
	button:hover {
		transform: scale(1.1);
		text-decoration: underline;
	}

	#continue {
		border-color: #52a552;
		background-color: #52a55225;
	}

	#back {
		border-color: #a55252;
		background-color: #a5525225;
	}

	@media screen and (max-width: 512px) {
		.dialog {
			width: 100%;
		}
		.dialog > h1,
		.dialog > p,
		.dialog > .triggers > ul > li {
			margin-left: 16px;
		}
	}
</style>
