// src/components/Projects.jsx
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      name: "DocChain",
      description:
        "A document management / sharing app (built with React, hosted on Vercel).",
      tech: ["React", "Vercel", "GitHub"],
      liveLink: "https://docchain-orcin.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/DocChain",
      image: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
}
