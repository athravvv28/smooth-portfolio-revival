import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import BackgroundFX from "@/components/portfolio/BackgroundFX";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Marquee from "@/components/portfolio/Marquee";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import Works from "@/components/portfolio/Works";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chaitanya Shirke — Web Developer in Mumbai" },
      {
        name: "description",
        content:
          "Chaitanya Shirke is a Mumbai-based web developer crafting aesthetic, high-performing websites tailored for your vision.",
      },
      { property: "og:title", content: "Chaitanya Shirke — Web Developer" },
      { property: "og:description", content: "Crafting web experiences that inspire." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <BackgroundFX />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Works />
      <Contact />
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </main>
  );
}
