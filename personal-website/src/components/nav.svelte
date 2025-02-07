<script lang="ts">
    import { activeSection, type Section } from "$lib/active-element";
    import { handleScroll } from "$lib/handle-scroll";

    let section;
    $: section = $activeSection;

    const sections: Section[] = [
        "welcome",
        "about",
        "experience",
        "skills",
        "projects",
        "contact",
    ];
</script>

<nav class="sticky top-0 bg-dark flex flex-row justify-around p-4">
    {#each sections as s}
        <button
            onclick={() => handleScroll(s)}
            class={section === s
                ? "text-yellow px-4 py-2 rounded-full bg-dark-blue border-2 border-yellow"
                : "text-light hover:border-yellow hover:text-yellow hover:bg-dark-blue border-2 border-transparent px-4 py-2 rounded-full"}
            >{s.toUpperCase()}</button
        >
    {/each}
</nav>
