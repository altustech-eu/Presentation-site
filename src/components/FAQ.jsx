import { useEffect, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A basic website typically takes 4-6 weeks, while complex projects like custom web applications can take 8-12 weeks or more. We provide a detailed timeline during the initial consultation.'
  },
  {
    question: 'What is your design process?',
    answer: 'Our process includes 5 key phases: Discovery, Strategy, Design, Development, and Launch. We involve you at every stage to ensure the final product matches your vision.'
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes! All our projects include support periods ranging from 3-12 months depending on your plan. We offer flexible maintenance packages to keep your assets updated.'
  },
  {
    question: 'Can you work with our existing brand guidelines?',
    answer: 'Absolutely! We can work within your brand guidelines or help you create new ones, ensuring consistency and modern appeal.'
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, industry-standard technologies including React, Next.js, Node.js, and CMS platforms. Design is done using Figma, Adobe Suite, and professional tools.'
  },
  {
    question: 'Do you offer SEO services?',
    answer: 'Yes, SEO is included in our service offering. We provide keyword research, content strategy, technical SEO, and ongoing optimization.'
  },
  {
    question: 'Can you handle international clients?',
    answer: 'Absolutely! We have experience working with clients across multiple countries and time zones using modern collaboration tools.'
  },
  {
    question: 'What are your payment terms?',
    answer: 'We usually follow milestone-based payments: 50% upfront, 25% at midpoint, 25% on completion. Custom arrangements can also be discussed.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Floating Interactive Blobs */}
      <div
        className="absolute w-72 h-72 bg-orange-300/20 rounded-full blur-3xl pointer-events-none transition-transform duration-300"
        style={{ transform: `translate(${cursorPos.x * 0.03}px, ${cursorPos.y * 0.03}px)` }}
      />
      <div
        className="absolute w-64 h-64 bg-orange-400/20 rounded-full blur-3xl pointer-events-none transition-transform duration-300"
        style={{ transform: `translate(${cursorPos.x * -0.02}px, ${cursorPos.y * -0.02}px)` }}
      />

      {/* Header */}
      <div className="text-center mb-20 px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Frequently Asked <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Questions</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Got questions? We've got answers. Can't find what you're looking for? Contact us anytime.
        </p>
      </div>

      {/* FAQ List */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}
            style={{ marginLeft: idx % 2 === 1 ? '2rem' : '0' }}
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full px-8 py-6 flex items-center justify-between text-left"
            >
              <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {openIndex === idx ? <Minus className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-white" />}
              </div>
            </button>

            <div
              className={`transition-all duration-500 ease-in-out px-8 overflow-hidden bg-gray-50 ${
                openIndex === idx ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
              }`}
            >
              <p className="pb-6 text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-16 relative z-10 text-center px-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
        <p className="text-gray-600 mb-6">Our team is here to help. Get in touch and we'll respond within 24 hours.</p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/50"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
