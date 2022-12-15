import { SearchIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaHome, FaMemory } from "react-icons/fa";
import { FiCompass } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { FiHome } from "react-icons/fi";

const Instagram = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
};

export default Instagram;

const Navbar = () => {
  return (
    <Box
      display={"flex"}
      justifyContent="space-around"
      h="54px"
      position="sticky"
      top="0"
      z-index="10"
      align="center"
      justify="center"
      borderBottomColor={"gray.300"}
    >
      <Box>
        <Image
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logoinsta"
        />
      </Box>
      <Box>
        <InputGroup display={["none", "none", "block"]} mx="auto" size="sm">
          <InputLeftElement>
            <Icon as={SearchIcon} w="14px" h="14px" color={"gray.300"} />
          </InputLeftElement>

          <Input placeholder="Search" />
        </InputGroup>
      </Box>
      <Box>
        <Stack isInline spacing={"6"} ml={["auto", "auto", 0]}>
          <Stack
            w="8"
            h="8"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            rounded="md"
          >
            <Icon as={FiHome} size="10" />
          </Stack>
          <Stack
            w="8"
            h="8"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            rounded="md"
          >
            <Icon as={FiMessageCircle} size="10" />
          </Stack>
          <Stack
            w="8"
            h="8"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            rounded="md"
          >
            <Icon as={FiCompass} size="10" />
          </Stack>
          <Stack
            w="8"
            h="8"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            rounded="md"
          >
            <Icon as={FiHeart} size="10" />
          </Stack>
          <Avatar
            name="vinay Rinait"
            w="8"
            h="8"
            src="https://bit.ly/chakra-jonathan-bakebwa"
          />
        </Stack>
      </Box>
    </Box>
  );
};

const Sidebar = () => {
  return (
    <Stack spacing={"2"} w="50%">
      <Flex mt={"6"} align="center">
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          flexShrink={"0"}
          mr="3"
          size={"lg"}
        />
        <Box mr={"auto"}>
          <Text fontSize="sm" color="gray.500">
            vinay Rinait
          </Text>
          <Box ml="3" font-weight="bold" font-size="sm" color="blue.400">
            Switch
          </Box>
        </Box>
      </Flex>
      <Flex my="6" align={"center"} justifyContent={"flex-start"}>
        <Text fontSize="0.9rem" mr="auto" fontWeight={"bold"} color="gray.500">
          {" "}
          Suggestions for you{" "}
        </Text>
        <Text fontWeight={"bold"} fontSize="sm">
          Sell All
        </Text>
      </Flex>
      <Flex align={"center"}>
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          flexShrink={"0"}
          mr="3"
          size={"sm"}
        />
        <Box mr={"auto"}>
          <Box fontWeight={"bold"}>thesegunadebayo</Box>
          <Text fontSize={"xl"} color="gray.500">
            Pallavi Jain
          </Text>
        </Box>
        <Text ml="3" fontWeight={"bold"}>
          Follow
        </Text>
      </Flex>
    </Stack>
  );
};
