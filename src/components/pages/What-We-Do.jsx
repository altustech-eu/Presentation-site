import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Terminal, ShieldCheck, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDo() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations for each section content
      gsap.utils.toArray(".reveal-text").forEach((text) => {
        gsap.from(text, {
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
          },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const sections = [
    {
      id: "investment",
      label: "Capital",
      title: "Investment Management",
      icon: <BarChart3 className="text-blue-500" size={32} />,
      description: "We use sophisticated mathematical models and massive computational power to identify market inefficiencies. Our approach is purely systematic, removing human emotion from the equation.",
      details: ["Systemic Alpha Generation", "Quantitative Arbitrage", "Machine Learning Integration"]
    },
    {
      id: "technology",
      label: "Architecture",
      title: "Technology Development",
      icon: <Terminal className="text-blue-500" size={32} />,
      description: "Technology is not a support function—it is our core. We build proprietary distributed systems capable of processing petabytes of data in microseconds.",
      details: ["High-Frequency Trading Infra", "Cloud-Native Grid Computing", "Proprietary Data Science Toolkits"]
    },
    {
      id: "risk",
      label: "Stability",
      title: "Risk Management",
      icon: <ShieldCheck className="text-blue-500" size={32} />,
      description: "Our rigor is reflected in our survival. We treat risk as a first-class citizen, using real-time stress testing to navigate the most volatile market cycles.",
      details: ["Real-time Exposure Monitoring", "Stress-Testing Frameworks", "Non-linear Risk Analytics"]
    }
  ];

  return (
    <div ref={containerRef} className="bg-black text-white font-sans selection:bg-blue-500">
      
      {/* --- HERO HEADER --- */}
      <section className="min-h-[60vh] flex flex-col justify-center px-[10%] pt-32">
        <h1 className="text-7xl md:text-9xl font-light tracking-tighter leading-none mb-10 reveal-text">
          Our <span className="italic font-medium text-blue-500">Expertise.</span>
        </h1>
        <p className="text-2xl text-gray-400 font-light max-w-3xl leading-relaxed reveal-text">
          Where computational power meets creative strategy. We build systems 
          that define the next generation of global finance and technology.
        </p>
      </section>

      {/* --- UNIFIED SECTIONS --- */}
      {sections.map((section, idx) => (
        <section 
          key={section.id} 
          id={section.id}
          className="relative min-h-screen flex items-center px-[10%] py-32 border-t border-white/5"
        >
          {/* Vertical Metadata Label */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] tracking-[0.5em] text-white/20 font-bold uppercase whitespace-nowrap hidden lg:block">
            {section.label} — 0{idx + 1}
          </div>

          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-start">
            <div className="reveal-text">
              <div className="mb-8">{section.icon}</div>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-8 leading-none">
                {section.title}
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-12">
                {section.description}
              </p>
              
              <ul className="space-y-4">
                {section.details.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group cursor-default">
                    <span className="w-8 h-[1px] bg-gray-700 group-hover:bg-blue-500 group-hover:w-12 transition-all duration-500"></span>
                    <span className="text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest text-[11px] font-bold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Abstract Visual Placeholder (Architectural feel) */}
            <div className="hidden lg:flex justify-end items-center h-full reveal-text">
              <div className="w-[80%] aspect-square border border-white/5 relative flex items-center justify-center group overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                 <div className="w-1/2 h-1/2 border-l border-t border-blue-500/20 absolute top-0 left-0"></div>
                 <div className="w-1/2 h-1/2 border-r border-b border-blue-500/20 absolute bottom-0 right-0"></div>
                 <p className="text-[10px] text-gray-600 uppercase tracking-[0.8em] rotate-90">Systems Intelligence</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* --- FOOTER LINK --- */}
      <section className="h-[50vh] flex flex-col justify-center items-center text-center px-[10%] bg-[#050505]">
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-10 reveal-text">
          Explore our <br /> <span className="italic font-medium text-blue-500">Methodology.</span>
        </h2>
        <button className="text-xl font-light border-b border-gray-700 pb-2 hover:border-white transition-all duration-500 flex items-center gap-4 group reveal-text">
          Our Story <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </button>
      </section>
    </div>
  );
}