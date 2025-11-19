"use client";
import { TextEffect } from "@/components/ui/text-effect";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Highlighter } from "@/components/ui/highlighter";
import { CloudDownload } from "lucide-react";

export const HomeHero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="hero" ref={sectionRef}>
      <div className="mt-11 flex items-center gap-x-6">
        <figure className="size-24 rounded-md border-[3px] border-gradient-to-b overflow-hidden from-black via-[#444444] to-[#666666] shrink-0">
          <Image src="/me.png" alt="Devalentine" width={96} height={96} />
        </figure>

        <div>
          <h2 className="text-md md:text-2xl font-bold bg-linear-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent mb-2">
            Hi, I&apos;m Valentine Omonya
          </h2>

          <p className="font-normal text-black-400 dark:text-zinc-300 text-sm md:text-sm leading-relaxed space-x-2">
            <TextEffect
              as="span"
              per="word"
              trigger={isInView}
              delay={0.2}
            >
              A
            </TextEffect>
            <Highlighter action="box" color="#FF9800">
              <span className="font-bold"> Software Engineer</span>
            </Highlighter>
            <TextEffect
              as="span"
              per="word"
              trigger={isInView}
              delay={0.2}
            >
              with expertise in frontend, backend, and DevOps, specializing in
              building interactive, robust, and scalable software systems.
            </TextEffect>
          </p>
          <div className="flex items-center justify-between">
            <TextEffect
              as="div"
              per="char"
              trigger={isInView}
              delay={0.5}
              className="font-normal text-black-400 dark:text-zinc-300 text-sm md:text-sm mt-3"
            >
              Nairobi, Kenya
            </TextEffect>
            <Link href={"https://v1.valentinee.dev/resume.pdf"} target="_blank">
              <Highlighter action="highlight" color="#87CEFA">
                <span className="font-bold flex items-center gap-x-2">
                  <CloudDownload /> My Resume
                </span>
              </Highlighter>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
