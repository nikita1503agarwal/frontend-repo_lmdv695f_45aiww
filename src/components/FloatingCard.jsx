import { motion } from "framer-motion";

export default function FloatingCard({ title, description, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative w-full sm:w-80 p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_40px_rgba(28,100,242,0.15)] overflow-hidden"
    >
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#3CF2F2]/20 via-transparent to-[#1F3A93]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 flex items-center gap-4">
        <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#1F3A93] to-[#3CF2F2] shadow-[0_0_25px_rgba(60,242,242,0.35)] grid place-items-center text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-white/70 text-sm mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
