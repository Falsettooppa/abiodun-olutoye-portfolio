// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left side: Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Abiodun Olutoye</h3>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle: Navigation */}
        <div className="flex gap-6 text-sm">
          <a href="#hero" className="hover:text-white">Home</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Right side: Socials */}
        <div className="flex gap-4 text-xl">
          <a href="https://github.com/Falsettooppa" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-white" />
          </a>
          <a href="https://linkedin.com/in/abiodunolutoye" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-white" />
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
