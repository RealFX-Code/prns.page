<script>

    // route: " /help "
    // file : " help/+page.svelte "

</script>

<main>
    <h1>prns.page</h1>
    <div class="wiki">
        <div class="section head">
            <h2 id="profile">
                Profile View
            </h2>
            <div class="section usage">
                <h3>Specific user:</h3>
                <p>
                    To get the page of a specific user: <br>
                    Simply navigate to the url below,<br>
                    Where "username" is the username of the user.<br>
                </p>
                <code>
                    https://prns.realfx.rocks/@username
                </code>
            </div>
            <div class="section usage">
                <h3>Using Search Bar:</h3>
                <p>
                    To get a user's pronouns.page put into here,<br>
                    You put their username into the search bar in the navbar<br>
                    and then hit enter.<br>
                </p>
            </div>
        </div>
    </div>
</main>

<style>
    h1, h2, h3, p {
        text-align: center;
    }

    h1 {
        font-size: 6rem;
    }

    h2 {
        font-size: 4rem;
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

    .section .usage {
        width: fit-content;
    }

    p {
        font-size: 1.5rem;
    }

    code {
        font-size: 1rem;
        padding: 1rem;
        border-radius: 4px;
        border: 1px solid #424242;
        background-color: #323232;
    }
</style>