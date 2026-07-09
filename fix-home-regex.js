const fs = require('fs');

const homeProjectsHTML = `
            {/* Nine Hertz */}
            <FadeUp delay={0.1}>
              <a href="https://medic.valentinee.dev" target="_blank" className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative block border border-black p-4 sm:p-6 flex flex-col h-full">
                <CornerDots />
                <div className="w-full aspect-video border border-black bg-gray-100 mb-6 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" alt="Nine Hertz" className="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold tracking-tight">Nine Hertz</h3>
                  <span className="font-mono text-xs border border-black group-hover:border-black bg-black text-white px-2 py-1 transition-colors duration-300">2025</span>
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
                  <span className="font-mono text-xs border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">2025</span>
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
                  <span className="font-mono text-xs border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">2025</span>
                </div>
                <p className="font-mono text-sm leading-7 mb-8 flex-grow text-gray-800 group-hover:text-black transition-colors duration-300">
                  A powerful, interactive command-line wrapper for yt-dlp, making it incredibly easy to download media without memorizing complex flags.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-black group-hover:border-black transition-colors duration-300">
                  <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">python</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">cli</span>
                </div>
              </a>
            </FadeUp>
`;

let page = fs.readFileSync('app/page.tsx', 'utf8');

const regex = /(<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">)[\s\S]*?(<\/div>\s*<FadeUp delay={0\.4}>)/;
if (regex.test(page)) {
  page = page.replace(regex, `$1\n${homeProjectsHTML}\n          $2`);
  fs.writeFileSync('app/page.tsx', page);
  console.log('Fixed home projects');
} else {
  console.log('Regex failed');
}

