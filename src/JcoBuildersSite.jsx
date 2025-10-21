import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";

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
      title: "Commercial Building Project",
      location: "Makati City",
      description: "A multi-story commercial structure emphasizing efficiency and durability.",
      images: [
        "https://images.unsplash.com/photo-1590402494682-cd3fb53b4d14",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6791",
      ],
    },
    {
      title: "Apartment Complex",
      location: "Quezon City",
      description: "A well-designed apartment complex offering modern living spaces.",
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

      {/* Our Projects */}
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

      {/* Lightbox Gallery */}
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
    </div>
  );
}
