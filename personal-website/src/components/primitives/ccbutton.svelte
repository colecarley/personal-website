<script lang="ts">
    export let onclick: () => void;
</script>

<button
    class="bg-yellow hover:bg-dark-blue hover:text-yellow text-dark border-2 border-yellow font-bold py-2 px-4 rounded-full w-fit"
    {onclick}
>
    <slot></slot>
</button>
