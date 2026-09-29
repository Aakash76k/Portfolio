
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HireMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
    });
  }, []);

  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      description:
        "Responsive and modern user interfaces using React, JavaScript, HTML, CSS, and Tailwind CSS.",
    },
    {
      icon: "⚙️",
      title: "MERN Development",
      description:
        "Full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
    },
    {
      icon: "🤖",
      title: "Generative AI",
      description:
        "Exploring and building AI-powered applications by combining modern web technologies with Generative AI.",
    },
  ];

  const skills = [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Generative AI",
    "Git & GitHub",
  ];

  return (
    <section
      id="hire"
      className="min-h-screen bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">

        {/* Hero */}
        <div
          data-aos="fade-up"
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Let's Work Together
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Looking for a{" "}
            <span className="text-cyan-400">
              Developer?
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg">
            I'm Aakash, a Full Stack & Gen AI Developer focused on building
            responsive, modern, and user-friendly web applications.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Hire Me →
            </a>

            <a
              href="/"
              className="rounded-xl border border-slate-700 px-7 py-3.5 font-semibold text-slate-200 transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              View Portfolio
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4"
        >
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">MERN</h3>
            <p className="mt-2 text-xs text-slate-500 sm:text-sm">
              Full Stack
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">Gen AI</h3>
            <p className="mt-2 text-xs text-slate-500 sm:text-sm">
              Learning & Building
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">100%</h3>
            <p className="mt-2 text-xs text-slate-500 sm:text-sm">
              Responsive
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">Open</h3>
            <p className="mt-2 text-xs text-slate-500 sm:text-sm">
              To Opportunities
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-24">

          <div
            data-aos="fade-up"
            className="mb-12 text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              What I Can Do
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              My{" "}
              <span className="text-cyan-400">
                Expertise
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-24">

          <div
            data-aos="fade-up"
            className="mb-10 text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              Technologies I{" "}
              <span className="text-cyan-400">
                Work With
              </span>
            </h2>
          </div>

          <div
            data-aos="fade-up"
            className="flex flex-wrap justify-center gap-3"
          >
            {skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm text-slate-300 transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Why Hire Me */}
        <div
          data-aos="fade-up"
          className="mt-24 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 text-center sm:p-10"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to{" "}
            <span className="text-cyan-400">
              Build Something?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Whether you have a new project, an internship opportunity, or a
            full-time role, I'm interested in connecting and discussing how
            I can contribute.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-cyan-400 px-8 py-3.5 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            Let's Talk 🚀
          </a>
        </div>

      </div>
    </section>
  );
};

export default HireMe;

