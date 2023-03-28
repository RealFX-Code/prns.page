<script>

    export let dialogOpen = false;
    
    let dialogTitle = "";
    let dialogText = "";
    let dialogOptions = [];
    
    /**
     * 
     * @param title
     * @param text
     * @param options
     */
    export function showContentWarningDialog(title = "Content Warning",
            text = "The following profile contains potentially disturbing content.",
            options = [
                {
                    "label":"Continue",
                    "function":function(){
                        dialogOpen=false;
                    }
                },
                {
                    "label":"Go back",
                    "function":function(){
                        window.location.href = window.location.protocol+"//"+window.location.host;
                    }
                }
            ]) {
        if ( !dialogOpen ) {
            dialogOpen = true;
        }
        dialogTitle   = title;
        dialogText    = text;
        dialogOptions = options
    }

</script>

{#if dialogOpen}
    <div class="dialogContainer">
        <div class="dialog">
            <h1>{dialogTitle}</h1>
            <p>{dialogText}</p>
            <div class="buttons">
                {#each dialogOptions as dialogOptionObj }
                    <button on:click={dialogOptionObj.function}>
                        {dialogOptionObj.label}
                    </button>
                {/each}
            </div>
        </div>
    </div>
{/if}

<style>

    .dialogContainer {
        position: fixed;
        top: 0;
        left: 0;
        margin: 0px;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.75);
        overflow: hidden;
        z-index: 100;
        backdrop-filter: blur(10px);
    }

    .dialog {
        position: absolute;
        width: fit-content;
        height: fit-content;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
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
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    .buttons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px; 
    }

    .dialog > h1,
    .dialog > p,
    .dialog > .buttons > button {
        margin-top:    16px;
        margin-bottom: 16px;
    }

    /* button {
        border: 2px solid white;
        align-items: center;
        background-color: transparent;
        color: #fff;
        cursor: pointer;
        font-weight: 700;
        line-height: 1.5;
        text-decoration: none;
        text-transform: uppercase;
        outline: 0;
        padding: 0px 20px 0px 20px;
        margin: 0 auto;
        width: fit-content;
        transition: all .42s cubic-bezier(.25,.8,.25,1);
    }

    button:hover {
        transform: scale(1.1);
        text-decoration: underline;
    } */

    button {
        background-color: #1b1b1b;
        border-radius: 16px;
        border: solid 2px #525252;
        padding: 24px;
        background: rgba(66, 66, 66, 0.29);
        border-radius: 16px;
        align-items: center;
        color: #fff;
        cursor: pointer;
        line-height: 1.5;
        text-decoration: none;
        outline: 0;
        padding: 0px 20px 0px 20px;
        margin: 0 auto;
        width: fit-content;
        transition: all .42s cubic-bezier(.25,.8,.25,1);
    }
    button:hover {
        transform: scale(1.1);
        text-decoration: underline;
    }

</style>