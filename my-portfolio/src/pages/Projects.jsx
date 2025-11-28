// src/sections/ProjectsSection.jsx
import React from "react";
import { useSelector } from "react-redux";
import {
  FiGithub,
  FiExternalLink,
  FiCode,
  FiServer,
  FiDatabase,
  FiLayers,
  FiUsers,
} from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiRedux,
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";

export default function ProjectsSection() {
  const mode = useSelector((state) => state.theme.mode);
  const isDark = mode === "dark";

  const projects = [
    {
      name: "Quikko – Local Shopping Platform",
      slug: "Quikko",
      description:
        "Full-stack e-commerce platform that unifies local stores with customer, vendor, delivery, and admin dashboards.",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "REST API", "JWT"],
      codeUrl: "https://github.com/sanaatawalbeh/Quikko",
      demoUrl: "https://qwikkofront.onrender.com",
      status: "completed",
      category: "fullstack",
      features: [
        "Multi-role dashboards",
        "Real-time orders",
        "Payment integration",
        "Inventory management",
      ],
      icon: <FiLayers className="w-6 h-6" />,
      color: "from-purple-500 to-fuchsia-600",
    },
    {
      name: "Intellagent Job Tracker",
      slug: "intellagent-job-tracker",
      description:
        "AI-powered job tracking platform with automated recommendations, resume insights, and real-time Firestore syncing.",
      tech: ["React", "Firebase", "Redux", "Tailwind", "OpenAI API"],
      codeUrl: "https://github.com/sanaatawalbeh/Intellagent-Job-Tracker-2",
      demoUrl: "https://github.com/sanaatawalbeh/Intellagent-Job-Tracker-2",
      status: "completed",
      category: "frontend",
      features: [
        "AI recommendations",
        "Resume analysis",
        "Smart dashboard",
        "Real-time sync",
      ],
      icon: <FiUsers className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "Team Task Manager",
      slug: "Team-Task-Manger",
      description:
        "Team collaboration app to manage members, roles, and tasks with leader/member workflows.",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
      codeUrl: "https://github.com/sanaatawalbeh/Team-Task-Manger",
      demoUrl: "https://github.com/sanaatawalbeh/Team-Task-Manger",
      status: "completed",
      category: "fullstack",
      features: [
        "Role-based access",
        "Task assignment",
        "Progress tracking",
        "Team management",
      ],
      icon: <FiUsers className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-600",
    },
    {
      name: "InstaBoard",
      slug: "InstaBoard",
      description:
        "Instagram-style board UI with modern design and smooth interactions built with vanilla JavaScript.",
      tech: ["JavaScript", "CSS3", "HTML5"],
      codeUrl: "https://github.com/sanaatawalbeh/InstaBoard",
      demoUrl: "https://sanaatawalbeh.github.io/InstaBoard",
      status: "completed",
      category: "frontend",
      features: [
        "Modern UI",
        "Smooth animations",
        "Grid layout",
        "Mobile responsive",
      ],
      icon: <FiLayers className="w-6 h-6" />,
      color: "from-pink-500 to-rose-600",
    },
    {
      name: "Flavor Table – Recipe App",
      slug: "Flavor-table",
      description:
        "Recipe web app to search by ingredients, view random recipes, and save favorites.",
      tech: ["Node.js", "Express", "REST API", "EJS", "PostgreSQL"],
      codeUrl: "https://github.com/sanaatawalbeh/Flavor-table",
      demoUrl: "https://flavor-table-1-za44.onrender.com",
      status: "completed",
      category: "fullstack",
      features: [
        "Ingredient search",
        "Recipe discovery",
        "Favorites system",
        "User profiles",
      ],
      icon: <FiLayers className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
    },
    {
      name: "Magical Characters",
      slug: "magical-characters",
      description:
        "Front-end app that displays Harry Potter characters using a public API with interactive features.",
      tech: ["JavaScript", "HTML5", "CSS3", "Fetch API"],
      codeUrl: "https://github.com/sanaatawalbeh/magical-characters",
      demoUrl: "https://sanaatawalbeh.github.io/magical-characters",
      status: "completed",
      category: "frontend",
      features: [
        "API integration",
        "Responsive design",
        "Character filtering",
        "Interactive UI",
      ],
      icon: <FiCode className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "Crazy Meal",
      slug: "crazy-meal",
      description:
        "Restaurant web app with complete menu, ordering flow, and localStorage-based cart management.",
      tech: ["JavaScript", "CSS3", "HTML5", "LocalStorage"],
      codeUrl: "https://github.com/sanaatawalbeh/crazy-meal",
      demoUrl: "https://sanaatawalbeh.github.io/crazy-meal",
      status: "completed",
      category: "frontend",
      features: [
        "Menu display",
        "Cart management",
        "Order workflow",
        "Local storage",
      ],
      icon: <FiCode className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Data Structures & Algorithms",
      slug: "challenges-and-data-structures",
      description:
        "Comprehensive collection of data structure implementations and algorithmic problem solutions.",
      tech: ["Data Structures", "Algorithms", "Problem Solving", "JavaScript"],
      codeUrl:
        "https://github.com/sanaatawalbeh/challenges-and-data-structures",
      demoUrl: null,
      status: "completed",
      category: "algorithms",
      features: [
        "Code implementations",
        "Problem solutions",
        "Performance analysis",
        "Best practices",
      ],
      icon: <FiCode className="w-6 h-6" />,
      color: "from-gray-500 to-slate-600",
    },
  ];

  const getTechIcon = (tech) => {
    const icons = {
      React: <SiReact className="w-4 h-4 text-cyan-400" />,
      "Node.js": <SiNodedotjs className="w-4 h-4 text-green-600" />,
      Express: (
        <SiExpress className="w-4 h-4 text-gray-800 dark:text-gray-200" />
      ),
      PostgreSQL: <SiPostgresql className="w-4 h-4 text-blue-700" />,
      Firebase: <SiFirebase className="w-4 h-4 text-orange-500" />,
      Redux: <SiRedux className="w-4 h-4 text-purple-500" />,
      Tailwind: <SiTailwindcss className="w-4 h-4 text-cyan-500" />,
      "OpenAI API": <SiOpenai className="w-4 h-4 text-green-500" />,
      "REST API": <FiServer className="w-4 h-4 text-green-500" />,
      JWT: <FiDatabase className="w-4 h-4 text-purple-500" />,
      JavaScript: <FiCode className="w-4 h-4 text-yellow-400" />,
      HTML5: <FiCode className="w-4 h-4 text-orange-500" />,
      CSS3: <FiCode className="w-4 h-4 text-blue-500" />,
      LocalStorage: <FiDatabase className="w-4 h-4 text-blue-400" />,
      "Data Structures": <FiCode className="w-4 h-4 text-gray-500" />,
      Algorithms: <FiCode className="w-4 h-4 text-purple-400" />,
      "Problem Solving": <FiCode className="w-4 h-4 text-green-400" />,
      EJS: <FiCode className="w-4 h-4 text-red-500" />,
    };
    return icons[tech] || <FiCode className="w-4 h-4 text-gray-400" />;
  };

  const ProjectCard = ({ project }) => (
    <div
      className={`relative overflow-hidden rounded-3xl border-2 transition-all duration-500 hover:scale-[1.02] group ${
        isDark
          ? "border-slate-700 bg-gradient-to-br from-slate-900/80 to-slate-800/80 hover:border-purple-500/50"
          : "border-slate-200 bg-gradient-to-br from-white to-slate-50/80 hover:border-purple-300"
      }`}
    >
      {/* Background Effects */}
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-tr ${project.color}/10 blur-2xl group-hover:${project.color}/20`}
      />

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white`}
            >
              {project.icon}
            </div>
            <div>
              <h3
                className={`text-lg font-bold ${
                  isDark ? "text-slate-100" : "text-slate-900"
                }`}
              >
                {project.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    project.category === "fullstack"
                      ? isDark
                        ? "bg-purple-900/40 text-purple-300"
                        : "bg-purple-100 text-purple-700"
                      : project.category === "frontend"
                      ? isDark
                        ? "bg-blue-900/40 text-blue-300"
                        : "bg-blue-100 text-blue-700"
                      : isDark
                      ? "bg-gray-900/40 text-gray-300"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {project.category === "fullstack"
                    ? "Full Stack"
                    : project.category === "frontend"
                    ? "Frontend"
                    : "Algorithms"}
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    isDark
                      ? "bg-emerald-900/40 text-emerald-300"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed mb-4 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {project.description}
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <h4
            className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Key Features
          </h4>
          <div className="flex flex-wrap gap-1">
            {project.features.map((feature, index) => (
              <span
                key={index}
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                  isDark
                    ? "bg-slate-800/50 text-slate-300"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                • {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 ${
                isDark
                  ? "bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {getTechIcon(tech)}
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
            }`}
          >
            <FiGithub className="w-4 h-4" />
            Code
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-700 hover:to-fuchsia-700"
                  : "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white hover:from-purple-600 hover:to-fuchsia-600"
              }`}
            >
              <FiExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className={`min-h-screen py-20 ${
        isDark
          ? "bg-gradient-to-br from-slate-950 to-purple-950/20"
          : "bg-gradient-to-br from-slate-50 to-blue-50/30"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <div
              className={`w-12 h-0.5 rounded-full ${
                isDark ? "bg-purple-500" : "bg-purple-400"
              }`}
            />
            <span
              className={`text-sm font-semibold uppercase tracking-wider ${
                isDark ? "text-purple-300" : "text-purple-600"
              }`}
            >
              My Portfolio
            </span>
            <div
              className={`w-12 h-0.5 rounded-full ${
                isDark ? "bg-purple-500" : "bg-purple-400"
              }`}
            />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A diverse collection of full-stack applications, frontend
            interfaces, and algorithmic solutions showcasing modern web
            development expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div
            className={`inline-flex flex-col items-center gap-6 max-w-2xl rounded-2xl px-8 py-8 ${
              isDark ? "bg-slate-900/50" : "bg-white/80"
            }`}
          >
            <h3
              className={`text-2xl font-bold ${
                isDark ? "text-slate-100" : "text-slate-800"
              }`}
            >
              Want to See More?
            </h3>
            <p
              className={`text-lg ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Check out my GitHub for more projects, contributions, and
              open-source work.
            </p>
            <a
              href="https://github.com/sanaatawalbeh"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                isDark
                  ? "bg-slate-800 text-slate-100 hover:bg-slate-700 hover:scale-105"
                  : "bg-slate-900 text-white hover:bg-slate-800 hover:scale-105"
              }`}
            >
              <FiGithub className="w-5 h-5" />
              Visit GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
