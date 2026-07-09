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

export default function WorkPage() {
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
          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter mb-6 text-black">Work.</h1>
          <p className="font-mono text-sm text-gray-600 mb-16 max-w-2xl">
            A collection of robust, scalable applications and tools I've built to solve real-world problems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            
            {/* PERSONAL PROJECTS */}
            
            {/* Nine Hertz */}
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

            {/* Studio */}
            <a href="https://studio.valentinee.dev" target="_blank" className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative block border border-black p-4 sm:p-6 flex flex-col h-full">
              <CornerDots />
              <div className="w-full aspect-video border border-black bg-gray-100 mb-6 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop" alt="Studio" className="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold tracking-tight">Studio</h3>
                <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black group-hover:border-black bg-black text-white px-2 py-1 transition-colors duration-300">Personal</span>
              </div>
              <p className="font-mono text-sm leading-7 mb-8 flex-grow text-gray-800 group-hover:text-black transition-colors duration-300">
                A custom portfolio and website builder designed for creators and developers to establish their digital footprint rapidly.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-black group-hover:border-black transition-colors duration-300">
                <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">next.js</span>
                <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">react</span>
              </div>
            </a>

            {/* lazyDLP */}
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
            
            {/* Journaling */}
            <a href="#" target="_blank" className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative block border border-black p-4 sm:p-6 flex flex-col h-full">
              <CornerDots />
              <div className="w-full aspect-video border border-black bg-gray-100 mb-6 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop" alt="Journaling" className="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold tracking-tight">Journaling</h3>
                <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black group-hover:border-black bg-black text-white px-2 py-1 transition-colors duration-300">Personal</span>
              </div>
              <p className="font-mono text-sm leading-7 mb-8 flex-grow text-gray-800 group-hover:text-black transition-colors duration-300">
                A privacy-first personal finance app that parses M-Pesa SMS messages natively to log transactions, track budgets, and provide AI spending insights.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-black group-hover:border-black transition-colors duration-300">
                <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">react native</span>
                <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">expo</span>
                <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">ai</span>
              </div>
            </a>
            
            {/* VOLUNTEER PROJECTS */}

            {/* Computer Society of Kirinyaga */}
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
            
            {/* CLIENT WORK */}

            {/* Tekobliss */}
            <a href="https://tekobliss.com/" target="_blank" className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative block border border-black p-4 sm:p-6 flex flex-col h-full">
              <CornerDots />
              <div className="w-full aspect-video border border-black bg-gray-100 mb-6 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" alt="Tekobliss" className="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold tracking-tight">Tekobliss</h3>
                <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black group-hover:border-black bg-gray-50 px-2 py-1 transition-colors duration-300">Client</span>
              </div>
              <p className="font-mono text-sm leading-7 mb-8 flex-grow text-gray-800 group-hover:text-black transition-colors duration-300">
                A sleek, highly performant corporate website for Tekobliss, designed with a focus on modern branding and driving client conversions.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-black group-hover:border-black transition-colors duration-300">
                <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">react</span>
                <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">branding</span>
              </div>
            </a>

            {/* PBQ Simulator */}
            <a href="https://pbqsimulator.vercel.app/" target="_blank" className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative block border border-black p-4 sm:p-6 flex flex-col h-full">
              <CornerDots />
              <div className="w-full aspect-video border border-black bg-gray-100 mb-6 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" alt="PBQ Simulator" className="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold tracking-tight">PBQ Simulator</h3>
                <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black group-hover:border-black bg-gray-50 px-2 py-1 transition-colors duration-300">Client</span>
              </div>
              <p className="font-mono text-sm leading-7 mb-8 flex-grow text-gray-800 group-hover:text-black transition-colors duration-300">
                An interactive Performance-Based Questions (PBQ) Simulator engineered to help students prepare for complex, hands-on IT certification exams.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-black group-hover:border-black transition-colors duration-300">
                <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">react</span>
                <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">nestjs</span>
              </div>
            </a>

            {/* Arorwet Secondary School */}
            <a href="https://www.arorwetsecondary.sc.ke/" target="_blank" className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative block border border-black p-4 sm:p-6 flex flex-col h-full">
              <CornerDots />
              <div className="w-full aspect-video border border-black bg-gray-100 mb-6 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" alt="Arorwet Secondary" className="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold tracking-tight">Arorwet Secondary</h3>
                <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black group-hover:border-black bg-gray-50 px-2 py-1 transition-colors duration-300">Client</span>
              </div>
              <p className="font-mono text-sm leading-7 mb-8 flex-grow text-gray-800 group-hover:text-black transition-colors duration-300">
                A modern, accessible digital presence and school management portal for Arorwet Secondary School, streamlining information access.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-black group-hover:border-black transition-colors duration-300">
                <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">next.js</span>
                <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">cms</span>
              </div>
            </a>
            
          </div>

          {/* ARCHIVED SECTION */}
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-8 mt-32 border-t border-black pt-16 text-black">Archived.</h2>
          <div className="flex flex-col gap-4 w-full opacity-80 hover:opacity-100 transition-opacity duration-300">
            
            {/* Shopping Cart */}
            <a href="https://shoppingcart.valentinee.dev/" target="_blank" className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative flex flex-col sm:flex-row sm:items-center justify-between border border-black p-4">
              <CornerDots />
              <div className="flex items-center gap-4 mb-2 sm:mb-0">
                <h3 className="text-lg font-bold tracking-tight">Shopping Cart</h3>
                <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black bg-gray-100 px-2 py-0.5">Archived</span>
              </div>
              <p className="font-mono text-sm text-gray-700 max-w-xl sm:text-right">A frontend e-commerce shopping cart implementation.</p>
            </a>

            {/* DevalExpenses */}
            <a href="https://expenses.valentinee.dev" target="_blank" className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative flex flex-col sm:flex-row sm:items-center justify-between border border-black p-4">
              <CornerDots />
              <div className="flex items-center gap-4 mb-2 sm:mb-0">
                <h3 className="text-lg font-bold tracking-tight">DevalExpenses</h3>
                <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black bg-gray-100 px-2 py-0.5">Archived</span>
              </div>
              <p className="font-mono text-sm text-gray-700 max-w-xl sm:text-right">A legacy financial tracking and budgeting web application.</p>
            </a>

            {/* PHP Job Portal */}
            <a href="https://php-job-management-portal.onrender.com/" target="_blank" className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative flex flex-col sm:flex-row sm:items-center justify-between border border-black p-4">
              <CornerDots />
              <div className="flex items-center gap-4 mb-2 sm:mb-0">
                <h3 className="text-lg font-bold tracking-tight">PHP Job Portal</h3>
                <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black bg-gray-100 px-2 py-0.5">Archived</span>
              </div>
              <p className="font-mono text-sm text-gray-700 max-w-xl sm:text-right">A university class project for managing job applications, built with PHP.</p>
            </a>

            {/* DevalRide */}
            <a href="https://ride.valentinee.dev" target="_blank" className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative flex flex-col sm:flex-row sm:items-center justify-between border border-black p-4">
              <CornerDots />
              <div className="flex items-center gap-4 mb-2 sm:mb-0">
                <h3 className="text-lg font-bold tracking-tight">DevalRide</h3>
                <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black bg-gray-100 px-2 py-0.5">Archived</span>
              </div>
              <p className="font-mono text-sm text-gray-700 max-w-xl sm:text-right">A legacy ride-hailing platform prototype interface.</p>
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
