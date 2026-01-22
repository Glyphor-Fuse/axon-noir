import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  overflow?: boolean;
  overflowHidden?: boolean;
  animation?: string;
}

export const Reveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0.25, 
  direction = "up",
  overflow = true,
  overflowHidden,
}: RevealProps) => {
  // Support both overflow and overflowHidden props for maximum compatibility
  const isOverflowHidden = overflowHidden !== undefined ? overflowHidden : overflow;

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 75 : direction === "down" ? -75 : 0,
      x: direction === "left" ? 75 : direction === "right" ? -75 : 0
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <div style={{ position: "relative", width, overflow: isOverflowHidden ? "hidden" : "visible" }}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;