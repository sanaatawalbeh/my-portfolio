// src/pages/Home.jsx
import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
  FiMapPin,
  FiPhone,
  FiCode,
  FiServer,
  FiLayout,
  FiZap,
  FiDownload,
} from "react-icons/fi";

import EducationSection from "./Education";
import CertificationsSection from "./Certifications";
import SkillsSection from "./Skills";
import ProjectsSection from "./Projects";
import ContactSection from "./Contact";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const slideInRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const mode = useSelector((state) => state.theme.mode);
  const isDark = mode === "dark";
const handleContactScroll = (e) => {
  e.preventDefault();

  const contactSection = document.getElementById("contact");
  if (contactSection) {
    window.scrollTo({
      top: contactSection.offsetTop - 80,
      behavior: "smooth",
    });
  }
};

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 pt-24 lg:pt-28">
        {/* سكشن الهوم */}
        <motion.section
          id="home"
          className="flex flex-col gap-8 lg:gap-12 xl:flex-row xl:items-start xl:justify-between"
          variants={containerVariants}
        >
          {/* Left side: info */}
          <motion.section className="flex-1 space-y-8" variants={slideInLeft}>
            {/* Name + titles */}
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.div className="space-y-4" variants={itemVariants}>
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl">
                  <motion.span
                    className="block bg-gradient-to-r from-purple-500 to-fuchsia-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Sana&apos;a Tawalbeh
                  </motion.span>
                </h1>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={`text-lg font-semibold sm:text-xl md:text-2xl ${
                    isDark ? "text-purple-200" : "text-purple-700"
                  }`}
                >
                  Full Stack Web Developer
                </motion.h2>
              </motion.div>

              {/* Contact chips: location + phone + email */}
              <motion.div
                className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm"
                variants={containerVariants}
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 transition-all duration-300 ${
                    isDark
                      ? "border-purple-700/50 bg-purple-900/30 hover:bg-purple-800/40 hover:border-purple-600"
                      : "border-purple-200 bg-purple-50/80 hover:bg-purple-100 hover:border-purple-300"
                  }`}
                >
                  <FiMapPin
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${
                      isDark ? "text-purple-400" : "text-purple-600"
                    }`}
                  />
                  <span className="whitespace-nowrap">Amman, Jordan</span>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 transition-all duration-300 ${
                    isDark
                      ? "border-purple-700/50 bg-purple-900/30 hover:bg-purple-800/40 hover:border-purple-600"
                      : "border-purple-200 bg-purple-50/80 hover:bg-purple-100 hover:border-purple-300"
                  }`}
                >
                  <FiPhone
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${
                      isDark ? "text-purple-400" : "text-purple-600"
                    }`}
                  />
                  <span className="whitespace-nowrap">+962 7 8536 7250</span>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 transition-all duration-300 ${
                    isDark
                      ? "border-purple-700/50 bg-purple-900/30 hover:bg-purple-800/40 hover:border-purple-600"
                      : "border-purple-200 bg-purple-50/80 hover:bg-purple-100 hover:border-purple-300"
                  }`}
                >
                  <FiMail
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${
                      isDark ? "text-purple-400" : "text-purple-600"
                    }`}
                  />
                  <span className="truncate max-w-[140px] sm:max-w-none">
                    sanaatawalbeh0@gmail.com
                  </span>
                </motion.div>
              </motion.div>

              {/* Description */}
              <motion.div className="max-w-2xl" variants={itemVariants}>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  Passionate about building clean, responsive web applications
                  using React, Node.js, and modern tooling. Focused on intuitive
                  UX, scalable architectures, and turning ideas into
                  production-ready web experiences.
                </p>
              </motion.div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4"
              variants={containerVariants}
            >
              {/* Download CV */}
              <motion.a
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  y: -1,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.97 }}
                href="SanaaTawalbehCV.pdf"
                download="SanaaTawalbehCV.pdf"
                className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-700 px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40"
              >
                <FiDownload className="w-3 h-3 sm:w-4 sm:h-4" />
                Download CV
              </motion.a>

              {/* View Projects */}
              <motion.a
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  y: -1,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className={`inline-flex items-center gap-2 sm:gap-3 rounded-full border px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 ${
                  isDark
                    ? "border-purple-600 bg-purple-900/30 text-purple-100 hover:bg-purple-800/50 hover:border-purple-500"
                    : "border-purple-300 bg-white text-purple-800 hover:bg-purple-50 hover:border-purple-400"
                }`}
              >
                View Projects
                <FiArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.a>
            </motion.div>
          </motion.section>

          {/* Right side: services card */}
          <motion.section
            className="mt-8 flex flex-1 justify-center lg:mt-0"
            variants={slideInRight}
          >
            <motion.div
              whileHover={{ y: -5 }}
              className={`relative w-full max-w-md lg:max-w-lg xl:max-w-md overflow-hidden rounded-2xl sm:rounded-3xl border p-4 sm:p-6 shadow-xl h-fit ${
                isDark
                  ? "border-purple-900/60 bg-gradient-to-br from-slate-900 via-purple-950/40 to-slate-950"
                  : "border-purple-100 bg-gradient-to-br from-white via-purple-50/80 to-white"
              }`}
            >
              {/* Background effects */}
              <motion.div
                className="pointer-events-none absolute -right-20 -top-20 h-32 w-32 rounded-full bg-gradient-to-tr from-purple-500/20 to-fuchsia-500/20 blur-2xl"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
              <motion.div
                className="pointer-events-none absolute -left-20 -bottom-20 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/15 to-fuchsia-500/15 blur-2xl"
                animate={{
                  rotate: -360,
                  scale: [1.1, 1, 1.1],
                }}
                transition={{
                  rotate: {
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />

              <div className="relative z-10">
                {/* Header */}
                <motion.div
                  className="text-center mb-4 sm:mb-6"
                  variants={itemVariants}
                >
                  <h3
                    className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    What I Do
                  </h3>
                  <p
                    className={`text-xs sm:text-sm ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    Services & Expertise
                  </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                  className="grid gap-2 sm:gap-3"
                  variants={containerVariants}
                >
                  {/* Frontend Development */}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    className={`flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 ${
                      isDark
                        ? "bg-slate-800/50 hover:bg-slate-800/70"
                        : "bg-white hover:bg-purple-50"
                    }`}
                  >
                    <div
                      className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg ${
                        isDark ? "bg-purple-900/50" : "bg-purple-100"
                      }`}
                    >
                      <FiCode
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          isDark ? "text-purple-300" : "text-purple-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`font-semibold mb-0.5 sm:mb-1 text-xs sm:text-sm ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        Frontend Development
                      </h4>
                      <p
                        className={`text-xs ${
                          isDark ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        React, JavaScript, Tailwind CSS, Responsive Design
                      </p>
                    </div>
                  </motion.div>

                  {/* Backend Development */}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    className={`flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 ${
                      isDark
                        ? "bg-slate-800/50 hover:bg-slate-800/70"
                        : "bg-white hover:bg-purple-50"
                    }`}
                  >
                    <div
                      className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg ${
                        isDark ? "bg-purple-900/50" : "bg-purple-100"
                      }`}
                    >
                      <FiServer
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          isDark ? "text-purple-300" : "text-purple-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`font-semibold mb-0.5 sm:mb-1 text-xs sm:text-sm ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        Backend Development
                      </h4>
                      <p
                        className={`text-xs ${
                          isDark ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        Node.js, Express, PostgreSQL, REST APIs
                      </p>
                    </div>
                  </motion.div>

                  {/* UI/UX Design */}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    className={`flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 ${
                      isDark
                        ? "bg-slate-800/50 hover:bg-slate-800/70"
                        : "bg-white hover:bg-purple-50"
                    }`}
                  >
                    <div
                      className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg ${
                        isDark ? "bg-purple-900/50" : "bg-purple-100"
                      }`}
                    >
                      <FiLayout
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          isDark ? "text-purple-300" : "text-purple-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`font-semibold mb-0.5 sm:mb-1 text-xs sm:text-sm ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        UI/UX Design
                      </h4>
                      <p
                        className={`text-xs ${
                          isDark ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        User-centered design, Prototyping, Wireframing
                      </p>
                    </div>
                  </motion.div>

                  {/* Web Performance */}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    className={`flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 ${
                      isDark
                        ? "bg-slate-800/50 hover:bg-slate-800/70"
                        : "bg-white hover:bg-purple-50"
                    }`}
                  >
                    <div
                      className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg ${
                        isDark ? "bg-purple-900/50" : "bg-purple-100"
                      }`}
                    >
                      <FiZap
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          isDark ? "text-purple-300" : "text-purple-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`font-semibold mb-0.5 sm:mb-1 text-xs sm:text-sm ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        Web Performance
                      </h4>
                      <p
                        className={`text-xs ${
                          isDark ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        Optimization, SEO, Core Web Vitals
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`mt-3 sm:mt-4 p-2 sm:p-3 rounded-lg sm:rounded-xl text-center ${
                    isDark ? "bg-purple-900/30" : "bg-purple-50"
                  }`}
                >
                  <p
                    className={`text-xs font-medium mb-1 sm:mb-2 ${
                      isDark ? "text-purple-200" : "text-purple-700"
                    }`}
                  >
                    Ready to start your project?
                  </p>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleContactScroll}
                    className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-2.5 sm:px-3 py-1 text-xs font-semibold transition-all duration-300 ${
                      isDark
                        ? "bg-purple-600 text-white hover:bg-purple-700"
                        : "bg-purple-500 text-white hover:bg-purple-600"
                    }`}
                  >
                    <FiMail className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    Let&apos;s Talk
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.section>
        </motion.section>

        {/* Sections with scroll-triggered animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <EducationSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <CertificationsSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <SkillsSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <ProjectsSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <ContactSection />
        </motion.div>
      </div>
    </motion.main>
  );
}
