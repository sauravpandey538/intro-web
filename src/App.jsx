import { Text, Box, Stack, Flex, Spacer } from "@chakra-ui/react";
import { Input, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { LinkIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Box py="4" px="2" minH="auto" border={"2px solid black"}>
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
              fontSize={"lg"}
            >
              <Text>Photos</Text>
              <Text>Hello</Text>
              <Text>Services</Text>
              <Text>Contact</Text>
              <Text>Qn's</Text>
            </Box>
          </Flex>
          <Spacer />
          <Stack direction="row" alignItems="center">
            <Input placeholder="Search..." />
            <IconButton aria-label="Search" icon={<SearchIcon />} />
          </Stack>
        </Flex>
      </Box>
    </>
  );
}

export default App;
