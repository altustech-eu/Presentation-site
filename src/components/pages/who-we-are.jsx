import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  background-color: #0a0a0a;
  color: white;
  font-family: 'Inter', sans-serif;
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 10%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const SideLabel = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
  font-size: 0.7rem;
  letter-spacing: 0.4em;
  color: rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
  font-weight: 700;
`;

export default function WhoWeAre() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations for each section
      gsap.utils.toArray(".reveal").forEach((elem) => {
        gsap.from(elem, {
          y: 50,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
          },
        });
      });
    }, scrollRef);
    return () => ctx.revert();
  }, []);

  return (
    <Container ref={scrollRef}>
      
      {/* --- SECTION: FOUNDER --- */}
      <Section id="founder">
        <SideLabel>The Founder</SideLabel>
        <div className="max-w-5xl grid lg:grid-cols-2 gap-20 items-center reveal">
          <div>
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-none mb-10">
              David E. <span className="font-medium italic text-blue-500">Shaw.</span>
            </h1>
            <p className="text-2xl text-gray-400 font-light leading-relaxed mb-8">
              A computer scientist by training, Dr. Shaw founded the group in 1988 with the belief that creative thought and computational rigor could transform the world of finance.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-[1px] bg-blue-500 mt-4"></div>
              <p className="text-gray-500 italic">"We are a global investment and technology development firm."</p>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-[4/5] bg-gray-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" alt="Founder" />
             </div>
          </div>
        </div>
      </Section>

      {/* --- SECTION: CORE PRINCIPLES --- */}
      <Section id="principles" className="bg-[#0f0f0f]">
        <SideLabel>Principles</SideLabel>
        <div className="w-full reveal">
          <h2 className="text-5xl font-light mb-20 tracking-tight">Our Core <span className="text-blue-500">Principles.</span></h2>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { t: "Intellectual Rigor", d: "We prize logical consistency and empirical evidence over conventional wisdom." },
              { t: "Diverse Perspectives", d: "We hire people from all fields—math, physics, and the arts—to solve hard problems." },
              { t: "Technology First", d: "Our systems are built from the ground up using state-of-the-art computational methods." }
            ].map((p, i) => (
              <div key={i} className="group cursor-default">
                <h4 className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">0{i+1}</h4>
                <h3 className="text-2xl font-medium mb-4 group-hover:text-blue-400 transition-colors">{p.t}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* --- SECTION: LEADERSHIP --- */}
      <Section id="leadership">
        <SideLabel>Leadership</SideLabel>
        <div className="w-full reveal">
          <h2 className="text-5xl font-light mb-16 tracking-tight">Executive Committee.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative aspect-square bg-[#111] group overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img src={`https://i.pravatar.cc/400?img=${i+10}`} className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-all duration-500" alt="Leader" />
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-xs font-bold tracking-widest uppercase">Lead Director</p>
                  <p className="text-gray-400 text-[10px]">Member since 200{i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* --- SECTION: OUR PEOPLE LINK --- */}
      <Section id="join-us" className="justify-center text-center">
        <div className="reveal">
          <h2 className="text-6xl md:text-8xl font-light tracking-tighter mb-12">
            Be part of the <br /> <span className="italic font-medium text-blue-500">Discovery.</span>
          </h2>
          <button className="text-2xl border-b border-gray-600 pb-2 hover:border-white transition-all inline-flex items-center gap-4">
            View Our People <ArrowRight />
          </button>
        </div>
      </Section>

    </Container>
  );
}