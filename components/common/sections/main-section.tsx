"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const textVariant = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const MainSection = ({ children }: { children: ReactNode }) => {
  return (
    <motion.section initial="hidden" animate="visible" variants={textVariant}>
      {children}{" "}
    </motion.section>
  );
};
