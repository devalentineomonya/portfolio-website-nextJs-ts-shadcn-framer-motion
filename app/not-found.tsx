import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col selection:bg-black selection:text-white">
      {/* Sticky Navbar */}
      <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center px-6 py-4 border-b border-black">
          <Link href="/" className="font-bold text-lg sm:text-xl tracking-tighter cursor-pointer no-underline text-black border border-black px-3 py-1 hover:bg-black hover:text-white transition-colors duration-300">
            devalentine.
          </Link>
        </div>
      </header>

      <main className="flex-grow w-full px-6 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl mx-auto text-center flex flex-col items-center border border-black p-12 sm:p-20 bg-gray-50 relative group">
          
          <h1 className="text-7xl sm:text-9xl font-black tracking-tighter mb-4 text-black">404</h1>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-8">Page Not Found.</h2>
          <p className="font-mono text-sm text-gray-600 mb-12 max-w-md">
            The page you are looking for doesn't exist or has been moved to a different url.
          </p>
          
          <Link href="/" className="relative inline-flex h-12 items-center justify-center gap-2 border border-black bg-black text-white px-8 font-sans text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 ease-in-out hover:bg-white hover:text-black group">
             <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 bg-white group-hover:!bg-black transition-colors duration-300 ease-in-out z-10"></span>
             <span className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 bg-white group-hover:!bg-black transition-colors duration-300 ease-in-out z-10"></span>
             <span className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 bg-white group-hover:!bg-black transition-colors duration-300 ease-in-out z-10"></span>
             <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 bg-white group-hover:!bg-black transition-colors duration-300 ease-in-out z-10"></span>
             GO BACK HOME
             <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          </Link>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white mt-auto">
        <div className="w-full max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-center items-center text-xs font-mono font-bold uppercase tracking-widest gap-4 border-t border-black text-center">
          <div>valentine omonya • software engineer</div>
        </div>
      </footer>
    </div>
  );
}
