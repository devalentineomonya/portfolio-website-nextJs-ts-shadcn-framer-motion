import { CornerDots } from "@/components/ui/corner-dots";
import { socialLinks } from "@/data/data";

export const SocialLinks = () => {
  return (
    <>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          className={`relative border border-black p-4 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors duration-300 ease-in-out group overflow-hidden ${
            link.colSpan === 2 ? "col-span-2" : ""
          }`}
        >
          <CornerDots />
          <span className="font-bold text-[10px] sm:text-xs uppercase tracking-widest truncate">
            {link.label}
          </span>
        </a>
      ))}
    </>
  );
};
