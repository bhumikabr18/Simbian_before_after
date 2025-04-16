'use client';

import { motion } from 'framer-motion';

type Props = {
  title: string;
  icon: string;
};

export default function SuccessCard({ title, icon }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-green-100 rounded-xl shadow max-w-sm w-full flex items-center gap-4"
    >
      <img src={icon} alt={title} className="w-8 h-8" />
      <div>
        <h3 className="text-lg font-semibold text-green-800">{title}</h3>
        <motion.h1
          className="text-2xl font-bold text-green-700"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
        >
          0
        </motion.h1>
      </div>
    </motion.div>
  );
}
