// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home"; 
// import Projects from "./components/Projects"; 
// import Skills from "./components/Skills."; 
// import Contact from "./components/Contact"; 
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout يحيط بكل الصفحات */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
