import {
    Instagram,
    Youtube,
    Github,
    Linkedin,
    Twitter,
    Code2,
    BookOpen,
    Mail,
} from "lucide-react";

export const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/devalentineomonya" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/devalentineomonya" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/devalentine_" },
    {
        name: "Stack Overflow",
        icon: Code2,
        href: "https://stackoverflow.com/users/22697841/valentine-omonya",
    },
    { name: "Medium", icon: BookOpen, href: "https://medium.com/@devalentineomonya" },
    { name: "Leetcode", icon: Code2, href: "https://leetcode.com/devalentineomonya" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/devalentineomonya" },
    { name: "Youtube", icon: Youtube, href: "https://youtube.com/@devMinutes" },
    { name: "Mail", icon: Mail, href: "mailto:valomosh254@gmail.com" },
] as const;
