import { useState } from "react";
import { Box, Stack, Flex, Spacer, Button, Switch } from "@chakra-ui/react";
import { Input, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

function Heading() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
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
        <Box as={Link} to="/" maxW="fit-content" H={"100%"} fontSize={"3xl"}>
          <IoIosHome onClick={() => (document.title = "Home")} />
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
            <Link to={"/hobbies"}>
              <Button
                colorScheme="teal"
                variant="link"
                onClick={() => (document.title = "Saurav's Hobby")}
              >
                Hobbies
              </Button>
            </Link>
            <Button
              as={Link}
              to="/project"
              colorScheme="teal"
              variant="link"
              onClick={() => (document.title = "Saurav's Projects")}
            >
              Projects
            </Button>
            <Button
              as={Link}
              to="/gallery"
              colorScheme="teal"
              variant="link"
              onClick={() => (document.title = "Saurav's Gallery")}
            >
              Gallery
            </Button>
            <Button
              as={Link}
              to="/information"
              colorScheme="teal"
              variant="link"
              onClick={() => (document.title = "Saurav's Bio-Data")}
            >
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
        <Stack
          textAlign={"center"}
          justifyContent={"center"}
          flex={1}
          py={"auto"}
        >
          <Switch
            size="lg"
            onChange={handleToggle}
            isChecked={isDarkMode}
            fontSize={"25px"}
          />
        </Stack>
      </Flex>
    </Box>
  );
}

export default Heading;
