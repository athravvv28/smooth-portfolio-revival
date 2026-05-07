import { motion } from "framer-motion";

const BackgroundFX = () => {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklab,var(--primary)_18%,transparent),_transparent_60%)]" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 bg-grid opacity-[0.35]"
        style={{ animation: "grid-pan 28s linear infinite", maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)" }}
      />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 60%, transparent), transparent 70%)", filter: "blur(80px)" }}
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--primary-glow) 50%, transparent), transparent 70%)", filter: "blur(100px)" }}
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-[480px] h-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 35%, transparent), transparent 70%)", filter: "blur(90px)" }}
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.07] mix-blend-overlay" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_color-mix(in_oklab,var(--background)_85%,black)_100%)]" />
    </div>
  );
};

export default BackgroundFX;
