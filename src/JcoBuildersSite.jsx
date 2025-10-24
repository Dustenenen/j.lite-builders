import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";

// Importing images for each sections of placeholder
import uap14 from "./assets/images/uap/uap14.webp";
import uap1 from "./assets/images/uap/uap1.jpg";
import uap2 from "./assets/images/uap/uap2.jpg";
import uap3 from "./assets/images/uap/uap3.jpg";
import uap4 from "./assets/images/uap/uap4.jpg";
import uap5 from "./assets/images/uap/uap5.jpg";
import uap6 from "./assets/images/uap/uap6.jpg";
import uap7 from "./assets/images/uap/uap7.jpg";
import uap8 from "./assets/images/uap/uap8.jpg";
import uap9 from "./assets/images/uap/uap9.jpg";
import uap10 from "./assets/images/uap/uap10.jpg";
import uap11 from "./assets/images/uap/uap11.jpg";
import uap12 from "./assets/images/uap/uap12.webp";
import uap13 from "./assets/images/uap/uap13.webp";
import structural from "./assets/images/uap/structural.jpg";
import welding from "./assets/images/uap/welding.jpg";
import metal from "./assets/images/uap/metal.jpg";


export default function JcoBuildersSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      title: "Modern Residential Home",
      location: "Taguig City",
      description: "A sleek, modern residential house built for comfort and style.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1599423300746-b62533397364",
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      ],
    },
    {
      title: "Pacific Village",
      location: "Alabang",
      description: "Residential Home Renovation.",
      images: [
        "https://images.unsplash.com/photo-1590402494682-cd3fb53b4d14",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6791",
      ],
    },
    {
      title: "United Architects of the Philippines",
      location: "Quezon City, Tomas Morato",
      description: "A well-designed renovated complex with attention to modern details.",
      images: [
        uap14,
        uap1,
        uap2,
        uap3,
        uap4,
        uap5,
        uap6,
        uap7,
        uap8,
        uap9,
        uap10,
        uap11,
        uap12,
        uap13,
      ],
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImage(0);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "auto";
  }, [lightboxOpen]);

  return (
    <div className="font-sans scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-[#16476A]">
            J.Lite Builders & Construction Services
          </h1>
          <nav className="hidden md:flex space-x-6">
            {["Home", "About", "Projects", "Services", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 hover:text-[#132440] transition-colors"
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

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4"
      >
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-[#16476A]"
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
        <a
          href="#projects"
          className="mt-6 px-6 py-3 bg-[#16476A] text-white rounded-lg hover:bg-[#132440] transition"
        >
          View Projects
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center text-[#16476A] mb-10"
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
          At J.Lite Builders & Construction Services, we craft durable, elegant,
          and modern structures that stand the test of time. With years of
          experience and a passion for quality, we turn visions into reality.
          Our team takes pride in every build — from residential homes to
          large-scale commercial projects — ensuring satisfaction, precision,
          and reliability.
        </motion.p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-gray-100">
        <h3 className="text-4xl font-extrabold text-center text-[#16476A] mb-12">
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
              className="bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer transition overflow-hidden"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h4 className="font-semibold text-xl text-[#132440] mb-1">
                  {project.title}
                </h4>
                <p className="text-[#16476A] text-sm font-medium mb-2">
                  📍 {project.location}
                </p>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 p-4">
          <button
            className="text-white absolute top-5 right-5 text-3xl"
            onClick={() => setLightboxOpen(false)}
          >
            &times;
          </button>
          <h4 className="text-white text-2xl mb-4 font-bold text-center">
            {selectedProject.title}
          </h4>

          <div className="relative w-full max-w-4xl flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-5 text-white bg-black/40 hover:bg-black/70 rounded-full p-2"
            >
              <ChevronLeft size={30} />
            </button>
            <img
              src={selectedProject.images[currentImage]}
              alt="Project"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <button
              onClick={handleNext}
              className="absolute right-2 md:right-5 text-white bg-black/40 hover:bg-black/70 rounded-full p-2"
            >
              <ChevronRight size={30} />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-6 flex-wrap justify-center">
            {selectedProject.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumbnail"
                onClick={() => setCurrentImage(i)}
                className={`w-24 h-16 object-cover rounded-md cursor-pointer transition border-2 ${
                  i === currentImage ? "border-white" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Services */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-4xl font-extrabold text-center text-[#16476A] mb-12">
          Our Services
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Construction & Structural Works",
              desc: "Delivering quality civil, electrical, and plumbing solutions built on strength and precision.",
              img: structural,
            },
            {
              title: "Finishing & Interior Craftsmanship",
              desc: "Expert carpentry, welding, painting, and tiling to complete your project with style and durability.",
              img: welding,
            },
            {
              title: "Metal & Fabrication Services",
              desc: "Providing metal stud framing, furring, and custom fabrication for modern, reliable builds.",
              img: metal,
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 + i * 0.2 }}
              className="relative rounded-xl overflow-hidden h-80 cursor-pointer group"
            >
              <img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:brightness-40 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-8">
                <h4 className="font-semibold text-2xl mb-3">
                  {service.title}
                </h4>
                <p className="max-w-sm text-sm opacity-90">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            Interested in working with us? Get in touch today.
          </p>
          <p className="text-gray-800 font-medium">
            Email:{" "}
            <a
              href="mailto:info@jlitebuilders.com"
              className="text-blue-700"
            >
              jlitebuilders@gmail.com
            </a>
          </p>
          <p className="text-gray-800 font-medium">Phone: +63 977-366-4329</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#16476A] text-white text-center py-6">
        <p>
          &copy; {new Date().getFullYear()} J.Lite Builders & Construction
          Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
