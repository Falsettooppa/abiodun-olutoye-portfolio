import React from "react";
export default function ProjectCard({ name, description, tech, liveLink, repoLink, image }) {
  // Fallback: first letter of project name
  const fallbackLetter = name ? name.charAt(0).toUpperCase() : "?";

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      {/* Image with fallback */}
      {image ? (
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
          <span className="text-4xl font-bold text-blue-600">{fallbackLetter}</span>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech?.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-blue-100 text-blue-600 rounded-md text-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition"
          >
            Live
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md text-sm hover:bg-blue-50 transition"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
