import {
  Container,
  Heading,
  Text,
  Box,
  Button,
  Stack,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import { EmailIcon, ArrowForwardIcon } from "@chakra-ui/icons";

function Footer() {
  return (
    <>
      <Container
        my={40}
        bgColor="gray.100"
        maxW="100vw"
        textAlign="center"
        boxShadow={"0px 3px 2px 3px rgba(0,0,0,0.2)"}
      >
        <Flex gap={5} colorScheme="green" textAlign={"center"}>
          <Avatar
            name="Saurav Pandey"
            src="https://sancharkarmi.com/uploads/news/images/273474014Punya-gautam.jpeg"
            boxSize={"80px"}
          />

          <Text
            textAlign={"center"}
            textTransform="uppercase"
            textColor={"green.600"}
            letterSpacing={"0.2em"}
          >
            Code with Me
          </Text>
          <Text
            fontSize="xl"
            color="green.500"
            letterSpacing={"0.1em"}
            flex={1}
            alignItems={"center"}
            justifyContent={"center"}
          >
            @Developer of this Website
          </Text>
        </Flex>
        <br />
        <Text
          my={6}
          fontWeight={600}
          color="green.500"
          textAlign="left"
          lineHeight={2}
          letterSpacing={"1px"}
        ></Text>
        <Box width={"100%"} minHeight={"fit-content"}>
          <Stack
            my={"20px"}
            direction="row"
            spacing={10}
            flex={1}
            textAlign={"center"}
            justifyContent={"center"}
          >
            <Button leftIcon={<EmailIcon />} />
            <Button rightIcon={<ArrowForwardIcon />} />
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default Footer;
