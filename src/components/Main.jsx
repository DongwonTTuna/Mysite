import React, { useEffect } from "react";
import { chakra, Box, Container, Text, Image, Stack } from "@chakra-ui/react";
import ChangePage from "./contents/ChangePage";
import { motion, isValidMotionProp } from "framer-motion";
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});
export default function () {
  async function anim() {
    await animationControls.start();
  }

  return (
    <ChangePage>

    </ChangePage>
  );
}
