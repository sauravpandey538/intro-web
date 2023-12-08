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
  useToast,
} from "@chakra-ui/react";

function Drawerr() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const toast = useToast();

  return (
    <>
      <Card H={("md", "100%")} my={"60px"} maxW={"md"} mx={"auto"}>
        <CardHeader display={"flex"}>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://i1.sndcdn.com/avatars-000400033800-h6tvts-t500x500.jpg"
            alt="Unknown Source"
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
            My name is Saurav Pandey. I am here to create my private website version.
            And here it's my private website and it is on pending.So, please wait for some moment!!
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
                <Button
                  colorScheme="teal"
                  width={"160px"}
                  onClick={() => {
                    toast({
                      title: "Request Send",
                      description: "Wait for Saurav's response",
                      status: "success",
                      duration: 1000,
                      isClosable: true,
                    });
                    document.getElementsByTagName("input")[0].value = "";
                  }}
                >
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
