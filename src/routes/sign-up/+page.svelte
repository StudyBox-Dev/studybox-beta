<script>
    import Button from "../../lib/button.svelte";
    import Input from "../../lib/input.svelte";

    export let initialLetterDesign = "R";
    export let lastWordDesign = "EGISTER";
    export let initialLetterLogo = "IN";
    export let middleLetterLogo = "B";
    export let lastWordLogo = "OX";

</script>

<div
    class="wrapper-main-content flex flex-align-cente flex-justify-center flex-align-center wrapper-block-information"
>
    <div class="flex flex-justify-center flex-align-center ">
        <div class="design-element routate-vertical">
            <h1>
                <span class="color-accent">{initialLetterDesign}</span
                >{lastWordDesign}
            </h1>
        </div>
        <div class="input-data flex flex-align-start flex-column">
            <div class="logo">
                <h2>
                    {initialLetterLogo}
                    <span class="color-accent-extend">{middleLetterLogo}</span
                    >{lastWordLogo}
                </h2>
            </div>

            <div class="wrapper-input">
                <Input typeInput={"text"} />
                <Input typeInput={"password"} />
            </div>
            <Button
                actionURL={"//"}
                rotate="routate-horizontal"
                color="accent"
                cssStyleHorizzontal="registration-black-theme-btn"
            />
        </div>
    </div>
    <div class="wrapper-box-logo">
        <img
            src="/box-light.svg"
            alt="logo (box glowing from the inside)"
            srcset=""
        />
    </div>
</div>

<style>
    .wrapper-main-content {
        width: 100vw;
        height: 100vh;
    }

    .routate-vertical {
        transform: rotate(-90deg);
    }

    .wrapper-block-information {
        column-gap: 260px;
    }

    .wrapper-input {
        margin-bottom: 60px;
        margin-top: 28px;
    }
</style>
