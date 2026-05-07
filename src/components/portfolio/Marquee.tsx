const items = [
  "React", "TypeScript", "Tailwind", "Next.js", "Framer Motion",
  "Figma", "Node.js", "UI/UX", "Performance", "Accessibility",
];

const Marquee = () => {
  const loop = [...items, ...items];
  return (
    <div className="relative py-10 border-y border-border bg-secondary/30 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex gap-12 whitespace-nowrap" style={{ animation: "marquee 30s linear infinite", width: "max-content" }}>
        {loop.map((item, i) => (
          <span key={i} className="display text-3xl md:text-4xl text-foreground/40 hover:text-primary transition-colors flex items-center gap-12">
            {item}
            <span className="text-primary text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
