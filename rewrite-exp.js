const fs = require('fs');
let page = fs.readFileSync('app/page.tsx', 'utf8');

const newExperienceBlock = `          <div className="flex flex-col gap-8">
            
            {/* Transcom Media */}
            <FadeUp delay={0.1}>
              <div className="border border-black p-6 sm:p-8 bg-white relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group">
                <CornerDots />
                <div className="flex flex-col sm:flex-row justify-between items-start mb-8 border-b border-black group-hover:border-black pb-6 transition-colors duration-300">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight">Transcom Media</h3>
                    <p className="font-mono text-sm mt-2 text-gray-600 transition-colors duration-300">Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="mb-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <h4 className="text-xl font-bold">Software Engineering Attaché</h4>
                      <span className="font-mono text-[10px] border border-black group-hover:border-black px-2 py-0.5 uppercase tracking-widest transition-colors duration-300">Attachment</span>
                    </div>
                    <div className="font-mono text-xs border border-black group-hover:border-black px-3 py-1 bg-black text-white group-hover:bg-black transition-colors duration-300">
                      May 2026 - Present
                    </div>
                  </div>
                  <p className="font-mono text-sm leading-7 text-gray-800 group-hover:text-gray-900 mb-6 max-w-3xl transition-colors duration-300">
                    Building robust, tailored business solutions and enterprise applications using CodeIgniter, PHP, and WordPress to meet client requirements and streamline digital workflows.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["php", "codeigniter", "wordpress", "mysql", "javascript"].map(tech => (
                      <span key={tech} className="border border-black group-hover:border-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Computer Society of Kirinyaga */}
            <FadeUp delay={0.2}>
              <div className="border border-black p-6 sm:p-8 bg-white relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group">
                <CornerDots />
                <div className="flex flex-col sm:flex-row justify-between items-start mb-8 border-b border-black group-hover:border-black pb-6 transition-colors duration-300">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight">Computer Society of Kirinyaga</h3>
                    <p className="font-mono text-sm mt-2 text-gray-600 transition-colors duration-300">Kutus, Kirinyaga, Kenya</p>
                  </div>
                </div>
                
                {/* Role 1 - Leadership */}
                <div className="mb-10">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <h4 className="text-xl font-bold">Assistant Vice Chairperson</h4>
                      <span className="font-mono text-[10px] border border-black group-hover:border-black px-2 py-0.5 uppercase tracking-widest transition-colors duration-300">Leadership</span>
                    </div>
                    <div className="font-mono text-xs border border-black group-hover:border-black px-3 py-1 bg-black text-white group-hover:bg-black transition-colors duration-300">
                      May 2026 - Present
                    </div>
                  </div>
                  <p className="font-mono text-sm leading-7 text-gray-800 group-hover:text-gray-900 mb-6 max-w-3xl transition-colors duration-300">
                    Serving as the Assistant Vice Chairperson to oversee community operations, organize technical workshops, and lead strategic initiatives to foster a thriving ecosystem of student developers.
                  </p>
                </div>

                {/* Role 2 - Development Lead */}
                <div className="pt-8 border-t border-gray-200 group-hover:border-black transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <h4 className="text-xl font-bold">Development Lead</h4>
                      <span className="font-mono text-[10px] border border-black group-hover:border-black px-2 py-0.5 uppercase tracking-widest transition-colors duration-300">Core</span>
                    </div>
                    <div className="font-mono text-xs border border-black group-hover:border-black px-3 py-1 transition-colors duration-300">
                      Sep 2024 - Present
                    </div>
                  </div>
                  <p className="font-mono text-sm leading-7 text-gray-800 group-hover:text-gray-900 mb-6 max-w-3xl transition-colors duration-300">
                    Led both the frontend and backend engineering teams while personally building the core frontend architecture. Delivered a full-stack community platform integrating OpenAI APIs and M-Pesa payments, achieving 40% growth in active users.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["nestjs", "docker", "openai", "stripe", "rabbitmq"].map(tech => (
                      <span key={tech} className="border border-black group-hover:border-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
            
            {/* Teach2Give */}
            <FadeUp delay={0.3}>
              <div className="border border-black p-6 sm:p-8 bg-white relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group">
                <CornerDots />
                <div className="flex flex-col sm:flex-row justify-between items-start mb-8 border-b border-black group-hover:border-black pb-6 transition-colors duration-300">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight">Teach2Give</h3>
                    <p className="font-mono text-sm mt-2 text-gray-600 transition-colors duration-300">On-Site Attachment</p>
                  </div>
                </div>
                
                <div className="mb-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <h4 className="text-xl font-bold">Software Engineering Attaché</h4>
                      <span className="font-mono text-[10px] border border-black group-hover:border-black px-2 py-0.5 uppercase tracking-widest transition-colors duration-300">Attachment</span>
                    </div>
                    <div className="font-mono text-xs border border-black group-hover:border-black px-3 py-1 transition-colors duration-300">
                      May 2025 - Jul 2025
                    </div>
                  </div>
                  <p className="font-mono text-sm leading-7 text-gray-800 group-hover:text-gray-900 mb-6 max-w-3xl transition-colors duration-300">
                    Worked on full-stack projects using React and NestJS, managing code with Git and GitHub. Gained experience with Docker containers and Azure DevOps for CI/CD. Developed strong abilities in leadership, team collaboration, and technical writing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["react", "nestjs", "docker", "typescript", "git", "github"].map(tech => (
                      <span key={tech} className="border border-black group-hover:border-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Godan Info */}
            <FadeUp delay={0.4}>
              <div className="border border-black p-6 sm:p-8 bg-white relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group">
                <CornerDots />
                <div className="flex flex-col sm:flex-row justify-between items-start mb-8 border-b border-black group-hover:border-black pb-6 transition-colors duration-300">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight">Godan Info</h3>
                    <p className="font-mono text-sm mt-2 text-gray-600 transition-colors duration-300">Remote Internship</p>
                  </div>
                </div>
                
                <div className="mb-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <h4 className="text-xl font-bold">Frontend Web Developer</h4>
                      <span className="font-mono text-[10px] border border-black group-hover:border-black px-2 py-0.5 uppercase tracking-widest transition-colors duration-300">Internship</span>
                    </div>
                    <div className="font-mono text-xs border border-black group-hover:border-black px-3 py-1 transition-colors duration-300">
                      Jan 2025 - Apr 2025
                    </div>
                  </div>
                  <p className="font-mono text-sm leading-7 text-gray-800 group-hover:text-gray-900 mb-6 max-w-3xl transition-colors duration-300">
                    Spearheaded frontend web development using React.js and Ant Design for the Smip Users Dashboard. Architected responsive, role-based user interfaces, streamlined client workflows to reduce approval times by 40%, and significantly boosted user engagement through seamless UI/UX implementation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["react", "antdesign", "javascript", "ui/ux", "frontend"].map(tech => (
                      <span key={tech} className="border border-black group-hover:border-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

          </div>`;

const startIdx = page.indexOf('<div className="flex flex-col gap-8">');
const endIdx = page.indexOf('</section>', startIdx);
if (startIdx !== -1 && endIdx !== -1) {
  // We want to replace up to the closing </div> of the gap-8 div.
  // We can just find the end of Godan Info FadeUp.
  const regex = /<div className="flex flex-col gap-8">[\s\S]*?{?\/\* Company 3 \*\/}?\s*<FadeUp delay={0\.3}>[\s\S]*?<\/FadeUp>\s*<\/div>/;
  if (regex.test(page)) {
    page = page.replace(regex, newExperienceBlock);
    fs.writeFileSync('app/page.tsx', page);
    console.log('Fixed experiences');
  } else {
    console.log('Regex failed, trying simpler replace');
    const simplerRegex = /<div className="flex flex-col gap-8">[\s\S]*?<\/FadeUp>\s*<\/div>/;
    page = page.replace(simplerRegex, newExperienceBlock);
    fs.writeFileSync('app/page.tsx', page);
    console.log('Fixed experiences with simpler regex');
  }
} else {
  console.log('Could not find markers');
}
