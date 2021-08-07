import React from "react";
import { motion } from "framer-motion"

const BlockTitle = ({ textAlign, title }) => {
  return (
    <div className={`block-title text-${textAlign}`}>
      <motion.h2 initial={{scale: 0.3}}  animate={{scale: 1.2}} transition={{ duration: 0.5 }}>
      {title}
      </motion.h2>
    </div>
  );
};

export default BlockTitle;
