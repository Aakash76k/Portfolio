import React from "react";
import profileImage from "../assets/profile.jpeg";


const Home = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center overflow-hidden bg-gray-950 px-6 pt-24 text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">

        {/* ================= LEFT CONTENT ================= */}
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <p className="mb-4 text-lg font-medium text-cyan-500">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            Aakash
          </h1>

          <h2 className="mt-4 text-2xl font-bold text-gray-300 sm:text-3xl">
            Full Stack +{" "}
            <span className="text-cyan-500">
              Gen AI Developer
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            Computer Engineering graduate passionate about building
            modern, scalable and user-friendly web applications using
            React, Node.js, Express.js, MongoDB and Generative AI.
          </p>

          {/* Buttons */}
          <div
            className="mt-8 flex flex-wrap gap-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <a
              href="/projects"
              className="rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="rounded-lg border border-gray-700 px-6 py-3 font-semibold text-white transition duration-300 hover:border-cyan-500 hover:text-cyan-500"
            >
              Hire Me
            </a>
          </div>

          {/* Social Links */}
          <div
            className="mt-8 flex gap-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="900"
          >
            <a
              href="https://github.com/Aakash76k"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition duration-300 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-gray-400 transition duration-300 hover:text-cyan-500"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* ================= RIGHT PROFILE ================= */}
        <div
          className="flex justify-center md:justify-end"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <div className="relative h-[330px] w-[330px] sm:h-[390px] sm:w-[390px]">

            {/* Outer Glow */}
            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/20 blur-3xl sm:h-[390px] sm:w-[390px]"></div>

            {/* Outer Circle */}
            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30 sm:h-[390px] sm:w-[390px]"></div>

            {/* Middle Circle */}
            <div className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40 sm:h-[340px] sm:w-[340px]"></div>

            {/* Profile Image */}
            <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-white bg-white shadow-2xl shadow-cyan-500/30 sm:h-[270px] sm:w-[270px]">

              <img
                src={profileImage}
                alt="Aakash"
                className="h-full w-full object-cover"
              />

            </div>

            {/* ================= TOP LEFT CARD ================= */}
            <div
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="1000"
              className="absolute left-0 top-5 rounded-2xl bg-white px-5 py-3 text-center shadow-xl sm:left-0 sm:top-8 sm:px-6 sm:py-4"
            >
              <h3 className="text-lg font-bold text-cyan-950 sm:text-xl">
                5+
              </h3>

              <p className="text-xs font-medium text-cyan-600 sm:text-sm">
                Clients
              </p>
            </div>

            {/* ================= TOP RIGHT CARD ================= */}
            <div
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="1200"
              className="absolute right-0 top-5 rounded-2xl bg-white px-5 py-3 text-center shadow-xl sm:right-0 sm:top-8 sm:px-6 sm:py-4"
            >
              <h3 className="text-lg font-bold text-cyan-950 sm:text-xl">
                15+
              </h3>

              <p className="text-xs font-medium text-cyan-600 sm:text-sm">
                Projects
              </p>
            </div>

            {/* ================= BOTTOM CARD ================= */}
            <div
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="1400"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-2xl bg-white px-6 py-3 text-center shadow-xl sm:px-7"
            >
              <h3 className="text-base font-bold text-cyan-950 sm:text-lg">
                Full Stack
              </h3>

              <p className="text-xs font-medium text-cyan-600 sm:text-sm">
                Developer
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;

