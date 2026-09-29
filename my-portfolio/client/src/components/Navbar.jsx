
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  const linkStyle = ({ isActive }) =>
    `relative text-sm font-medium transition duration-300 ${
      isActive
        ? "text-cyan-500"
        : "text-gray-300 hover:text-cyan-500"
    }`;

  return (
    <nav
      data-aos="fade-down"
      data-aos-duration="1000"
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-gray-950/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-wide text-white"
          onClick={() => setMenuOpen(false)}
        >
          Aakash<span className="text-cyan-400">.</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={linkStyle}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Hire Me */}
          <NavLink
            to="/hire-me"
            className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            Hire Me
          </NavLink>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-cyan-400 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-gray-950 px-6 py-5 md:hidden">

          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-cyan-500"
                      : "text-gray-300 hover:text-cyan-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Hire Me */}
            <NavLink
              to="/hire-me"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-cyan-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-cyan-700"
            >
              Hire Me
            </NavLink>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

