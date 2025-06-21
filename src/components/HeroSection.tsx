import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  onScrollDown?: () => void;
}

const HeroSection = ({
  name = "MD. JAMIL KHAN",
  title = "Data Scientist",
  onScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full bg-black flex flex-col justify-center items-center overflow-hidden">
      {/* Background neural network effect */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80')] bg-cover bg-center"></div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
        <div className="text-2xl font-bold text-white">JK</div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="#services"
              className="text-white hover:text-blue-300 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-white hover:text-blue-300 transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="text-white hover:text-blue-300 transition-colors"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-blue-300 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero content */}
      <div className="z-10 text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {name}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-blue-200 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {title}
        </motion.p>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 cursor-pointer"
        onClick={onScrollDown}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-white w-10 h-10" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
