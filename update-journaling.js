const fs = require('fs');
let page = fs.readFileSync('app/work/page.tsx', 'utf8');

// 1. Fix Journaling Project
const oldJournalingDesc = 'A clean, minimalist digital journaling application built for daily reflection, thought organization, and mental clarity.';
const newJournalingDesc = 'A privacy-first personal finance mobile app built with React Native (Expo). It automatically reads and parses incoming M-Pesa SMS messages directly on-device, logs transactions, tracks spending against monthly budgets, and features local database storage with an AI spending coach.';
page = page.replace(oldJournalingDesc, newJournalingDesc);

page = page.replace(
  '<span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">next.js</span>\n                <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">react</span>',
  '<span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">react native</span>\n                <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">expo</span>\n                <span className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300">ai</span>'
);

// 2. Add Archived Section
const archivedHTML = `
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-8 mt-32 border-t border-black pt-16 text-black">Archived.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full opacity-80 hover:opacity-100 transition-opacity duration-300">
            
            {/* Shopping Cart */}
            <a href="https://shoppingcart.valentinee.dev/" target="_blank" className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative block border border-black p-4 flex flex-col h-full">
              <CornerDots />
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold tracking-tight">Shopping Cart</h3>
                <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black bg-gray-100 px-2 py-0.5">Archived</span>
              </div>
              <p className="font-mono text-xs leading-6 flex-grow text-gray-700">A frontend e-commerce shopping cart implementation.</p>
            </a>

            {/* DevalExpenses */}
            <a href="https://expenses.valentinee.dev" target="_blank" className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative block border border-black p-4 flex flex-col h-full">
              <CornerDots />
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold tracking-tight">DevalExpenses</h3>
                <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black bg-gray-100 px-2 py-0.5">Archived</span>
              </div>
              <p className="font-mono text-xs leading-6 flex-grow text-gray-700">A legacy financial tracking and budgeting web application.</p>
            </a>

            {/* PHP Job Portal */}
            <a href="https://php-job-management-portal.onrender.com/" target="_blank" className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative block border border-black p-4 flex flex-col h-full">
              <CornerDots />
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold tracking-tight">PHP Job Portal</h3>
                <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black bg-gray-100 px-2 py-0.5">Archived</span>
              </div>
              <p className="font-mono text-xs leading-6 flex-grow text-gray-700">A university class project for managing job applications, built with PHP.</p>
            </a>

            {/* DevalRide */}
            <a href="https://ride.valentinee.dev" target="_blank" className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative block border border-black p-4 flex flex-col h-full">
              <CornerDots />
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold tracking-tight">DevalRide</h3>
                <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black bg-gray-100 px-2 py-0.5">Archived</span>
              </div>
              <p className="font-mono text-xs leading-6 flex-grow text-gray-700">A legacy ride-hailing platform prototype interface.</p>
            </a>

          </div>
`;

const insertIndex = page.indexOf('</div>\n        </div>\n      </main>');
if (insertIndex !== -1) {
  page = page.substring(0, insertIndex) + archivedHTML + page.substring(insertIndex);
  fs.writeFileSync('app/work/page.tsx', page);
  console.log('Fixed journaling and added archived projects');
} else {
  console.log('Could not find insert marker');
}
