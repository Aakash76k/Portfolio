import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
    });
  }, []);

  const educationData = [
    {
      year: "2026 - 2027",
      degree: "MERN Stack + Generative AI",
      field: "Full Stack Web Development & Gen AI",
      institute: "DUCAT",
      location: "India",
      description:
        "Currently learning MERN Stack development along with Generative AI, focusing on building modern, scalable, and AI-powered web applications.",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Generative AI"],
    },

    {
      year: "Jan 2025 - Jun 2025",
      role: "Frontend Developer Intern",
      company: "Sketchcom Engineering and Design Pvt. Ltd",
      location: "India",
      description:
        "Worked as a Frontend Developer Intern, where I developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript. Gained practical experience in building and improving frontend features for real-world projects.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "UI Development",
      ],
    },

    {
      year: "2021 - 2025",
      degree: "Bachelor of Technology",
      field: "Computer Engineering",
      institute: "JC Bose University of Science and Technology",
      location: "Faridabad, Haryana",
      description:
        "Completed my B.Tech in Computer Engineering with a strong foundation in programming, software development, databases, and web technologies.",
      skills: [
        "Programming",
        "Web Development",
        "Database",
        "Computer Engineering",
      ],
    },

    {
      year: "2019 - 2021",
      degree: "Senior Secondary",
      field: "Science Stream",
      institute: "Senior Secondary Education",
      location: "Haryana, India",
      description:
        "Completed senior secondary education with a focus on mathematics, science, and computer-related subjects.",
      skills: ["Mathematics", "Physics", "Computer Science"],
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Journey
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl ">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            My educational journey has helped me build a strong foundation in
            computer engineering, programming, and modern web technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-slate-700 md:left-1/2 md:block md:-translate-x-1/2"></div>

          <div className="space-y-10 md:space-y-16">
            {educationData.map((item, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.7)] md:block"></div>

                {/* Card */}
                <div
                  className={`w-full md:w-[46%] ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-cyan-500/10 sm:p-7">
                    {/* Year */}
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-400 sm:text-sm">
                        {item.year}
                      </span>

                      <span className="text-2xl transition duration-300 group-hover:scale-110">
                        🎓
                      </span>
                    </div>

                    {/* Degree */}
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {item.degree}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-cyan-400 sm:text-base">
                      {item.field}
                    </p>

                    {/* Institute */}
                    <h4 className="mt-5 text-base font-semibold text-slate-200">
                      {item.institute}
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      📍 {item.location}
                    </p>

                    {/* Description */}
                    <p className="mt-5 text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>

                    {/* Skills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mx-auto mt-16 max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center sm:p-8"
        >
          <p className="text-base italic leading-7 text-slate-400 sm:text-lg">
            "Education gave me the foundation, and continuous learning keeps me
            moving forward."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
