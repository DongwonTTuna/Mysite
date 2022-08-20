import React, { useState } from "react";
import nextarrow from "../static/img/next.png";
import previous from "../static/img/previous.png";
import { Box, Container, chakra, Button, Image } from "@chakra-ui/react";
import { motion, isValidMotionProp,AnimatePresence } from "framer-motion";
import ProfileContent from "./contents/ProfileContent";
const max_page = 9;
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export default function (props) {
  const [Page, SetPage] = useState(0);

  const NextPage = () => {
    SetPage(Page + 1);
  };
  const PreviousPage = () => {
    SetPage(Page - 1);
  };
  return (
    <Box ref={props.profile} position={"relative"} width={"100%"}>
      <Container
        minH="1000px"
        minW="1400px"
        margin="0 auto"
        position="relative"
        top="150px"
        fontWeight="light"
        backgroundColor="rgba(56,56,56)"
        borderRadius="20px"
        zIndex="10"
      >
        <AnimatePresence mode="wait" exitBeforeEnter initial={true}>
        <ChakraBox
          key={Math.random()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, type: "easeInOut" }}
        >
          <ProfileContent page={Page} />
        </ChakraBox>
        </AnimatePresence>
        {Page !== 0 && (
          <Button
            position="absolute"
            role="group"
            left="1%"
            bottom="40px"
            cursor="pointer"
            onClick={(e) => PreviousPage(e)}
          >
            <Image
              height="40px"
              filter="invert(80%)"
              opacity="0.1"
              transition="all 0.4s ease-in-out"
              _groupHover={{ opacity: 1 }}
              src={previous}
            />
          </Button>
        )}
        {Page !== max_page && (
          <Button
            position="absolute"
            role="group"
            right={"1%"}
            bottom={"40px"}
            cursor={"pointer"}
            onClick={(e) => NextPage(e)}
          >
            <Image
              height="40px"
              filter="invert(80%)"
              opacity="0.1"
              transition="all 0.4s ease-in-out"
              _groupHover={{ opacity: 1 }}
              src={nextarrow}
            />
          </Button>
        )}
      </Container>
    </Box>
  );
}
