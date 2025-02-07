<script lang="ts">
    export let items: string[];
</script>

<ul class="list-disc list-inside text-light">
    {#each items as item}
        <li>{item}</li>
    {/each}
</ul>
