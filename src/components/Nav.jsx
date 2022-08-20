import React, { useRef, useState, useEffect } from "react";
import {Box, Container} from "@chakra-ui/react"
import '../static/css/nav.css'
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
    <Box position="fixed" top="0" minW="100%" paddingBottom="15px" transition="all 0.4s ease-in-out" zIndex="5" _hover={{backgroundColor: "#373636"}}>
      <Container w="500px" margin="0 auto" marginTop="10px" display="flex" alignItems="center" justifyContent="space-between">
        <span
          className={currentActive.current === 0 ? "nav active" : "nav"}
          onClick={() => props.profile.current.scrollIntoView({behavior:"smooth"})}
        >
          profile
        </span>
        <span
          className={currentActive.current === 1 ? "nav active" : "nav"}
          onClick={() => props.skill.current.scrollIntoView({behavior:"smooth"})}
        >
          skills
        </span>
        <span
          className={currentActive.current === 2 ? "nav active" : "nav"}
          onClick={() => props.work.current.scrollIntoView({behavior:"smooth"})}
        >
          works
        </span>
      </Container>
    </Box>
  );
}
