<script>

    // route: " <layout> "
    // file : " +layout.svelte "

    import { writable } from 'svelte/store';

    const user = writable({
        username: "",
    });

    function handleFormSubmit() {
        if ($user.username === "") {
            alert('Username can\'t be empty!')
        } else {
            if ($user.username.startsWith("@")) {
                
                window.location.href = `/${$user.username}`
            }
            window.location.href = `/@${$user.username}`
        }
    }

    const links = [
        {
            "label":"Home",
            "link":"/"
        },
        {
            "label":"Inclusivity",
            "link":"/inclusivity"
        },
        {
            "label":"Help",
            "link":"/help"
        }
    ];

</script>

<svelte:head>
    <link rel="stylesheet" href="/global.css">
</svelte:head>

<div class="layout">
    <nav>
        {#each links as link}
            <a href="{link.link}">{link.label}</a>
        {/each}
        <form id="username-form" on:submit={handleFormSubmit}>
            <input placeholder="username" bind:value={$user.username} />
        </form>
    </nav>
    <div class="content">
        <slot />
    </div>
    <footer>
        <div class="contrib">
            <p><span class="color">Contributor? &rightarrow;</span>
                Check out this project's
                <a class="color"
                    href="https://github.com/RealFX-Code/prns.page">
                    Github
                </a>
                !</p>
        </div>
        <div class="copy">
            <p>&copy; {(new Date()).getFullYear()}, sometime</p>
        </div>
    </footer>

</div>

<style>
    .color {
		--accent: 124, 58, 237;
		--accent-gradient: linear-gradient(45deg, rgb(var(--accent)), #da62c4 30%, white 60%);
		background-image: var(--accent-gradient);
        background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 400%;
		background-position: 0%;
    }

    a {
        text-decoration: none;
        letter-spacing: 0.016em;
        transition: all .25s ease
    }

    a:hover {
        letter-spacing: 0.025em;
        text-decoration: underline;
    }

    p {
        color: rgba(255, 255, 255, 50%);
        text-align: center;
    }

    nav {
        align-items: center;
        width: 100vw;
        height: 5vh;
        display: flex;
        flex-direction: row;
    }

    nav > #username-form {
        margin-left: auto; 
        margin-right: 2rem;
    }

    nav > a {
        color: white;
        margin: 16px;
        text-decoration: none;
        transition: all .25 ease;
    }

    nav > a:hover {
        text-decoration: underline;
    }
    footer {
        margin: 4rem auto;
    }
</style>