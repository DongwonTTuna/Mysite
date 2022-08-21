import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Container, Center } from "@chakra-ui/react";
import SkillContent, { SetText, SetImage } from "./contents/SkillContent";

export default function (props) {
  const [Content, SetContent] = useState({ page: 1, content: "main" });
  const Text = SetText(Content.content);
  const variant = {
    ani: {
      scale: [5, 1, 1],
      top: ["45%", "45%", "5%"],
      left: ["45%", "45%", "5%"],
    },
    larger: {
      scale: [5, 1.5, 1.5],
      top: ["45%", "45%", "5%"],
      left: ["45%", "45%", "7%"],
    },
  };
  const image = SetImage(Content.content);
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
        {Content.content !== "main" &&
        (
          <>
            <motion.img
              height={110}
              width={110}
              variants={variant}
              animate={
                Content.content === "django" ? "larger" : Content.content === "go" ? "larger" : "ani"
              }
              transition={{ duration: 2.5, times: [0.1, 0.4, 0.7] }}
              src={image}
              style={{ position: "absolute" }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2 }}
              style={{
                fontSize: "40px",
                position: "absolute",
                top: "9%",
                left: "20%",
              }}
            >
              {Text}
            </motion.div>
          </>
        )}
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
              <SkillContent data={Content} update={SetContent} />
            </Container>
          </motion.div>
        </AnimatePresence>
      </Container>
      <Container py="200px"></Container>
    </Box>
  );
}
