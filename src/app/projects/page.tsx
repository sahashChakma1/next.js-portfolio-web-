'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'A fully responsive personal portfolio website built using Next.js, Three.js, and Tailwind CSS. It features a smooth 3D animated homepage, showcases my work with image carousels, and includes a contact form for inquiries.',
      images: ['/images/port/Port01.png', '/images/port/Port02.png', '/images/port/Port03.png'],
      link: 'https://github.com/sahashChakma1/Next.js--Three.js-portfolio',
    },
    {
      title: 'Travel Blog',
      description:
        'A travel blogging platform made with Next.js, featuring beautiful image carousels, mobile-first design, and an engaging user interface. Built to inspire wanderlust and document travel experiences.',
      images: ['/images/blog/blog01.png', '/images/blog/blog02.png', '/images/blog/blog03.png', '/images/blog/blog04.png', '/images/blog/blog05.png'],
      link: 'https://github.com/sahashChakma1/Travel--Blog-using-nextjs-',
    },
    {
      title: 'Talksky Chat App (Android Studio)',
      description:
        'A feature-rich real-time chat app developed in Android Studio using Firebase. Supports secure one-on-one messaging, real-time syncing, push notifications, and a clean UI inspired by Google’s Material Design.',
      images: ['/images/chat/Chat01.png', '/images/chat/Chat02.png'],
      link: 'https://github.com/sahashChakma1/Talksky_Chat_App-Android-studio_project-',
    },
  ];

  const inProgress = [
    {
      title: 'TourMe Web App',
      description:
        'An interactive travel planning platform that helps users discover destinations, create itineraries, and book trips. Built with Next.js and Supabase for authentication and database support.',
    },
    {
      title: 'NGO Website for MITTALIS',
      description:
        'Developing a professional static website for MITTALIS Research India using the Next.js App Router and Supabase backend. The site will serve as an information hub for their educational and social initiatives.',
    },
  ];

  const [imageIndices, setImageIndices] = useState(projects.map(() => 0));

  const handleSlide = (projectIndex: number, direction: 'next' | 'prev') => {
    setImageIndices((prev) => {
      const images = projects[projectIndex].images;
      const total = images.length;
      const newIndex =
        direction === 'next'
          ? (prev[projectIndex] + 1) % total
          : (prev[projectIndex] - 1 + total) % total;

      const updated = [...prev];
      updated[projectIndex] = newIndex;

      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-zinc-900">
      <motion.main
        className="max-w-6xl mx-auto px-6 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-white mb-4">My Projects</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A curated selection of my web and mobile development work. These projects highlight my experience with modern technologies and UI/UX design principles.
          </p>
        </div>

        <section className="grid gap-12 md:grid-cols-1">
          {projects.map((project, idx) => {
            const currentImage = project.images[imageIndices[idx]];

            return (
              <div
                key={idx}
                className="group rounded-xl overflow-hidden bg-zinc-800 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 md:flex"
              >
                <div className="relative md:w-1/3 h-64 md:h-auto bg-zinc-700 flex items-center justify-center overflow-hidden">
                  <Image
                    src={currentImage}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                    unoptimized
                  />
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => handleSlide(idx, 'prev')}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-1.5 rounded-full shadow z-10"
                      >
                        ‹
                      </button>
                      <button
                        onClick={() => handleSlide(idx, 'next')}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-1.5 rounded-full shadow z-10"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>

                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
                  <p className="text-zinc-300 mb-4 leading-relaxed tracking-wide text-lg">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-400 hover:underline font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            );
          })}
        </section>

        <div className="mt-24 text-white">
          <h2 className="text-4xl font-bold mb-6">In Progress</h2>
          <div className="space-y-8">
            {inProgress.map((item, idx) => (
              <div key={idx} className="bg-zinc-800 rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-300 leading-relaxed tracking-wide text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.main>
    </div>
  );
}
