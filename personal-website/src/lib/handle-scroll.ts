import { type Section } from "./active-element";

export function handleScroll(to: Section) {
    const welcome = document.getElementById(to);
    if (!welcome) return;
    welcome.scrollIntoView({ behavior: "smooth", block: "start" });
}