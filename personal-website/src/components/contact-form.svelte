<script>
    import Ccbutton from "./primitives/ccbutton.svelte";
    import Ccheader from "./primitives/ccheader.svelte";
    import Ccinput from "./primitives/ccinput.svelte";

    let from = "";
    let name = "";
    let text = "";
</script>

<Ccheader>Contact Me</Ccheader>

<form class="flex flex-col gap-6">
    <Ccinput type="text" name="name" placeholder="name" bind:value={name} />
    <Ccinput type="email" name="email" placeholder="email" bind:value={from} />
    <textarea
        bind:value={text}
        name="message"
        placeholder="message..."
        id="message"
        rows="5"
        class="p-2 rounded-xl border-dark-blue border-2 bg-light"
    ></textarea>

    <Ccbutton
        onclick={async () => {
            const response = await fetch(
                "https://t8fplrfqt7.execute-api.us-west-1.amazonaws.com/email",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        text,
                        subject: `Message from ${name} at ${from}`,
                    }),
                },
            );
        }}>Send!</Ccbutton
    >
</form>
