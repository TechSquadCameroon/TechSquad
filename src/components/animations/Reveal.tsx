import { motion, type Variants } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { usePreferences } from "@/lib/preferences";

const variants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li";
}) {
  const { effectiveReduceMotion } = usePreferences();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={effectiveReduceMotion ? false : "hidden"}
      whileInView={effectiveReduceMotion ? undefined : "show"}
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={effectiveReduceMotion ? { duration: 0 } : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({
  children,
  className,
  delayChildren = 0,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  stagger?: number;
}) {
  const { effectiveReduceMotion } = usePreferences();
  return (
    <motion.div
      className={className}
      initial={effectiveReduceMotion ? false : "hidden"}
      whileInView={effectiveReduceMotion ? undefined : "show"}
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: effectiveReduceMotion ? 0 : stagger,
            delayChildren: effectiveReduceMotion ? 0 : delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrambleText({ text, className }: { text: string; className?: string }) {
  const { effectiveReduceMotion: shouldReduceMotion } = usePreferences();
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplay(text);
      return;
    }

    const chars = "TECHSQUAD01";
    let frame = 0;
    const timer = window.setInterval(() => {
      frame += 1;
      setDisplay(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < frame / 2) return char;
            return chars[(index + frame) % chars.length];
          })
          .join(""),
      );
      if (frame > text.length * 2) window.clearInterval(timer);
    }, 30);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion, text]);

  return <span className={className}>{display}</span>;
}