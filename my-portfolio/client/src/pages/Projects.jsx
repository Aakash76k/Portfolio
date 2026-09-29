import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description:
        "A full-stack personal portfolio built using the MERN stack to showcase my skills, projects, education and development journey.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/Aakash76k/Portfolio",
      type: "Full Stack",
    },

    {
      title: "Movie Ticket Booking",
      description:
        "A movie ticket booking system with a modern interface for browsing movies and managing ticket bookings.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Aakash76k/Movie",
      type: "Full Stack",
    },

    {
      title: "Grox",
      description:
        "A modern business website project built with TypeScript, focused on creating a professional digital presence.",
      tech: ["TypeScript", "React"],
      github: "https://github.com/Aakash76k/Grox",
      type: "Web Application",
    },

    {
      title: "Job Finder",
      description:
        "A job finder web application built with HTML, CSS and JavaScript for exploring job-related information through a simple interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Aakash76k/Job-Finder",
      type: "JavaScript",
    },

    {
      title: "Personal Budget Tracker",
      description:
        "A budget tracking application designed to manage personal income and expenses with a simple and user-friendly interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Aakash76k/PBT",
      type: "JavaScript",
    },

    {
      title: "Weather App",
      description:
        "A responsive weather application built with React and Tailwind CSS for displaying weather information.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/Aakash76k/Weather",
      type: "React",
    },

    {
      title: "Amazon Clone",
      description:
        "A frontend Amazon-inspired e-commerce interface built with React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/Aakash76k/Amazon-Clone-Website",
      type: "Frontend",
    },

    {
      title: "Profussion",
      description:
        "A modern and responsive business website built with React, Vite and CSS.",
      tech: ["React", "Vite", "CSS"],
      github: "https://github.com/Aakash76k/Profussion",
      type: "Frontend",
    },

    {
      title: "Notepad",
      description:
        "A responsive note-taking application built with React and CSS for creating and managing notes.",
      tech: ["React", "CSS"],
      github: "https://github.com/Aakash76k/Notepad",
      type: "React",
    },

    {
      title: "Next-GenAI",
      description:
        "A modern and responsive AI startup landing page built with Tailwind CSS.",
      tech: ["HTML", "Tailwind CSS"],
      github: "https://github.com/Aakash76k/Next-GenAI",
      type: "Gen AI",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-950 px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
            My Work
          </p>

          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Featured <span className="text-cyan-500">Projects</span>
          </h1>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-600"></div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Here are some of the projects I've built while learning and
            working with modern web development technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={(index % 3) * 100}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Project Header */}
              <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-950">
                <div className="absolute inset-0 bg-cyan-600/5 transition duration-300 group-hover:bg-cyan-600/10"></div>

                <div className="relative text-center">
                  <div className="mb-2 text-4xl">
                    {project.type === "Full Stack"
                      ? "🚀"
                      : project.type === "Gen AI"
                      ? "🤖"
                      : project.type === "React"
                      ? "⚛️"
                      : project.type === "JavaScript"
                      ? "🟨"
                      : "💻"}
                  </div>

                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6">

                <h2 className="text-xl font-bold transition duration-300 group-hover:text-cyan-500">
                  {project.title}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-gray-950 px-2.5 py-1 text-xs font-medium text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-4 py-3 text-sm font-semibold text-gray-200 transition duration-300 hover:border-cyan-500 hover:bg-cyan-600 hover:text-white"
                >
                  <span>View on GitHub</span>
                  <span className="transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mt-16 text-center"
        >
          <p className="mb-5 text-gray-400">
            Want to explore more of my work?
          </p>

          <a
            href="https://github.com/Aakash76k"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-cyan-700 hover:shadow-xl hover:shadow-cyan-600/20"
          >
            Visit My GitHub
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
