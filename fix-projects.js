const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');

// Replace the class string
page = page.replace(
  /group hover:bg-black hover:text-white transition-colors duration-300 ease-in-out relative block/g,
  'group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative block'
);

// Add the CornerDots component right after the <a> tag opens
page = page.replace(
  /(<a [^>]*className="border border-black[^>]*hover:bg-gray-50[^>]*>)\n/g,
  '$1\n                <CornerDots />\n'
);

fs.writeFileSync('app/page.tsx', page);
console.log('Fixed projects');
