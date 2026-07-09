import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex-grow w-full px-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl mx-auto text-center flex flex-col items-center border border-black p-12 sm:p-20 bg-gray-50 relative group">
        <h1 className="text-7xl sm:text-9xl font-black tracking-tighter mb-4 text-black">
          404
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-8">
          Page Not Found.
        </h2>
        <p className="font-mono text-sm text-gray-600 mb-12 max-w-md">
          The page you are looking for doesn't exist or has been moved to a
          different url.
        </p>

        <Button href="/" variant="black">
          <span className="group-hover:-translate-x-1 transition-transform duration-300 mr-2">
            ←
          </span>
          GO BACK HOME
        </Button>
      </div>
    </main>
  );
}
