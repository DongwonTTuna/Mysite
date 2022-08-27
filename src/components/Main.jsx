import React from "react";
import ChangePage from "./contents/ChangePage";
import { motion, isValidMotionProp } from "framer-motion";
import {
  chakra,
  Box,
  Text,
  Container,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Portal,
  PopoverHeader,
} from "@chakra-ui/react";
import Bitcoin from "../static/img/Bitcoin.png";
import Ethereum from "../static/img/Ethereum.png";
import BackgroundImg from "../static/img/bkg.svg";
const ChakraBox = chakra(motion.article, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});
export default () => {
  return (
    <ChangePage>
      <Container
        position="relative"
        w="100%"
        h="fit-content"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container
          position="relative"
          backgroundImage={BackgroundImg}
          backgroundSize="100% 100%"
          backgroundRepeat="no-repeat"
          minH={{base:"600px",md: "900px",lg:"1200px"}}
          minW={{base:"1000px",md:"1500px",lg: "2000px"}}
        >
          <Popover trigger="hover">
            <PopoverTrigger>
              <Container
                minH="135px"
                position="absolute"
                w={{base:"70px",md: "100px",lg:"135px"}}
                top={{base:"215px",md: "325px",lg:"432px"}}
                left={{base:"387px",md: "583px",lg:"777px"}}
              >
                <Image
                  borderRadius="50%"
                  position="absolute"
                  left="0px"
                  w="135px"
                  _hover={{
                    transform: "scale(1.15) rotate(-20deg)",
                    boxShadow: "0px 0px 10px gray",
                  }}
                  transition="all 0.3s ease-in-out"
                  src={Bitcoin}
                  zIndex="10"
                />
              </Container>
            </PopoverTrigger>
            <PopoverContent
              w="fit-content"
              backgroundColor="#393939"
              borderColor="#393939"
              top="15px"
            >
              <PopoverArrow
                backgroundColor="#393939"
                borderColor="#393939"
                boxShadow="none"
              />
              <PopoverBody>Bitcoin</PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover trigger="hover">
            <PopoverTrigger>
            <Container
                minH="135px"
                position="absolute"
                w={{base:"70px",md: "100px",lg:"135px"}}
                top={{base:"265px",md: "400px",lg:"532px"}}
                left={{base:"644px",md: "968px",lg:"1289px"}}
              >
              <Image
                borderRadius="50%"
                position="absolute"
                w="135px"
                left="0px"
                _hover={{
                  transform: "scale(1.15) rotate(-20deg)",
                  boxShadow: "0px 0px 10px #627eea",
                }}
                transition="all 0.3s ease-in-out"
                src={Ethereum}
              />
              </Container>
            </PopoverTrigger>
            <PopoverContent
              w="fit-content"
              backgroundColor="#393939"
              borderColor="#393939"
              top="15px"
            >
              <PopoverArrow
                backgroundColor="#393939"
                borderColor="#393939"
                boxShadow="none"
              />
              <PopoverBody>Ethereum</PopoverBody>
            </PopoverContent>
          </Popover>
        </Container>
      </Container>
      <Container mb="400px">
        <Text>Updating continuously. Please wait</Text>
      </Container>
    </ChangePage>
  );
};
