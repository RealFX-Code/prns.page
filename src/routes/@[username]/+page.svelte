<script>

    // route: " /@[username]"
    // file : " /@[username]/+page.svelte "

    /** @type {import('./$types').Pagedata} */
    export let data;

    import { onMount } from "svelte";

    import ListItemComponent from '../../components/ListItemComponent.svelte'
    import FlagComponent from "../../components/FlagComponent.svelte";
    
    let prns;

    onMount(async function() {
        const response = await fetch(`https://pronouns.page/api/profile/get/${data.params.username}?version=2`);
        prns = await response.json();
    });

</script>

<main>
    {#if prns}
        <div class="heading">
            <div class="avatar">
                <img class="image" src="{prns?.avatarSource}" alt="avatar">
            </div>
            <h1 class="title">@{prns?.username}</h1>
        </div>
        <h2 class="bio">{prns?.profiles?.en?.description}</h2>
        <div class="container">
            <div class="child names">
                <h3>Names</h3>
                {#each prns?.profiles?.en?.names as { value, opinion }, i}
                    <ListItemComponent
                        Value={value}
                        Opinion={opinion} />
                {/each}
            </div>
            <div class="child pronouns">
                <h3>Pronouns</h3>
                {#each prns?.profiles?.en?.pronouns as { value, opinion}, i}
                    <ListItemComponent
                        Value={value}
                        Opinion={opinion} />
                {/each}
            </div>
            <div class="child flags">
                <h3>Flags</h3>
                <div class="flagContainer">
                    {#each prns?.profiles?.en?.flags as Flag, i}
                        <FlagComponent
                             flag={Flag} />
                        <br>
                    {/each}
                </div>
            </div>
            <div class="child links">
                <h3>Links</h3>
                {#each prns?.profiles?.en?.links as Link, i}
                    <a href="{Link}">
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <img id="icon1"
                            alt="{(new URL(Link)).hostname}'s Icon"
                            src="http://{(new URL(Link)).hostname}/favicon.png"
                            height="16px"
                            onerror="(document.getElementById('icon1')).remove();">
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <img id="icon2"
                            alt="{(new URL(Link)).hostname}'s Icon"
                            src="http://{(new URL(Link)).hostname}/favicon.ico"
                            height="16px"
                            onerror="(document.getElementById('icon2')).remove();">
                        <img id="icon3"
                            alt="{(new URL(Link)).hostname}'s Icon"
                            src="http://{(new URL(Link)).hostname}/favicon.svg"
                            height="16px"
                            onerror="(document.getElementById('icon3')).remove();">
                        {Link}
                    </a>
                    <br>
                {/each}
            </div>
            {#each prns?.profiles?.en?.words as {Header, values}, i}
            <div class="child words {Header}">
                <h3>Words</h3>
                {#each values as { value, opinion}, i}
                <ListItemComponent
                    Value={value}
                    Opinion={opinion} />
                {/each}
            </div>
            {/each}
            <div class="child cards">
                <h3>Card Images</h3>
                {#if prns?.profiles?.en?.card}
                    <a href="{prns?.profiles?.en?.card}">Light Mode</a>
                {:else}
                    <p class="unavailable" title="unavailable">Light Mode</p>
                {/if}
                {#if prns?.profiles?.en?.cardDark}
                    <a href="{prns?.profiles?.en?.cardDark}">Dark Mode</a>
                {:else}
                    <p class="unavailable" title="unavailable">Dark Mode</p>
                {/if}
            </div>
        </div>
    {:else}
        <h1 id="loading">Loading...</h1>
    {/if}
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
        transition: all .25s ease
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