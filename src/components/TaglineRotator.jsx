import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TAGLINES = [
  "Delivering Smart. Tracking Smarter.",
  "Where Logistics Meets Innovation.",
  "Manage Every Mile, Real-Time.",
];

export default function TaglineRotator() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TAGLINES.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-8 overflow-hidden mt-4">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.9, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-white/80 text-sm tracking-wide"
        >
          {TAGLINES[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
