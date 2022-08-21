import React, { useRef, useState, useEffect } from "react";
import { Box, Container } from "@chakra-ui/react";
export default function (props) {
  const [position, SetPosition] = useState(null);
  const currentActive = useRef(null);
  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    SetPosition(winScroll);
  };
  useEffect(() => {
    let positionc = position;
    if (positionc === null)
      positionc = document.body.scrollTop || document.documentElement.scrollTop;
    if (positionc <= 1000) currentActive.current = 0;
    if (positionc > 1000) currentActive.current = 1;
  }, [position]);
  window.removeEventListener("scroll", listenToScroll);
  window.addEventListener("scroll", listenToScroll);
  return (
    <Box
      position="fixed"
      top="0"
      minW="100%"
      paddingBottom="15px"
      transition="all 0.4s ease-in-out"
      zIndex="5"
      _hover={{ backgroundColor: "#373636" }}
    >
      <Container
        w="500px"
        margin="0 auto"
        marginTop="20px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Container
          role="group"
          w="fit-content"
          fontSize="34px"
          cursor="pointer"
          onClick={() =>
            props.profile.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          profile
          <Container
            w={currentActive.current === 0 ? "100%" : "0px"}
            px="1"
            pb="3"
            borderBottom={"2px"}
            opacity={currentActive.current === 0 ? "1" : "0"}
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
          onClick={() =>
            props.skill.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          skills
          <Container
            w={currentActive.current === 1 ? "100%" : "0px"}
            px="1"
            pb="3"
            borderBottom={"2px"}
            opacity={currentActive.current === 1 ? "1" : "0"}
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
          onClick={() =>
            props.work.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          works
          <Container
            w={currentActive.current === 2 ? "100%" : "0px"}
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
