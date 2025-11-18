import { HyperText } from "@/components/ui/hyper-text";
import Image from "next/image";
import Link from "next/link";

export const HomeHero = () => {
  return (
    <section id="hero">
      <Link href="/" className="flex items-center gap-2">
        <Image src={"/logo.svg"} alt="Devalentine" width={40} height={40} />
        <h1>
          <HyperText className="font-4xl">Valentine</HyperText>
        </h1>
      </Link>
      <div className="mt-11 flex items-center gap-x-6">
        <figure className="size-24 rounded-md border-[3px] border-gradient-to-b overflow-hidden from-black via-[#444444] to-[#666666] shrink-0">
          <Image src="/me.png" alt="Devalentine" width={96} height={96} />
        </figure>
        <div>
          <h2 className="text-md md:text-2xl font-bold bg-linear-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent">
            Hi, I&apos;m Valentine Omonya
          </h2>
          <p className="font-normal text-black-400 dark:text-zinc-300 text-sm md:text-sm">
            A software engineer with expertise in frontend, backend, and DevOps,
            specializing in building interactive, robust, and scalable software
            systems.
          </p>
          <div className="font-normal text-black-400 dark:text-zinc-300 text-sm md:text-sm mt-3">
            Nairobi, Kenya
          </div>
        </div>
      </div>
    </section>
  );
};
