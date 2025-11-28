// src/pages/Certifications.jsx
import React from "react";
import { useSelector } from "react-redux";
import {
  FiMapPin,
  FiCalendar,
  FiCode,
  FiLayers,
  FiAward,
  FiExternalLink,
  FiCheckCircle,
} from "react-icons/fi";

export default function Certifications() {
  const mode = useSelector((state) => state.theme.mode);
  const isDark = mode === "dark";

  const certifications = [
    {
      id: 1,
      title: "Advanced JavaScript & Full-Stack Web Development",
      organization: "LTUC (Luminus Technical University College)",
      role: "Full Stack Web Developer Training",
      location: "Amman, Jordan",
      period: "May 2025 – Nov 2025",
      duration: "6 Months",
      icon: FiCode,
      status: "completed",
      skills: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "JavaScript",
        "REST APIs",
      ],
      projects: [
        "Flavor Table – Recipe sharing platform",
        "TeamFlow – Project management tool",
        "Qwukko – Social media application",
      ],
      achievements: [
        "Built and deployed 3 full-stack applications",
        "Implemented JWT authentication & bcrypt security",
        "Mastered Git/GitHub workflow and collaboration",
      ],
      color: "from-purple-500 to-fuchsia-600",
    },
    {
      id: 2,
      title: "Full Stack Web Development – C#",
      organization: "OYIL (Orange Yarmouk Innovation Lab)",
      role: "Full Stack Web Developer – C#",
      location: "Irbid, Jordan",
      period: "Feb 2024 – Jun 2024",
      duration: "4 Months",
      icon: FiLayers,
      status: "completed",
      skills: [
        "ASP.NET MVC",
        "C#",
        "SQL Server",
        "MySQL",
        "REST APIs",
        "Authentication",
      ],
      projects: [
        "Quizify – Online quiz platform built with ASP.NET MVC",
        "ST Hospital – Hospital management website using MVC architecture",
        "ST Bank System – Web-based banking management system",
      ],
      achievements: [
        "Developed RESTful APIs integration",
        "Implemented role-based authentication",
        "Optimized database design and performance",
      ],
      color: "from-blue-500 to-cyan-600",
    },
  ];

  const StatusBadge = ({ status }) => (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border-2 transition-all duration-300 ${
        status === "completed"
          ? isDark
            ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
            : "bg-emerald-100 text-emerald-700 border-emerald-300"
          : isDark
          ? "bg-amber-500/10 text-amber-300 border-amber-500/30"
          : "bg-amber-100 text-amber-700 border-amber-300"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full ${
          status === "completed"
            ? "bg-emerald-400"
            : "bg-amber-400 animate-pulse"
        }`}
      />
      {status === "completed" ? "Completed" : "Upcoming"}
    </div>
  );

  return (
    <section
      id="certifications"
      className={`min-h-screen py-12 sm:py-16 lg:py-20 ${
        isDark
          ? "bg-gradient-to-br from-slate-950 to-purple-950/20"
          : "bg-gradient-to-br from-slate-50 to-blue-50/30"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* العنوان المحسن */}
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4">
            <div
              className={`w-8 sm:w-12 h-0.5 rounded-full ${
                isDark ? "bg-purple-500" : "bg-purple-400"
              }`}
            ></div>
            <span
              className={`text-xs sm:text-sm font-semibold uppercase tracking-wider ${
                isDark ? "text-purple-300" : "text-purple-600"
              }`}
            >
              Professional Development
            </span>
            <div
              className={`w-8 sm:w-12 h-0.5 rounded-full ${
                isDark ? "bg-purple-500" : "bg-purple-400"
              }`}
            ></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Intensive training programs and hands-on internships that shaped my
            full-stack development expertise across modern technologies
          </p>
        </div>

        {/* الكروت المحسنة */}
        <div className="space-y-6 sm:space-y-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 p-4 sm:p-6 lg:p-8 shadow-xl sm:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${
                isDark
                  ? "border-slate-700 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm"
                  : "border-slate-200 bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-sm"
              }`}
            >
              {/* Effects */}
              <div
                className={`pointer-events-none absolute -right-20 -top-20 h-32 sm:h-40 w-32 sm:w-40 rounded-full bg-gradient-to-tr ${cert.color}/20 blur-2xl`}
              />
              <div
                className={`pointer-events-none absolute -left-20 -bottom-20 h-32 sm:h-40 w-32 sm:w-40 rounded-full bg-gradient-to-br ${cert.color}/20 blur-2xl`}
              />

              <div className="relative z-10">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="space-y-3 sm:space-y-4 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-wrap">
                      <div
                        className={`inline-flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border px-3 sm:px-4 py-1.5 sm:py-2.5 text-xs sm:text-sm font-semibold ${
                          isDark
                            ? "border-slate-600 bg-slate-800/50 text-slate-200"
                            : "border-slate-300 bg-white text-slate-700"
                        }`}
                      >
                        <cert.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="truncate">{cert.title}</span>
                      </div>
                      <StatusBadge status={cert.status} />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
                        {cert.organization}
                      </h3>
                      <p
                        className={`text-base sm:text-lg md:text-xl font-semibold ${
                          isDark ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {cert.role}
                      </p>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 text-sm sm:text-base">
                      <span className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-slate-800/50 dark:bg-slate-800/30">
                        <FiMapPin className="text-purple-500 w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="whitespace-nowrap">
                          {cert.location}
                        </span>
                      </span>
                      <span className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-slate-800/50 dark:bg-slate-800/30">
                        <FiCalendar className="text-purple-500 w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="whitespace-nowrap">{cert.period}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-slate-800/50 dark:bg-slate-800/30">
                        <FiAward className="text-purple-500 w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="whitespace-nowrap">
                          {cert.duration}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {/* Skills */}
                  <div>
                    <h4
                      className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2 ${
                        isDark ? "text-slate-200" : "text-slate-800"
                      }`}
                    >
                      <FiCode className="text-purple-500 w-4 h-4" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className={`inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                            isDark
                              ? "bg-purple-900/40 text-purple-200 border border-purple-700/50 hover:bg-purple-800/40"
                              : "bg-purple-100 text-purple-700 border border-purple-200 hover:bg-purple-200"
                          }`}
                        >
                          <FiCheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h4
                      className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2 ${
                        isDark ? "text-slate-200" : "text-slate-800"
                      }`}
                    >
                      <FiLayers className="text-purple-500 w-4 h-4" />
                      Key Projects
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {cert.projects.map((project, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm"
                        >
                          <FiExternalLink
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 mt-0.5 sm:mt-1 flex-shrink-0 ${
                              isDark ? "text-purple-400" : "text-purple-500"
                            }`}
                          />
                          <span
                            className={
                              isDark ? "text-slate-300" : "text-slate-600"
                            }
                          >
                            {project}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4
                      className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2 ${
                        isDark ? "text-slate-200" : "text-slate-800"
                      }`}
                    >
                      <FiAward className="text-purple-500 w-4 h-4" />
                      Achievements
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {cert.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 ${
                              isDark ? "bg-purple-400" : "bg-purple-500"
                            }`}
                          />
                          <span
                            className={
                              isDark ? "text-slate-300" : "text-slate-600"
                            }
                          >
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
              Ready for the Next Challenge
            </h3>
            <p
              className={`text-sm sm:text-base lg:text-lg ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Continuously expanding my skills and taking on new technologies to
              build innovative web solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
