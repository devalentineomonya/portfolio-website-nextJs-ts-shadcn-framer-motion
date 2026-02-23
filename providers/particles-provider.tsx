"use client";
import { Particles } from "@/components/ui/particles";
import { useScreenSize } from "@/hooks/use-screen-size";
import { useTheme } from "next-themes";
import { useMemo } from "react";

export const ParticlesProvider = () => {
  const { theme } = useTheme();
  const isMobile = useScreenSize(640);
  const isTablet = useScreenSize(768);
  const isSmallDesktop = useScreenSize(1024);
  const isMediumDesktop = useScreenSize(1440);

    const quantity = useMemo(() => {
      if (isMobile) return 20;
      if (isTablet) return 35;
      if (isSmallDesktop) return 45;
      if (isMediumDesktop) return 55;
      return 70;
    }, [isMobile, isTablet, isSmallDesktop, isMediumDesktop]);


  const color = useMemo(
    () => (theme === "dark" ? "#ffffff" : "#131317"),
    [theme],
  );

  return (
    <Particles
      className="fixed inset-0 pointer-events-none"
      quantity={quantity}
      ease={80}
      staticity={15}
      color={color}
      size={0.8}
    />
  );
};
