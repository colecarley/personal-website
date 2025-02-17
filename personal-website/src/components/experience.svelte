<script lang="ts">
    import Page from "../routes/+page.svelte";
    import Cch2 from "./primitives/cch2.svelte";
    import { formatDate } from "$lib/format-date";
    import Cclist from "./primitives/cclist.svelte";
    import Ccpill from "./primitives/ccpill.svelte";
    import Ccheader from "./primitives/ccheader.svelte";
    import Cch3 from "./primitives/cch3.svelte";
    import Cch4 from "./primitives/cch4.svelte";
    import Ccp from "./primitives/ccp.svelte";
    import Cca from "./primitives/cca.svelte";

    type Experience = {
        title: string;
        company: string;
        location: string;
        startDate: string;
        endDate: string;
        description: string;
        bullets: string[];
        skills: string[];
    };

    const experience: Experience[] = [
        {
            title: "Full Stack Software Engineer",
            company: "Alcomy",
            location: "Orem, Utah",
            startDate: "2023-08-01",
            endDate: "2024-08-01",
            description:
                "As a full stack software engineer, I held the responsibility of designing and implementing new features for Alcomy's assisted living platform.",
            bullets: [
                "Led the development of a real-time in-app messaging system using WebSockets for the assisted living industry",
                "Engineered a report builder and PDF generator to allow users to create and save reports based on their preferences",
                "Refactored key features, reducing technical debt and improving maintainability, decreasing bug reports by 20%",
            ],
            skills: [
                "Angular",
                "FeathersJS",
                "PostgreSQL",
                "WebSockets",
                "TypeScript",
            ],
        },
        {
            title: "Full Stack Software Engineer Intern",
            company: "Alcomy",
            location: "Orem, Utah",
            startDate: "2023-05-01",
            endDate: "2023-08-01",
            description:
                "As an intern, I worked on a variety of projects, from frontend development to backend services. In this role, I learned how to work in a professional environment and collaborate with a team of developers.",
            bullets: [
                "Collaborated with a small team of developers on a mobile and web application using Angular17 and FeathersJS",
                "Integrated with Playwright, enabling integration testing for early error detection in our CI/CD system",
            ],
            skills: ["Git", "End-to-End Testing", "SCRUM"],
        },
        {
            title: "Full Stack Software Developer",
            company: "Connect Data Solutions",
            location: "Las Vegas, Nevada",
            startDate: "2022-06-01",
            endDate: "2023-06-01",
            description:
                "In this role, I was the sole developer responsible for designing and implementing a custom CMS for managing timeshare properties. In this project, I learned a lot about turning a client's vision into a reality.",
            bullets: [
                "Designed and implemented a custom CMS for managing timeshare properties, including a drag-and-drop interface for arranging property details",
                "Developed a RESTful API for the CMS, enabling the frontend to interact with the backend",
                "Integrated with Firebase for user authentication and data storage",
            ],
            skills: [
                "Svelte",
                "Express",
                "Firebase",
                "RESTful API",
                "UI/UX Design",
            ],
        },
    ];
</script>

<Ccheader>Experience</Ccheader>

<div class="flex flex-col gap-12">
    {#each experience as exp}
        <div>
            <div class="py-3">
                <div class="flex flex-row justify-between items-baseline">
                    <Cch3>{exp.title}</Cch3>
                    <Ccp
                        >{formatDate(exp.startDate)} - {formatDate(
                            exp.endDate,
                        )}</Ccp
                    >
                </div>
                <div class="flex flex-row justify-between">
                    <Cch4>{exp.company}</Cch4>
                    <Ccp>{exp.location}</Ccp>
                </div>
            </div>
            <Ccp class="py-3">{exp.description}</Ccp>
            <div class="py-3">
                <Cclist items={exp.bullets} />
            </div>
            <div class="flex gap-2 py-3 flex-wrap">
                {#each exp.skills as skill}
                    <Ccpill>{skill}</Ccpill>
                {/each}
            </div>
        </div>
    {/each}
</div>

<div class="flex flex-col justify-center items-center my-12">
    <Ccp
        >Want to know more? Check out my
        <Cca href="Resume 2025.pdf">resume!</Cca>
    </Ccp>
</div>
