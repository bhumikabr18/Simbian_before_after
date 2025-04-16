'use client';

import { motion } from 'framer-motion';

type Props = {
  title: string;
  icon: string;
  count: number;
  color: 'red' | 'yellow' | 'orange' | 'green';
};

export default function AlertCard({ title, icon, count, color }: Props) {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className={`p-4 rounded-xl shadow-md bg-${color}-100 w-full max-w-sm transition`}
    >
      <div className="flex items-center gap-4">
        <img src={icon} alt={title} className="w-8 h-8" />
        <h3 className="text-lg font-semibold text-${color}-800">{title}</h3>
      </div>
      <motion.h1
        className="text-3xl mt-2 font-bold text-${color}-700"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        {count}
      </motion.h1>
    </motion.div>
  );
}
