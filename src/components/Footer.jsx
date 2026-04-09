import React from 'react';
import { Linkedin, Youtube, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Who We Are",
      links: ["Leadership", "Founder", "Core Principles", "Our People"],
    },
    {
      title: "What We Do",
      links: ["Investment Management", "Technology", "Managing Risk", "Entrepreneurship", "Industry Leadership"],
    },
    {
      title: "How To Join",
      links: ["Career Development", "Choose Your Path", "Interviewing", "Internships"],
    },
  ];

  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 font-sans selection:bg-blue-500">
      <div className="max-w-[90%] mx-auto">
        
        {/* Main Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-32">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col">
              <h4 className="text-xl font-medium mb-8 border-b border-gray-500 pb-1 w-fit pr-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal and Secondary Links */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 border-t border-gray-800 pt-12">
          
          {/* Left Side: Legal Links */}
          <div className="flex flex-col space-y-2 order-2 lg:order-1">
            <a href="/" className="text-gray-400 hover:text-white text-sm border-b border-transparent hover:border-white w-fit transition-all">Online Privacy Statement</a>
            <a href="/" className="text-gray-400 hover:text-white text-sm border-b border-transparent hover:border-white w-fit transition-all">Important Disclosures</a>
            <a href="/" className="text-gray-400 hover:text-white text-sm border-b border-transparent hover:border-white w-fit transition-all">Impersonation Notice</a>
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em] mt-4">
              COPYRIGHT © 2025–{currentYear} MUHA & CO., L.P. ALL RIGHTS RESERVED
            </p>
          </div>

          {/* Right Side: Social + Address + Login */}
          <div className="flex flex-col lg:flex-row items-end lg:items-center gap-10 order-1 lg:order-2 w-full lg:w-auto">
            
            {/* Social Icons - Clean & Minimal */}
            <div className="flex items-center gap-6">
              <a href="/" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <Linkedin size={22} />
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <Youtube size={22} />
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <Github size={22} />
              </a>
            </div>

            {/* Office Address */}
            <div className="text-right">
              <p className="text-gray-400 text-xs leading-relaxed">
                MUHA Digital HQ<br />
                Innovation Park, West Wing<br />
                88 Tech Avenue<br />
                New York, NY 10001
              </p>
            </div>

            {/* Investor Login Style Link */}
            <div className="border-l border-gray-700 pl-10 hidden lg:block">
              <a href="/" className="text-gray-400 hover:text-white text-sm border-b border-gray-500 pb-0.5 tracking-wider transition-all">
                Client Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}