/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export default function ProjectTimeline() {
  const projects = [
    {
      id: 1,
      title: "High Secondery",
      Date: "2022 - 2024",
      role: "",
      description:
        "A personal portfolio to showcase projects using React and TailwindCSS.",
    },
    {
      id: 2,
      title: "Bridgeon Sloution",
      Date: "Aug 2024 - Present",
      description:
        "Admin dashboard for managing products, orders, and analytics.",
    },
  ];

  return (
    <div className="max-h-screen bg-transparent py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-500 hidden sm:block" />

        {/* Timeline Items */}
        {projects.map((proj, index) => (
          <motion.div
            key={proj.id}
            className="relative mb-16 pl-6 sm:pl-16"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Dot (only for sm and above) */}
            <div className="hidden sm:block absolute left-[14px] top-2 w-3 h-3 rounded-full bg-[#c4f000] border-2 border-[#B4B4B4] z-10" />

            {/* Date Badge */}
            <div
              className={`
                text-xs px-3 py-1 rounded-full border-1 border-dotted border-[#c4f000] text-gray-300
                mb-3 sm:mb-0
                sm:absolute sm:-left-[140px] sm:top-1
              `}
            >
              {proj.Date}
            </div>

            {/* Content Card */}
            <div className="p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-[#B4B4B4]">{proj.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
