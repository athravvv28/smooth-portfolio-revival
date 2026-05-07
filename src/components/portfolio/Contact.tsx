import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error("Please check your details", { description: parsed.error.issues[0].message });
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`Inquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name}\n${parsed.data.email}`);
    window.location.href = `mailto:shirkechaitanya9@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email client", { description: "Thanks for reaching out!" });
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-secondary/30">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container-luxe relative grid md:grid-cols-2 gap-12 lg:gap-20"
      >
        <div>
          <h2 className="display text-4xl md:text-5xl underline-blue mb-6">Contact Me</h2>
          <p className="text-foreground/65 leading-relaxed mb-10 max-w-md">
            Got a project in mind? Let's create something exceptional together.
          </p>

          <ul className="space-y-5 mb-10">
            {[
              { Icon: Mail, label: "shirkechaitanya9@gmail.com", href: "mailto:shirkechaitanya9@gmail.com" },
              { Icon: Phone, label: "+91 74992 19125", href: "https://wa.me/917499219125" },
              { Icon: MapPin, label: "Mumbai, India", href: null },
            ].map(({ Icon, label, href }, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <span className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 text-primary border border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={16} />
                </span>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-foreground/85 hover:text-primary transition-colors">
                    {label}
                  </a>
                ) : (
                  <span className="text-foreground/85">{label}</span>
                )}
              </motion.li>
            ))}
          </ul>

          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "var(--shadow-blue)" }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/917499219125"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-bold uppercase tracking-[0.3em] bg-primary text-primary-foreground px-8 py-4 rounded-md"
          >
            Chat on WhatsApp
          </motion.a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          onSubmit={onSubmit}
          className="space-y-5 p-8 bg-card/60 backdrop-blur-md border border-border rounded-md"
        >
          {[
            { name: "name", type: "text", placeholder: "Your Name", max: 100 },
            { name: "email", type: "email", placeholder: "Your Email", max: 255 },
          ].map((f) => (
            <input
              key={f.name}
              type={f.type}
              placeholder={f.placeholder}
              value={form[f.name as keyof typeof form]}
              maxLength={f.max}
              onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
              className="w-full bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary/40 outline-none px-5 py-4 text-foreground placeholder:text-foreground/40 transition-all rounded-md"
            />
          ))}
          <textarea
            placeholder="Your Message"
            rows={6}
            value={form.message}
            maxLength={1000}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary/40 outline-none px-5 py-4 text-foreground placeholder:text-foreground/40 transition-all resize-none rounded-md"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.3em] border border-primary text-primary py-4 rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-500 disabled:opacity-60"
          >
            {submitting ? "Sending..." : (<>Submit <Send size={14} /></>)}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
