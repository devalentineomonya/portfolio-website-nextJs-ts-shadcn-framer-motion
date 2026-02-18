"use client";
import { Particles } from "@/components/ui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ParticlesProvider = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState<string>();
  useEffect(() => {
    setColor(() => (theme === "dark" ? "#ffffff" : "#131317"));
  }, [theme]);
  return (
    <Particles
      className="fixed inset-0 pointer-events-none"
      quantity={400}
      ease={80}
      staticity={15}
      color={color}
      size={0.8}
    />
  );
};
