import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Styled Components ---
const MainContainer = styled.main`
  background-color: #0a0a0a;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
`;

const HeroWrapper = styled.div`
  position: relative;
  z-index: 1; 
  height: 100vh;
  width: 100%;
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #0f0f0f;
`;

const PatternLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.15;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%234466ff' stroke-width='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const SidebarLogo = styled.div`
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.7rem;
  letter-spacing: 0.4em;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
  z-index: 100;
`;

const ServicesSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10%;
  background-color: #0f0f0f; 
  z-index: 10;
  box-shadow: 0 -100px 100px rgba(0,0,0,1); 
`;

export default function PresentationSite() {
  const mainRef = useRef(null);
  const heroRef = useRef(null);
  const patternRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. PINNING & STACKING
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false, 
      });

      // 2. Pattern Parallax & Fade
      gsap.to(patternRef.current, {
        backgroundPosition: "0px 100px",
        opacity: 0,
        scrollTrigger: {
          trigger: "#services",
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      });

      // 3. Hero Text Entrance
      gsap.from(".animate-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "expo.out",
      });

      // 4. Large Background Floating Text
      gsap.to(".bg-float-text", {
        xPercent: -15,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <MainContainer ref={mainRef}>
      <SidebarLogo />

      <HeroWrapper ref={heroRef}>
        <HeroSection>
          <PatternLayer ref={patternRef} />
          
          <h2 className="bg-float-text absolute top-1/2 font-black text-[12vw] text-white/[0.02] whitespace-nowrap pointer-events-none uppercase tracking-tighter">
            MATHEMATICAL PRECISION • CREATIVE RIGOR • MUHA
          </h2>

          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-3xl">
              <div className="animate-text inline-flex items-center gap-2 mb-8 px-4 py-1 rounded-full border border-blue-900/50 bg-blue-500/5 text-[10px] uppercase tracking-widest font-bold text-blue-400">
                <Sparkles size={12} /> Systemic Design Intelligence
              </div>
              
              <h1 className="text-7xl md:text-9xl font-light tracking-tighter text-white leading-[0.9] mb-10">
                <span className="animate-text block">Define the</span>
                <span className="animate-text block font-medium text-blue-500 italic">Future.</span>
              </h1>
              
              <p className="animate-text text-xl md:text-2xl text-gray-400 max-w-xl mb-12 leading-relaxed font-light">
                MUHA combines systemic technical architecture with world-class design to solve complex global challenges.
              </p>
              
              <div className="animate-text">
                <button className="group flex items-center gap-4 text-xl font-medium border-b border-gray-700 pb-3 hover:border-blue-500 transition-all text-white">
                  Strategic Expertise <ArrowRight className="group-hover:translate-x-3 transition-transform text-blue-500" />
                </button>
              </div>
            </div>
          </div>
        </HeroSection>
      </HeroWrapper>

      <ServicesSection id="services">
        <div className="max-w-4xl space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
              We are the MUHA group,
            </h2>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight text-gray-600">
              engineering the next generation of digital platforms.
            </h2>
          </div>
          
          <div className="max-w-2xl">
            <p className="text-2xl md:text-4xl font-light leading-relaxed text-gray-400">
              Design culture. Technical excellence. The speed of a boutique agency with the reliability of an industry leader.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-4xl font-medium text-blue-500 tracking-tight cursor-pointer hover:text-white transition-all inline-flex items-center gap-6 group">
              To discover. To design. To build. 
              <span className="w-12 h-[1px] bg-blue-500 group-hover:w-20 transition-all"></span>
            </h3>
          </div>
        </div>
      </ServicesSection>
    </MainContainer>
  );
}