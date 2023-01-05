<script>

    import Fa from 'svelte-fa/src/fa.svelte';
    import { faThumbsUp, faThumbsDown, faPeopleGroup, faHeart, faLaughSquint} from '@fortawesome/free-solid-svg-icons';

    let yes      = faHeart;       // FontAwesome heart icon          - Pronouns.page "Yes"
    let close    = faPeopleGroup; // FontAwesome people group icon   - Pronouns.page "Only if we're close"
    let jokingly = faLaughSquint  // Font Awesome Laught Squint icon - Pronouns.page "Jokingly"
    let meh      = faThumbsUp;    // FontAwesome Thumbs Up Icon      - Pronouns.page "okay" / meh
    let no       = faThumbsDown;  // FontAwesome Thumbds Down Icon   - Pronouns.page "no"

    export let Value;
    export let Opinion;

</script>

<div class="item">
    {#if Opinion == "yes"}
        <Fa icon={yes} />
    {:else if Opinion == "close"}
        <Fa icon={close} />
    {:else if Opinion == "jokingly"}
        <Fa icon={jokingly} />
    {:else if Opinion == "meh"}
        <Fa icon={meh} />
    {:else if Opinion == "no"}
        <Fa icon={no} />
    {:else}
        NO ICON
    {/if}
    {String(Value)}
</div>

<style>
    div {
        color: white;
        padding: 4px
    }
</style>