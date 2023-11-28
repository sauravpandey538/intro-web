import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";

import {
  Text,
  Box,
  Button,
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from "@chakra-ui/react";

function Drawerr() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Card H={("md", "100%")} my={"60px"} maxW={"md"} mx={"auto"}>
        <CardHeader display={"flex"}>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://scontent.fsif1-1.fna.fbcdn.net/v/t39.30808-6/337669895_1140049323359009_1860035976428952782_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RrOEiv2UEswAX_aPTDR&_nc_ht=scontent.fsif1-1.fna&oh=00_AfBb_bt-CMik9yvViBcQ5IvsSLawiV1JZijIfzqtEE1YWw&oe=656A889D"
            alt="Dan Abramov"
          />
          <Box margin={"auto 20px"}>
            <Text fontSize={"3xl"} textAlign={"bottom"} fontWeight={"600"}>
              Saurav Pandey
            </Text>
            <Text> Principle, Texas Int'l College</Text>
          </Box>
        </CardHeader>
        <CardBody>
          <Text>
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen.
          </Text>
        </CardBody>
        <CardFooter>
          <Button
            flex="1"
            colorScheme="teal"
            variant="solid"
            leftIcon={<UnlockIcon />}
            onClick={onOpen}
          >
            Be my friend
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent minW={("md", "500px")}>
              <DrawerCloseButton />
              <DrawerHeader>How can i call you?</DrawerHeader>

              <DrawerBody mt={"-10px"}>
                <Input placeholder="What's your name ?" />
              </DrawerBody>

              <DrawerFooter gap={"10px"}>
                <Button
                  variant="outline"
                  mr={3}
                  onClick={onClose}
                  width={"160px"}
                >
                  Cancel
                </Button>
                <Button colorScheme="teal" width={"160px"}>
                  Request
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </CardFooter>
      </Card>
    </>
  );
}

export default Drawerr;
