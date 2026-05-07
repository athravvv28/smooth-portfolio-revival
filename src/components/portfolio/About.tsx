import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portrait from "@/assets/chaitanya-portrait.png";

const tabs = {
  Skills: [
    "Frontend Development — React, Tailwind, TypeScript",
    "UI/UX Design — Figma, prototyping, design systems",
    "Performance optimization & accessibility",
  ],
  Experience: [
    "Web Development — Building scalable frontends & backends",
    "Freelance projects across beauty, fashion & lifestyle brands",
    "Collaborating with designers to ship pixel-perfect interfaces",
  ],
  Education: [
    "2 years of experience in the tech industry",
    "Continuous learning — modern web stacks & design",
    "Hands-on with real client projects",
  ],
};

type TabKey = keyof typeof tabs;

const About = () => {
  const [active, setActive] = useState<TabKey>("Skills");

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="container-luxe grid md:grid-cols-12 gap-10 lg:gap-16 items-start"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-4"
        >
          <div className="relative aspect-square w-full max-w-xs">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 border border-primary/30"
              style={{ borderStyle: "dashed" }}
            />
            <div className="relative w-full h-full overflow-hidden bg-card">
              <img
                src={portrait}
                alt="Chaitanya Shirke"
                loading="lazy"
                width={600}
                height={600}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Based in Mumbai floating badge (moved from hero) */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-card border border-primary/40 px-4 py-2 backdrop-blur-md shadow-[var(--shadow-blue)] z-10"
            >
              <p className="text-xs uppercase tracking-widest text-foreground/60">Based in</p>
              <p className="text-sm font-bold text-primary">Mumbai, IN</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="md:col-span-8">
          <h2 className="display text-4xl md:text-5xl underline-blue mb-8">About Me</h2>
          <p className="text-foreground/70 leading-relaxed mb-8">
            I specialize in architecting scalable web solutions that don't just work — they inspire.
            My approach combines technical rigor with a keen eye for aesthetic detail. I believe that
            every line of code should serve a purpose, much like every element in a well-designed
            space. Based in Mumbai, I am dedicated to delivering quality over quantity.
          </p>

          <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-border relative">
            {(Object.keys(tabs) as TabKey[]).map((k) => (
              <button
                key={k}
                onClick={() => setActive(k)}
                className={`relative px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  active === k ? "text-primary" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {k}
                {active === k && (
                  <motion.div
                    layoutId="tabIndicator"
                    className="absolute left-0 right-0 bottom-[-1px] h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.ul
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="space-y-3"
            >
              {tabs[active].map((line, i) => (
                <motion.li
                  key={line}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-3 text-foreground/75"
                >
                  <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{line}</span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
