import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Globe2,
  ShoppingBag,
  CalendarCheck,
  Rocket,
  Search,
  Smartphone,
  CheckCircle2,
  Wifi,
} from "lucide-react";
import splatter from "@/assets/ink-splatter.png";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 pb-16 overflow-hidden"
    >
      {/* Decorative ink splatters with parallax float */}
      <motion.img
        src={splatter}
        alt=""
        aria-hidden
        animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[700px] opacity-40 mix-blend-screen pointer-events-none select-none"
      />
      <motion.img
        src={splatter}
        alt=""
        aria-hidden
        animate={{ rotate: [0, -6, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[500px] opacity-25 mix-blend-screen pointer-events-none select-none scale-x-[-1]"
      />

      <div className="container-luxe relative z-10 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-7rem)]">
        {/* Left text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs uppercase tracking-[0.25em] mb-6"
          >
            <Sparkles size={12} />
            Available for projects
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-base md:text-lg text-foreground/80 mb-5"
          >
            Hi, I'm Chaitanya,
          </motion.p>

          <h1 className="display text-5xl sm:text-6xl md:text-7xl text-foreground">
            {["Crafting Web", "Experiences"].map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="block text-shimmer"
            >
              That Inspire.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-8 max-w-md text-foreground/65 leading-relaxed"
          >
            I build aesthetic, high-performing websites tailored for your vision —
            based in Mumbai, India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <motion.a
              href="#works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 text-base font-semibold text-foreground border-b-2 border-primary pb-1 hover:text-primary transition-colors"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-blue)" }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center gap-2 text-base font-semibold bg-primary text-primary-foreground px-7 py-3 rounded-md overflow-hidden"
            >
              <span className="relative z-10">Hire Me</span>
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{ animation: "shimmer 2.6s linear infinite" }}
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Right 3D-style web build & trust showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative"
        >
          <div
            className="relative aspect-square max-w-md mx-auto lg:ml-auto"
            style={{ perspective: "1200px" }}
          >
            {/* Glow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--primary) 55%, transparent), transparent 70%)",
                filter: "blur(60px)",
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.55, 0.9, 0.55] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Rotating dashed rings */}
            <motion.div
              className="absolute inset-0 border border-primary/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              style={{ borderStyle: "dashed" }}
            />
            <motion.div
              className="absolute inset-6 border border-primary/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              style={{ borderStyle: "dotted" }}
            />

            {/* Floating "Take your business online" card */}
            <motion.div
              className="absolute inset-10 rounded-xl bg-card/85 backdrop-blur-xl border border-primary/40 shadow-[var(--shadow-elevated)] overflow-hidden"
              animate={{ y: [0, -14, 0], rotateX: [6, -2, 6], rotateY: [-8, 4, -8] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/40">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-md bg-primary/20 border border-primary/40 flex items-center justify-center">
                    <Globe2 size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-foreground/50">Your Brand</p>
                    <p className="text-[11px] font-bold">Going Online</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-[9px] uppercase tracking-widest text-primary font-semibold">
                  <Wifi size={10} />
                  Live
                </span>
              </div>

              {/* Spinning globe area */}
              <div className="relative flex items-center justify-center py-5">
                <motion.div
                  className="absolute h-24 w-24 rounded-full border border-primary/30"
                  style={{ borderStyle: "dashed" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute h-16 w-16 rounded-full border border-primary/20"
                  style={{ borderStyle: "dotted" }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-[var(--shadow-blue)]"
                >
                  <Globe2 size={22} className="text-primary-foreground" />
                </motion.div>
              </div>

              {/* Channels */}
              <div className="px-3 pb-3 space-y-1.5">
                {[
                  { Icon: ShoppingBag, k: "Online Store" },
                  { Icon: CalendarCheck, k: "Bookings & Leads" },
                  { Icon: Search, k: "Found on Google" },
                ].map(({ Icon, k }, i) => (
                  <motion.div
                    key={k}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
                    className="flex items-center justify-between rounded-md bg-background/40 border border-border px-2.5 py-1.5"
                  >
                    <div className="flex items-center gap-2 text-[10px] font-semibold">
                      <Icon size={12} className="text-primary" />
                      {k}
                    </div>
                    <span className="text-[8px] uppercase tracking-widest text-primary">Active</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Orbiting business pills */}
            {[
              { Icon: Rocket, label: "Go Live", x: "0%", y: "0%", d: 0 },
              { Icon: ShoppingBag, label: "Sell Online", x: "100%", y: "10%", d: 0.3 },
              { Icon: CalendarCheck, label: "Bookings", x: "100%", y: "85%", d: 0.6 },
              { Icon: Search, label: "Get Found", x: "0%", y: "90%", d: 0.9 },
              { Icon: Smartphone, label: "Mobile First", x: "50%", y: "-5%", d: 1.2 },
            ].map(({ Icon, label, x, y, d }, i) => (
              <motion.div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-2 rounded-full bg-card/90 border border-primary/40 backdrop-blur-md shadow-[var(--shadow-blue)]"
                style={{ left: x, top: y }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: d }}
              >
                <Icon size={14} className="text-primary" />
                <span className="text-[10px] uppercase tracking-widest font-semibold">{label}</span>
              </motion.div>
            ))}

            {/* Bottom pill */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-[var(--shadow-blue)] whitespace-nowrap"
            >
              <CheckCircle2 size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Take Your Business Online
              </span>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40 text-xs uppercase tracking-[0.3em]"
      >
        Scroll
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
