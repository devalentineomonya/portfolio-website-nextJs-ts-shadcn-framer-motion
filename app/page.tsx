"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon } from "@/components/ui/icons";

// Corner dots for cards on hover
const CornerDots = () => (
  <>
    <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
    <span className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
    <span className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
    <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
  </>
);

// Simple smooth fade up animation component
const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Force home active when at the very top
      if (window.scrollY < 150) {
        setActiveSection("home");
        return;
      }

      const sections = Array.from(document.querySelectorAll("section[id]"));
      
      // Iterate backwards to find the deepest section currently scrolled into view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        
        // 200px offset accounts for the sticky navbar and a small buffer
        if (rect.top <= 250) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "stories", label: "Stories" },
    { id: "contact", label: "Hit me up" },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans relative flex flex-col selection:bg-black selection:text-white">

      {/* Sticky Navbar */}
      <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center px-6 py-4 border-b border-black">
          <div className="font-bold text-lg sm:text-xl tracking-tighter cursor-pointer border border-black px-3 py-1 hover:bg-black hover:text-white transition-colors duration-300" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            devalentine.
          </div>
          
          <nav className="hidden md:flex gap-1 text-[10px] font-bold uppercase tracking-widest bg-gray-50 border border-black p-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3 py-1.5 transition-colors duration-300 no-underline ${
                  activeSection === link.id ? "bg-black text-white" : "text-black hover:bg-black/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center border border-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300"
            >
              {isMobileMenuOpen ? "CLOSE" : "MENU"}
            </button>

            {/* GitHub styled as a technology chip */}
            <a href="https://github.com/devalentineomonya" target="_blank" className="flex items-center gap-2 border border-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300 group">
              <GithubIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center p-6 md:hidden"
          >
            <nav className="flex flex-col w-full max-w-sm mx-auto font-bold uppercase tracking-widest text-xs gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full text-center py-5 border border-black transition-colors duration-300 no-underline ${
                    activeSection === link.id ? "bg-black text-white" : "text-black bg-gray-50 hover:bg-black hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Wrapper */}
      <main className="flex-grow w-full px-6 flex flex-col pb-24">
        
        {/* Hero Section */}
        <section id="home" className="w-full scroll-mt-32 pt-4 sm:pt-8">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 py-12 lg:grid-cols-[1fr_420px]">
          {/* Left Text Side */}
          <section className="max-w-3xl">
            <FadeUp>
              <p className="font-mono text-sm text-gray-600">// just a simple guy building stuff</p>
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <h1 className="mt-6 text-[56px] font-bold leading-[0.92] tracking-[-0.04em] sm:text-[88px] lg:text-[112px] text-black">
                turns ideas into functionable systems.
              </h1>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <p className="mt-8 max-w-xl font-mono text-sm leading-7 text-gray-800 sm:text-base">
                A Software Engineer with expertise in frontend, backend, and DevOps. I specialize in building robust and scalable software that solves real-world problems.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="#work" className="relative inline-flex h-12 items-center justify-center border border-black bg-black text-white px-8 font-sans text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 ease-in-out hover:bg-white hover:text-black group">
                  <span className="absolute top-0 left-0 w-1.5 h-1.5 bg-white group-hover:!bg-black transition-colors duration-300 ease-in-out"></span>
                  <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-white group-hover:!bg-black transition-colors duration-300 ease-in-out"></span>
                  <span className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-white group-hover:!bg-black transition-colors duration-300 ease-in-out"></span>
                  <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-white group-hover:!bg-black transition-colors duration-300 ease-in-out"></span>
                  MY WORK
                </Link>
                <Link href="#stories" className="relative inline-flex h-12 items-center justify-center border border-black bg-white text-black px-8 font-sans text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 ease-in-out hover:bg-black hover:text-white group">
                  <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                  <span className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                  <span className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                  <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                  IN MY MIND
                </Link>
              </div>
            </FadeUp>
          </section>

          {/* Right Profile Card */}
          <aside className="border border-black bg-white w-full">
            <FadeUp delay={0.4}>
              <div className="flex items-center justify-between border-b border-black px-4 py-3 font-mono text-xs font-medium">
                <span>profile.tsx</span>
                <span>open-to-work</span>
              </div>
              <div className="p-4 sm:p-5">
                <div className="border border-black">
                  <div className="aspect-[4/5] sm:aspect-square border-b border-black bg-gray-100 relative group overflow-hidden">
                    <img src="/valentine.png" alt="Valentine" className="h-full w-full object-cover object-center grayscale contrast-[1.1] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold tracking-[-0.01em]">Valentine Omonya</h2>
                        <p className="mt-1 font-mono text-sm text-gray-600">Nairobi</p>
                      </div>
                      <div className="h-2 w-2 bg-black mt-1.5 shrink-0"></div>
                    </div>
                    <p className="mt-5 font-mono text-[11px] font-bold leading-6">
                      Software Engineer, Frontend, Backend, DevOps, AI.
                    </p>
                    
                    <div className="mt-6 grid grid-cols-2 gap-3 border-t border-gray-200 pt-5">
                      <a href="mailto:contact@valentinee.dev" className="relative flex h-12 items-center justify-center border border-black bg-white text-black font-bold text-xs uppercase tracking-[0.1em] hover:bg-black hover:text-white transition-all duration-300 ease-in-out group">
                        <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                        <span className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                        <span className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                        <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                        EMAIL
                      </a>
                      <a href="https://v1.valentinee.dev/resume.pdf" target="_blank" className="relative flex h-12 items-center justify-center border border-black bg-black text-white font-bold text-xs uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-all duration-300 ease-in-out group">
                        <span className="absolute top-0 left-0 w-1.5 h-1.5 bg-white group-hover:!bg-black transition-colors duration-300 ease-in-out"></span>
                        <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-white group-hover:!bg-black transition-colors duration-300 ease-in-out"></span>
                        <span className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-white group-hover:!bg-black transition-colors duration-300 ease-in-out"></span>
                        <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-white group-hover:!bg-black transition-colors duration-300 ease-in-out"></span>
                        VIEW CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </aside>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full max-w-6xl mx-auto mt-24 border-t border-black pt-16 scroll-mt-24">
          <FadeUp>
            <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.02em] mb-12">About.</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeUp delay={0.1}>
              <p className="font-mono text-sm leading-8 text-gray-800">
                I have always been interested in building systems that solve user problems across different platforms—be it web, mobile, or systems with TUIs—and I focus heavily on implementing robust business solutions.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="font-mono text-sm flex flex-col gap-0 border border-black">
                <div className="flex justify-between border-b border-black p-4 bg-gray-50">
                  <span className="font-bold uppercase tracking-widest text-xs">Location</span>
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex justify-between border-b border-black p-4">
                  <span className="font-bold uppercase tracking-widest text-xs">Focus</span>
                  <span>Frontend, Backend, DevOps</span>
                </div>
                <div className="flex justify-between p-4 bg-gray-50">
                  <span className="font-bold uppercase tracking-widest text-xs">Availability</span>
                  <span>Open for roles</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full max-w-6xl mx-auto mt-32 border-t border-black pt-16 scroll-mt-24">
          <FadeUp>
            <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.02em] mb-12">Experience.</h2>
          </FadeUp>
                    <div className="flex flex-col gap-8">
            
            {/* Transcom Media */}
            <FadeUp delay={0.1}>
              <div className="border border-black p-6 sm:p-8 bg-white relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group">
                <CornerDots />
                <div className="flex flex-col sm:flex-row justify-between items-start mb-8 border-b border-black group-hover:border-black pb-6 transition-colors duration-300">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight">Transcom Media</h3>
                    <p className="font-mono text-sm mt-2 text-gray-600 transition-colors duration-300">Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="mb-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <h4 className="text-xl font-bold">Software Engineering Attaché</h4>
                      <span className="font-mono text-[10px] border border-black group-hover:border-black px-2 py-0.5 uppercase tracking-widest transition-colors duration-300">Attachment</span>
                    </div>
                    <div className="font-mono text-xs border border-black group-hover:border-black px-3 py-1 bg-black text-white group-hover:bg-black transition-colors duration-300">
                      May 2026 - Present
                    </div>
                  </div>
                  <p className="font-mono text-sm leading-7 text-gray-800 group-hover:text-gray-900 mb-6 max-w-3xl transition-colors duration-300">
                    Building robust, tailored business solutions and enterprise applications using CodeIgniter, PHP, and WordPress to meet client requirements and streamline digital workflows.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["php", "codeigniter", "wordpress", "mysql", "javascript"].map(tech => (
                      <span key={tech} className="border border-black group-hover:border-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Godan Info */}
            <FadeUp delay={0.2}>
              <div className="border border-black p-6 sm:p-8 bg-white relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group">
                <CornerDots />
                <div className="flex flex-col sm:flex-row justify-between items-start mb-8 border-b border-black group-hover:border-black pb-6 transition-colors duration-300">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight">Godan Info</h3>
                    <p className="font-mono text-sm mt-2 text-gray-600 transition-colors duration-300">Remote Internship</p>
                  </div>
                </div>
                
                <div className="mb-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <h4 className="text-xl font-bold">Frontend Web Developer</h4>
                      <span className="font-mono text-[10px] border border-black group-hover:border-black px-2 py-0.5 uppercase tracking-widest transition-colors duration-300">Internship</span>
                    </div>
                    <div className="font-mono text-xs border border-black group-hover:border-black px-3 py-1 transition-colors duration-300">
                      Jan 2025 - Apr 2025
                    </div>
                  </div>
                  <p className="font-mono text-sm leading-7 text-gray-800 group-hover:text-gray-900 mb-6 max-w-3xl transition-colors duration-300">
                    Contributed to frontend web development using React.js and Ant Design for the Smip Users Dashboard. Collaborated with the engineering team to build responsive, role-based user interfaces, helping streamline client workflows and improve overall UI/UX.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["react", "antdesign", "javascript", "ui/ux", "frontend"].map(tech => (
                      <span key={tech} className="border border-black group-hover:border-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
            
            <div className="mt-12 flex justify-end">
               <Link href="/experience" className="relative inline-flex h-12 items-center justify-center gap-2 border border-black bg-white text-black px-8 font-sans text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 ease-in-out hover:bg-black hover:text-white group">
                  <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                  <span className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                  <span className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                  <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                  VIEW FULL RESUME
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
               </Link>
            </div>

          </div>
        </section>

        {/* My Work Section */}
        <section id="work" className="w-full max-w-6xl mx-auto mt-32 border-t border-black pt-16 scroll-mt-24">
          <FadeUp>
            <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.02em] mb-12">My Work.</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Nine Hertz */}
            <FadeUp delay={0.1}>
              <a href="https://medic.valentinee.dev" target="_blank" className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative block border border-black p-4 sm:p-6 flex flex-col h-full">
                <CornerDots />
                <div className="w-full aspect-video border border-black bg-gray-100 mb-6 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" alt="Nine Hertz" className="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold tracking-tight">Nine Hertz</h3>
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black group-hover:border-black bg-black text-white px-2 py-1 transition-colors duration-300">Personal</span>
                </div>
                <p className="font-mono text-sm leading-7 mb-8 flex-grow text-gray-800 group-hover:text-black transition-colors duration-300">
                  An AI powered health care system with features like appointment scheduling, patient record management, reminders, medical insights.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-black group-hover:border-black transition-colors duration-300">
                  <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">react</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">nestjs</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">docker</span>
                </div>
              </a>
            </FadeUp>

            {/* Computer Society of Kirinyaga */}
            <FadeUp delay={0.2}>
              <a href="https://computersocietyofkirinyaga.org" target="_blank" className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative block border border-black p-4 sm:p-6 flex flex-col h-full">
                <CornerDots />
                <div className="w-full aspect-video border border-black bg-gray-100 mb-6 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" alt="Computer Society of Kirinyaga" className="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold tracking-tight">Computer Society of Kirinyaga</h3>
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black group-hover:border-black bg-gray-200 px-2 py-1 transition-colors duration-300">Volunteer</span>
                </div>
                <p className="font-mono text-sm leading-7 mb-8 flex-grow text-gray-800 group-hover:text-black transition-colors duration-300">
                  The official web platform for the Computer Society of Kirinyaga, serving as a central hub for members, events, and tech community resources.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-black group-hover:border-black transition-colors duration-300">
                  <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">next.js</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">tailwind</span>
                </div>
              </a>
            </FadeUp>

            {/* lazyDLP */}
            <FadeUp delay={0.3}>
              <a href="https://github.com/devalentineomonya/lazydlp" target="_blank" className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative block border border-black p-4 sm:p-6 flex flex-col h-full">
                <CornerDots />
                <div className="w-full aspect-video border border-black bg-gray-100 mb-6 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" alt="lazyDLP" className="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold tracking-tight">lazyDLP</h3>
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black group-hover:border-black bg-black text-white px-2 py-1 transition-colors duration-300">Personal</span>
                </div>
                <p className="font-mono text-sm leading-7 mb-8 flex-grow text-gray-800 group-hover:text-black transition-colors duration-300">
                  A powerful, interactive command-line wrapper for yt-dlp, making it incredibly easy to download media without memorizing complex flags.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-black group-hover:border-black transition-colors duration-300">
                  <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">react</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">ink tui</span>
                </div>
              </a>
            </FadeUp>

          </div>
          
          <FadeUp delay={0.4}>
            <div className="mt-8 flex justify-end">
               <Link href="/work" className="relative inline-flex h-12 items-center justify-center gap-2 border border-black bg-white text-black px-8 font-sans text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 ease-in-out hover:bg-black hover:text-white group">
                  <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                  <span className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                  <span className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                  <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                  VIEW ALL PROJECTS
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
               </Link>
            </div>
          </FadeUp>
        </section>

        {/* Stories Section */}
        <section id="stories" className="w-full max-w-6xl mx-auto mt-32 border-t border-black pt-16 scroll-mt-24">
          <FadeUp>
            <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.02em] mb-12">Stories.</h2>
          </FadeUp>
          <div className="flex flex-col gap-6 w-full">
            
            {/* Blog 1 */}
            <FadeUp delay={0.1}>
              <a href="https://v5.valentinee.dev/blogs/building-a-modern-blog-with-nextjs" target="_blank" className="border border-black p-6 sm:p-8 block relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group w-full">
                <CornerDots />
                <CornerDots />
                <div className="flex items-center gap-4 mb-6 font-mono text-xs text-gray-600  transition-colors duration-300">
                  <span className="font-bold border border-black px-2 py-0.5 text-[9px] uppercase tracking-widest text-black">Tech</span>
                  <span>•</span>
                  <span>Feb 15, 2026</span>
                  <span>•</span>
                  <span>3 min read</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Building a Modern Blog with Next.js and MDX</h3>
                <p className="font-mono text-sm leading-7 text-gray-800 group-hover:text-gray-900 mb-8 max-w-3xl transition-colors duration-300">
                  A comprehensive guide to setting up a performant, developer-friendly blogging system using Next.js, MDX, and Shiki for syntax highlighting.
                </p>
                <div className="flex flex-wrap gap-2 pt-5 border-t border-black group-hover:border-black transition-colors duration-300">
                  <span className="border border-black group-hover:border-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300">Next.js</span>
                  <span className="border border-black group-hover:border-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300">MDX</span>
                </div>
              </a>
            </FadeUp>
            
            {/* Blog 2 */}
            <FadeUp delay={0.2}>
              <a href="https://v5.valentinee.dev/blogs/typescript-best-practices" target="_blank" className="border border-black p-6 sm:p-8 block relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group w-full">
                <CornerDots />
                <CornerDots />
                <div className="flex items-center gap-4 mb-6 font-mono text-xs text-gray-600  transition-colors duration-300">
                  <span className="font-bold border border-black px-2 py-0.5 text-[9px] uppercase tracking-widest text-black">Career</span>
                  <span>•</span>
                  <span>Feb 10, 2026</span>
                  <span>•</span>
                  <span>2 min read</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">TypeScript Best Practices for 2026</h3>
                <p className="font-mono text-sm leading-7 text-gray-800 group-hover:text-gray-900 mb-8 max-w-3xl transition-colors duration-300">
                  Essential TypeScript patterns and practices every developer should know to write cleaner, safer, and more maintainable code.
                </p>
                <div className="flex flex-wrap gap-2 pt-5 border-t border-black group-hover:border-black transition-colors duration-300">
                  <span className="border border-black group-hover:border-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300">TypeScript</span>
                  <span className="border border-black group-hover:border-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300">Best Practices</span>
                </div>
              </a>
            </FadeUp>
            
          </div>

          <FadeUp delay={0.3}>
            <div className="mt-8 flex justify-end">
               <Link href="/stories" className="relative inline-flex h-12 items-center justify-center gap-2 border border-black bg-white text-black px-8 font-sans text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 ease-in-out hover:bg-black hover:text-white group">
                  <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                  <span className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                  <span className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                  <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 bg-black group-hover:!bg-white transition-colors duration-300 ease-in-out z-10"></span>
                  VIEW ALL STORIES
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
               </Link>
            </div>
          </FadeUp>
        </section>

        {/* Hit Me Up Section */}
        <section id="contact" className="w-full max-w-6xl mx-auto mt-32 border-t border-black pt-16 scroll-mt-24">
          <FadeUp>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border border-black p-8 sm:p-12 bg-gray-50">
              <div className="w-full max-w-xl">
                <h2 className="text-5xl sm:text-7xl font-black tracking-tighter mb-6 text-black">Hit me up.</h2>
                <p className="font-mono text-sm leading-7 text-gray-800 mb-10">
                  Let's build something great together. My inbox is always open for opportunities, exciting new projects, or just to say hello.
                </p>
                <a href="mailto:contact@valentinee.dev" className="relative flex w-full lg:inline-flex lg:w-auto h-14 items-center justify-center border border-black bg-black text-white px-10 font-sans text-xs font-bold uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-all duration-300 ease-in-out group">
                  <span className="absolute top-0 left-0 w-1.5 h-1.5 bg-white group-hover:!bg-black transition-colors duration-300 ease-in-out"></span>
                  <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-white group-hover:!bg-black transition-colors duration-300 ease-in-out"></span>
                  <span className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-white group-hover:!bg-black transition-colors duration-300 ease-in-out"></span>
                  <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-white group-hover:!bg-black transition-colors duration-300 ease-in-out"></span>
                  SAY HELLO
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-4 w-full lg:w-auto min-w-[280px] mt-4 lg:mt-0">
                <a href="https://github.com/devalentineomonya" className="relative border border-black p-4 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors duration-300 ease-in-out group overflow-hidden">
                  <CornerDots />
                  <span className="font-bold text-[10px] sm:text-xs uppercase tracking-widest truncate">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/devalentineomonya" className="relative border border-black p-4 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors duration-300 ease-in-out group overflow-hidden">
                  <CornerDots />
                  <span className="font-bold text-[10px] sm:text-xs uppercase tracking-widest truncate">LinkedIn</span>
                </a>
                <a href="https://x.com/devalentine_" className="relative border border-black p-4 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors duration-300 ease-in-out group overflow-hidden">
                  <CornerDots />
                  <span className="font-bold text-[10px] sm:text-xs uppercase tracking-widest truncate">Twitter</span>
                </a>
                <a href="mailto:contact@valentinee.dev" className="relative border border-black p-4 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors duration-300 ease-in-out group overflow-hidden">
                  <CornerDots />
                  <span className="font-bold text-[10px] sm:text-xs uppercase tracking-widest truncate">Email</span>
                </a>
                <a href="https://studio.valentinee.dev" target="_blank" className="col-span-2 relative border border-black p-4 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors duration-300 ease-in-out group overflow-hidden">
                  <CornerDots />
                  <span className="font-bold text-[10px] sm:text-xs uppercase tracking-widest truncate">Builder at companyX</span>
                </a>
              </div>
            </div>
          </FadeUp>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full bg-white mt-auto">
        <div className="w-full max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono font-bold uppercase tracking-widest gap-4 border-t border-black">
          <div>valentine omonya</div>
          <div>software engineer</div>
          <div>© {new Date().getFullYear()}</div>
        </div>
      </footer>
    </div>
  );
}
