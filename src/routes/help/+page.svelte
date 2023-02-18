<script>

    // route: " /help "
    // file : " help/+page.svelte "

</script>

<main>
    <h1>prns.page</h1>
    <div class="wiki">
        <div class="section usage">
            <h3>profile view of a specific user:</h3>
            <p>
                To get the page of a specific user
                navigate to the url below, but replace
                "username" with the users username.
            </p>
            <code>
                {window.location.protocol}//{window.location.host}/@username
            </code>
        </div>
        <div class="section usage">
            <h3>Get a user's profile view from the username input:</h3>
            <p>
                Simply write the user's username in the username field in the navbar, then hit enter.

                NOTE: Don't prepend an @ to the username!
            </p>
        </div>
    </div>
</main>

<style>
    h1, h3, p {
        text-align: center;
    }

    h1 {
        font-size: 6rem;
    }

    h3 {
        font-size: 2rem;
    }

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 16px;
        border: 1px solid #323232;
        width: 65vw;
        margin: 2rem auto;
        padding: 2rem;
    }

    p {
        font-size: 1.25rem;
    }

    code {
        font-size: 1rem;
        padding: 1rem;
        border-radius: 4px;
        border: 1px solid #424242;
        background-color: #323232;
    }
</style>