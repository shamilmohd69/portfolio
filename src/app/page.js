"use client";
import { motion } from "framer-motion";
import ClickSpark from "@/components/ClickSpark";
import Navbar from "@/components/NavBar";
import { Spotlight } from "@/components/Spotlight";
import Hero from "@/components/Hero";
import MyProjects from "@/components/MyProjects";
import AboutMe from "@/components/AboutMe";


export default function Portfolio() {

  return (
    <ClickSpark sparkColor='#fff' sparkSize={10} sparkRadius={15} sparkCount={7} duration={500}>
      <Spotlight />
      <Navbar />
      <div className="text-white font-sans">
        <Hero />
        <AboutMe />
        <MyProjects />

        {/* Contact Section */}
        <section id="contact" className="p-20">
          <motion.h2 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold">
            Contact Me
          </motion.h2>
          <p className="mt-4 text-lg text-gray-300">Lets work together! Reach me at <span className="text-blue-400">shamil@example.com</span></p>
        </section>
      </div>
    </ClickSpark>
  );
}