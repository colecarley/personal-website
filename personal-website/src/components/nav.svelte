<script lang="ts">
    import { activeSection, type Section } from "$lib/active-element";
    import { handleScroll } from "$lib/handle-scroll";

    let section;
    $: section = $activeSection;
</script>

<nav class="sticky top-0 bg-dark flex flex-row justify-around p-4">
    <button
        onclick={() => handleScroll("welcome")}
        class={section === "welcome"
            ? "text-dark px-4 py-2 rounded-full bg-yellow border-2 border-dark-blue"
            : "text-light px-4 py-2 rounded-full"}>Welcome</button
    >
    <button
        onclick={() => handleScroll("about")}
        class={section === "about"
            ? "text-dark px-4 py-2 rounded-full bg-yellow border-2 border-dark-blue"
            : "text-light px-4 py-2 rounded-full"}>About</button
    >
    <button
        onclick={() => handleScroll("experience")}
        class={section === "experience"
            ? "text-dark px-4 py-2 rounded-full bg-yellow border-2 border-dark-blue"
            : "text-light px-4 py-2 rounded-full"}>Experience</button
    >
    <button
        onclick={() => handleScroll("skills")}
        class={section === "skills"
            ? "text-dark px-4 py-2 rounded-full bg-yellow border-2 border-dark-blue"
            : "text-light px-4 py-2 rounded-full"}>Skills</button
    >
    <button
        onclick={() => handleScroll("projects")}
        class={section === "projects"
            ? "text-dark px-4 py-2 rounded-full bg-yellow border-2 border-dark-blue"
            : "text-light px-4 py-2 rounded-full"}>Projects</button
    >
    <button
        onclick={() => handleScroll("contact")}
        class={section === "contact"
            ? "text-dark px-4 py-2 rounded-full bg-yellow border-2 border-dark-blue"
            : "text-light px-4 py-2 rounded-full"}>Contact</button
    >
</nav>
