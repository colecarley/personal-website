<script lang="ts">
    export let type: string = "text";
    export let name: string = "";
    export let placeholder: string = "";

    export let value: string = "";
</script>

<input
    {type}
    {name}
    {placeholder}
    id={name}
    bind:value
    class="bg-light rounded-xl p-2 border-2 border-dark-blue"
/>
