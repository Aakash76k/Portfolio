import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        {
          name: "HTML",
          level: "90%",
          description: "Semantic and accessible web structure",
        },
        {
          name: "CSS",
          level: "85%",
          description: "Responsive layouts and modern UI styling",
        },
        {
          name: "JavaScript",
          level: "85%",
          description: "Modern JavaScript and DOM development",
        },
        {
          name: "React",
          level: "80%",
          description: "Component-based frontend applications",
        },
        {
          name: "Tailwind CSS",
          level: "85%",
          description: "Responsive and modern UI development",
        },
      ],
    },

    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        {
          name: "Node.js",
          level: "80%",
          description: "Server-side JavaScript development",
        },
        {
          name: "Express.js",
          level: "80%",
          description: "REST API and backend development",
        },
        {
          name: "REST API",
          level: "80%",
          description: "Building and integrating RESTful APIs",
        },
      ],
    },

    {
      title: "Database",
      icon: "🗄️",
      skills: [
        {
          name: "MongoDB",
          level: "75%",
          description: "NoSQL database and data management",
        },
        {
          name: "Mongoose",
          level: "75%",
          description: "MongoDB object modeling with Node.js",
        },
      ],
    },

    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        {
          name: "Git",
          level: "80%",
          description: "Version control and project management",
        },
        {
          name: "GitHub",
          level: "80%",
          description: "Code hosting and collaboration",
        },
        {
          name: "VS Code",
          level: "90%",
          description: "Development environment",
        },
        {
          name: "Postman",
          level: "75%",
          description: "API testing and development",
        },
      ],
    },

    {
      title: "Generative AI",
      icon: "🤖",
      skills: [
        {
          name: "Gen AI",
          level: "70%",
          description: "Exploring AI-powered applications",
        },
        {
          name: "AI Integration",
          level: "70%",
          description: "Integrating AI capabilities into web apps",
        },
      ],
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            My Skills
          </p>

          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Technologies I <span className="text-blue-500">Work With</span>
          </h1>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600"></div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            I work with modern web development technologies to build
            responsive, scalable and user-friendly applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={categoryIndex * 100}
              className="rounded-2xl border border-white/10 bg-gray-900 p-6 sm:p-8"
            >
              {/* Category Heading */}
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-2xl">
                  {category.icon}
                </div>

                <div>
                  <h2 className="text-xl font-bold sm:text-2xl">
                    {category.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {category.skills.length} Technologies
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="grid gap-6 md:grid-cols-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    data-aos="fade-up"
                    data-aos-delay={skillIndex * 100}
                    className="rounded-xl border border-white/5 bg-gray-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-white">
                        {skill.name}
                      </h3>

                      <span className="text-sm font-semibold text-blue-500">
                        {skill.level}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-2 text-sm text-gray-500">
                      {skill.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-800">
                      <div
                        className="h-full rounded-full bg-blue-600 transition-all duration-1000"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="mt-16 rounded-2xl border border-blue-500/20 bg-blue-600/5 p-8 text-center"
        >
          <h2 className="text-2xl font-bold sm:text-3xl">
            Always <span className="text-blue-500">Learning</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            Technology keeps evolving, and so do I. I'm continuously learning
            new tools, frameworks and AI technologies to improve my development
            skills.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
