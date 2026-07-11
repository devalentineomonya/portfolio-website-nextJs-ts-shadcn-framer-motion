export const CornerDots = () => (
  <>
    <span className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-[3px] border-l-[3px] border-black z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    <span className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-[3px] border-r-[3px] border-black z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    <span className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-[3px] border-l-[3px] border-black z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    <span className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-[3px] border-r-[3px] border-black z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  </>
);
