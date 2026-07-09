const fs = require('fs');

let page = fs.readFileSync('app/stories/page.tsx', 'utf8');

// 1. Add CornerDots component
page = page.replace(
  'export default function StoriesPage() {',
  `const CornerDots = () => (
  <>
    <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
    <span className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
    <span className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
    <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
  </>
);

export default function StoriesPage() {`
);

// 2. Remove hover:bg-black hover:text-white from cards and make them relative
page = page.replace(/hover:bg-black hover:text-white transition-colors duration-300 ease-in-out group/g, 'relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group');

// 3. Inject <CornerDots />
page = page.replace(/(<a href="[^"]*"[^>]*className="border border-black[^>]*hover:bg-gray-50[^>]*>)\n/g, '$1\n              <CornerDots />\n');

// 4. Remove inner group-hover overrides that invert colors
page = page.replace(/group-hover:text-gray-400/g, 'group-hover:text-black');
page = page.replace(/group-hover:text-gray-300/g, 'group-hover:text-gray-900');
page = page.replace(/group-hover:border-white/g, 'group-hover:border-black');
page = page.replace(/group-hover:border-gray-700/g, 'group-hover:border-black');

// 5. Add Tags to Blogs
page = page.replace(
  /<span>Feb 15, 2026<\/span>/g,
  '<span className="font-bold border border-black px-2 py-0.5 text-[9px] uppercase tracking-widest text-black">Tech</span>\n                <span>•</span>\n                <span>Feb 15, 2026</span>'
);
page = page.replace(
  /<span>Feb 10, 2026<\/span>/g,
  '<span className="font-bold border border-black px-2 py-0.5 text-[9px] uppercase tracking-widest text-black">Career</span>\n                <span>•</span>\n                <span>Feb 10, 2026</span>'
);
page = page.replace(
  /<span>Jan 28, 2026<\/span>/g,
  '<span className="font-bold border border-black px-2 py-0.5 text-[9px] uppercase tracking-widest text-black">Personal</span>\n                <span>•</span>\n                <span>Jan 28, 2026</span>'
);

fs.writeFileSync('app/stories/page.tsx', page);
console.log('Fixed stories/page.tsx');
