import { motion } from "framer-motion";

export function GridBackground() {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-0 -z-20 [mask-image:linear-gradient(to_bottom,black_0%,black_54%,transparent_76%)]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(250,250,249,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(250,250,249,0.08) 1px, transparent 1px)",
        backgroundSize: "64px 64px"
      }}
      animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    />
  );
}
