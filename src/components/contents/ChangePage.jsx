import React from "react";
import { motion } from "framer-motion";
export default (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 0, y: 20 }}
      transition={{ duration: 0.3, type: "easeInOut" }}
      overflow="hidden"
      {...props}
    >
      {props.children}
    </motion.div>
  );
};
