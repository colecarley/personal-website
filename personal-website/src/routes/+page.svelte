<script lang="ts">
    import { handleScroll } from "$lib";
    import {
        activeSection,
        isSection,
        type Section,
    } from "$lib/active-element";
    import { onMount } from "svelte";
    import AboutMe from "../components/about-me.svelte";
    import ContactForm from "../components/contact-form.svelte";
    import Experience from "../components/experience.svelte";
    import Center from "../components/helpers/center.svelte";
    import Squeeze from "../components/helpers/squeeze.svelte";
    import Nav from "../components/nav.svelte";
    import Ccbutton from "../components/primitives/ccbutton.svelte";
    import Cch1 from "../components/primitives/cch1.svelte";
    import Cch2 from "../components/primitives/cch2.svelte";
    import Cch3 from "../components/primitives/cch3.svelte";
    import Ccp from "../components/primitives/ccp.svelte";
    import Projects from "../components/projects.svelte";
    import Skills from "../components/skills.svelte";
    import Socials from "../components/socials.svelte";

    onMount(() => {
        activeSection.set("welcome");

        scrollTo(0, 0);
    });

    function intersect(node: HTMLElement) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && isSection(node.id)) {
                    activeSection.set(node.id);
                }
            },
            {
                root: null,
                rootMargin: "0px 0px -50% 0px",
            },
        );

        observer.observe(node);

        return {
            destroy() {
                observer.disconnect();
            },
        };
    }

    let innerWidth = 0;
    const MOBILE_WIDTH = 768;
</script>

<svelte:window bind:innerWidth />

<div class="h-full bg-dark w-full">
    {#if innerWidth > MOBILE_WIDTH}
        <Nav></Nav>
        <Socials />
    {/if}
    <Center>
        <Squeeze>
            <div class="w-full md:p-6 lg:p-24">
                <div class="flex flex-col gap-96">
                    <div id="welcome" use:intersect class="py-24">
                        <div class=" text-wrap flex gap-12">
                            <div>
                                <Cch3>Welcome! You can call me...</Cch3>
                                <Cch1>COLE CARLEY!</Cch1>
                                {#if innerWidth <= MOBILE_WIDTH}
                                    <Center>
                                        <div class="my-6">
                                            <img
                                                src="me.jpeg"
                                                alt="Cole Carley"
                                                class="rounded-3xl object-scale-down h-64"
                                            />
                                        </div>
                                    </Center>
                                {/if}
                                <div class="my-2">
                                    <Cch2
                                        >Turning ideas into code and code into
                                        performance</Cch2
                                    >
                                </div>
                                <Ccp>
                                    As a computer scientist, I create
                                    programming languages, optimize compilers,
                                    and develop robust software solutions. My
                                    work bridges low-level performance with
                                    high-level usability. My goal is to change
                                    the future of web-based computing!
                                </Ccp>

                                <div class="py-6">
                                    <Ccbutton
                                        onclick={() => handleScroll("contact")}
                                        >Contact Me!</Ccbutton
                                    >
                                </div>
                            </div>
                            {#if innerWidth > MOBILE_WIDTH}
                                <img
                                    src="me.jpeg"
                                    alt="Cole Carley"
                                    class="rounded-3xl object-scale-down h-64"
                                />
                            {/if}
                        </div>
                    </div>

                    <div id="about" use:intersect class="py-24">
                        <AboutMe />
                    </div>
                    <div id="experience" use:intersect class="py-24">
                        <Experience />
                    </div>

                    <div id="skills" use:intersect class="py-24">
                        <Skills />
                    </div>
                    <div id="projects" use:intersect class="py-24">
                        <Projects />
                    </div>
                    <div id="contact" use:intersect class="py-24">
                        <ContactForm />
                    </div>
                    <div class="flex justify-center py-24 items-center gap-12">
                        <Socials mobile={innerWidth < MOBILE_WIDTH} />
                        <Ccbutton onclick={() => handleScroll("welcome")}
                            >Back to top!</Ccbutton
                        >
                    </div>
                </div>

                <div class="text-center *:text-yellow">
                    <Ccp>Made with &lt;3 by Cole Carley</Ccp>
                </div>
            </div>
        </Squeeze>
    </Center>
</div>
