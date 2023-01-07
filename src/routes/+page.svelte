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

        if (Array(data?.profiles?.en?.words).length > 4)
        {
            console.warn(`${config.username} has more than 4 words categories, this is un-tested!`)
        }

    });

</script>

<svelte:head>
    <link rel="stylesheet" href="/global.css">
</svelte:head>

<main>
    {#if data}
        <div class="heading">
            <div class="avatar">
                <img class="image" src="{data?.avatarSource}" alt="avatar">
            </div>
            <h1 class="title">@{data?.username}</h1>
        </div>
        <h2 class="bio">{data?.profiles?.en?.description}</h2>
        <div class="container">
            <div class="child names">
                <h3>Names</h3>
                {#each data?.profiles?.en?.names as { value, opinion }, i}
                    <ListItemComponent
                        Value={value}
                        Opinion={opinion} />
                {/each}
            </div>
            <div class="child pronouns">
                <h3>Pronouns</h3>
                {#each data?.profiles?.en?.pronouns as { value, opinion}, i}
                    <ListItemComponent
                        Value={value}
                        Opinion={opinion} />
                {/each}
            </div>
            <div class="child flags">
                <h3>Flags</h3>
                <div class="flagContainer">
                    {#each data?.profiles?.en?.flags as Flag, i}
                        <FlagComponent
                             flag={Flag} />
                        <br>
                    {/each}
                </div>
            </div>
            <div class="child links">
                <h3>Links</h3>
                {#each data?.profiles?.en?.links as Link, i}
                    <a href="{Link}">
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <img id="icon1"
                            src="http://{(new URL(Link)).hostname}/favicon.png"
                            height="16px"
                            onerror="(document.getElementById('icon1')).remove();">
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <img id="icon2"
                            src="http://{(new URL(Link)).hostname}/favicon.ico"
                            height="16px"
                            onerror="(document.getElementById('icon2')).remove();">
                        {Link}
                    </a>
                    <br>
                {/each}
            </div>
            {#each data?.profiles?.en?.words as {Header, values}, i}
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
                {#if data?.profiles?.en?.card}
                    <a href="{data?.profiles?.en?.card}">Light Mode</a>
                {:else}
                    <p style="text-decoration:line-through">Light Mode</p>
                {/if}
                {#if data?.profiles?.en?.cardDark}
                    <a href="{data?.profiles?.en?.cardDark}">Dark Mode</a>
                {:else}
                    <p style="text-decoration:line-through">Dark Mode</p>
                {/if}
            </div>
        </div>
    {:else}
        <h1>Loading...</h1>
    {/if}
</main>

<style>

    div.avatar > .image {
        height: 100%;
        border-radius: 50%;
    }

    div.avatar {
        height: 6rem;
    }

    div.heading {
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
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 16px;
        grid-row-gap: 16px;
    }
    
    @media only screen and (max-width: 820px) {
        .container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(5, 1fr);
            grid-column-gap: 16px;
            grid-row-gap: 16px;
        }
    }

    @media only screen and (max-width: 580px) {
        .container {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(9, 1fr);
            grid-column-gap: 16px;
            grid-row-gap: 16px;
        }
    }

</style>