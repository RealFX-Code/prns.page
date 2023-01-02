<script>

    import { onMount } from "svelte";

    import ListItemComponent from '../components/ListItemComponent.svelte'
    import FlagComponent from "../components/FlagComponent.svelte";

    let config = {
        username: "sometime" // Vaild pronouns.page username
    }
    
    let data;

    onMount(async function() {

        const response = await fetch(`https://pronouns.page/api/profile/get/${config.username}?version=2`);

        data = await response.json();

    });

</script>

<svelte:head>
    <link rel="stylesheet" href="/global.css">
</svelte:head>

<main>
    {#if data}
        <center><a href="https://en.pronouns.page/@{config.username}">Link to pronouns.page</a></center>
        <h1>{data?.username}</h1>
        <h2>{data?.profiles?.en?.description}</h2>
        <hr>
        <fieldset>
            <legend>Names</legend>
            {#each data?.profiles?.en?.names as { value, opinion }, i}
                <ListItemComponent
                    Value={value}
                    Opinion={opinion} />
            {/each}
        </fieldset>
        <fieldset>
            <legend>Pronouns</legend>
            {#each data?.profiles?.en?.pronouns as { value, opinion}, i}
                <ListItemComponent
                    Value={value}
                    Opinion={opinion} />
            {/each}
        </fieldset>
        <fieldset>
            <legend>Links</legend>
            {#each data?.profiles?.en?.links as Link, i}
                <a href="{Link}">{Link}</a><br>
            {/each}
        </fieldset>
        <fieldset>
            <legend>Flags</legend>
            <div class="flagContainer">
                {#each data?.profiles?.en?.flags as Flag, i}
                    <FlagComponent
                         flag={Flag} />
                {/each}
            </div>
        </fieldset>
        {#each data?.profiles?.en?.words as {Header, values}, i}
            <fieldset>
                <legend>Words</legend>
                {#each values as { value, opinion}, i}
                <ListItemComponent
                    Value={value}
                    Opinion={opinion} />
                {/each}
            </fieldset>
        {/each}
        <fieldset>
            <legend>Cards</legend>
            {#if data?.profiles?.en?.card}
                <a href="{data?.profiles?.en?.card}">card image</a>
            {:else}
                <p style="text-decoration:line-through">card image</p>
            {/if}
            {#if data?.profiles?.en?.cardDark}
                <a href="{data?.profiles?.en?.cardDark}">cardDark image</a>
            {:else}
                <p style="text-decoration:line-through">cardDark image</p>
            {/if}
        </fieldset>
    {:else}
        <h1>Loading...</h1>
    {/if}
</main>

<style>
    .flagContainer {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>