import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link for internal redirection
import { ChevronDown } from "lucide-react";

export default function Navigation() {
  const [openSection, setOpenSection] = useState(null);

  const navGroups = [
    {
      title: "Who We Are",
      links: [
        { name: "Leadership", path: "/who-we-are#leadership" },
        { name: "Founder", path: "/who-we-are#founder" },
        { name: "Core Principles", path: "/who-we-are#principles" },
        { name: "Our People", path: "/our-people" }, // Direct page link
      ],
    },
    {
      title: "What We Do",
      links: [
        { name: "Investment Management", path: "/what-we-do#investment" },
        { name: "Technology Development", path: "/what-we-do#tech" },
        { name: "Risk Management", path: "/what-we-do#risk" },
      ],
    },
    {
      title: "How To Join",
      links: [
        { name: "Career Development", path: "/careers" },
        { name: "Interviewing", path: "/careers#interviewing" },
        { name: "Internships", path: "/careers#internships" },
      ],
    },
  ];

  return (
    <nav className="fixed right-0 top-0 h-fit z-50 flex flex-col items-end text-right font-sans pointer-events-auto pr-16 pt-12">
      <Link to="/login" className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-12 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
        Investor Login
      </Link>

      <div className="flex flex-col space-y-7">
        <Link to="/" className="text-blue-500 text-xl font-medium tracking-tight hover:brightness-125 transition-all">
          Home
        </Link>

        {navGroups.map((group) => (
          <div key={group.title} className="group flex flex-col items-end">
            <button
              onClick={() => setOpenSection(openSection === group.title ? null : group.title)}
              className="flex items-center gap-3 text-white text-xl font-medium hover:text-blue-400 transition-all focus:outline-none"
            >
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-500 ease-in-out ${openSection === group.title ? "rotate-180 text-blue-500" : "text-gray-600"}`} 
              />
              {group.title}
            </button>

            <div className={`flex flex-col items-end space-y-2 mt-3 overflow-hidden transition-all duration-500 ease-in-out ${
                openSection === group.title ? "max-h-64 opacity-100 py-2" : "max-h-0 opacity-0"
              }`}
            >
              {group.links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpenSection(null)} // Close menu on click
                  className="text-gray-500 hover:text-white text-[13px] tracking-wide transition-colors duration-300 pr-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col items-end space-y-5 pt-6 border-t border-white/5 w-full">
          <Link to="/news" className="text-white text-xl font-medium hover:text-blue-400">News</Link>
          <Link to="/library" className="text-white text-xl font-medium hover:text-blue-400">Library</Link>
          <Link to="/contact" className="text-white text-xl font-medium hover:text-blue-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}