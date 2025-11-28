// src/layout/Footer.jsx
import React from "react";
import { useSelector } from "react-redux";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  const mode = useSelector((state) => state.theme.mode);
  const isDark = mode === "dark";

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/sanaatawalbeh",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/sanaa-tawalbeh-959911318/",
      label: "LinkedIn",
    },
    {
      icon: FiMail,
      href: "mailto:sanaatawalbeh0@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer
      className={`transition-colors duration-500 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="w-full px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          {/* أيقونات وسائل التواصل */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center rounded-lg p-3 transition-all duration-300 ${
                  isDark
                    ? "text-purple-300 hover:bg-purple-900/30 hover:text-white hover:scale-110"
                    : "text-purple-600 hover:bg-purple-50 hover:text-purple-700 hover:scale-110"
                }`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* حقوق النشر */}
          <div className="flex flex-col items-center gap-2">
            <p
              className={`text-sm ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              © {new Date().getFullYear()} Sana&apos;a Tawalbeh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
