/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import EnhancedTimeline from "../components/TimeLine";

function AboutMore() {
  const items = [
    { count: 2, title: "Years of Creative Exploration" },
    { count: 10, title: "Completed Projects" },
    { count: 100, title: "Hours of Skill Mastery" },
    { count: 20, title: "Cup of Coffee" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const countVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <div className="w-full min-h-screen bg-transparent text-gray-200 p-8 md:p-16 font-poppins relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
          animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-green-400/10 to-yellow-400/10 rounded-full blur-xl"
          animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h1
          className="text-6xl md:text-7xl dm-sans mb-16 bg-gradient-to-bl from-white to-gray-800 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h1>

        {/* Description */}
        <motion.div
          className="mb-20 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg md:text-xl text-[#B4B4B4] leading-relaxed dm-sans">
            Hi, I'm{" "}
            <span className="text-[#c4f000] font-semibold">
              Mohammed Shanif CC
            </span>
            , a passionate MERN stack developer. With a strong foundation in
            both front-end and back-end technologies, I build intuitive and
            scalable web applications. I enjoy turning complex ideas into clean,
            functional solutions and strive to stay updated with modern tech
            trends. I'm open to collaboration and always seeking opportunities
            to learn, grow, and build something meaningful.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <motion.h3
                className="text-3xl md:text-6xl font-semibold text-gray-100 mb-2 dm-sans"
                variants={countVariants}
              >
                {item.count}+
              </motion.h3>
              <motion.p
                className="text-base md:text-lg text-gray-400 leading-relaxed"
                variants={itemVariants}
              >
                {item.title}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image + Skills Section */}
        <div className="w-full min-h-[60vh] flex flex-col md:flex-row mt-28 items-center justify-center gap-10">
          <div className="w-full md:w-[40%] h-[300px] md:h-[400px] bg-zinc-900 border border-gray-700 flex items-center justify-center text-white text-xl rounded-lg">
            Image
          </div>
          <div className="w-full md:w-[50%] bg-transparent border border-gray-700 p-6 rounded-lg">
            <h1 className="text-[#B4B4B4] text-2xl md:text-3xl dm-sans mb-4">
              A <span className="text-[#c4f000]">MERN</span> stack developer
              building clean,
              <br className="hidden sm:block" />
              efficient, and user-focused web applications.
            </h1>
            <p className="text-base leading-relaxed text-gray-300">
              <span className="text-white font-semibold">Languages:</span>{" "}
              HTML5, CSS, JavaScript. <br />
              <span className="text-white font-semibold">
                Tools & Platforms:
              </span>{" "}
              Git, GitHub Actions, Render, Vercel, Docker. <br />
              <span className="text-white font-semibold">
                Integrations:
              </span>{" "}
              Cloudinary, OAuth, Razorpay, Stripe, Leeflet. <br />
              <span className="text-white font-semibold">
                Design & Prototyping:
              </span>{" "}
              Figma, Canva. <br />
              <span className="text-white font-semibold">
                Libraries & Frameworks:
              </span>{" "}
              Node.js, Express.js, React.js, TypeScript, TailwindCSS, Bootstrap,
              Redux, Mongoose, ShadCN. <br />
              <span className="text-white font-semibold">Database:</span>{" "}
              MongoDB, PostgreSQL. <br />
              <span className="text-white font-semibold">Concepts:</span> Clean
              Architecture, MVC Architecture, ACID Properties.
            </p>
          </div>
        </div>

        {/* Education & Experience */}
        <motion.div
          className="w-full mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-7xl dm-sans mb-16 bg-gradient-to-bl from-white to-gray-800 bg-clip-text text-transparent">
            Education & Experience
          </h1>

          <EnhancedTimeline />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMore;
