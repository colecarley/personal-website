<script lang="ts">
    import Cch2 from "./primitives/cch2.svelte";
    import Cch3 from "./primitives/cch3.svelte";
    import Cch4 from "./primitives/cch4.svelte";
    import Ccheader from "./primitives/ccheader.svelte";
    import Ccpill from "./primitives/ccpill.svelte";

    const skills: Record<string, Record<string, string[]>> = {
        Compilers: {
            Languages: [
                "Rust",
                "C",
                "C++",
                "Go",
                "WebAssembly",
                "ARM Assembly",
            ],
            Tools: ["LLVM", "Clang", "Flex", "Bison", "Binaryen", "WABT"],
            "Language Design": [
                "Type Systems",
                "Optimizations",
                "Parsing",
                "Code Generation",
            ],
        },
        "Web Development": {
            Languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Python"],
            Frameworks: [
                "Svelte",
                "Angular",
                "React",
                "Express",
                "FeathersJS",
                "Flask",
                "Django",
            ],
            Databases: ["PostgreSQL", "SQLite", "Firestore"],
            Tools: [
                "Git",
                "Docker",
                "Github Actions",
                "CI/CD",
                "GoogleTest",
                "AWS",
                "GCP",
            ],
        },
    };
</script>

<Ccheader>Skills</Ccheader>

<div class="flex flex-col gap-12">
    {#each Object.keys(skills) as category}
        <div class="flex flex-col gap-2">
            <Cch3>{category}</Cch3>
            {#each Object.keys(skills[category]) as subcategory}
                <Cch4>{subcategory}</Cch4>
                <div class="flex flex-row gap-2">
                    {#each skills[category][subcategory] as skill}
                        <Ccpill>{skill}</Ccpill>
                    {/each}
                </div>
            {/each}
        </div>
    {/each}
</div>
