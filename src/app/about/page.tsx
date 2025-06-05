import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-24 space-y-28">
        
        {/* Intro Heading */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="text-xl text-teal-300 max-w-2xl mx-auto leading-relaxed tracking-wide">
            I'm a frontend developer who enjoys building sleek, responsive, and accessible websites with modern tools and clean design systems.
          </p>
        </section>

        {/* Background Section */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/home/my_pic.jpg"
              alt="Sahash Chakma Portrait"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full"
              priority
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 space-y-5">
            <h2 className="text-3xl font-semibold">My Journey</h2>
            <p className="text-lg text-slate-300 leading-relaxed tracking-wide">
              I started as a curious developer learning the fundamentals of HTML, CSS, and JavaScript. Over time, I discovered a passion for frontend technologies and began exploring frameworks like React and Next.js. 
            </p>
            <p className="text-lg text-slate-400">
              Today, I focus on building fast, elegant, and interactive interfaces — often using Tailwind CSS for styling and aiming for pixel-perfect layouts and smooth user experiences.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-4xl font-semibold text-center mb-12">Skills & Tools</h2>
          <div className="grid sm:grid-cols-2 gap-10 text-slate-300 text-lg">
            <ul className="space-y-4">
              <li>
                <span className="font-semibold text-teal-300">Frontend:</span> HTML, CSS, JavaScript, TypeScript, React, Next.js , Django
              </li>
              <li>
                <span className="font-semibold text-teal-300">Styling:</span> Tailwind CSS, Sass, Responsive Design , Threejs
              </li>
              <li>
                <span className="font-semibold text-teal-300">Web Animation:</span> Framer Motion, CSS Animations
              </li>
               <li>
               <span className="font-semibold text-teal-400">Game Development:</span> Currently learning Unity & Unreal Engine for gameplay and level design
               </li>
            </ul>
            <ul className="space-y-4">
               <li>
               <span className="font-semibold text-amber-400">Mobile Development:</span> Android Studio, Kotlin — built a real-time chat app
              </li>
              <li>
                <span className="font-semibold text-amber-400">Backend (Basic):</span> Node.js, Supabase , Firebase
              </li>
              <li>
                <span className="font-semibold text-amber-400">Tools:</span> Git, Github, VS Code, Figma, Canva , Krita , Vercel
              </li>
              <li>
                <span className="font-semibold text-amber-400">Other:</span> SEO Basics, Web Accessibility, Performance Optimization
              </li>
            </ul>
          </div>
        </section>

        {/* Resume Section */}
<section className="space-y-8 py-20">
  <h2 className="text-5xl font-semibold text-center">Resume</h2>
  <p className="text-center text-slate-300 max-w-2xl mx-auto text-lg">
    Want a closer look at my experience and background? Here’s my resume for viewing or download.
  </p>
  <div className="border border-slate-700 rounded-xl overflow-hidden shadow-lg">
    <iframe
      src="/pdf/resumeweb.pdf"
      title="My Resume"
      className="w-full h-[800px]" // Increased height here
      frameBorder="0"
    />
  </div>
  <p className="text-center text-sm text-slate-400">
    If the embedded resume doesn’t load, you can also{' '}
    <a href="/pdf/SAHASH CHAKMA.pdf" className="text-teal-300 underline hover:text-teal-200">
      download it here
    </a>.
  </p>
</section>

      </main>
    </div>
  );
}
