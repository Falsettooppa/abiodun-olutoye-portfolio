// src/components/About.jsx
export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:gap-12">
        {/* Left: Image */}
        <div className="md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src="/profile.jpg"            // replace with your photo in /public (or keep placeholder)
            alt="Abiodun Olutoye"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-600 shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>

          <p className="text-gray-600 mb-4">
            I’m Abiodun Olutoye — a frontend developer and team leader with practical experience
            building web apps and managing operations. I run a small computer café and digital
            services business, work as an office manager at a telecommunications company, and
            lead community initiatives (currently President of GGEC and a Sunday School teacher).
            I enjoy building clean, accessible interfaces and combining technical skills with
            leadership to deliver impact.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Core skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">React</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Tailwind CSS</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">JavaScript</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Web3 / Blockchain</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Leadership</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Experience & leadership</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Office Manager at a telecommunications company — supervising operations & customer issues.</li>
              <li>President of GGEC — leading community programmes and events.</li>
              <li>Founder, Olegit Digital Services — running a computer café and providing digital services.</li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-block px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              See projects
            </a>
            <a
              href="/resume.pdf"
              className="inline-block px-5 py-2 border border-blue-600 text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-50 transition"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
