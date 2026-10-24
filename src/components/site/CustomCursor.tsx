import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePreferences } from "@/lib/preferences";

export function CustomCursor() {
  const { effectiveReduceMotion } = usePreferences();
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ringX = useSpring(x, { stiffness: 260, damping: 26 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26 });

  useEffect(() => {
    if (effectiveReduceMotion) return;
    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [effectiveReduceMotion, x, y]);

  if (effectiveReduceMotion) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-[120] hidden md:block">
      <motion.span
        className="absolute h-3 w-3 rounded-full bg-[#35b7ff] mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%", opacity: visible ? 1 : 0 }}
      />
      <motion.span
        className="absolute h-10 w-10 rounded-full border border-pink/80"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%", opacity: visible ? 1 : 0 }}
      />
    </div>
  );
}
