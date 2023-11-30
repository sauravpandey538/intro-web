import { Box, Flex, Grid, Button, Text } from "@chakra-ui/react";
export default function Projects() {
  return (
    <>
      <Box h={"750px"} w={"100vw"}>
        <Flex display={"inline-block"} gap={"10px"}>
          <Flex
            borderBottom="2px solid black"
            overflowX={"hidden"}
            display={"inline-block"}
            textAlign={"center"}
            py={"10px"}
            w={"70%"}
            mx={"310px"}
          >
            <Text
              letterSpacing={"0.75"}
              fontSize={"5xl"}
              fontFamily={"monospace"}
            >
              Projects
            </Text>
            <Text>
              今日、月がきれいですね！さー、目が大きくてきれいですね。すぐ、会うの希望を持ってもいい？
            </Text>
            <Text>- Saurav Pandey</Text>
          </Flex>
          <Grid
            border="2px solid black"
            overflow={"scroll"}
            w={"90%"}
            h={"500px"}
            mx={"160px"}
            my={"30px"}
          ></Grid>
          <Box textAlign={"center"} ml={"190px"} mt={"-10px"}>
            <Button colorScheme="teal" variant="outline">
              {" "}
              View More
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
