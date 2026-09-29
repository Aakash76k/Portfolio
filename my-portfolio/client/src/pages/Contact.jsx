
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Contact{" "}
            <span className="text-cyan-400">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Have a project idea, job opportunity, or just want to say hello?
            Feel free to reach out. I would love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <div
            data-aos="fade-right"
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl sm:p-8"
          >
            <h3 className="text-2xl font-bold">
              Let's{" "}
              <span className="text-cyan-400">
                Connect
              </span>
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              I'm always open to discussing new projects, creative ideas,
              opportunities, and collaborations.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-6">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                  📧
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <a
                    href="mailto:your@email.com"
                    className="mt-1 block break-all text-sm font-medium text-slate-200 transition hover:text-cyan-400 sm:text-base"
                  >
                    aakash76k747@email.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                  📍
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200 sm:text-base">
                    Faridabad, Haryana, India
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                  💼
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Availability
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200 sm:text-base">
                    Open to opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 border-t border-slate-800 pt-7">
              <p className="mb-4 text-sm text-slate-500">
                Follow Me
              </p>

              <div className="flex flex-wrap gap-3">

                <a
                  href="#"
                  className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  LinkedIn
                </a>

                <a
                  href="#"
                  className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  Instagram
                </a>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            data-aos="fade-left"
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl sm:p-8"
          >
            <h3 className="text-2xl font-bold">
              Send Me a{" "}
              <span className="text-cyan-400">
                Message
              </span>
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 active:scale-[0.98]"
              >
                Send Message →
              </button>

            </form>
          </div>
        </div>

        {/* Bottom */}
        <div
          data-aos="fade-up"
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500">
            Let's build something amazing together 🚀
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;


