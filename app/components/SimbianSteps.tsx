'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const steps = [
  "Triaged & Reported – SOC Agent handled investigation and reporting",
  "Automated Response – Incident automatically contained",
  "Comprehensive Analysis – AI recognized patterns",
  "Accurate Detection – Zero false positives",
  "24/7 Coverage – No analyst fatigue"
];

export default function SimbianSteps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: activeStep === index ? 1 : 0.4 }}
          whileHover={{ scale: 1.05 }}
          onMouseEnter={() => setActiveStep(index)}
          className={`bg-green-100 p-4 rounded-xl shadow-md transition-all max-w-sm cursor-pointer`}
        >
          <p className="text-green-900 font-medium text-sm">{step}</p>
        </motion.div>
      ))}
    </div>
  );
}
