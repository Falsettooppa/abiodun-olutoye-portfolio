// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-50 to-blue-100"
    >
      <img
        src="/profile.jpg"
        alt="Abiodun Olutoye"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-600 shadow-lg mb-6"
      />

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        Abiodun Olutoye
      </h1>
      <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
        Frontend Developer • Leader • Innovator
      </h2>

      <div className="space-x-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-50 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
