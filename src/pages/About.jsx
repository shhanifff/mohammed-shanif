import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section
      id="About"
      className="min-h-screen w-full text-white px-6 sm:px-10 md:px-16 lg:px-24 py-16 flex flex-col gap-16"
    >
      {/* Top Intro Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            HI! I'M <span className="text-[#c4f000]">SHANIF</span>,
            <br />
            I LOVE MAKING THINGS
            <br />
            THAT HELP PEOPLE DO
            <br />
            THEIR THING.
          </h1>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 text-lg text-gray-300 space-y-6 max-w-xl">
          <p>
            I’m a MERN stack developer based in India, specializing in building
            full-stack apps with clean UI, efficient backend, and modern tech.
          </p>
          <p>
            As a passionate coder and self-learner, I enjoy creating products at
            the intersection of design, code, and problem-solving — delivering
            solutions that are both beautiful and performant.
          </p>

          <Link
            to="/about-more"
            className="relative inline-block text-white font-semibold transition duration-300 hover:text-[#c4f000] group"
          >
            About Me More
            <span className="block h-0.5 w-0 bg-[#c4f000] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
