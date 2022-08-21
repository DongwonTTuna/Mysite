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
import SkillPage1 from "./SkillPage1";
import SkillPage2 from "./SkillPage2";
import SkillPage3 from "./SkillPage3";
import SkillPage4 from "./SkillPage4";
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
let maxpage = {
  go: 3,
  rust: 3,
  html: 3,
  java: 3,
  js: 3,
  php: 3,
  python: 3,
  ts: 3,
  django: 3,
  react: 3,
  svelte: 3,
  jquery: 3,
};
export const SetText = (page) => {
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
export const SetImage = (item) => {
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
const SetBox = (itemname, items, props) => {
  return (
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
        {itemname}
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
        {items.map((item) => {
          if (item === "")
            return console.log(
              "배열에 빈 항목이 있습니다. SkillContent.jsx -> " + itemname
            );
          let top;
          if (item === "go" || item === "php" || item === "django") {
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
                props.update({ page: props.data.page, content: item });
              }}
            ></Image>,
            item,
            top
          );
        })}
      </Container>
    </Box>
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

const PrevNextButton = (props) => {
  let previous_page = props.data.page - 1;
  let next_page = props.data.page + 1;
  return (
    <>
      {props.data.page > 1 && (
        <Button
          position="absolute"
          role="group"
          left="1%"
          bottom="40px"
          cursor="pointer"
          onClick={() => {
            if(props.data.page === 2) {document.getElementById('skill_desc_icon').style.opacity = 1;document.getElementById('logoimg')?.remove()}
            props.update({
              page: previous_page > 1 ? previous_page : 1,
              content: previous_page > 1 ? props.data.content : "main",
            });
          }}
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

      {next_page > maxpage[props.data.content] ? (
        ""
      ) : (
        <Button
          position="absolute"
          role="group"
          right={"1%"}
          bottom={"40px"}
          cursor={"pointer"}
          onClick={() =>
            props.update({
              page: next_page,
              content: props.data.content,
            })
          }
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
    </>
  );
};

const importMotiondiv = (props) => {
  let text = (
    <Container
      fontSize="24px"
      lineHeight="2rem"
      position="absolute"
      top="30%"
      left="10%"
      textAlign="left"
    >
      {props.data.page === 1 && SkillPage1[props.data.content]}
      {props.data.page === 2 && SkillPage2[props.data.content]}
      {props.data.page === 3 && SkillPage3[props.data.content]}
    </Container>
  );
  if (props.data.page !== 1) return text;
  else
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 2.5 }}
      >
        {text}
      </motion.div>
    );
};

export default function (props) {
  let image = SetImage(props.data.content);
  let programming = ["go", "rust", "html", "java", "js", "php", "python", "ts"];
  let frameworks = ["django", "react", "svelte"];
  let libraries = ["jquery"];
  let certifications = [""];
  console.log(props);
  if (props.data.content === "main")
    return (
      <>
        {SetBox("Programming Languages", programming, props)}
        {SetBox("Frameworks", frameworks, props)}
        {SetBox("Libraries", libraries, props)}
        {SetBox("Certifications", certifications, props)}
      </>
    );
  console.log(props.data.content);
  return (
    <>
      {props.data.page !== 1 && (
        <>
          <Image
            height={110}
            width={110}
            src={image}
            position="absolute"
            top="5%"
            left={props.data.content === "django" ? "7%" : props.data.content === "go" ? "7%" : "5%"}
            transform={
              props.data.content === "go"
                ? "scale(1.5)"
                : props.data.content === "django"
                ? "scale(1.5)"
                : ""
            }
            opacity="0"
            id="skill_desc_icon"
          ></Image>
          <Text fontSize="40px" position="absolute" top="9%" left="20%">
            {SetText(props.data.content)}
          </Text>
        </>
      )}
      {importMotiondiv(props)}
      <Box>{PrevNextButton(props)}</Box>
    </>
  );
}
