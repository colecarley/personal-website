<script lang="ts">
    export let href: string;
</script>

<a
    {href}
    class="hover:underline text-yellow decoration-yellow font-sans"
    target="_blank"
>
    <slot></slot>
</a>
