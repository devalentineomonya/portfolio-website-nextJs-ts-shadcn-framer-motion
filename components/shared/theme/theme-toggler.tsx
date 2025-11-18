import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import {
  AnimationStart,
  AnimationVariant,
  createAnimation,
} from "@/components/shared/theme/theme-animation";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

interface ThemeToggleAnimationProps {
  variant?: AnimationVariant;
  start?: AnimationStart;
  showLabel?: boolean;
  url?: string;
}

export function ThemeToggleButton({
  variant = "circle-blur",
  start = "top-left",
  showLabel = false,
  url = "",
}: ThemeToggleAnimationProps) {
  const { theme, setTheme } = useTheme();

  const animation = React.useMemo(
    () => createAnimation(variant, start, url),
    [variant, start, url],
  );

  const styleElementRef = React.useRef<HTMLStyleElement | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    if (!styleElementRef.current) {
      const styleId = "theme-transition-styles";
      let styleElement = document.getElementById(styleId) as HTMLStyleElement;

      if (!styleElement) {
        styleElement = document.createElement("style");
        styleElement.id = styleId;
        document.head.appendChild(styleElement);
      }

      styleElementRef.current = styleElement;
    }
  }, []);

  const updateStyles = React.useCallback((css: string) => {
    if (styleElementRef.current) {
      styleElementRef.current.textContent = css;
    }
  }, []);

  const toggleTheme = React.useCallback(() => {
    updateStyles(animation.css);

    const switchTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };

    if (document.startViewTransition) {
      document.startViewTransition(switchTheme);
    } else {
      switchTheme();
    }
  }, [theme, setTheme, animation.css, updateStyles]);

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="w-9 p-0 h-9 relative group"
      name="Theme Toggle Button"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            suppressHydrationWarning
          >
            <svg
              suppressHydrationWarning
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sun-icon lucide-sun"
            >
              <circle suppressHydrationWarning cx="12" cy="12" r="4" />
              <path suppressHydrationWarning d="M12 2v2" />
              <path suppressHydrationWarning d="M12 20v2" />
              <path suppressHydrationWarning d="m4.93 4.93 1.41 1.41" />
              <path suppressHydrationWarning d="m17.66 17.66 1.41 1.41" />
              <path suppressHydrationWarning d="M2 12h2" />
              <path suppressHydrationWarning d="M20 12h2" />
              <path suppressHydrationWarning d="m6.34 17.66-1.41 1.41" />
              <path suppressHydrationWarning d="m19.07 4.93-1.41 1.41" />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: -90, scale: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            suppressHydrationWarning
          >
            <svg
              suppressHydrationWarning
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-moon-icon lucide-moon"
            >
              <path
                suppressHydrationWarning
                d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      <span className="sr-only">Theme Toggle</span>

      {showLabel && (
        <>
          <motion.span
            className="hidden group-hover:block border rounded-full px-2 absolute -top-10 text-xs bg-background"
            initial={{ opacity: 0, y: 5 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
          >
            variant = {variant}
          </motion.span>
          <motion.span
            className="hidden group-hover:block border rounded-full px-2 absolute -bottom-10 text-xs bg-background"
            initial={{ opacity: 0, y: -5 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
          >
            start = {start}
          </motion.span>
        </>
      )}
    </Button>
  );
}
