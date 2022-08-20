import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Container, Center } from "@chakra-ui/react";
import SkillContent from "./contents/SkillContent";

export default function (props) {
  const [Content, SetContent] = useState("main");

  return (
    <Box
      paddingTop="130px"
      marginTop="400px"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      zIndex="10"
    >
      <Center
        ref={props.skill}
        w="100%"
        h="100px"
        bgGradient={"linear(to-r,#343434,#242424,#343434)"}
        fontSize="34px"
        paddingY="100px"
        zIndex="10"
      >
        Skills
      </Center>
      <Container
        position="relative"
        minWidth="1400px"
        minHeight="1000px"
        backgroundColor="rgb(56,56,56)"
        p="20px"
        borderRadius="10px"
        textAlign="center"
        zIndex="10"
      >
        <AnimatePresence exitBeforeEnter mode="wait" initial={true}>
          <motion.div
            key={Math.random()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ repeat: "reverse", duration: 0.3, type: "easeInOut" }}
          >
            <Container
              display="grid"
              gridTemplateColumns="1fr 1fr"
              gap="30px"
              rowGap="100px"
              minW="100%"
            >
              <SkillContent page={Content} update={SetContent} />
            </Container>
          </motion.div>
        </AnimatePresence>
      </Container>
      <Container py="200px"></Container>
    </Box>
  );
}
