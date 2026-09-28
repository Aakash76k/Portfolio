import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];
  return(
    <>
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-gray-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            {/* Logo */} 
            <a href="#home" 
            className="text-2xl font-bold tracking-wide text-white">
                Aakash <span className="text-blue-500">.</span>
            </a>

            {/* Desktop Menu */}

            <div className="hidden items-ceenter gap-8 md:flex">
                {navLinks.map((link)=>{
                    <a key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-gray-300 transition hover:text-blue-500">
                        {link.name}
                    </a>
                })}
                <a href="#contact"
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                    Hire Me                 
                </a>
            </div>

            {/* Mobile button */}

            <button onClick={()=> setMenuOpen(!menuOpen)}
                className="text-2xl text-white md:hidden">
                        {menuOpen ? "X" : "☰"}
            </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
            <div className="border-t border-white/10 bg-gray-950 px-6 py-5 md:hidden">
                <div className="flex flex-col gap-5">
                    {navLinks.map((link) => (
                        <a key={link.name}
                        href= {link.href}
                        onClick={()=> setMenuOpen(false)}
                        className="text-gray-300 transition hover:text-blue-500">
                            {link.name}
                        </a>
                    ))}

                    <a href="#contact" 
                    onClick={()=> setMenuOpen(false)}
                    className="rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white">
                        Hire Me
                    </a>
                </div>
            </div>
        )}

        </nav>
    </>
  );
  
};

export default Navbar;
