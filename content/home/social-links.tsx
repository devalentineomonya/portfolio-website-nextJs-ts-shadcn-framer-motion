"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {Link2} from "lucide-react"
import { socialLinks } from "@/lib/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TextShimmerWave } from "@/components/ui/text-shimmer-wave";


const SocialLinks = () => {
  const [showIcons, setShowIcons] = useState(false);

  const handleShowIcons = () => {
    setShowIcons(true);
    setTimeout(() => {
      setShowIcons(false);
    }, 10000);
  };



  return (
    <div className="border-t py-2 flex justify-between items-center mt-5">
      {showIcons ? (
      <div className="flex space-x-2 items-center justify-center w-full">
        {socialLinks.map((link) => (
        <Tooltip key={link.name}>
          <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
          >
            <Link href={link.href} target="_blank" rel="noopener noreferrer">
            {<link.icon/>}
            </Link>
          </Button>
          </TooltipTrigger>
          <TooltipContent>
          <p>{link.name}</p>
          </TooltipContent>
        </Tooltip>
        ))}
      </div>
      ) : (
      <>
        <Button variant="ghost" onClick={handleShowIcons}>
        <Link2 />
        <TextShimmerWave>

        My Social Links
        </TextShimmerWave>
        </Button>
        <Link target="_blank" href="/https://v4.valentinee.dev/changelogs">
        <Button variant="ghost">
          <span className="w-2 h-2 bg-green-600 rounded-full" />
          <span>v5.0</span>
        </Button>
        </Link>
      </>
      )}
    </div>
  );
};

export default SocialLinks;
