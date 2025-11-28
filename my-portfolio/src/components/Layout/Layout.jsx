// src/layout/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Layout() {
  const mode = useSelector((state) => state.theme.mode); // "light" أو "dark"
  const isDark = mode === "dark";

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />

      <main
        className={`flex-1 transition-colors duration-500 ${
          isDark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
