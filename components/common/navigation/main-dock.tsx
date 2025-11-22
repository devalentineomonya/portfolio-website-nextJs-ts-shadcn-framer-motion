"use client";

import React from "react";
import Link from "next/link";
import { HomeIcon, MailIcon, ArchiveIcon, BookOpenIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
import { ThemeToggleButton } from "@/components/shared/theme/theme-toggler";

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/contact", icon: MailIcon, label: "Contact" },
    { href: "/archieve", icon: ArchiveIcon, label: "Archive" },
    { href: "/blogs", icon: BookOpenIcon, label: "Blog" },
  ],
};




export function MainDocker() {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl overflow-hidden ">
      <div className="relative shadow-[inset_0_-3px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-6px_10px_#8fdfff3f]">
        {/* Background glow */}
        <div className="absolute inset-0 bg-linear-to-b from-zinc-100/20 to-zinc-200/10 dark:from-zinc-800/20 dark:to-zinc-900/10 backdrop-blur-sm rounded-2xl overflow-hidden -z-10" />
         <span
        className={cn(
          "animate-gradient absolute inset-0 block h-full w-full rounded-2xl bg-linear-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-size-[300%_100%] p-px overflow-hidden"
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />

        <TooltipProvider>
          <Dock
            direction="middle"
            className="relative border-zinc-200 bg-zinc-100/30 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/300 rounded-2xl shadow-lg px-4 py-3"
          >
            {/* Main nav links */}
            {DATA.navbar.map((item) => (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full bg-transparent hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-all duration-200",
                      )}
                    >
                      <item.icon className="size-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}

            {/* Divider */}
            <Separator
              orientation="vertical"
              className="h-8 bg-zinc-300/50 dark:bg-zinc-600/50"
            />

            {/* Dark Mode Toggle */}
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ThemeToggleButton
                    variant="gif"
                    url="https://media.giphy.com/media/KBbr4hHl9DSahKvInO/giphy.gif?cid=790b76112m5eeeydoe7et0cr3j3ekb1erunxozyshuhxx2vl&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle Theme</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </TooltipProvider>
      </div>
    </div>
  );
}
