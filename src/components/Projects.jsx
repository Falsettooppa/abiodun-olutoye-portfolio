import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      name: "DocChain",
      description: "A document management & verification app with secure file sharing and blockchain support.",
      tech: ["React", "Blockchain", "Solidity", "Vercel"],
      liveLink: "https://docchain-orcin.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/DocChain",
      image: "/images/projects/docchain.png",
    },
    {
      name: "Knowbly",
      description: "An AI chatbot-powered app for interactive learning & Q&A.",
      tech: ["React", "OpenAI API", "Tailwind"],
      liveLink: "https://knowbly.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/knowbly",
      image: "/images/projects/knowbly.png",
    },
    {
      name: "Taskdo",
      description: "Task management tool with to-do lists and productivity tracking.",
      tech: ["React", "Vercel", "UI/UX"],
      liveLink: "https://taskdo-rosy.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/taskdo",
      image: "/images/projects/taskdo.png",
    },
    {
      name: "Olegit Card",
      description: "A digital business card and personal branding site.",
      tech: ["React", "Tailwind CSS", "Vercel"],
      liveLink: "https://olegit-card.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/olegit-card",
      image: "/images/projects/olegit-card.png",
    },
    {
      name: "Formify",
      description: "Form builder app for creating and managing forms easily.",
      tech: ["React", "Tailwind CSS", "Vercel"],
      liveLink: "https://formify-phi.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/formify",
      image: "/images/projects/formify.png",
    },
    {
      name: "Personal Finance Tracker",
      description: "Track income, expenses, and budgets with real-time insights.",
      tech: ["React", "Charts", "Local Storage"],
      liveLink: "https://personal-finance-tracker-alpha-dusky.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/personal-finance-tracker",
      image: "/images/projects/finance.png",
    },
    {
      name: "Ocinema",
      description: "A movie discovery app with browsing and search features.",
      tech: ["React", "API Integration", "Vercel"],
      liveLink: "https://ocinema.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/ocinema",
      image: "/images/projects/ocinema.png",
    },
    {
      name: "E-commerce Store",
      description: "Front-end e-commerce template with product listings and cart functionality.",
      tech: ["React", "Stripe (if integrated)", "Responsive Design"],
      liveLink: "https://ecommerce-three-nu-55.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/E-commerce",
      image: "/images/projects/ecommerce.png",
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
