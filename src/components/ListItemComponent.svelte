<script>

    import Fa from 'svelte-fa/src/fa.svelte';
    import { faThumbsUp, faThumbsDown, faPeopleGroup, faHeart, faLaughSquint} from '@fortawesome/free-solid-svg-icons';

    let yes      = faHeart;
    let close    = faPeopleGroup;
    let jokingly = faLaughSquint
    let meh      = faThumbsUp;
    let no       = faThumbsDown;

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