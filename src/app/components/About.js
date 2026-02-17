"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image/Visual with Scroll Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800 aspect-square lg:aspect-auto lg:h-[500px] shadow-2xl">
              {/* Replace with your actual team photo or a symbolic graphic */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium italic p-8 text-center">
                [Team Collaboration / Workspace Image]
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full border-2 border-indigo-600 rounded-2xl"></div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-indigo-600">Us</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              We are a multidisciplinary team of creators and engineers
              dedicated to turning complex technical challenges into elegant,
              high-impact solutions. By merging our expertise in{" "}
              <strong>Web & Mobile Development</strong> with the technical
              precision of <strong>AutoCAD</strong> and{" "}
              <strong>UI/UX Design</strong>, we build products that are as
              robust as they are beautiful.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Our philosophy is rooted in collaboration. Whether we are drafting
              architectural plans or architecting scalable software, we focus on
              user-centric results that push the boundaries of what is possible
              in the digital and physical space.
            </p>

            {/* Stats/Quick Info Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-3xl font-bold text-indigo-600 mb-1">2+</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Years of Innovation
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-3xl font-bold text-indigo-600 mb-1">50+</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Successful Deliveries
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
