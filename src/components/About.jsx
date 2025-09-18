import React, { useState, useEffect, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("story");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

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

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const skills = [
    { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Tailwind CSS", level: 92, color: "from-cyan-500 to-teal-500" },
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-500" },
    {
      name: "Web3/Blockchain",
      level: 85,
      color: "from-purple-500 to-pink-500",
    },
    { name: "Leadership", level: 95, color: "from-green-500 to-emerald-500" },
    { name: "UI/UX Design", level: 88, color: "from-pink-500 to-rose-500" },
  ];

  const experiences = [
    {
      role: "Office Manager",
      company: "Telecommunications Company",
      period: "2020 - Present",
      description:
        "Supervising operations, managing customer issues, and ensuring smooth daily operations.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      role: "President",
      company: "GGEC Community",
      period: "2022 - Present",
      description:
        "Leading community programmes, organizing events, and driving community development initiatives.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      role: "Founder",
      company: "Olegit Digital Services",
      period: "2019 - Present",
      description:
        "Running a computer café and providing comprehensive digital services to the community.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed", icon: "🚀" },
    { number: "3+", label: "Years Experience", icon: "⏰" },
    { number: "100+", label: "Happy Clients", icon: "😊" },
    { number: "24/7", label: "Dedication", icon: "💪" },
  ];

  const tabs = [
    { id: "story", label: "My Story", icon: "📖" },
    { id: "skills", label: "Skills", icon: "🎯" },
    { id: "experience", label: "Experience", icon: "💼" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(147, 51, 234, 0.1) 0%, 
            rgba(79, 70, 229, 0.05) 25%, 
            rgba(15, 23, 42, 0.8) 50%, 
            rgba(0, 0, 0, 0.95) 100%)`,
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-32 right-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-500/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-32 right-32 w-16 h-16 border border-purple-500/20 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full animate-bounce"
          style={{ animationDuration: "3s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Developer, Leader, Innovator - Building the future one line of code
            at a time
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Profile section */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Profile image with advanced effects */}
            <div className="relative mb-8 group flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
              <div className="relative">
                <img
                  src="/profile.jpg"
                  alt="Abiodun Olutoye"
                  className="w-64 h-64 md:w-72 md:h-72 rounded-2xl object-cover border-4 border-white/20 shadow-2xl relative z-10 backdrop-blur-sm group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
              </div>
            </div>

            {/* Achievement stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/8 hover:border-white/20 transition-all duration-500 group"
                >
                  <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-400">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content section with tabs */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {/* Tab navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-500 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                      : "bg-white/10 text-gray-300 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:text-gray-200 backdrop-blur-sm"
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="min-h-[400px]">
              {/* Story tab */}
              {activeTab === "story" && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      I'm{" "}
                      <span className="text-white font-semibold">
                        Abiodun Olutoye
                      </span>{" "}
                      — a passionate frontend developer and natural leader who
                      thrives at the intersection of technology and community
                      impact.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      My journey combines hands-on technical expertise with
                      real-world leadership experience. I run{" "}
                      <span className="text-purple-400 font-medium">
                        Olegit Digital Services
                      </span>
                      , manage operations at a telecommunications company, and
                      serve as President of GGEC while teaching Sunday School.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      What drives me is the belief that great technology should
                      be accessible, intuitive, and impactful. I specialize in
                      building clean, user-focused interfaces while leading
                      teams and initiatives that make a tangible difference in
                      people's lives.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span>🎯</span>
                      Current Focus
                    </h4>
                    <p className="text-gray-300">
                      Building innovative web applications with React and
                      exploring blockchain technologies while leading community
                      development initiatives.
                    </p>
                  </div>
                </div>
              )}

              {/* Skills tab */}
              {activeTab === "skills" && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Technical Expertise
                  </h3>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="group">
                        <div className="flex justify-between mb-2">
                          <span className="text-white font-medium">
                            {skill.name}
                          </span>
                          <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:animate-pulse`}
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${index * 100 + 600}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <h4 className="text-white font-semibold mb-4">
                      Core Competencies
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Frontend Development",
                        "Team Leadership",
                        "Project Management",
                        "Community Building",
                        "Problem Solving",
                        "Strategic Planning",
                      ].map((competency, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-200 rounded-full text-sm border border-purple-500/30 hover:border-purple-500/40 hover:from-purple-600/25 hover:to-cyan-600/25 hover:text-purple-100 transition-all duration-500 cursor-pointer"
                        >
                          {competency}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Experience tab */}
              {activeTab === "experience" && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Professional Journey
                  </h3>
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <div
                        key={index}
                        className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/8 hover:border-white/15 transition-all duration-500 group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg border border-purple-500/30 text-purple-300 group-hover:scale-110 transition-transform duration-300">
                            {exp.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                              <h4 className="text-white font-semibold text-lg">
                                {exp.role}
                              </h4>
                              <span className="text-purple-400 font-medium text-sm">
                                {exp.period}
                              </span>
                            </div>
                            <p className="text-cyan-300 font-medium mb-3">
                              {exp.company}
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                              {exp.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center">
                  See My Projects
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full overflow-hidden backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-white/40 hover:bg-white/8"
              >
                <span className="flex items-center">
                  Download CV
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
