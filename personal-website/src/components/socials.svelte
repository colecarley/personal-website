<script lang="ts">
    export let mobile: boolean = false;
</script>

{#if mobile}
    <div class="flex flex-row gap-4">
        <a href="https://github.com/colecarley">
            <img
                src="github-mark-white.png"
                alt="GitHub Logo"
                class="h-8 w-8"
            />
        </a>
        <a href="https://www.linkedin.com/in/cole-carley-339110184/">
            <img src="LI-In-Bug.png" alt="LinkedIn Logo" class="h-8 w-9" />
        </a>
    </div>
{:else}
    <div class="flex flex-col gap-4 fixed left-0 bottom-0 p-12">
        <a href="https://github.com/colecarley">
            <img
                src="github-mark-white.png"
                alt="GitHub Logo"
                class="h-8 w-8"
            />
        </a>
        <a href="https://www.linkedin.com/in/cole-carley-339110184/">
            <img src="LI-In-Bug.png" alt="LinkedIn Logo" class="h-8 w-9" />
        </a>
    </div>
{/if}
