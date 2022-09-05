import React from "react";
import {
  Box,
  Container,
  Text,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
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
const texts = {
  go: "Go Language",
  python: "Python",
  rust: "Rust",
  django: "Django",
  html: "HTML",
  java: "Java",
  jquery: "jQuery",
  js: "JavaScript",
  php: "PHP",
  react: "React",
  svelte: "Svelte",
  ts: "TypeScript",
};
const images = { main: "", go: go, rust: rust,django:django, html: html, java: java, jquery:jquery, js:js, php:php, react:react, svelte:svelte,python:python, ts:ts};
const SetBox = (itemname, items) => {
  return (
    <Box gap="50px" minW="100%" m="0 auto">
      <Container px="10px">
        <Text
          backgroundColor="rgba(125,125,125,0.771)"
          borderRadius="10px"
          p="15px"
        >
          {itemname}
        </Text>
        <Container
          borderRadius="10px"
          height="fit-content"
          display="grid"
          gridTemplateColumns={{
            base: "1fr 1fr",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
            xl: "1fr 1fr 1fr",
            "2xl": "1fr 1fr 1fr 1fr",
          }}
          gap="40px"
          w="100%"
          m="0 auto"
          mt={{
            base: "40px",
            md: "40px",
            lg: "40px",
            xl: "40px",
            "2xl": "50px",
          }}
        >
          {items.map((item) => {
            if (item === "")
              return console.log(
                "배열에 빈 항목이 있습니다. SkillContent.jsx -> " + itemname
              );
            let top;
            if (item === "go" || item === "php" || item === "django") {
              top = "-10px";
            } else {
              top = "15px";
            }
            return PopOver(
              <Container
                height="110"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  position="absolute"
                  src={images[item]}
                  height="110px"
                  width="110px"
                  cursor="pointer"
                  _hover={{ transform: "scale(1.2)" }}
                  transition="all 0.4s ease-in-out"
                ></Image>
              </Container>,
              item,
              top
            );
          })}
        </Container>
      </Container>
    </Box>
  );
};
const PopOver = (Div, page, top) => {
  const Text = texts[page];
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
export default function (props) {
  let programming = ["go", "rust", "html", "java", "js", "php", "python", "ts"];
  let frameworks = ["django", "react", "svelte"];
  let libraries = ["jquery"];
  let certifications = [""];
  if (props.data === "main")
    return (
      <>
        {SetBox("Programming Languages", programming)}
        {SetBox("Frameworks", frameworks)}
        {SetBox("Libraries", libraries)}
        {SetBox("Certifications", certifications)}
      </>
    );
}
