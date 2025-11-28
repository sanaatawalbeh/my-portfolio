// src/sections/SkillsSection.jsx
import React from "react";
import { useSelector } from "react-redux";
import {
  FiCode,
  FiUsers,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiMessageCircle,
  FiClock,
  FiRefreshCw,
  FiSearch,
  FiTarget,
  FiZap,
  FiStar,
} from "react-icons/fi";

export default function SkillsSection() {
  const mode = useSelector((state) => state.theme.mode);
  const isDark = mode === "dark";

  const expertiseAreas = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      skills: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Bootstrap",
        "HTML5/CSS3",
      ],
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs",
      skills: [
        "Node.js",
        "Express.js",
        "C#",
        "ASP.NET",
        "REST APIs",
        "WebSockets",
      ],
    },
    {
      title: "Database & Cloud Management",
      description: "Designing and optimizing data and cloud-backed systems",
      skills: [
        "PostgreSQL",
        "SQL Server",
        "MySQL",
        "Firebase",
        "Database Design",
      ],
    },
    {
      title: "Full Stack Integration",
      description: "Connecting frontend and backend seamlessly",
      skills: [
        "API Integration",
        "Authentication",
        "Deployment",
        "System Architecture",
      ],
    },
  ];

  const softSkills = [
    { skill: "Effective Communication", icon: FiMessageCircle },
    { skill: "Teamwork & Collaboration", icon: FiUsers },
    { skill: "Problem Solving", icon: FiSearch },
    { skill: "Time Management", icon: FiClock },
    { skill: "Adaptability", icon: FiRefreshCw },
    { skill: "Attention to Detail", icon: FiStar },
    { skill: "Ownership & Responsibility", icon: FiTarget },
    { skill: "Fast Learning", icon: FiZap },
  ];

  return (
    <section
      id="skills"
      className={`min-h-screen py-12 sm:py-16 lg:py-20 ${
        isDark
          ? "bg-gradient-to-br from-slate-950 to-purple-950/20"
          : "bg-gradient-to-br from-slate-50 to-blue-50/30"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4">
            <div
              className={`w-8 sm:w-12 h-0.5 rounded-full ${
                isDark ? "bg-purple-500" : "bg-purple-400"
              }`}
            />
            <span
              className={`text-xs sm:text-sm font-semibold uppercase tracking-wider ${
                isDark ? "text-purple-300" : "text-purple-600"
              }`}
            >
              Technical Arsenal
            </span>
            <div
              className={`w-8 sm:w-12 h-0.5 rounded-full ${
                isDark ? "bg-purple-500" : "bg-purple-400"
              }`}
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A comprehensive toolkit of programming languages, frameworks, and
            technologies that I leverage to build robust and scalable web
            applications
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl border-2 p-4 sm:p-6 transition-all duration-500 hover:scale-105 group ${
                isDark
                  ? "border-slate-700 bg-slate-900/50 hover:border-purple-500/50"
                  : "border-slate-200 bg-white hover:border-purple-300"
              }`}
            >
              <div className="space-y-3 sm:space-y-4">
                <h3
                  className={`text-base sm:text-lg font-bold ${
                    isDark ? "text-slate-100" : "text-slate-800"
                  }`}
                >
                  {area.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? "bg-purple-900/40 text-purple-300 border border-purple-700/50"
                          : "bg-purple-100 text-purple-700 border border-purple-200"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div
          className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 p-6 sm:p-8 ${
            isDark
              ? "border-slate-700 bg-gradient-to-br from-slate-900/80 to-purple-900/20"
              : "border-slate-200 bg-gradient-to-br from-white to-purple-50/50"
          }`}
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-32 sm:h-40 w-32 sm:w-40 rounded-full bg-gradient-to-tr from-purple-500/10 to-fuchsia-500/10 blur-2xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div
                className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${
                  isDark ? "bg-purple-900/40" : "bg-purple-100"
                }`}
              >
                <FiUsers
                  className={`w-4 h-4 sm:w-6 sm:h-6 ${
                    isDark ? "text-purple-400" : "text-purple-600"
                  }`}
                />
              </div>
              <div>
                <h3
                  className={`text-xl sm:text-2xl font-bold ${
                    isDark ? "text-slate-100" : "text-slate-800"
                  }`}
                >
                  Professional Skills
                </h3>
                <p
                  className={`text-xs sm:text-sm ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Personal attributes that enhance technical capabilities and
                  team collaboration
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {softSkills.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.skill}
                    className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 ${
                      isDark
                        ? "bg-slate-800/50 hover:bg-slate-700/50"
                        : "bg-white hover:bg-purple-50 border border-slate-200"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        isDark ? "text-purple-300" : "text-purple-600"
                      }`}
                    />
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {item.skill}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div
            className={`inline-flex flex-col items-center gap-3 sm:gap-4 max-w-2xl rounded-xl sm:rounded-2xl px-6 sm:px-8 py-6 sm:py-8 ${
              isDark ? "bg-slate-900/50" : "bg-white/80"
            }`}
          >
            <h3
              className={`text-xl sm:text-2xl font-bold ${
                isDark ? "text-slate-100" : "text-slate-800"
              }`}
            >
              Ready to Leverage These Skills?
            </h3>
            <p
              className={`text-sm sm:text-base lg:text-lg ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              I&apos;m passionate about applying my technical expertise to solve
              real-world problems and create impactful digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
