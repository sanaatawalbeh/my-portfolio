// src/layout/Navbar.jsx
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiSun, FiMoon, FiMail, FiMenu, FiX } from "react-icons/fi";
import { toggleTheme } from "../../store/themeSlice";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  const isDark = mode === "dark";

  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // تتبع السكشن النشط أثناء التمرير
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollY = window.scrollY + 100;
      setScrolled(scrollY > 50);

      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            current = section;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // الانتقال السلس للسكاشن
  const handleNavClick = (href, event) => {
    event.preventDefault();
    setOpen(false);

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // dark class على مستوى الصفحة
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);

  // منع scroll عند فتح المنيو
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${
        scrolled
          ? isDark
            ? "border-purple-500/20 bg-black shadow-2xl shadow-purple-500/5"
            : "border-gray-200/70 bg-white shadow-2xl shadow-gray-200/50"
          : isDark
          ? "border-transparent bg-black"
          : "border-transparent bg-white"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* الاسم */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick("#home", e)}
              className="group relative"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest transition-all duration-500 bg-gradient-to-r from-purple-500 to-fuchsia-600 bg-clip-text text-transparent whitespace-nowrap group-hover:from-purple-600 group-hover:to-fuchsia-700">
                SANA&apos;A TAWALBEH
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-600 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* اللينكات - ديسكتوب */}
          <div className="hidden xl:flex flex-1 justify-center">
            <div className="flex items-center gap-1 rounded-2xl p-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className={`relative px-6 py-2.5 text-sm font-medium uppercase tracking-wider transition-all duration-300 rounded-xl ${
                      isActive
                        ? isDark
                          ? "text-white bg-purple-600/20 shadow-lg shadow-purple-500/10"
                          : "text-black bg-white shadow-lg shadow-purple-500/10"
                        : isDark
                        ? "text-purple-200/80 hover:text-white hover:bg-white/5"
                        : "text-gray-600 hover:text-black hover:bg-black/5"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className={`absolute inset-0 rounded-xl border transition-all duration-500 ${
                          isDark
                            ? "border-purple-400/50 shadow-[0_0_15px_rgba(192,132,252,0.3)]"
                            : "border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                        }`}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* اللينكات للشاشات المتوسطة */}
          <div className="hidden lg:flex xl:hidden flex-1 justify-center">
            <div className="flex items-center gap-0">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className={`relative px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? isDark
                          ? "text-white"
                          : "text-black"
                        : isDark
                        ? "text-purple-200/80 hover:text-white"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                          isDark ? "bg-purple-400" : "bg-purple-600"
                        }`}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* الأيقونات والزر */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* زر تغيير الثيم */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className={`flex items-center justify-center cursor-pointer transition-all duration-300 p-2.5 rounded-xl ${
                isDark
                  ? "bg-purple-900/30 hover:bg-purple-800/50 text-purple-200 hover:text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-black"
              } hover:scale-105 shadow-sm`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <FiSun className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <FiMoon className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>

            {/* زر Contact (ديسكتوب) */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick("#contact", e)}
              className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
                isDark
                  ? "border-purple-500/60 text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-400/80 shadow-lg shadow-purple-500/10"
                  : "border-purple-500/60 text-purple-700 bg-purple-50 hover:bg-purple-100 hover:border-purple-600/80 shadow-lg shadow-purple-500/10"
              } hover:scale-105 hover:shadow-xl active:scale-95`}
            >
              <FiMail className="w-4 h-4" />
              <span className="hidden sm:inline">Contact</span>
            </a>

            {/* زر المنيو للموبايل */}
            <button
              className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl transition-all duration-300 lg:hidden ${
                isDark
                  ? "bg-purple-900/30 border border-purple-500/30 hover:bg-purple-800/50 text-purple-200"
                  : "bg-gray-100 border border-gray-300 hover:bg-gray-200 text-gray-700"
              } hover:scale-105 shadow-sm`}
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              {open ? (
                <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* سايدبار الموبايل */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-500 ease-in-out ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay بدون أي لون، بس عشان close لما تكبسي برا */}
        <div className="absolute inset-0" onClick={() => setOpen(false)} />

        {/* السايدبار نفسه - صلب وما عليه شفافية */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full transform transition-transform duration-500 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          } ${isDark ? "bg-slate-900" : "bg-white"} shadow-2xl ${
            isDark ? "shadow-purple-500/10" : "shadow-gray-500/20"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-purple-500/20">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Navigation
            </span>
            <button
              onClick={() => setOpen(false)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? "hover:bg-purple-800/50 text-purple-200"
                  : "hover:bg-gray-200 text-gray-700"
              }`}
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <div className="p-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={`flex items-center gap-4 rounded-xl px-4 py-4 text-base font-medium uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? isDark
                        ? "bg-purple-600/20 text-white border-l-4 border-purple-400 shadow-lg shadow-purple-500/10"
                        : "bg-purple-100 text-purple-700 border-l-4 border-purple-500 shadow-lg shadow-purple-500/10"
                      : isDark
                      ? "text-purple-100/90 hover:bg-purple-800/30 hover:text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-black"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? isDark
                          ? "bg-purple-400"
                          : "bg-purple-600"
                        : isDark
                        ? "bg-purple-500/50"
                        : "bg-gray-400"
                    }`}
                  ></div>
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200/50 dark:border-purple-500/20">
            <div className="flex flex-col gap-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick("#contact", e)}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 border ${
                  isDark
                    ? "border-purple-500/60 text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 shadow-lg shadow-purple-500/10"
                    : "border-purple-500/60 text-purple-700 bg-purple-50 hover:bg-purple-100 shadow-lg shadow-purple-500/10"
                } hover:scale-105 active:scale-95`}
              >
                <FiMail className="w-5 h-5" />
                Get In Touch
              </a>

              <button
                onClick={() => {
                  dispatch(toggleTheme());
                  setOpen(false);
                }}
                className={`inline-flex items-center justify-center gap-3 cursor-pointer transition-all duration-300 px-6 py-3 rounded-xl ${
                  isDark
                    ? "bg-purple-900/30 hover:bg-purple-800/50 text-purple-200"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                } hover:scale-105 active:scale-95`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <>
                    <FiSun className="w-5 h-5 text-yellow-300" />
                    <span className="text-base font-medium text-purple-200">
                      Light Mode
                    </span>
                  </>
                ) : (
                  <>
                    <FiMoon className="w-5 h-5 text-gray-700" />
                    <span className="text-base font-medium text-gray-600">
                      Dark Mode
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
