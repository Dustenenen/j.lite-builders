import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function JcoBuildersSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Modern Residential Home",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1599423300746-b62533397364",
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      ],
    },
    {
      title: "Commercial Building Project",
      images: [
        "https://images.unsplash.com/photo-1590402494682-cd3fb53b4d14",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      ],
    },
    {
      title: "Apartment Complex",
      images: [
        "https://images.unsplash.com/photo-1600585154154-5d1a9f0a7b3e",
        "https://images.unsplash.com/photo-1600585154046-4458b1d59a5d",
        "https://images.unsplash.com/photo-1600585154326-8e4b7c98fa1e",
      ],
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setLightboxOpen(true);
  };

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "auto";
  }, [lightboxOpen]);

  return (
    <div className="font-sans scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-[#7B542F]">J.Lite Builders & Construction Services</h1>
          <nav className="hidden md:flex space-x-6">
            {["Home", "About", "Projects", "Services", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 hover:text-[#7B542F] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="bg-white shadow-md md:hidden flex flex-col space-y-4 p-4">
            {["Home", "About", "Projects", "Services", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 hover:text-[#7B542F]"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4"
      >
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-[#7B542F]"
        >
          Building Dreams with Precision
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 1 }}
          className="text-gray-700 mt-4 max-w-2xl"
        >
          Your trusted partner in construction excellence, delivering quality,
          reliability, and value in every project.
        </motion.p>
        <button className="mt-6 px-6 py-3 bg-[#7B542F] text-white rounded-lg hover:bg-[#5e4024] transition">
          View Projects
        </button>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center text-[#7B542F] mb-10"
        >
          About Us
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 1 }}
          className="text-center text-gray-700 max-w-3xl mx-auto text-lg"
        >
          At J.Lite Builders & Construction Services, we are dedicated to crafting durable, elegant, and
          modern structures that stand the test of time. With years of
          experience and a passion for quality, we transform visions into
          reality, ensuring client satisfaction in every project we handle.
        </motion.p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-gray-100">
        <h3 className="text-4xl font-extrabold text-center text-[#7B542F] mb-12">
          Our Projects
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 + i * 0.2 }}
              onClick={() => handleProjectClick(project)}
              className="cursor-pointer hover:shadow-2xl transition"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl"
              />
              <h4 className="font-semibold text-xl text-[#7B542F] mt-4 text-center">
                {project.title}
              </h4>
              <p className="text-gray-600 text-center text-sm mt-1">
                Click to view gallery
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50">
          <button
            className="text-white absolute top-5 right-5 text-3xl"
            onClick={() => setLightboxOpen(false)}
          >
            &times;
          </button>
          <h4 className="text-white text-2xl mb-6 font-bold">
            {selectedProject.title}
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {selectedProject.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={selectedProject.title}
                className="w-72 h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      )}

      {/* Services */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-4xl font-extrabold text-center text-[#7B542F] mb-12">
          Our Services
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Residential Construction",
            "Commercial Development",
            "Renovation & Design",
          ].map((service, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 + i * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition"
            >
              <h4 className="font-semibold text-2xl text-[#7B542F] mb-3 text-center">
                {service}
              </h4>
              <p className="text-gray-600 text-center">
                Delivering quality construction services tailored to meet your
                project needs.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-gray-100">
        <h3 className="text-4xl font-extrabold text-center text-[#7B542F] mb-12">
          Contact Us
        </h3>
        <form className="max-w-3xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="border p-3 rounded-lg"
          ></textarea>
          <button className="bg-[#7B542F] hover:bg-[#5e4024] text-white py-3 rounded-lg">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#7B542F] text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} J.Lite Builders & Construction Services. All rights reserved.</p>
      </footer>
    </div>
  );
}
