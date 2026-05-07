import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Building fast, scalable, production-ready websites with clean architecture and modern tooling.",
  },
  {
    icon: Palette,
    title: "UI/UX Designing",
    desc: "Crafting intuitive, aesthetic interfaces that elevate the user experience and brand identity.",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Pixel-perfect layouts that adapt beautifully across mobile, tablet and desktop screens.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="container-luxe relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="display text-4xl md:text-5xl underline-blue mb-12"
        >
          My Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className={`group relative p-8 border overflow-hidden transition-all duration-500 ${
                s.featured
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card/60 backdrop-blur-sm border-border hover:border-primary/60"
              }`}
            >
              {/* Hover gradient */}
              {!s.featured && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}

              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-8 inline-block"
                >
                  <s.icon
                    className={s.featured ? "text-primary-foreground" : "text-primary"}
                    size={32}
                    strokeWidth={1.5}
                  />
                </motion.div>
                <h3 className="heading text-xl mb-4">{s.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${s.featured ? "text-primary-foreground/85" : "text-foreground/65"}`}>
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest border-b pb-1 group/link ${
                    s.featured ? "border-primary-foreground" : "border-primary text-primary"
                  }`}
                >
                  Learn More
                  <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
