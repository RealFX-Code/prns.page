<script>
    export let flag;
</script>

<p>
    <img
        src="https://en.pronouns.page/flags/{flag}.png"
        alt="{flag}"
        height="100%"/>
    {flag}
</p>

<style>
    img {
        padding-right: 8px;
    }
    p {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        display: flex;
        height: 2vh;
        width: fit-content;
        font-size: 1.7vh;
        border-radius: 8px;
        border: solid 1px #5c5c5c;
        padding: 7px;
        color: white;
        background-color: #161616;
        margin: 0.25vh;
        transition: all ease .25s;
    }
    p:hover {
        height: calc(2vh*1.2);
        font-size: calc(1.7vh*1.2);
    }
</style>