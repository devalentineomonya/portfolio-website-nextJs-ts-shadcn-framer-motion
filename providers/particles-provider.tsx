"use client";
import { Particles } from "@/components/ui/particles";
import { useTheme } from "next-themes";
import { useMemo } from "react";

export const ParticlesProvider = () => {
  const { theme } = useTheme();
  const color = useMemo(
    () => (theme === "dark" ? "#ffffff" : "#131317"),
    [theme],
  );
  return (
    <Particles
      className="fixed inset-0 pointer-events-none"
      quantity={300}
      ease={80}
      staticity={15}
      color={color}
      size={0.8}
    />
  );
};
