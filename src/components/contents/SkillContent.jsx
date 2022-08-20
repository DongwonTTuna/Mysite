import React from "react";
import {
  Box,
  Container,
  Text,
  Image,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import go from "../../static/img/go.png";
import rust from "../../static/img/rust.png";
import django from "../../static/img/django.png";
import html from "../../static/img/html.png";
import java from "../../static/img/java.png";
import jquery from "../../static/img/jquery.png";
import js from "../../static/img/js.png";
import php from "../../static/img/php.png";
import python from "../../static/img/python.png";
import react from "../../static/img/react.png";
import svelte from "../../static/img/svelte.png";
import ts from "../../static/img/typescript.png";
import nextarrow from "../../static/img/next.png";
import previous from "../../static/img/previous.png";
const SetText = (page) => {
  switch (page) {
    case "go":
      return "Go Language";
    case "python":
      return "Python";
    case "rust":
      return "Rust";
    case "django":
      return "Django";
    case "html":
      return "HTML";
    case "java":
      return "Java";
    case "jquery":
      return "Jquery";
    case "js":
      return "JavaScript";
    case "php":
      return "PHP";
    case "react":
      return "React";
    case "svelte":
      return "Svelte";
    case "ts":
      return "Typescript";
  }
};
const SetImage = (item) => {
  switch (item) {
    case "main":
      return "";
    case "go":
      return go;
    case "rust":
      return rust;
    case "django":
      return django;
    case "html":
      return html;
    case "java":
      return java;
    case "jquery":
      return jquery;
    case "js":
      return js;
    case "php":
      return php;
    case "python":
      return python;
    case "react":
      return react;
    case "svelte":
      return svelte;
    case "ts":
      return ts;
  }
};
export default function (props) {
  let image = SetImage(props.page);
  let programming = ["go", "rust", "html", "java", "js", "php", "python", "ts"];
  let frameworks = ["django", "react", "svelte"];
  let librarys = ["jquery"];
  const variant = {
    ani: {
      scale: [5, 1, 1],
      top: ["45%", "45%", "5%"],
      left: ["45%", "45%", "5%"],
    },
    django: {
      scale: [5, 1.5, 1.5],
      top: ["45%", "45%", "5%"],
      left: ["45%", "45%", "7%"],
    },
  };
  let contenttext;

  switch (props.page) {
    case "main":
      return (
        <>
          <Box
            display="flex"
            flexDir="column"
            gap="50px"
            minW="100%"
            m="0 auto"
            marginBottom="100px"
          >
            <Text
              backgroundColor="rgba(125,125,125,0.771)"
              borderRadius="10px"
              p="15px"
            >
              Programming Languages
            </Text>
            <Container
              borderRadius="10px"
              height="180px"
              display="grid"
              gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
              gap="10px"
              rowGap="40px"
              w="100%"
              margin="0 auto"
            >
              {programming.map((item) => {
                let top;
                if (item === "go" || item === "php") {
                  top = "-30px";
                } else {
                  top = "";
                }
                return PopOver(
                  <Image
                    src={SetImage(item)}
                    height="110px"
                    width="110px"
                    cursor="pointer"
                    _hover={{ transform: "scale(1.2)" }}
                    transition="all 0.4s ease-in-out"
                    onClick={() => {
                      props.update(item);
                    }}
                  ></Image>,
                  item,
                  top
                );
              })}
            </Container>
          </Box>
          <Box
            display="flex"
            flexDir="column"
            gap="50px"
            minW="100%"
            m="0 auto"
            marginBottom="100px"
          >
            <Text
              backgroundColor="rgba(125,125,125,0.771)"
              borderRadius="10px"
              p="15px"
            >
              Frameworks
            </Text>
            <Container
              borderRadius="10px"
              height="180px"
              display="grid"
              gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
              rowGap="40px"
              width="100%"
              margin="0 auto"
            >
              {frameworks.map((item) => {
                let top;
                if (item === "django") {
                  top = "-20px";
                } else {
                  top = "";
                }
                return PopOver(
                  <Image
                    src={SetImage(item)}
                    height="100px"
                    width="100px"
                    cursor="pointer"
                    _hover={{ transform: "scale(1.2)" }}
                    transition="all 0.4s ease-in-out"
                    onClick={() => {
                      props.update(item);
                    }}
                  ></Image>,
                  item,
                  top
                );
              })}
            </Container>
          </Box>
          <Box
            display="flex"
            flexDir="column"
            gap="50px"
            minW="100%"
            m="0 auto"
            marginBottom="100px"
          >
            <Text
              backgroundColor="rgba(125,125,125,0.771)"
              borderRadius="10px"
              p="15px"
            >
              Library
            </Text>
            <Container
              borderRadius="10px"
              height="180px"
              display="grid"
              gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
              rowGap="40px"
              width="100%"
              margin="0 auto"
            >
              {librarys.map((item) => {
                let top;
                if (item === "Dummy") {
                  top = "-30px";
                } else {
                  top = "";
                }
                return PopOver(
                  <Image
                    src={SetImage(item)}
                    height="110px"
                    width="110px"
                    cursor="pointer"
                    _hover={{ transform: "scale(1.2)" }}
                    transition="all 0.4s ease-in-out"
                    onClick={() => {
                      props.update(item);
                    }}
                  ></Image>,
                  item,
                  top
                );
              })}
            </Container>
          </Box>
          <Box
            display="flex"
            flexDir="column"
            gap="50px"
            minW="100%"
            m="0 auto"
            marginBottom="100px"
          >
            <Text
              backgroundColor="rgba(125,125,125,0.771)"
              borderRadius="10px"
              p="15px"
            >
              Certifications
            </Text>
            <Container
              borderRadius="10px"
              height="180px"
              display="grid"
              gridTemplateColumns="1fr 1fr 1fr 1fr 1 fr"
              rowGap="40px"
              width="100%"
              margin="0 auto"
            ></Container>
          </Box>
        </>
      );
    case "go":
      contenttext = (
        <>
          Go言語の性能、作業速度の迅速さを最大限に引き出せるよう、
          <br />
          勉強に励んでおります。
          <br />
        </>
      );
      break;
    case "python":
      contenttext = (
        <>
          私がGo言語に興味を持ったきっかけは
          <br />
          <br />
        </>
      );
      break;
    case "rust":
      contenttext = (
        <>
          私がGo言語に興味を持ったきっかけは
          <br />
          <br />
        </>
      );
      break;
    case "django":
      contenttext = (
        <>
          私がGo言語に興味を持ったきっかけは
          <br />
          <br />
        </>
      );
      break;
    case "html":
      contenttext = (
        <>
          私がGo言語に興味を持ったきっかけは
          <br />
          <br />
        </>
      );
      break;
    case "java":
      contenttext = (
        <>
          私がGo言語に興味を持ったきっかけは
          <br />
          <br />
        </>
      );
      break;
    case "jquery":
      contenttext = (
        <>
          私がGo言語に興味を持ったきっかけは
          <br />
          <br />
        </>
      );
      break;
    case "js":
      contenttext = (
        <>
          私がGo言語に興味を持ったきっかけは
          <br />
          <br />
        </>
      );
      break;
    case "php":
      contenttext = (
        <>
          私がGo言語に興味を持ったきっかけは
          <br />
          <br />
        </>
      );
      break;
    case "react":
      contenttext = (
        <>
          私がGo言語に興味を持ったきっかけは
          <br />
          <br />
        </>
      );
      break;
    case "svelte":
      contenttext = (
        <>
          私がGo言語に興味を持ったきっかけは
          <br />
          <br />
        </>
      );
      break;
    case "ts":
      contenttext = (
        <>
          私がGo言語に興味を持ったきっかけは
          <br />
          <br />
        </>
      );
      break;
  }
  return (
    <>
      {MotionImg(props.page, variant, image)}
      <Box>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.7 }}
          style={{
            fontSize: "40px",
            lineHeight: "3.5rem",
            position: "absolute",
            top: "30%",
            left: "10%",
          }}
        >
          <Text textAlign="left">{contenttext}</Text>
        </motion.div>
      </Box>
      <Button
        position="absolute"
        role="group"
        left="1%"
        bottom="40px"
        cursor="pointer"
        onClick={() => props.update("main")}
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
      <Button
        position="absolute"
        role="group"
        right={"1%"}
        bottom={"40px"}
        cursor={"pointer"}
        onClick={() => {}}
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
    </>
  );
}

const MotionImg = (page, variant, image) => {
  const Text = SetText(page);
  return (
    <>
      <motion.img
        height={110}
        width={110}
        variants={variant}
        animate={page === "django" ? "django" : "ani"}
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
  );
};
const PopOver = (Div, page, top) => {
  const Text = SetText(page);
  return (
    <Popover key={page} trigger="hover" delay="300" isLazy="true">
      <PopoverTrigger>{Div}</PopoverTrigger>
      <PopoverContent
        top={top}
        w="fit-content"
        p="2"
        backgroundColor="#242424"
        borderColor="#242424"
      >
        <PopoverArrow
          backgroundColor="#242424"
          borderColor="#242424"
          boxShadow="none"
        />
        <PopoverBody>{Text}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
