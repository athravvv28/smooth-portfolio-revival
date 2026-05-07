import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Github, Linkedin, Menu, X } from "lucide-react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#works", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-luxe flex items-center justify-between h-20">
        <a href="#top" className="text-xl font-bold tracking-tight relative group">
          <span className="text-foreground">Chaitanya</span>
          <motion.span
            className="text-primary inline-block"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            .
          </motion.span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((l, i) => (
            <motion.li
              key={l.href}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
            >
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4 text-foreground/70">
          {[
            { Icon: Instagram, href: "https://instagram.com" },
            { Icon: Github, href: "https://github.com" },
            { Icon: Linkedin, href: "https://linkedin.com" },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.15, color: "var(--primary)" }}
              transition={{ type: "spring", stiffness: 400 }}
              className="hover:text-primary"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
      >
        <ul className="container-luxe py-6 flex flex-col gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
