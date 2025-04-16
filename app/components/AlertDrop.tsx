'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { alertMessages } from '@/data/alerts';

export default function AlertDrop() {
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = alertMessages[Math.floor(Math.random() * alertMessages.length)];
      setAlerts((prev) => [...prev, random].slice(-3)); // keep last 3
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 space-y-2">
      {alerts.map((alert, idx) => (
        <motion.div
          key={idx}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-red-200 text-red-900 px-3 py-1 rounded shadow w-fit"
        >
          {alert}
        </motion.div>
      ))}
    </div>
  );
}
