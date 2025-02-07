

import { writable } from "svelte/store";
export type Section = "welcome" | "about" | "experience" | "skills" | "projects" | "contact";

export function isSection(value: string): value is Section {
    return ["welcome", "about", "experience", "skills", "projects", "contact"].includes(value);
}


export const activeSection = writable<Section>("welcome");