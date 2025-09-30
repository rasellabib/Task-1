import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-6 lg:py-8">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full font-semibold cursor-pointer text-left"
      >
        <span className="text-sm sm:text-lg lg:text-2xl">{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            fill="none"
            height="28"
            width="28"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-neutral-600 mt-3 text-sm sm:text-base lg:text-xl leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
