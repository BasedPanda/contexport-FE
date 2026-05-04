import { motion } from "framer-motion";

export function GradientOrbs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <motion.div
        className="absolute left-[-10%] top-[-15%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.32)_0%,transparent_65%)] opacity-100 blur-3xl"
        animate={{ x: [0, 72, -8, 0], y: [0, 46, -18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-15%] top-[10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(124,124,224,0.26)_0%,transparent_65%)] opacity-90 blur-3xl"
        animate={{ x: [0, -78, 18, 0], y: [0, -34, 54, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}
