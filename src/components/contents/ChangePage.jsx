import React from "react";
import { motion, isValidMotionProp } from "framer-motion";
import { chakra } from "@chakra-ui/react";
const ChakraBox = chakra(motion.article, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});
export default (props) => {
  return (
    <ChakraBox
      initial={{ opacity: 0, x: 0, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 0, y: 20 }}
      transition={{ duration: 0.3, type: "easeInOut" }}
      overflow="hidden"
      {...props}
    >
      {props.children}
    </ChakraBox>
  );
};
