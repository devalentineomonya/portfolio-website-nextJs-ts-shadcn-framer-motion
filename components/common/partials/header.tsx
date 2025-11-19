import { HyperText } from "@/components/ui/hyper-text";
import Image from "next/image";
import Link from "next/link";

export const MainHeader = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image src={"/logo.svg"} alt="Devalentine" width={40} height={40} />
      <h1>
        <HyperText className="font-4xl">alentine</HyperText>
      </h1>
    </Link>
  );
};
