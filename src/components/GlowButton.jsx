import { motion } from "framer-motion";

export default function GlowButton({ children, variant = "primary", onClick }) {
  const base =
    "relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold tracking-wide transition-transform duration-300 focus:outline-none focus:ring-0";
  const variants = {
    primary:
      "text-[#0A1A2F] bg-[#52FF8F] shadow-[0_0_30px_rgba(82,255,143,0.45)] hover:shadow-[0_0_45px_rgba(82,255,143,0.65)]",
    outline:
      "text-white bg-transparent border border-white/30 hover:border-white/60 backdrop-blur-md",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#52FF8F]/30 to-transparent blur-xl" />
      )}
    </motion.button>
  );
}
