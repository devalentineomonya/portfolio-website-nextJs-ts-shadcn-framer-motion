"use client";

import { cn } from "@/lib/utils";
import { useState, type ReactNode } from "react";

interface CodeTabsProps {
  tabs: string[];
  children: ReactNode[];
}

export function CodeTabs({ tabs, children }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
      <div className="flex border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(index)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors",
              index === activeTab
                ? "border-b-2 border-primary bg-white text-foreground dark:bg-zinc-950"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="[&>pre]:mt-0 [&>pre]:rounded-none [&>pre]:border-0">
        {Array.isArray(children) ? children[activeTab] : children}
      </div>
    </div>
  );
}
