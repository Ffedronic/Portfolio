import { MouseEventHandler } from "react";

export interface Title {
  title: string;
}

export interface ToggleHandler {
  toggleHandler: MouseEventHandler;
}

export const menu = [
  { level: "01.", title: "About", href: "#about" },
  { level: "02.", title: "Skills", href: "#skills" },
  { level: "03.", title: "Projects", href: "#projects" },
];
