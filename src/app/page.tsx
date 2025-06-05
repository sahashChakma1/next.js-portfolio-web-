'use client';

import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://github.com/sahashChakma1',
    label: 'GitHub',
    icon: (
      <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 hover:text-emerald-300 transition-transform duration-300" />
    ),
  },
  {
    href: 'https://www.linkedin.com/in/sahash-chakma',
    label: 'LinkedIn',
    icon: (
      <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 hover:text-blue-300 transition-transform duration-300" />
    ),
  },
  {
  href: 'https://sahash-portfolio.vercel.app',
  label: 'Portfolio',
  icon: (
    <FaGlobe className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 hover:text-purple-300 transition-transform duration-300" />
  )
},
];

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center text-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-white"
      aria-label="Introduction"
    >
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
      Hi, I&apos;m{' '}
        <span className="text-emerald-400" aria-label="Sahash Chakma">
          Sahash Chakma
        </span>
      </h1>

     <p className="text-lg sm:text-xl max-w-xl text-slate-300 leading-relaxed">
  I’m a <strong>frontend developer</strong> dedicated to building fast, responsive, and user-friendly websites and web apps that deliver seamless digital experiences.
</p>
        <p className="italic text-slate-400 text-sm mt-4">
           &quot;I specialize in writing clean, maintainable code using modern technologies like React, Next.js, and Tailwind CSS.&quot;
          </p>
      <p className="italic text-slate-400 text-sm mt-4">
        "My passion lies in turning complex problems into simple, intuitive interfaces that users love to interact with. "
      </p>
            
      {/* CTA Button */}
      <a
        href="/projects"
        className="mt-8 inline-block bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-400 transition duration-300"
      >
        View My Projects
      </a>
      
      {/* Extra Portfolio Link Description */}
<div className="mt-8 text-slate-300 text-sm sm:text-base text-center max-w-md">
  I also have a separate portfolio focused on my{" "}
  <span className="text-purple-400 font-medium">Game Development</span> work.
  It&apos;s still a work in progress, but if you&apos;d like a sneak peek...
</div>


      {/* Social Icons */}
<div className="mt-6 flex items-center gap-6">
  {socialLinks.map(({ href, label, icon }) => (
    <motion.a
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      key={label}
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
    >
      {icon}
    </motion.a>
  ))}
</div>


      {/* Optional Divider */}
      <div className="h-px w-20 bg-gradient-to-r from-emerald-400/50 to-transparent mt-16"></div>
    </motion.section>
  );
}
