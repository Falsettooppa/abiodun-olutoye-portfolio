// src/components/Projects.jsx
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      name: "DocChain",
      description: "A document management & verification app, with secure file sharing and blockchain support.",
      tech: ["React", "Blockchain", "Vercel" , "Solidity"],
      liveLink: "https://docchain-orcin.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/DocChain",
      image: null,  // replace null with screenshot URL or local image
    },
    {
      name: "Knowbly",
      description: "An AI chatbot powered app for interactive learning & Q&A.",
      tech: ["React", "OpenAI / API", "Tailwind"],
      liveLink: "https://knowbly.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/knowbly",
      image: null,
    },
    {
      name: "Taskdo",
      description: "Task management tool with to-do lists and productivity tracking.",
      tech: ["React", "Vercel", "UI/UX"],
      liveLink: "https://taskdo-rosy.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/taskdo",
      image: null,
    },
    {
      name: "Olegit Card",
      description: "Digital business card / personal branding site.",
      tech: ["React", "Tailwind CSS", "Vercel"],
      liveLink: "https://olegit-card.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/olegit-card",
      image: null,
    },
    {
      name: "Personal Finance Tracker",
      description: "Track your income, expenses and budget with real-time insights.",
      tech: ["React", "Charts", "Local Storage"],
      liveLink: "https://personal-finance-tracker-alpha-dusky.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/personal-finance-tracker", // adjust if exact repo name
      image: null,
    },
    {
      name: "E-commerce Store",
      description: "Front-end e-commerce template with product listing and cart functionality.",
      tech: ["Javascript", "Stripe (if used) or placeholder", "Responsive Design"],
      liveLink: "https://ecommerce-three-nu-55.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/E-commerce",
      image: null,
    },
    // More projects can go here …
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
