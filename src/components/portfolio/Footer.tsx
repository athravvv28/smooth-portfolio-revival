import { motion } from "framer-motion";

const Footer = () => (
  <footer className="border-t border-border py-10 relative overflow-hidden">
    <motion.div
      animate={{ x: ["0%", "100%"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
    />
    <div className="container-luxe flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/55">
      <p>Designed & Built by <span className="text-primary font-semibold">Chaitanya Shirke</span></p>
      <p>© {new Date().getFullYear()} — Mumbai, India</p>
    </div>
  </footer>
);

export default Footer;
