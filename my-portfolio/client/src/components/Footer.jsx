import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div data-aos="fade-up">
            <NavLink
              to="/"
              className="text-2xl font-extrabold tracking-wide"
            >
              Aakash<span className="text-blue-500">.</span>
            </NavLink>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Full Stack + Gen AI Developer building modern, responsive
              and scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-bold">Quick Links</h3>

            <div className="mt-5 flex flex-col gap-3">
              <NavLink
                to="/"
                className="text-sm text-gray-400 transition hover:text-blue-500"
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className="text-sm text-gray-400 transition hover:text-blue-500"
              >
                About
              </NavLink>

              <NavLink
                to="/skills"
                className="text-sm text-gray-400 transition hover:text-blue-500"
              >
                Skills
              </NavLink>

              <NavLink
                to="/projects"
                className="text-sm text-gray-400 transition hover:text-blue-500"
              >
                Projects
              </NavLink>

              <NavLink
                to="/education"
                className="text-sm text-gray-400 transition hover:text-blue-500"
              >
                Education
              </NavLink>

              <NavLink
                to="/contact"
                className="text-sm text-gray-400 transition hover:text-blue-500"
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Connect */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-bold">Connect With Me</h3>

            <div className="mt-5 flex flex-col gap-4">
              <a
                href="https://github.com/Aakash76k"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm text-gray-400 transition hover:text-blue-500"
              >
                LinkedIn
              </a>

              <a
                href="mailto:your-email@gmail.com"
                className="text-sm text-gray-400 transition hover:text-blue-500"
              >
                Email
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Aakash. All rights reserved.
            </p>

            <p className="text-sm text-gray-500">
              Built with <span className="text-blue-500">React</span> &{" "}
              <span className="text-blue-500">Tailwind CSS</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;