const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Add CornerDots component at the top
page = page.replace(
  '// Simple smooth fade up animation component',
  `// Corner dots for cards on hover
const CornerDots = () => (
  <>
    <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
    <span className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
    <span className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
    <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
  </>
);

// Simple smooth fade up animation component`
);

// 2. Remove hover:bg-black hover:text-white from cards and make them relative to hold dots
page = page.replace(/hover:bg-black hover:text-white transition-colors duration-300 ease-in-out group/g, 'relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group');

// 3. Inject <CornerDots /> at the start of these cards. 
// Note: Experience cards are `<div className="relative border border-black p-6 sm:p-8 bg-white hover:bg-gray-50 transition-colors duration-300 ease-in-out group">`
// Projects and Blogs are `<a href="..." className="relative border border-black p-4 sm:p-6 flex flex-col h-full group hover:bg-gray-50 transition-colors duration-300 ease-in-out block">`
// Let's just use regex to insert `<CornerDots />` after the group opening tag.

page = page.replace(/(<div className="border border-black[^>]*hover:bg-gray-50[^>]*>)\n/g, '$1\n                <CornerDots />\n');
page = page.replace(/(<a href="[^"]*"[^>]*className="border border-black[^>]*hover:bg-gray-50[^>]*>)\n/g, '$1\n                <CornerDots />\n');

// 4. Remove inner group-hover overrides that invert colors
page = page.replace(/group-hover:border-gray-800/g, 'group-hover:border-black');
page = page.replace(/group-hover:text-gray-400/g, 'group-hover:text-black');
page = page.replace(/group-hover:text-gray-300/g, 'group-hover:text-gray-900');
page = page.replace(/group-hover:border-white/g, 'group-hover:border-black');
page = page.replace(/group-hover:bg-white/g, 'group-hover:bg-black');
page = page.replace(/group-hover:text-black/g, ''); // inside chips where text is already black
page = page.replace(/group-hover:border-gray-700/g, 'group-hover:border-black');

// For the project cards, there is a chip with:
// bg-black text-white group-hover:bg-black group-hover:text-white ... wait, originally group-hover:bg-white group-hover:text-black
// Let's fix specific chip in projects "2024 / 2025"
page = page.replace(/bg-black text-white group-hover:bg-black px-2 py-1 transition-colors duration-300/g, 'bg-black text-white px-2 py-1');

// 5. Add Tags to Blogs on Homepage
page = page.replace(
  /<span>Feb 15, 2026<\/span>/g,
  '<span className="font-bold border border-black px-2 py-0.5 text-[9px] uppercase tracking-widest text-black">Tech</span>\n                  <span>•</span>\n                  <span>Feb 15, 2026</span>'
);
page = page.replace(
  /<span>Feb 10, 2026<\/span>/g,
  '<span className="font-bold border border-black px-2 py-0.5 text-[9px] uppercase tracking-widest text-black">Career</span>\n                  <span>•</span>\n                  <span>Feb 10, 2026</span>'
);

// 6. Fix "Hit me up" cards which also had hover:bg-black hover:text-white. 
// The script replaced it with hover:bg-gray-50. Let's add CornerDots to them too!
page = page.replace(/(<a href="[^"]*" className="border border-black p-4 flex items-center justify-center bg-white relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group overflow-hidden">)\n/g, '$1\n                  <CornerDots />\n');
// Wait, they had `className="border border-black p-4 flex ... group overflow-hidden"`. We need `relative` to show absolute dots.
page = page.replace(/className="border border-black p-4 flex items-center justify-center bg-white hover:bg-gray-50/g, 'className="relative border border-black p-4 flex items-center justify-center bg-white hover:bg-gray-50');

fs.writeFileSync('app/page.tsx', page);
console.log('Fixed page.tsx');
