// src/components/ProjectCard.jsx
export default function ProjectCard({ name, description, tech, liveLink, repoLink, image }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
      {image && (
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={`${name} screenshot`}
            className="w-full h-48 object-cover"
          />
        </a>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Live Demo
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg shadow hover:bg-blue-50 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
