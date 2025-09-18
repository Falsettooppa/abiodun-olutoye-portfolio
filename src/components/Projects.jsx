import React, { useState, useEffect, useRef } from "react";

// Enhanced ProjectCard component
function ProjectCard({ name, description, tech, liveLink, repoLink, image, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm border border-white/10 transition-all duration-700 hover:scale-[1.02] ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 via-purple-900/80 to-slate-900/90 transition-all duration-500 group-hover:from-purple-800/90 group-hover:via-pink-900/80 group-hover:to-slate-800/90" />
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      {/* Content container */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Project image */}
        <div className="relative overflow-hidden rounded-xl mb-4 aspect-video bg-slate-700/50">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-slate-600 to-slate-800">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          
          {/* Overlay with quick actions */}
          <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
              title="View Live"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
              title="View Code"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Project info */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
            {name}
          </h3>
          
          <p className="text-gray-300 text-sm mb-4 flex-1 leading-relaxed">
            {description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium bg-white/10 text-purple-300 rounded-full border border-purple-500/30 backdrop-blur-sm hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg text-center hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Live Demo
            </a>
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white/30 text-white text-sm font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      name: "DocChain",
      description: "A document management & verification app with secure file sharing and blockchain support.",
      tech: ["React", "Blockchain", "Solidity", "Vercel"],
      liveLink: "https://docchain-orcin.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/DocChain",
      image: "/images/projects/docchain.png",
      category: "Blockchain"
    },
    {
      name: "Knowbly",
      description: "An AI chatbot-powered app for interactive learning & Q&A.",
      tech: ["React", "OpenAI API", "Tailwind"],
      liveLink: "https://knowbly.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/knowbly",
      image: "/images/projects/knowbly.png",
      category: "AI"
    },
    {
      name: "Taskdo",
      description: "Task management tool with to-do lists and productivity tracking.",
      tech: ["React", "Vercel", "UI/UX"],
      liveLink: "https://taskdo-rosy.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/taskdo",
      image: "/images/projects/taskdo.png",
      category: "Productivity"
    },
    {
      name: "Olegit Card",
      description: "A digital business card and personal branding site.",
      tech: ["React", "Tailwind CSS", "Vercel"],
      liveLink: "https://olegit-card.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/olegit-card",
      image: "/images/projects/olegit-card.png",
      category: "Web"
    },
    {
      name: "Formify",
      description: "Form builder app for creating and managing forms easily.",
      tech: ["React", "Tailwind CSS", "Vercel"],
      liveLink: "https://formify-phi.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/formify",
      image: "/images/projects/formify.png",
      category: "Productivity"
    },
    {
      name: "Personal Finance Tracker",
      description: "Track income, expenses, and budgets with real-time insights.",
      tech: ["React", "Charts", "Local Storage"],
      liveLink: "https://personal-finance-tracker-alpha-dusky.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/personal-finance-tracker",
      image: "/images/projects/finance.png",
      category: "Finance"
    },
    {
      name: "Ocinema",
      description: "A movie discovery app with browsing and search features.",
      tech: ["React", "API Integration", "Vercel"],
      liveLink: "https://ocinema.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/ocinema",
      image: "/images/projects/ocinema.png",
      category: "Entertainment"
    },
    {
      name: "E-commerce Store",
      description: "Front-end e-commerce template with product listings and cart functionality.",
      tech: ["React", "Stripe", "Responsive Design"],
      liveLink: "https://ecommerce-three-nu-55.vercel.app/",
      repoLink: "https://github.com/Falsettooppa/E-commerce",
      image: "/images/projects/ecommerce.png",
      category: "E-commerce"
    },
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-20 overflow-hidden"
    >
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work showcasing cutting-edge technologies and innovative solutions
          </p>
        </div>

        {/* Filter buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20 hover:border-white/40 backdrop-blur-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard 
              key={`${filter}-${idx}`}
              {...project} 
              index={idx}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/Falsettooppa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-full border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}