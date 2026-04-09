import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #111111;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 10%;
  font-family: 'Inter', sans-serif;
`;

const SidebarLogo = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
`;

export default function Services() {
  const content = [
    {
      heading: "We are the MUHA group,",
      subheading: "a creative studio specialized in UI/UX and full-stack development."
    },
    {
      text: "Design culture. Technical excellence. The speed of a boutique agency with the reliability of an industry leader. Whatever your vision, this is the place where digital ideas come to life."
    },
    {
      callToAction: "To discover. To design. To build."
    }
  ];

  return (
    <Section id="services">
      {/* Vertical Side Logo */}
      <SidebarLogo>MUHA & CO.</SidebarLogo>

      <div className="max-w-4xl space-y-20">
        {/* Main Intro */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            {content[0].heading}
          </h2>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight text-gray-400">
            {content[0].subheading}
          </h2>
        </div>

        {/* Philosophy Paragraph */}
        <div className="max-w-2xl">
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
            {content[1].text}
          </p>
        </div>

        {/* Minimal Footer/Call to Action */}
        <div>
          <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
            {content[2].callToAction}
          </h3>
        </div>
      </div>
    </Section>
  );
}