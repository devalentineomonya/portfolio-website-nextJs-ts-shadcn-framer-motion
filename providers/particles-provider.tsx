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
    if (isMobile) return 50;
    if (isTablet) return 100;
    if (isSmallDesktop) return 150;
    if (isMediumDesktop) return 200;
    return 300;
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
