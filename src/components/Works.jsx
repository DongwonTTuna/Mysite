import React from "react";
import ChangePage from "./contents/ChangePage";
import { Box, Container, Text,Image } from "@chakra-ui/react";
import SekigaeImg from "../static/img/sekigae.png"
export default () => {
  return (
    <ChangePage>
      <Box minH="2000px">
      <Box translateX="50%"  mt="100px" display="flex" gap="20px">
        <Image w="600px" borderRadius="20px" filter="drop-shadow(30px 0px 40px #701a75)"  src={SekigaeImg}></Image>
        <Text>ランダム席替えシステム</Text>
      </Box>
      <Box>
        <Text>Updating Continuously</Text>
      </Box>
      </Box>
    </ChangePage>
  );
};
