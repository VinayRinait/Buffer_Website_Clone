import { SearchIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaHome, FaInbox, FaMemory, FaSmile } from "react-icons/fa";
import { FiCompass } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiSend } from "react-icons/fi";

const Instagram = () => {
  return (
    <>
      <Navbar />
      <Flex as={"main"} maxW="935px" flexFlow={"nowrap"} w="full" mx="auto">
        <Flex
          my="6"
          direction={"column"}
          align="stretch"
          flexShrink={"0"}
          float="left"
          maxW={"614px"}
          w="full"
          mr={[0, 0, 6]}
        >
          <Stories />
          <Post />
        </Flex>
        <Sidebar />
      </Flex>
    </>
  );
};

export default Instagram;
const Post = () => {
  return (
    <Box bg="white" borderColor={"gray.300"} borderWidth="thin" rounded={"md"}>
      <Flex p="3" align={"center"}>
        <Avatar
          name="vinay Rinait"
          size={"md"}
          mr="4"
          cursor={"pointer"}
          src="https://bit.ly/chakra-jonathan-bakebwa"
        />
        <Box>
          <Text fontWeight={"bold"} fontSize="sm">
            vinit
          </Text>
          <Text cursor={"pointer"} fontSize="xs">
            Gondia
          </Text>
        </Box>
      </Flex>
      <Box maxW={"614px"} ratio="1/1">
        <Image
          src="https://images.unsplash.com/photo-1553621042-f6e147245754?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80"
          alt="caption"
        />
      </Box>
      <Flex p="4">
        <Stack isInline>
          <Icon as={FiHeart} size="30" />
          <Icon as={FiMessageCircle} size="30" />
          <Icon as={FiSend} size="30" />
        </Stack>
        <Icon />
      </Flex>
      <Text fontWeight={"bold"} fontSize="sm" mx="4">
        18 likes
      </Text>
      <Box px="4" mb="2">
        <Text fontSize={"sm"} fontWeight="bold" mr="2">
          vinit
          <span fontSize="2px">I love it ❣</span>
        </Text>
      </Box>
      <Text
        color={"gray.500"}
        mx="4"
        textTransform={"uppercase"}
        mb="2"
        fontSize={"0.7rem"}
      >
        2 hour ago
      </Text>
      <InputGroup
        borderTop={"1px solid"}
        borderColor="gray.300"
        size={"lg"}
        roundedTop="none"
      >
        <InputLeftElement h={"4rem"}>
          <Icon as={FaSmile} size="30" />
        </InputLeftElement>
        <Input
          focusBorderColor="none"
          h="16"
          border={"none"}
          type="text"
          fontSize={"sm"}
          placeholder="Add a comment..."
        />
        <InputRightElement h="4rem">
          <Button fontSize={"sm"} mr="3" fontWeight={"bold"} color="blue.400">
            Post
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

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
      bg="white"
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
const Stories = () => {
  return (
    <Stack
      rounded={["none", "md"]}
      bg="white"
      w={"full"}
      borderColor="gray.300"
      borderWidth={"thin"}
      py="4"
      pl={"4"}
      spacing="4"
      isInline
      overflow={"hidden"}
    >
      <Flex direction={"column"} maxW="68px" align={"center"}>
        <Box p="2px" mb={"1"} rounded="full" bg={"pink.400"}>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            w="16"
            h="16"
            cursor={"pointer"}
          />
        </Box>
        <Text fontSize={"xs"} fontWeight="bold">
          vinit
        </Text>
      </Flex>
      <Flex direction={"column"} maxW="68px" align={"center"}>
        <Box p="2px" mb={"1"} rounded="full" bg={"pink.400"}>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            w="16"
            h="16"
            cursor={"pointer"}
          />
        </Box>
        <Text fontSize={"xs"} fontWeight="bold">
          vinit
        </Text>
      </Flex>
      <Flex direction={"column"} maxW="68px" align={"center"}>
        <Box p="2px" mb={"1"} rounded="full" bg={"pink.400"}>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            w="16"
            h="16"
            cursor={"pointer"}
          />
        </Box>
        <Text fontSize={"xs"} fontWeight="bold">
          vinit
        </Text>
      </Flex>
      <Flex direction={"column"} maxW="68px" align={"center"}>
        <Box p="2px" mb={"1"} rounded="full" bg={"pink.400"}>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            w="16"
            h="16"
            cursor={"pointer"}
          />
        </Box>
        <Text fontSize={"xs"} fontWeight="bold">
          vinit
        </Text>
      </Flex>
      <Flex direction={"column"} maxW="68px" align={"center"}>
        <Box p="2px" mb={"1"} rounded="full" bg={"pink.400"}>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            w="16"
            h="16"
            cursor={"pointer"}
          />
        </Box>
        <Text fontSize={"xs"} fontWeight="bold">
          vinit
        </Text>
      </Flex>
      <Flex direction={"column"} maxW="68px" align={"center"}>
        <Box p="2px" mb={"1"} rounded="full" bg={"pink.400"}>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            w="16"
            h="16"
            cursor={"pointer"}
          />
        </Box>
        <Text fontSize={"xs"} fontWeight="bold">
          vinit
        </Text>
      </Flex>
      <Flex direction={"column"} maxW="68px" align={"center"}>
        <Box p="2px" mb={"1"} rounded="full" bg={"pink.400"}>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            w="16"
            h="16"
            cursor={"pointer"}
          />
        </Box>
        <Text fontSize={"xs"} fontWeight="bold">
          vinit
        </Text>
      </Flex>
      <Flex direction={"column"} maxW="68px" align={"center"}>
        <Box p="2px" mb={"1"} rounded="full" bg={"pink.400"}>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            w="16"
            h="16"
            cursor={"pointer"}
          />
        </Box>
        <Text fontSize={"xs"} fontWeight="bold">
          vinit
        </Text>
      </Flex>
      <Flex direction={"column"} maxW="68px" align={"center"}>
        <Box p="2px" mb={"1"} rounded="full" bg={"pink.400"}>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            w="16"
            h="16"
            cursor={"pointer"}
          />
        </Box>
        <Text fontSize={"xs"} fontWeight="bold">
          vinit
        </Text>
      </Flex>
    </Stack>
  );
};
const Sidebar = () => {
  return (
    <Stack spacing={"2"} w="50%" display={["none", "none", "block"]}>
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
      <Flex align={"center"}>
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          flexShrink={"0"}
          mr="3"
          size={"sm"}
        />
        <Box mr={"auto"}>
          <Text fontWeight={"bold"} fontSize="sm">
            Hari
          </Text>
          <Text fontSize={"xs"} color="gray.500">
            SybrenW
          </Text>
        </Box>
        <Text fontWeight={"bold"} fontSize="xs" color={"blue.400"}>
          Follow
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
          <Text fontWeight={"bold"} fontSize="sm">
            {" "}
            lauragift_
          </Text>
          <Text fontSize={"xs"} color="gray.500">
            {" "}
            Gift Egwuenu
          </Text>
        </Box>
        <Text ml="3" fontWeight={"bold"} fontSize="xs" color={"blue.400"}>
          Follow
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
          <Text fontWeight={"bold"} fontSize="sm">
            {" "}
            lauragift_
          </Text>
          <Text fontSize={"xs"} color="gray.500">
            {" "}
            Gift Egwuenu
          </Text>
        </Box>
        <Text ml="3" fontWeight={"bold"} fontSize="xs" color={"blue.400"}>
          Follow
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
          <Text fontWeight={"bold"} fontSize="sm">
            {" "}
            lauragift_
          </Text>
          <Text fontSize={"xs"} color="gray.500">
            {" "}
            Gift Egwuenu
          </Text>
        </Box>
        <Text ml="3" fontWeight={"bold"} fontSize="xs" color={"blue.400"}>
          Follow
        </Text>
      </Flex>
      <Box mt="6">
        <Text fontSize={"xs"} color="gray.400">
          <Text>About</Text>
        </Text>
      </Box>
      <Box mt="6">
        <Text fontSize={"xs"} color="gray.400">
          @2022 INSTAGRAM
        </Text>
        <Text mt="2" fontSize={"xs"} color="gray.500">
          Buffer Team
        </Text>
      </Box>
    </Stack>
  );
};
