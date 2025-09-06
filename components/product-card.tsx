"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Products } from "@/sanity/sanity.types";

interface ProductCardProps {
  product: Products;
  index: number;
  inView: boolean;
}

export default function ProductCard({
  product,
  index,
  inView,
}: ProductCardProps) {
  return (
    <motion.div
      className="bg-white  dark:bg-[#373737] border dark:border-[#424242] border-[#f0f0f0] rounded-xl p-5
      hidden shadow-[rgba(10,_10,_10,_0.06)_0px_1.2px_1.2px_0px,_rgba(10,_10,_10,_0.04)_0px_5px_10px_0px]
       cursor-pointer overflow- "
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 20,
      }}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={product.url} className="block">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <motion.div
              className="h-12 w-12 rounded-lg flex items-center justify-center text-white font-medium"
              style={{ backgroundColor: product.iconBg }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              {product.icon}
            </motion.div>
            <div>
              <h3 className="font-medium">{product.name}</h3>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-xs text-zinc-500 dark:text-zinc-300 mr-2 inline-block dark:bg-[#424242]
             bg-gray-100 py-1.5 px-3 rounded-full  backdrop-blur-sm truncate uppercase max-w-40">
              {product.category}
            </span>
            <motion.div
              whileHover={{ x: 3 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <ArrowUpRight
                size={18}
                className="text-zinc-500 dark:text-zinc-400"
              />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
