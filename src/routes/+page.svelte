<script>
import Button from "../lib/button.svelte";
</script>

<div class="section section-heading flex flex-align-center flex-justify-center flex-row">
    <div class="heading-text flex flex-column">
        <h1>
            <span class="color-accent">STUDY</span><span class="color-accent-extend">BOX</span>
        </h1>
        <h4 class="tagline color-main">Let's study something cool together <span class="dot dot-min color-main">.</span><span class="dot dot-mid color-accent">.</span><span class="dot dot-max color-accent-extend">.</span></h4>
    </div>
    <img src="/box-light.svg" alt="logo (box glowing from the inside)" srcset="">
</div>
<div class="section section-description flex flex-align-center flex-justify-center flex-row">
    <div class="description-text flex flex-column">
        <div class="text-block flex flex-justify-start flex-row">
            <h2 class="description-title flex flex-justify-end">
                <span class="color-accent-extend">B</span>OX
            </h2>
            <h5 class="block-description color-main">
                A space in which materials<span class="color-accent">,</span> manuals and personal notes on a
                specific topic are collected<span class="color-accent">.</span>
            </h5>
        </div>
        <div class="text-block flex flex-justify-start flex-row">
            <h2 class="description-title flex flex-justify-end">
                <span class="color-accent-extend">W</span>HY
            </h2>
            <h5 class="block-description color-main">
                So that we share knowledge with each other and develop in
                interesting areas without borders<span class="color-accent">.</span>
            </h5>
        </div>
    </div>
    <img src="/box-light.svg" alt="logo (box glowing from the inside)" srcset="">
</div>
<div class="section section-buttons flex flex-align-center flex-justify-center flex-column">
    <h3>
        <span class="color-accent">T</span>AKE YOUR <span class="color-accent-extend">K</span>NOWLEDGE <span class="color-accent">N</span>OW
    </h3>
    <div class="block-buttons flex flex-align-center flex-justify-center flex-row">
        <Button actionURL={'/sign-in/'} color="accent" align="top" title="<h4>SIGN <span class='color-accent'>I</span>N</h4>"/>
            <Button actionURL={'/sign-up/'} color="accent-extend" align="bottom" title="<h4>SIGN <span class='color-accent-extend'>U</span>N</h4>"/>
                </div>
                </div>

<style>
div.section {
    height: 100vh;
    padding: 0 10vw;
    gap: 8vw;
}

div.section-buttons {
    gap: 4vw;
}

div.heading-text {
    gap: 30px;
}

.tagline {
    width: 350px;
}

div.description-text {
    width: 1000px;
    gap: 10vh;
}

.description-title {
    width: 100px;
    height: 100px;
    transform: rotate(-90deg);
}

div.block-buttons {
    gap: 10vw;
}
</style>
