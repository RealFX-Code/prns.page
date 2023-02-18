<script>

    // route: " /inclusivity "
    // file : " inclusivity/+page.svelte "

    import { page } from '$app/stores';

    import { onMount } from "svelte";

	import BackToTop from "./../../components/BackToTop.svelte";

    
    let terms;
    onMount(async function() {
        const response = await fetch('https://en.pronouns.page/api/inclusive');
        terms = await response.json();
        
        if ($page.url.searchParams.has('show'))
        {
            let tempShow = `#id-${$page.url.searchParams.get('show')}`
            $page.url.searchParams.delete('show');

            setTimeout(()=>{
                window.location.href = tempShow;
            },460)

        }
    });

</script>

<BackToTop />

<main>
    {#if terms}
    <div class="title">
        <h1>Inclusive terms</h1>
        <p>
            Tons of terms used daily aren't as inclusive as you might think,
            Here's a good list on substitutes to use instead;
        </p>
    </div>
        {#each terms as term}
            <div class="term" id="id-{term.id}">
                <p class="insteadOf">
                    <span class="secondary">
                        Instead of:
                    </span>
                    {String(term.insteadOf).replaceAll('|', ", ")}
                </p>
                <p class="use">
                    <span class="secondary">
                        Use:
                    </span>
                    {String(term.say).replaceAll('|', ", ")}
                </p>
                <p class="because">
                    <span class="secondary">
                        Because:
                    </span>
                    {String(term.because)}
                </p>
            </div>
        {/each}
    {:else}
        <h1>Loading...</h1>
    {/if}
</main>

<style>
    span.secondary {
        color: rgba(255,255,255,0.50);
    }

    h1, p{
        text-align: center;
    }

    p {
        font-size: 1rem;
        margin: 0 auto;
        width: 60vw
    }

    .title > p {
        font-size: 1.25rem;
    }

    .term {
        width: 75vw;
        margin: 16px auto;
        border-radius: 16px;
        border: 1px solid #323232;
        padding: 16px;
    }

    .term > p {
        line-height: 1.25rem;
        margin: 8px auto;
        text-align: left;
    }

</style>
