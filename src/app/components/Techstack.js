"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  const categories = [
    {
      title: "Frontend & Mobile",
      skills: [
        "React",
        "Next.js",
        "React Native", // Added for Mobile Dev
        "Tailwind CSS",
        "TypeScript",
        "Framer Motion",
      ],
    },
    {
      title: "Backend & Systems",
      skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "Firebase", "AWS"],
    },
    {
      title: "Design & Drafting", // New category for your specific niche
      skills: ["AutoCAD", "Figma", "UI/UX Design", "Git", "Docker", "Vercel"],
    },
  ];

  return (
    <section id="stack" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Our Technical <span className="text-indigo-600">Toolbox</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400"
          >
            The specialized tools we use to build high-performance applications
            and technical designs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }} // Subtle lift effect
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm transition-shadow hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-xl border border-gray-100 dark:border-gray-700 transition-all hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
