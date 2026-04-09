import { useEffect, useState } from "react";
import { Users, Target, Zap, Award } from "lucide-react";
import Tilt from "react-parallax-tilt";
import Lenis from "@studio-freight/lenis";

// Import team images
import Person1Img from '../assests/team/person1.webp';
import Person2Img from '../assests/team/person2.webp';
import Person3Img from '../assests/team/person3.webp';
import Person4Img from '../assests/team/person4.webp';
import Person5Img from '../assests/team/person5.webp';

const values = [
  {
    icon: Target,
    title: "Client-Focused",
    description:
      "Your success is our mission. We tailor every solution to meet your unique goals and challenges.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description:
      "We stay ahead of trends and leverage cutting-edge technologies to deliver exceptional results.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "We believe in transparent communication and working closely with our clients every step of the way.",
  },
  {
    icon: Award,
    title: "Quality Driven",
    description:
      "Excellence is our standard. We never compromise on quality or attention to detail.",
  },
];

const team = [
  { name: "Prasanth", role: "Designer", image: Person1Img },
  { name: "karthi", role: "Developer", image: Person2Img },
  { name: "Dhanush", role: "Digital Marketing", image: Person3Img },
  { name: "Kailas", role: "Data analyst", image: Person4Img },
  { name: "Kirubasri", role: "UX designer", image: Person5Img },
];

export default function About() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1, wheelMultiplier: 1.2 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Cursor background effect
  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-white via-gray-200 to-gray-200 relative overflow-hidden">
      {/* Interactive background circles */}
      <div
        className="absolute rounded-full w-72 h-72 bg-orange-200/30 blur-3xl pointer-events-none transition-transform duration-300"
        style={{ transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)` }}
      />
      <div
        className="absolute rounded-full w-64 h-64 bg-orange-300/30 blur-3xl pointer-events-none transition-transform duration-300"
        style={{ transform: `translate(${cursorPos.x * -0.02}px, ${cursorPos.y * -0.02}px)` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-orange-50 rounded-full border border-orange-200 mb-6">
            <span className="text-orange-500 font-semibold">About Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            We Are{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              MUHA
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A passionate team of designers, developers, and strategists dedicated to transforming bold ideas into exceptional digital experiences. Since 2025, we've been helping businesses across the globe achieve their digital ambitions.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {values.map((value, index) => (
            <Tilt key={index} glareEnable={true} glareMaxOpacity={0.2} scale={1.05} className="w-full">
              <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            </Tilt>
          ))}
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Leadership
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Tilt key={index} glareEnable={true} glareMaxOpacity={0.25} scale={1.07} className="w-full">
                <div className="group relative text-center">
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-orange-500 text-sm">{member.role}</p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-white to-gray-300 rounded-3xl p-12 border border-orange-300 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with innovative solutions and creative excellence.
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/50"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
}
