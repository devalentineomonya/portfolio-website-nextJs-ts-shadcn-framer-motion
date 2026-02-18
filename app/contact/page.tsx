import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Valentine Omonya",
  description: "Get in touch with Valentine Omonya.",
};

const contactLinks = [
  {
    name: "Email",
    href: "mailto:contact@valentinee.dev",
    label: "contact@valentinee.dev",
    icon: Mail,
  },
  {
    name: "GitHub",
    href: "https://github.com/devalentineomonya",
    label: "devalentineomonya",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/devalentineomonya",
    label: "devalentineomonya",
    icon: Linkedin,
  },
  {
    name: "Twitter / X",
    href: "https://x.com/devalentine_",
    label: "@devalentine_",
    icon: Twitter,
  },
];

export default function ContactPage() {
  return (
    <div className="grow flex flex-col items-start justify-start w-full mt-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-linear-to-br from-black from-30% to-black/60 dark:from-white dark:from-30% dark:to-white/60 bg-clip-text text-transparent mb-2">
          Contact
        </h1>
        <p className="text-muted-foreground">
          Have a question or want to work together? Feel free to reach out.
        </p>
      </div>

      <div className="w-full space-y-3">
        {contactLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="flex items-center gap-4 rounded-lg border border-zinc-200 bg-zinc-100/30 px-5 py-4 backdrop-blur-sm transition-all duration-200 hover:bg-zinc-100 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:bg-zinc-800/50"
            >
              <Icon className="size-5 text-muted-foreground" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  {link.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {link.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
