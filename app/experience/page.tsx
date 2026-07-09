"use client";

import Link from "next/link";
import { GithubIcon } from "@/components/ui/icons";
import { motion } from "framer-motion";

const CornerDots = () => (
  <>
    <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
    <span className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
    <span className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
    <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
  </>
);

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

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans relative flex flex-col selection:bg-black selection:text-white">
      {/* Sticky Navbar */}
      <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center px-6 py-4 border-b border-black">
          <Link href="/" className="font-bold text-lg sm:text-xl tracking-tighter cursor-pointer no-underline text-black border border-black px-3 py-1 hover:bg-black hover:text-white transition-colors duration-300">
            devalentine.
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/" className="text-[10px] font-bold uppercase tracking-widest hover:underline hidden sm:block">
              ← BACK TO HOME
            </Link>
            <a href="https://github.com/devalentineomonya" target="_blank" className="flex items-center gap-2 border border-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300 group">
              <GithubIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full px-6 flex flex-col pb-24 pt-12 sm:pt-20">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter mb-6 text-black">Experience.</h1>
          <p className="font-mono text-sm text-gray-600 mb-16 max-w-2xl">
            My professional journey across software engineering roles, leadership, and technical attachments.
          </p>
          
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

            {/* Computer Society of Kirinyaga */}
            <FadeUp delay={0.2}>
              <div className="border border-black p-6 sm:p-8 bg-white relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group">
                <CornerDots />
                <div className="flex flex-col sm:flex-row justify-between items-start mb-8 border-b border-black group-hover:border-black pb-6 transition-colors duration-300">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight">Computer Society of Kirinyaga</h3>
                    <p className="font-mono text-sm mt-2 text-gray-600 transition-colors duration-300">Kutus, Kirinyaga, Kenya</p>
                  </div>
                </div>
                
                {/* Role 1 - Leadership */}
                <div className="mb-10">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <h4 className="text-xl font-bold">Assistant Vice Chairperson</h4>
                      <span className="font-mono text-[10px] border border-black group-hover:border-black px-2 py-0.5 uppercase tracking-widest transition-colors duration-300">Leadership</span>
                    </div>
                    <div className="font-mono text-xs border border-black group-hover:border-black px-3 py-1 bg-black text-white group-hover:bg-black transition-colors duration-300">
                      May 2026 - Present
                    </div>
                  </div>
                  <p className="font-mono text-sm leading-7 text-gray-800 group-hover:text-gray-900 mb-6 max-w-3xl transition-colors duration-300">
                    Serving as the Assistant Vice Chairperson to oversee community operations, organize technical workshops, and lead strategic initiatives to foster a thriving ecosystem of student developers.
                  </p>
                </div>

                {/* Role 2 - Development Lead */}
                <div className="pt-8 border-t border-gray-200 group-hover:border-black transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <h4 className="text-xl font-bold">Development Lead</h4>
                      <span className="font-mono text-[10px] border border-black group-hover:border-black px-2 py-0.5 uppercase tracking-widest transition-colors duration-300">Core</span>
                    </div>
                    <div className="font-mono text-xs border border-black group-hover:border-black px-3 py-1 transition-colors duration-300">
                      Sep 2025 - Present
                    </div>
                  </div>
                  <p className="font-mono text-sm leading-7 text-gray-800 group-hover:text-gray-900 mb-6 max-w-3xl transition-colors duration-300">
                    Led both the frontend and backend engineering teams while personally building the core frontend architecture. Delivered a full-stack community platform integrating OpenAI APIs and M-Pesa payments, achieving 40% growth in active users.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["nestjs", "docker", "openai", "stripe", "rabbitmq"].map(tech => (
                      <span key={tech} className="border border-black group-hover:border-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
            
            {/* Teach2Give */}
            <FadeUp delay={0.3}>
              <div className="border border-black p-6 sm:p-8 bg-white relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group">
                <CornerDots />
                <div className="flex flex-col sm:flex-row justify-between items-start mb-8 border-b border-black group-hover:border-black pb-6 transition-colors duration-300">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight">Teach2Give</h3>
                    <p className="font-mono text-sm mt-2 text-gray-600 transition-colors duration-300">On-Site Attachment</p>
                  </div>
                </div>
                
                <div className="mb-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <h4 className="text-xl font-bold">Software Engineering Attaché</h4>
                      <span className="font-mono text-[10px] border border-black group-hover:border-black px-2 py-0.5 uppercase tracking-widest transition-colors duration-300">Attachment</span>
                    </div>
                    <div className="font-mono text-xs border border-black group-hover:border-black px-3 py-1 transition-colors duration-300">
                      May 2025 - Jul 2025
                    </div>
                  </div>
                  <p className="font-mono text-sm leading-7 text-gray-800 group-hover:text-gray-900 mb-6 max-w-3xl transition-colors duration-300">
                    Worked on full-stack projects using React and NestJS, managing code with Git and GitHub. Gained experience with Docker containers and Azure DevOps for CI/CD. Developed strong abilities in leadership, team collaboration, and technical writing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["react", "nestjs", "docker", "typescript", "git", "github"].map(tech => (
                      <span key={tech} className="border border-black group-hover:border-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Godan Info */}
            <FadeUp delay={0.4}>
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

          </div>
        </div>
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
