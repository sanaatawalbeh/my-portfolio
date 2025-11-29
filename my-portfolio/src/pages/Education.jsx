// src/sections/EducationSection.jsx
import React from "react";
import { useSelector } from "react-redux";
import {
  FiCalendar,
  FiMapPin,
  FiAward,
  FiCpu,
  FiBook,
  FiClock,
  FiTrendingUp,
} from "react-icons/fi";

export default function EducationSection() {
  const mode = useSelector((state) => state.theme.mode);
  const isDark = mode === "dark";

  const courses = [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Database Systems",
    "Web Development",
    "Computer Networks",
    "Operating Systems",
  ];

  const academicStats = [
    {
      icon: FiAward,
      label: "GPA",
      value: "74%",
      desc: "Good",
      color: "text-emerald-400",
    },
    {
      icon: FiBook,
      label: "Credit Hours",
      value: "+160",
      desc: "Completed",
      color: "text-blue-400",
    },
    {
      icon: FiClock,
      label: "Duration",
      value: "5 Years",
      desc: "2019 - 2024",
      color: "text-purple-400",
    },
    {
      icon: FiTrendingUp,
      label: "Attendance",
      value: "+90%",
      desc: "Overall",
      color: "text-amber-400",
    },
  ];

  return (
    <section
      id="education"
      className={`min-h-screen py-16 sm:py-20 ${
        isDark
          ? "bg-gradient-to-br from-slate-950 to-purple-950/20"
          : "bg-gradient-to-br from-slate-50 to-purple-50/50"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
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
              Academic Journey
            </span>
            <div
              className={`w-8 sm:w-12 h-0.5 rounded-full ${
                isDark ? "bg-purple-500" : "bg-purple-400"
              }`}
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Building a strong foundation in computer engineering through
            comprehensive academic training and practical, project-based
            experience.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main Education Card */}
          <div className="w-full lg:w-2/3">
            <div
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 p-6 sm:p-8 shadow-xl sm:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${
                isDark
                  ? "border-purple-500/30 bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-slate-900/80 backdrop-blur-sm"
                  : "border-purple-200 bg-gradient-to-br from-white via-purple-50/50 to-white backdrop-blur-sm"
              }`}
            >
              {/* Effects */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-32 sm:h-40 w-32 sm:w-40 rounded-full bg-gradient-to-tr from-purple-500/30 via-fuchsia-500/20 to-purple-700/30 blur-2xl" />
              <div className="pointer-events-none absolute -left-20 -bottom-20 h-32 sm:h-40 w-32 sm:w-40 rounded-full bg-gradient-to-br from-purple-400/20 via-fuchsia-400/20 to-purple-700/20 blur-2xl" />

              <div className="relative z-10 space-y-6 sm:space-y-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-2 sm:space-y-3">
                    <div
                      className={`inline-flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border px-3 sm:px-4 py-1.5 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                        isDark
                          ? "border-purple-600/50 bg-purple-900/40 text-purple-200 hover:bg-purple-800/40"
                          : "border-purple-300 bg-purple-100 text-purple-700 hover:bg-purple-200"
                      }`}
                    >
                      <FiAward className="w-3 h-3 sm:w-4 sm:h-4" />
                      Bachelor's Degree
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
                      Computer Engineering
                    </h3>

                    <p
                      className={`text-lg sm:text-xl md:text-2xl font-semibold ${
                        isDark ? "text-purple-300" : "text-purple-600"
                      }`}
                    >
                      Yarmouk University
                    </p>
                  </div>

                  {/* Status Badge */}
                  <div
                    className={`inline-flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold border-2 transition-all duration-300 ${
                      isDark
                        ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20"
                        : "bg-emerald-100 text-emerald-700 border-emerald-300 hover:bg-emerald-200"
                    }`}
                  >
                    <span className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-emerald-400 animate-pulse" />
                    Graduated 2024
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-wrap gap-3 sm:gap-4 text-sm sm:text-base">
                  <span className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-slate-800/50 dark:bg-slate-800/30">
                    <FiMapPin className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium whitespace-nowrap">
                      Irbid, Jordan
                    </span>
                  </span>

                  <span className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-slate-800/50 dark:bg-slate-800/30">
                    <FiCalendar className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium whitespace-nowrap">
                      2019 – 2024
                    </span>
                  </span>

                  <span className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-slate-800/50 dark:bg-slate-800/30">
                    <FiAward className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium whitespace-nowrap">
                      GPA: <strong>Good (74%)</strong>
                    </span>
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`text-sm sm:text-base lg:text-lg leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  Completed a comprehensive computer engineering program over 4
                  years, combining strong theoretical foundations with hands-on
                  experience. Focused on modern web technologies, algorithms,
                  and system design, with multiple real-world projects and
                  teamwork experience.
                </p>

                {/* Key Courses */}
                <div>
                  <h4
                    className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${
                      isDark ? "text-slate-200" : "text-slate-800"
                    }`}
                  >
                    Key Courses & Specializations
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {courses.map((course, index) => (
                      <div
                        key={index}
                        className={`inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 ${
                          isDark
                            ? "bg-slate-800/50 hover:bg-slate-700/50"
                            : "bg-white hover:bg-purple-50 border border-slate-200"
                        }`}
                      >
                        <FiCpu className="text-purple-500 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span
                          className={`font-medium text-xs sm:text-sm ${
                            isDark ? "text-slate-300" : "text-slate-700"
                          }`}
                        >
                          {course}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards - Right side on desktop, below on mobile */}
          <div className="w-full lg:w-1/3">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
              {academicStats.map((stat, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "bg-slate-900/50 border border-slate-700/50"
                      : "bg-white border border-slate-200 shadow-sm"
                  }`}
                >
                  <div className="relative z-10 space-y-2 sm:space-y-3 text-center">
                    <div className="flex justify-center">
                      <stat.icon
                        className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`}
                      />
                    </div>
                    <div className="space-y-1">
                      <p
                        className={`text-lg sm:text-2xl font-bold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {stat.value}
                      </p>
                      <p
                        className={`text-xs sm:text-sm font-medium ${
                          isDark ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        {stat.label}
                      </p>
                      <p
                        className={`text-xs ${
                          isDark ? "text-slate-500" : "text-slate-500"
                        }`}
                      >
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                  {/* Background effects */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-gradient-to-tr from-purple-500/10 to-transparent blur-xl" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center">
          <div
            className={`inline-block max-w-2xl rounded-xl sm:rounded-2xl px-6 sm:px-8 py-4 sm:py-6 ${
              isDark ? "bg-slate-900/50" : "bg-white/80"
            }`}
          >
            <p
              className={`text-sm sm:text-base lg:text-lg italic ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              "Engineering education taught me not just how to code, but how to
              think systematically and solve complex problems with elegant
              solutions."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
