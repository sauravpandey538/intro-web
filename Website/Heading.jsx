import { Box, Stack, Flex, Spacer, Button } from "@chakra-ui/react";
import { Input, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { LinkIcon } from "@chakra-ui/icons";

function Heading() {
  return (
    <Box
      py="4"
      px="2"
      minH="auto"
      color={"teal"}
      bgColor={"gray.200"}
      borderRadius={"20px"}
    >
      <Flex maxW="1200px" mx={"auto"}>
        <Box maxW="fit-content" H={"100%"} fontSize={"3xl"}>
          <LinkIcon />
        </Box>
        <Spacer />
        <Flex maxW="fit-content" h="auto" alignItems={"center"}>
          <Box
            display={"flex"}
            gap={85}
            justifyContent={"center"}
            alignItems="center"
            fontSize={("lg", "md")}
          >
            <Button colorScheme="teal" variant="link">
              Hobbies
            </Button>
            <Button colorScheme="teal" variant="link">
              Circle
            </Button>
            <Button colorScheme="teal" variant="link">
              Gallery
            </Button>
            <Button colorScheme="teal" variant="link">
              Information
            </Button>
          </Box>
        </Flex>
        <Spacer />
        <Stack direction="row" alignItems="center">
          <Input placeholder="Search..." color={"teal"} />
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            color={"teal"}
          />
        </Stack>
      </Flex>
    </Box>
  );
}

export default Heading;
