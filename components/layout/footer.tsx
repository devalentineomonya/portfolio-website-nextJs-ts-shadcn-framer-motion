export const Footer = () => (
  <footer className="w-full bg-white mt-auto">
    <div className="w-full max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono font-bold uppercase tracking-widest gap-4 border-t border-black">
      <div>valentine omonya</div>
      <div>software engineer</div>
      <div>© {new Date().getFullYear()}</div>
    </div>
  </footer>
);
