import Link from "next/link";
import { GithubIcon } from "@/components/ui/icons";

const CornerDots = () => (
  <>
    <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
    <span className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
    <span className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
    <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
  </>
);

export default function StoriesPage() {
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
            {/* GitHub styled as a technology chip */}
            <a href="https://github.com/devalentineomonya" target="_blank" className="flex items-center gap-2 border border-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300 group">
              <GithubIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full px-6 flex flex-col pb-24 pt-12 sm:pt-20">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter mb-6 text-black">Stories.</h1>
          <p className="font-mono text-sm text-gray-600 mb-16 max-w-2xl">
            My thoughts, explorations, and tutorials on software engineering, cloud architecture, and building products.
          </p>
          
          <div className="flex flex-col gap-6 w-full">
            
            {/* Blog 1 */}
            <a href="https://v5.valentinee.dev/blogs/building-a-modern-blog-with-nextjs" target="_blank" className="border border-black p-6 sm:p-8 block relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group w-full">
              <CornerDots />
              <div className="flex items-center gap-4 mb-6 font-mono text-xs text-gray-600 group-hover:text-black transition-colors duration-300">
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
            
            {/* Blog 2 */}
            <a href="https://v5.valentinee.dev/blogs/typescript-best-practices" target="_blank" className="border border-black p-6 sm:p-8 block relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group w-full">
              <CornerDots />
              <div className="flex items-center gap-4 mb-6 font-mono text-xs text-gray-600 group-hover:text-black transition-colors duration-300">
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

            {/* Blog 3 (Example extra post to show feed) */}
            <a href="#" className="border border-black p-6 sm:p-8 block relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group w-full">
              <CornerDots />
              <div className="flex items-center gap-4 mb-6 font-mono text-xs text-gray-600 group-hover:text-black transition-colors duration-300">
                <span className="font-bold border border-black px-2 py-0.5 text-[9px] uppercase tracking-widest text-black">Personal</span>
                <span>•</span>
                <span>Jan 28, 2026</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Understanding React Server Components</h3>
              <p className="font-mono text-sm leading-7 text-gray-800 group-hover:text-gray-900 mb-8 max-w-3xl transition-colors duration-300">
                A deep dive into how React Server Components (RSC) fundamentally change the way we build web applications, reducing bundle sizes and improving performance.
              </p>
              <div className="flex flex-wrap gap-2 pt-5 border-t border-black group-hover:border-black transition-colors duration-300">
                <span className="border border-black group-hover:border-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300">React</span>
                <span className="border border-black group-hover:border-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300">Architecture</span>
              </div>
            </a>

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
