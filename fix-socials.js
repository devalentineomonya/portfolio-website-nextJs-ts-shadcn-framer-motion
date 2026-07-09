const fs = require('fs');
let page = fs.readFileSync('app/page.tsx', 'utf8');

// Replace hover:bg-black hover:text-white transition-all duration-300 ease-in-out group overflow-hidden
// with relative border border-black p-4 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors duration-300 ease-in-out group overflow-hidden
page = page.replace(
  /className="border border-black p-4 flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all duration-300 ease-in-out group overflow-hidden"/g,
  'className="relative border border-black p-4 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors duration-300 ease-in-out group overflow-hidden"'
);

// Inject CornerDots for GitHub, LinkedIn, Twitter
page = page.replace(
  /(<a href="https:\/\/(github\.com|linkedin\.com|x\.com)[^"]*" className="relative border border-black p-4 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors duration-300 ease-in-out group overflow-hidden">)\n(\s*<span)/g,
  '$1\n                  <CornerDots />\n$3'
);

fs.writeFileSync('app/page.tsx', page);
console.log('Fixed socials');
