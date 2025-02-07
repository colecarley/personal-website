<script>
    import Ccbutton from "./primitives/ccbutton.svelte";
    import Ccheader from "./primitives/ccheader.svelte";
    import Ccinput from "./primitives/ccinput.svelte";

    function mailto() {
        console.log("sending email...");
    }
</script>

<Ccheader>Contact Me</Ccheader>

<form class="flex flex-col gap-6">
    <Ccinput type="text" name="name" placeholder="name" />
    <Ccinput type="email" name="email" placeholder="email" />
    <textarea
        name="message"
        placeholder="message..."
        id="message"
        rows="5"
        class="p-2 rounded-xl border-dark-blue border-2 bg-light"
    ></textarea>

    <Ccbutton onclick={mailto}>Send</Ccbutton>
</form>
