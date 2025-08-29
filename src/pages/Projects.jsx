import React from "react";
import ZENT from "../assets/images/Zent.png";
import eestate from "../assets/images/eestate.png";
import ticketa from "../assets/images/ticketa.png";

function Projects() {
  return (
    <div
      id="Project"
      className="w-full min-h-screen flex flex-col gap-10 px-6 sm:px-8 md:px-12 lg:px-24 py-20"
    >
      {/* First Project */}
      <div
        className="w-full h-[50vh] sm:h-[80vh] relative overflow-hidden group shadow-2xl cursor-pointer"
        onClick={() => window.open("https://zent-client.vercel.app", "_blank")}
        style={{
          backgroundImage: `url(${ZENT})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 w-full py-1 px-7 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-white text-5xl font-extrabold tracking-wide drop-shadow-lg">
            ZENT
          </p>
          <p>E-Commerce</p>
        </div>
      </div>

      {/* Bottom Projects */}
      <div className="w-full flex flex-col lg:flex-row gap-8">
        {/* E-Estate */}
        <div
          className="w-full lg:w-1/2 h-[50vh] relative overflow-hidden group shadow-2xl cursor-pointer"
          onClick={() =>
            window.open("https://github.com/eestate/eestate/", "_blank")
          }
          style={{
            backgroundImage: `url(${eestate})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-0 left-0 w-full py-3 px-7 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-white text-3xl font-bold tracking-wide drop-shadow-lg">
              E-Estate
            </p>
            <p>Real Estate Management</p>
          </div>
        </div>

        {/* Ticketa */}
        <div
          className="w-full lg:w-1/2 h-[50vh] relative overflow-hidden group shadow-2xl cursor-pointer"
          onClick={() =>
            window.open(
              "https://github.com/shhanifff/ticketa-Event-Mangment",
              "_blank"
            )
          }
          style={{
            backgroundImage: `url(${ticketa})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-0 left-0 w-full py-3 px-7 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-white text-3xl font-bold tracking-wide drop-shadow-lg">
              Ticketa
            </p>
            <p>Event Ticket System</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
