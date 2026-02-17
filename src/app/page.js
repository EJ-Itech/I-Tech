// page.js
"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Project />
        <Techstack />
        <Contact />
      </main>
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-gray-100 dark:border-gray-900">
        © {new Date().getFullYear()} Itech Portfolio. Built with Next.js &
        Tailwind.
      </footer>
    </div>
  );
}
