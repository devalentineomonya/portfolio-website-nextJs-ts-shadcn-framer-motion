const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');

// Update Nine Hertz to "Personal"
page = page.replace(
  '<span className="font-mono text-xs border border-black group-hover:border-black bg-black text-white px-2 py-1 transition-colors duration-300">2025</span>',
  '<span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black group-hover:border-black bg-black text-white px-2 py-1 transition-colors duration-300">Personal</span>'
);

// Update Computer Society of Kirinyaga to "Volunteer"
page = page.replace(
  '<span className="font-mono text-xs border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">2025</span>',
  '<span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black group-hover:border-black bg-gray-200 px-2 py-1 transition-colors duration-300">Volunteer</span>'
);

// Update lazyDLP to "Personal"
page = page.replace(
  '<span className="font-mono text-xs border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">2025</span>',
  '<span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black group-hover:border-black bg-black text-white px-2 py-1 transition-colors duration-300">Personal</span>'
);

// Update lazyDLP tags from python -> react, cli -> ink tui
page = page.replace(
  '<span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">python</span>',
  '<span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">react</span>'
);
page = page.replace(
  '<span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">cli</span>',
  '<span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">ink tui</span>'
);


fs.writeFileSync('app/page.tsx', page);
console.log('Fixed homepage project tags');
