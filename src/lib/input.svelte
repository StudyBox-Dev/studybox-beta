<script>
    export let typeInput = "";

    export function validateInput(value) {
        if (value.length === 0) {
            return "This field is required.";
        } else {
            return "";
        }
    }
</script>

<div class="wrapper-input">
    <input type={typeInput} class="input-data" maxlength="20" />
</div>

<style>
    .input-data {
        width: 363px;
        height: 46px;

        background: #1f1f1f;
        border-radius: 8px;

        padding-left: 27px;

        color: #5a5a5a;
    }

    .wrapper-input {
        margin-top: 30px;
    }
</style>
