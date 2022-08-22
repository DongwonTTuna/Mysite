import React,{useRef} from "react";
import { Box, Container,Button,Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import profileimg from "../static/img/Maguro.jpeg";
export default function () {
  const navigate = useNavigate();
  const currentRender = useRef("profile");
  return (
    <Box
      minW="100%"
      paddingY="15px"
      transition="all 0.4s ease-in-out"
      zIndex="5"
      bgGradient={"linear(to-r,#343434,#242424,#343434)"}
      _hover={{ backgroundColor: "#373636" }}
      position="relative"
      display="flex"
    >
      <Button position="absolute" onClick={()=>{
            currentRender.current = "";
            navigate("/");
      }}>
        <Image h="30px" w="40px"  src={profileimg}/>
      </Button>
      <Container
        w="500px"
        margin="0 auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Container
          role="group"
          w="fit-content"
          fontSize="34px"
          cursor="pointer"
          onClick={() => {
            currentRender.current = "profile";
            navigate("/profile");
          }}
        >
          profile
          <Container
            w={currentRender.current === "profile" ? "100%" : "0px"}
            px="1"
            pb="3"
            borderBottom={"2px"}
            opacity={currentRender.current === "profile" ? "1" : "0"}
            borderColor="rgba(255,255,255,0.87)"
            _groupHover={{
              width: "100%",
              opacity: "1",
              transition: "width 0.3s ease-in-out",
            }}
          />
        </Container>
        <Container
          role="group"
          w="fit-content"
          fontSize="34px"
          cursor="pointer"
          onClick={() => {
            currentRender.current = "skill";
            navigate("/skills");
          }}
        >
          skills
          <Container
            w={currentRender.current === "skill" ? "100%" : "0px"}
            px="1"
            pb="3"
            borderBottom={"2px"}
            opacity={currentRender.current === "skill" ? "1" : "0"}
            borderColor="rgba(255,255,255,0.87)"
            _groupHover={{
              width: "100%",
              opacity: "1",
              transition: "width 0.3s ease-in-out",
            }}
          />
        </Container>
        <Container
          role="group"
          w="fit-content"
          cursor="pointer"
          fontSize="34px"
          onClick={() => {
            currentRender.current = "works";
            navigate("/works");
          }}
        >
          works
          <Container
            w={currentRender.current === "works" ? "100%" : "0px"}
            px="1"
            pb="3"
            borderBottom={"2px"}
            opacity="0"
            borderColor="rgba(255,255,255,0.87)"
            _groupHover={{
              width: "100%",
              opacity: "1",
              transition: "width 0.3s ease-in-out",
            }}
          />
        </Container>
      </Container>
    </Box>
  );
}
