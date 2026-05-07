import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const projects = [
  { title: "Nailies Sparkle Studio", category: "Beauty · Studio", url: "https://nailies-sparkle-studio.lovable.app/", img: p1 },
  { title: "Raisin Boutique", category: "Fashion · E-commerce", url: "https://raisin-boutique-display.lovable.app", img: p2 },
  { title: "Marvelous Sorbet", category: "Brand · Lifestyle", url: "https://marvelous-sorbet-f278db.netlify.app", img: p3 },
  { title: "Esthetic Bloom", category: "Gallery · Editorial", url: "https://esthetic-bloom-gallery.vercel.app/", img: p4 },
  { title: "Artisan Bake Archive", category: "Bakery · Editorial", url: "https://artisan-bake-archive.lovable.app", img: p5 },
  { title: "Elevate Gym Glow", category: "Fitness · Brand", url: "https://elevate-gym-glow.lovable.app", img: p6 },
];

const Works = () => {
  const loop = [...projects, ...projects];

  return (
    <section id="works" className="py-24 md:py-32 relative">
      <div className="container-luxe mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="display text-4xl md:text-5xl underline-blue"
        >
          My Works
        </motion.h2>
      </div>

      {/* Moving project marquee */}
      <div className="relative overflow-hidden group/marquee">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 w-max [animation:marquee_40s_linear_infinite] group-hover/marquee:[animation-play-state:paused]"
        >
          {loop.map((p, i) => (
            <a
              key={`${p.url}-${i}`}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-[260px] md:w-[300px] aspect-[3/4] overflow-hidden bg-muted border border-border hover:border-primary transition-colors duration-500 flex-shrink-0"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/70 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-primary mb-1">{p.category}</p>
                <h3 className="heading text-sm text-foreground">{p.title}</h3>
              </div>

              <div className="absolute inset-0 bg-primary/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-4">
                <ArrowUpRight size={32} className="text-primary-foreground mb-3 transition-transform group-hover:scale-110" />
                <span className="text-xs uppercase tracking-widest text-primary-foreground border border-primary-foreground/60 px-4 py-2">
                  Visit Project
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="container-luxe">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block text-xs font-bold uppercase tracking-[0.3em] border border-foreground/30 px-8 py-3 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
          >
            See More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
