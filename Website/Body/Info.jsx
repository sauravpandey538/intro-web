import { Container, Flex, Text, Avatar, Icon } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

function Info() {
  return (
    <Container
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      maxW="400px"
      mt={"55px"}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        spacing="3"
        mt={"auto"}
      >
        <Avatar
          size="xl"
          name="Saurav Pandey"
          src="https://scontent.fsif1-1.fna.fbcdn.net/v/t39.30808-6/330464009_872876217312271_1303980131065337717_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=Bc3yvtEZmCcAX9in8lq&_nc_ht=scontent.fsif1-1.fna&oh=00_AfATZQh0THE73WmI9nqISR2bZg7h-sdQa6znrrwqEWLANQ&oe=656B61B7"
        />

        <Text fontSize="xl" fontWeight="bold">
          Saurav Pandey
        </Text>
        <Text fontSize="sm" color="gray.500">
          Age: 21
        </Text>
        <Flex justify="space-between" w="100%" mb="2">
          <Text>Occupation</Text>
          <Text ml="2">Software Engineer</Text>
        </Flex>
        <Flex justify="space-between" w="100%" mb="2">
          <Text>Location</Text>
          <Text ml="2">Kathmandu, Nepal</Text>
        </Flex>
        <Flex justify="space-between" w="100%" mb="2">
          <Text>Date of place</Text>
          <Text ml="2">Punjab, India</Text>
        </Flex>
        <Flex justify="space-between" w="100%" mb="2">
          <Text>SEE pass out year</Text>
          <Text ml="2">2019</Text>
        </Flex>
        <Flex justify="space-between" w="100%" mb="2">
          <Text>+2 pass out year</Text>
          <Text ml="2">2021</Text>
        </Flex>
        <Flex justify="space-between" w="100%" mb="2">
          <Text>+2 Result</Text>
          <Text ml="2">GPA 3.78</Text>
        </Flex>
        <Flex justify="space-between" w="100%" mb="2">
          <Text>SEE result</Text>
          <Text ml="2">GPA 3.62</Text>
        </Flex>
        <Flex justify="space-between" w="100%" mb="2">
          <Text>Citizen No</Text>
          <Text ml="2">53-01-77-00048</Text>
        </Flex>
        <Flex justify="space-between" w="100%" mb="2">
          <Text>Favourite place</Text>
          <Text ml="2">Kyoto, Japan</Text>
        </Flex>
        <Flex justify="space-between" w="100%" mb="2">
          <Text>G-mail</Text>
          <Text ml="2">sauravpandey0325@gmail.com</Text>
        </Flex>
        <Flex justify="space-between" w="100%" mb="2">
          <Text>Date of Birth</Text>
          <Text ml="2">2003-07-09</Text>
        </Flex>
        <Flex justify="space-between" w="100%" mb="2">
          <Text>Contact Number</Text>
          <Text ml="2">9869751266</Text>
        </Flex>
        <Flex gap={"20px"} maxW={"100%"} mt={"20px"}>
          <a
            href={"https://www.facebook.com/saurav.pandey.3998263"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              as={FaFacebook}
              boxSize={8}
              color="blue.600"
              cursor="pointer"
            />
          </a>
          <a
            href={
              "https://www.tiktok.com/@username_3434343434?_t=8hlXxX7xH8c&_r=1"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              as={IoLogoTiktok}
              boxSize={8}
              color="black.600"
              cursor="pointer"
            />
          </a>
          <a
            href={
              "https://instagram.com/sauravpandey_0325?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              as={FaInstagram}
              boxSize={8}
              color="white.600"
              cursor="pointer"
            />
          </a>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Info;
