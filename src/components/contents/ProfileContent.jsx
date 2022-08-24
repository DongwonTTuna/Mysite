import React from "react";
import {
  Box,
  Container,
  Center,
  Text,
  Image,
  Stack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import profileimg from "../../static/img/Maguro.jpeg";
export default function () {
  return (
    <Box height="100%" margin="0">
      <Container width={"fit-content"} margin={"0 auto"} paddingTop="100px">
        <Image
          width="150px"
          height="150px"
          borderRadius="50%"
          src={profileimg}
        />
      </Container>
      <Center width="fit-content" margin="0 auto" marginTop="100px">
        <Stack spacing="2rem">
          <Text fontSize="2rem" textAlign="center">
            Dongwon Lee
          </Text>
          <Text noOfLines={2}>mail@dongwonttuna.men</Text>
        </Stack>
      </Center>
      <Container display="flex" mt="100px" flexDirection={{base:'column', '2xl':'row'}} gap="30px" justifyContent="center">
        <Container>
          <Text textAlign="center">Blockchain 関係</Text>
          <UnorderedList w="fit-content" m="0 auto" listStyleType="none" lineHeight="2.5rem" mt="40px" s>
            <ListItem>
              <Text fontSize={{base:'18px',lg:'24px'}} whiteSpace={{base:'',xl:'nowrap'}}>
                ・2018~2019 TEU Korea Ambassador
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{base:'18px',lg:'24px'}} whiteSpace={{base:'',xl:'nowrap'}}>
                ・2022~ Deus.fi Community Assistance
              </Text>
            </ListItem>
          </UnorderedList>
        </Container>
        <Container mt={{base:'40px','2xl':'0'}}>
          <Text textAlign="center">キャリア</Text>
          <UnorderedList w="fit-content" m="0 auto" listStyleType="none" lineHeight="2rem" mt="20px" s>
            <ListItem>
              <Text fontSize={{base:'18px',lg:'24px'}} whiteSpace={{base:'',xl:'nowrap'}}>
                ・東京情報クリエイター工学院専門学校&nbsp;&nbsp;&nbsp;在学中
              </Text>
            </ListItem>
          </UnorderedList>
        </Container>
      </Container>
    </Box>
  );
}
