<script>
export let title = '';
export let align = '';
export let buttonTitle = '';
export let actionURL = '/';
export let color = '';

const handlerClick = () => {
    window.location.href = actionURL;
};

const props = {
    position: {
        block: {
            align: '',
            justify: '',
        },
        title: {
            align: '',
            justify: '',
        },
    }
};

switch (align) {
    case 'top':
        props.position.block.align = 'flex-align-start';
        props.position.block.justify = 'flex-justify-end';
        props.position.title.align = 'flex-align-end';
        props.position.title.justify = 'flex-justify-end';
        break;
    case 'bottom':
        props.position.block.align = 'flex-align-end';
        props.position.block.justify = 'flex-justify-start';
        props.position.title.align = 'flex-align-end';
        props.position.title.justify = 'flex-justify-start';
        break;
}
</script>

<div class="block-button flex {props.position.block.align} {props.position.block.justify} flex-row">
    <div class="container-title flex {props.position.title.align} {props.position.title.justify}">
        <h3 class="color-main title">
            {@html title}
        </h3>
    </div>
    <button class="border-{color}" on:click={handlerClick}>
        {buttonTitle}
    </button>
</div>

<style>
.container-title {
    width: 40px;
    height: 40px;
    transform: rotate(-90deg);
}

.title {
    white-space: nowrap;
}

button {
    width: 150px;
    height: 280px;

    cursor: pointer;

    border-width: 5px;
    border-style: solid;
    border-radius: 10px;
    background: #1f1f1f;
}

@media screen and (min-width: 100px) and (max-width: 1140px) {
    button {
        width: 100px;
        height: 200px;

        border-width: 3px;
    }
}
</style>
