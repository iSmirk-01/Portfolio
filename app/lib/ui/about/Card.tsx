"use client"

import { motion } from "framer-motion";
interface Props {
    title: string;
    description: string;
}

function Card({ title, description }: Props) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }} 
    className="min-h-64 dark:bg-transparent bg-white/50 dark:border shadow-lg backdrop-blur-xl flex flex-col items-center gap-10 py-8 px-4 w-[70%] max-w-6xl rounded text-gray-800 dark:text-white">
      <h1 className="text-4xl tracking-widest font-bold">{title}</h1>
      <p className="max-w-4xl leading-relaxed text-lg lg:text-xl tracking-wider font-semibold dark:text-[#E0E0E0]">
        {description}
      </p>
    </motion.div>
  );
}

export default Card
