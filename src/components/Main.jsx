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
} from "@chakra-ui/react";
import Bitcoin from "../static/img/Bitcoin.png";
import Ethereum from "../static/img/Ethereum.png";
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
          backgroundImage={"url('/src/static/img/bkg.svg')"}
          backgroundSize="100% 100%"
          backgroundRepeat="no-repeat"
          minH="1200px"
          minW="2000px"
        >
          <Popover trigger="hover">
            <PopoverTrigger>
              <Image
                borderRadius="50%"
                position="absolute"
                w="135px"
                top="432px"
                left="781px"
                _hover={{
                  transform: "scale(1.15) rotate(-20deg)",
                  boxShadow: "0px 0px 10px gray",
                }}
                transition="all 0.3s ease-in-out"
                src={Bitcoin}
              />
            </PopoverTrigger>
            <PopoverContent
              w="fit-content"
              backgroundColor="#393939"
              borderColor="#393939"
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
              <Image
                borderRadius="50%"
                position="absolute"
                w="135px"
                top="533px"
                left="1278px"
                _hover={{
                  transform: "scale(1.15) rotate(-20deg)",
                  boxShadow: "0px 0px 10px #627eea",
                }}
                transition="all 0.3s ease-in-out"
                src={Ethereum}
              />
            </PopoverTrigger>
            <PopoverContent
              w="fit-content"
              backgroundColor="#393939"
              borderColor="#393939"
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
        <Text>Updating continueously. Please wait</Text>
      </Container>
    </ChangePage>
  );
};
