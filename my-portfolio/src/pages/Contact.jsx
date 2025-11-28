// src/sections/ContactSection.jsx
import React from "react";
import { useSelector } from "react-redux";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiUser,
  FiMessageCircle,
} from "react-icons/fi";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const mode = useSelector((state) => state.theme.mode);
  const isDark = mode === "dark";

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = React.useState(false);
  const [status, setStatus] = React.useState("");

  const inputBase =
    "w-full rounded-2xl border-2 px-4 py-3.5 text-sm outline-none transition-all duration-300";
  const inputClass = isDark
    ? `${inputBase} border-slate-700 bg-slate-900/50 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:bg-slate-800/50 focus:shadow-lg focus:shadow-purple-500/20`
    : `${inputBase} border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/10`;
  const textareaClass = `${inputClass} min-h-[140px] resize-none`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus(
        "🎉 Your message has been sent successfully! I'll get back to you soon."
      );
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus(
        "❌ Something went wrong. Please try again or contact me directly at sanaatawalbeh0@gmail.com"
      );
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="w-5 h-5" />,
      label: "Location",
      value: "Amman, Jordan",
      color: "text-purple-500",
      href: null,
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      label: "Phone",
      value: "+962 7 8536 7250",
      color: "text-green-500",
      href: "tel:+962785367250",
    },
    {
      icon: <SiGmail className="w-5 h-5" />,
      label: "Email",
      value: "sanaatawalbeh0@gmail.com",
      color: "text-red-500",
      href: "mailto:sanaatawalbeh0@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: <SiGithub className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/sanaatawalbeh",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-600 hover:to-gray-800",
    },
    {
      icon: <SiLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sanaa-tawalbeh-959911318/",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:to-blue-700",
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:sanaatawalbeh0@gmail.com",
      color: "from-red-500 to-red-700",
      hoverColor: "hover:from-red-400 hover:to-red-600",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${
        isDark
          ? "bg-gradient-to-br from-slate-950 to-purple-950/20"
          : "bg-gradient-to-br from-slate-50 to-blue-50/30"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 space-y-16">
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
              Get In Touch
            </span>
            <div
              className={`w-12 h-0.5 rounded-full ${
                isDark ? "bg-purple-500" : "bg-purple-400"
              }`}
            />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>

          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Ready to bring your ideas to life? Let's discuss how we can work
            together to create something amazing.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div
              className={`relative overflow-hidden rounded-3xl border-2 p-8 ${
                isDark
                  ? "border-slate-700 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm"
                  : "border-slate-200 bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-sm"
              }`}
            >
              {/* Background Effects */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-tr from-purple-500/10 to-fuchsia-500/10 blur-2xl" />

              <div className="relative z-10 space-y-6">
                <div>
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      isDark ? "text-slate-100" : "text-slate-900"
                    }`}
                  >
                    Let's Connect
                  </h3>
                  <p
                    className={`text-sm ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    I'm always open to discussing new opportunities,
                    collaborations, or just having a friendly chat about
                    technology.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          isDark ? "bg-slate-800" : "bg-slate-100"
                        }`}
                      >
                        <div className={item.color}>{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p
                          className={`text-xs font-semibold uppercase tracking-wider ${
                            isDark ? "text-slate-500" : "text-slate-400"
                          }`}
                        >
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className={`text-sm font-medium hover:underline ${
                              isDark ? "text-slate-300" : "text-slate-700"
                            }`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p
                            className={`text-sm font-medium ${
                              isDark ? "text-slate-300" : "text-slate-700"
                            }`}
                          >
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4
                    className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                      isDark ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    Follow Me
                  </h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r ${social.color} ${social.hoverColor} text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div
              className={`relative overflow-hidden rounded-3xl border-2 p-8 ${
                isDark
                  ? "border-slate-700 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm"
                  : "border-slate-200 bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-sm"
              }`}
            >
              {/* Background Effects */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                    <FiMessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`text-2xl font-bold ${
                        isDark ? "text-slate-100" : "text-slate-900"
                      }`}
                    >
                      Send a Message
                    </h3>
                    <p
                      className={`text-sm ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      Have a project in mind? Let's make it happen together.
                    </p>
                  </div>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className={`block text-sm font-medium mb-2 ${
                          isDark ? "text-slate-300" : "text-slate-700"
                        }`}
                        htmlFor="name"
                      >
                        <div className="flex items-center gap-2">
                          <FiUser className="w-4 h-4 text-purple-500" />
                          Your Name
                        </div>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className={inputClass}
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label
                        className={`block text-sm font-medium mb-2 ${
                          isDark ? "text-slate-300" : "text-slate-700"
                        }`}
                        htmlFor="email"
                      >
                        <div className="flex items-center gap-2">
                          <FiMail className="w-4 h-4 text-purple-500" />
                          Email Address
                        </div>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={inputClass}
                        placeholder="your.email@example.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                      htmlFor="message"
                    >
                      <div className="flex items-center gap-2">
                        <FiMessageCircle className="w-4 h-4 text-purple-500" />
                        Your Message
                      </div>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className={textareaClass}
                      placeholder="Tell me about your project, collaboration idea, or just say hello..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-semibold transition-all duration-300 ${
                      isSending
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:scale-105 hover:shadow-xl"
                    } ${
                      isDark
                        ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-700 hover:to-fuchsia-700"
                        : "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white hover:from-purple-600 hover:to-fuchsia-600"
                    }`}
                  >
                    {isSending ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {status && (
                    <div
                      className={`p-4 rounded-2xl text-sm font-medium text-center transition-all duration-300 ${
                        status.includes("❌")
                          ? isDark
                            ? "bg-red-900/20 text-red-300 border border-red-800/50"
                            : "bg-red-50 text-red-700 border border-red-200"
                          : isDark
                          ? "bg-green-900/20 text-green-300 border border-green-800/50"
                          : "bg-green-50 text-green-700 border border-green-200"
                      }`}
                    >
                      {status}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
