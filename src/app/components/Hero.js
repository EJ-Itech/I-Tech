"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const skills = ["UI/UX", "Web Development", "Mobile Development", "AutoCAD"];

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full -z-10 opacity-30 blur-[120px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-6xl mx-auto text-center"
      >
        {/* The Badge */}
        <motion.span
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-6 border border-indigo-100 dark:border-indigo-900/50"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Available for new projects
        </motion.span>

        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
        >
          Crafting digital <br />
          <motion.span
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% auto" }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-600"
          >
            experiences.
          </motion.span>
        </motion.h1>

        {/* Updated Description */}
        <motion.p
          variants={fadeInUp}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8"
        >
          We are{" "}
          <span className="text-gray-900 dark:text-white font-bold">Itech</span>
          . A multidisciplinary team specialized in turning complex ideas into
          functional and elegant solutions.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              whileHover={{ y: -5 }}
              className="px-4 py-2 rounded-xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={fadeInUp} className="flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 hover:bg-indigo-700 transition-all"
          >
            Start a Project
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
