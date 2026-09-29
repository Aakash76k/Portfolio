import React from 'react'

const About = () => {
  return (
    <section className="min-h-screen bg-gray-950 px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            About Me
          </p>

          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Get to Know <span className="text-blue-500">Me</span>
          </h1>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600"></div>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              I'm Aakash, a{" "}
              <span className="text-blue-500">
                Full Stack + Gen AI Developer
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
              I'm a Computer Engineering graduate passionate about building
              modern, responsive and scalable web applications. I enjoy
              turning ideas into real-world digital products using modern
              technologies.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
              My development journey started with JavaScript and gradually
              expanded into React, Node.js, Express.js and MongoDB. Currently,
              I'm also exploring Generative AI and learning how AI can be
              integrated into modern web applications.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
              I believe in continuous learning, writing clean code and
              building projects that solve practical problems.
            </p>
          </div>

          {/* Right Cards */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="grid gap-5 sm:grid-cols-2"
          >
            {/* Card 1 */}
            <div className="rounded-2xl border border-white/10 bg-gray-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-2xl">
                💻
              </div>

              <h3 className="text-xl font-bold text-white">
                Full Stack Development
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Building frontend and backend applications with modern
                JavaScript technologies.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-white/10 bg-gray-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-2xl">
                🤖
              </div>

              <h3 className="text-xl font-bold text-white">
                Generative AI
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Exploring AI-powered applications and integrating Gen AI into
                web development.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-white/10 bg-gray-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-2xl">
                🚀
              </div>

              <h3 className="text-xl font-bold text-white">
                Problem Solving
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Creating practical solutions and improving applications
                through continuous learning.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-white/10 bg-gray-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-2xl">
                📚
              </div>

              <h3 className="text-xl font-bold text-white">
                Continuous Learning
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Constantly learning new technologies, tools and development
                practices.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mt-20 rounded-2xl border border-white/10 bg-gray-900 p-8"
        >
          <h3 className="text-center text-2xl font-bold">
            My Development <span className="text-blue-500">Stack</span>
          </h3>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Git",
              "GitHub",
              "Generative AI",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-gray-950 px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 hover:border-blue-500 hover:text-blue-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
