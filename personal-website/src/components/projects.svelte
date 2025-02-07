<script lang="ts">
    import { formatDate } from "$lib/format-date";
    import Cca from "./primitives/cca.svelte";
    import Cch3 from "./primitives/cch3.svelte";
    import Ccheader from "./primitives/ccheader.svelte";
    import Cclist from "./primitives/cclist.svelte";
    import Ccp from "./primitives/ccp.svelte";
    import Ccpill from "./primitives/ccpill.svelte";

    type Project = {
        title: string;
        startDate: string;
        endDate: string;
        link: string;
        description: string;
        bullets: string[];
        skills: string[];
    };

    const projects: Project[] = [
        {
            title: "The Bird Programming Langauge",
            startDate: "2024-08-01",
            endDate: "Present",
            link: "https://bird-lang.org",
            description:
                "A statically-type programming language that compiles to WbeAssembly. The Bird progarmming language is designed for web development and aims to provide a fast and safe alternative to JavaScript.",
            bullets: [
                "Lead a team of 4 in the implementation of the Bird programming language",
                "Focusing on JavaScript interoperability, this language aims to change web-based computing.",
                "Refactored our testing framework, doubling our test coverage and decreasing our build time by 10x",
                "Developed the memory layout of the heap and implemented garbage collection to ensure safe dynamic memory allocation",
            ],
            skills: [
                "Compilers",
                "C++",
                "WebAssembly",
                "Docker",
                "LLVM",
                "Binaryen",
                "GoogleTest",
                "CI/CD",
            ],
        },
        {
            title: "Robotics Programming Language",
            startDate: "2024-08-01",
            endDate: "2024-12-01",
            link: "https://github.com/colecarley/ROSlang",
            description:
                "A domain-specific language for specifying robot behaviors. This interpreted langauge uses python-like syntax and allows the developer to parameterize tree nodes in a similar way to web components.",
            bullets: [
                "Designed and implemented an interpreted programming language to specify dynamic hierarchical task trees, enabling developers to describe and parameterize tasks efficiently",
                "Collaborated with the University’s Robotics lab to design a familiar language that provides a flexible and high-level abstraction",
            ],
            skills: [
                "Interpreters",
                "C++",
                "Language Design",
                "Python",
                "Flex",
                "Bison",
            ],
        },
        {
            title: "Toy Firewall",
            startDate: "2024-01-01",
            endDate: "2024-03-01",
            link: "https://github.com/colecarley/firewall_c",
            description:
                "This is a small project that I did to learn more about network security. It is a simple firewall that can block ICMP packets. It is implemented as a dynamically loadable kernel module.",
            bullets: [
                "Implemented a simple firewall that can block ICMP packets",
                "Designed the firewall as a dynamically loadable kernel module",
            ],
            skills: ["C", "Linux Kernel", "Network Security", "Netfilter"],
        },
        {
            title: "Huffman Codec",
            startDate: "2023-09-01",
            endDate: "2023-10-01",
            link: "https://github.com/colecarley/huffman-compressor",
            description:
                "A simple huffman codec that compresses and decompresses files. This project was a fun way to learn more about data compression and encoding.",
            bullets: [
                "Implemented a huffman tree to compress and decompress files",
                "Designed a simple file format to store the serialized huffman tree and compressed data",
                "Optimized the codec to reduce the size of the compressed files by 40%",
            ],
            skills: ["Go", "Data Compression", "File I/O", "Algorithms"],
        },
    ];
</script>

<Ccheader>Projects</Ccheader>

<div class="flex flex-col gap-12">
    {#each projects as project}
        <div>
            <div class="flex flex-row justify-between items-baseline pb-2">
                <Cch3><Cca href={project.link}>{project.title}</Cca></Cch3>
                <Ccp>
                    {formatDate(project.startDate)} - {formatDate(
                        project.endDate,
                    )}
                </Ccp>
            </div>
            <Ccp class="py-3">{project.description}</Ccp>
            <div class="py-3">
                <Cclist items={project.bullets} />
            </div>
            <div class="flex gap-2 flex-wrap py-3">
                {#each project.skills as skill}
                    <Ccpill>{skill}</Ccpill>
                {/each}
            </div>
        </div>
    {/each}
</div>
