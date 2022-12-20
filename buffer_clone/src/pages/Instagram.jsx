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
import React, { useEffect, useState } from "react";
import { FaHome, FaInbox, FaMemory, FaSmile } from "react-icons/fa";
import { FiCompass } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/AllAdminRedux/UserDataRedux/UserData.action";
import { getUserinsta } from "../store/InstaReducer/action";

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
  const [bata, setBata] = useState(Data);
  var Data = useSelector((store) => store.cartManager.cart);

  let dispatch = useDispatch();
  console.log(Data);
  useEffect(() => {
    dispatch(getUserinsta());
  }, []);

  return (
    <>
      {Data.map((el) => (
        <>
          <Box
            bg="white"
            borderColor={"gray.300"}
            borderWidth="thin"
            rounded={"md"}
            key={el.id}
          >
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
            <Box maxW={"614px"} ratio="1/1" key={el.id}>
              <Image src={el.src} alt="caption" />
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
                <Button
                  fontSize={"sm"}
                  mr="3"
                  fontWeight={"bold"}
                  color="blue.400"
                >
                  Post
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </>
      ))}
    </>
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
        <Link href="/">
          <Image
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="logoinsta"
          />
        </Link>
      </Box>
      <Box>
        <InputGroup display={["none", "none", "block"]} mx="auto" size="sm">
          <InputLeftElement>
            <Icon as={SearchIcon} w="14px" h="14px" color={"gray.300"} />
          </InputLeftElement>

          <Input placeholder="Search" />
          {/* <h1>cjscb</h1> */}
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
            src="https://avatars.githubusercontent.com/u/108014776?s=400&u=979d474245e8ae4a151e5efa5864df843cc844c3&v=4"
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
            src="https://ca.slack-edge.com/T049JC010P9-U04B0DD1S04-7786c0c5f456-72"
            w="16"
            h="16"
            cursor={"pointer"}
          />
        </Box>
        <Text fontSize={"xs"} fontWeight="bold">
          suneet
        </Text>
      </Flex>
      <Flex direction={"column"} maxW="68px" align={"center"}>
        <Box p="2px" mb={"1"} rounded="full" bg={"pink.400"}>
          <Avatar
            name="Dan Abrahmov"
            src="https://ca.slack-edge.com/T049JC010P9-U04BME9RC7J-a1f62cba3012-72"
            w="16"
            h="16"
            cursor={"pointer"}
          />
        </Box>
        <Text fontSize={"xs"} fontWeight="bold">
          hari
        </Text>
      </Flex>
      <Flex direction={"column"} maxW="68px" align={"center"}>
        <Box p="2px" mb={"1"} rounded="full" bg={"pink.400"}>
          <Avatar
            name="Dan Abrahmov"
            src="https://ca.slack-edge.com/T049JC010P9-U04AXSANKJN-39cf4adb0935-72"
            w="16"
            h="16"
            cursor={"pointer"}
          />
        </Box>
        <Text fontSize={"xs"} fontWeight="bold">
          priyanshu
        </Text>
      </Flex>
      <Flex direction={"column"} maxW="68px" align={"center"}>
        <Box p="2px" mb={"1"} rounded="full" bg={"pink.400"}>
          <Avatar
            name="Dan Abrahmov"
            src="https://ca.slack-edge.com/T049JC010P9-U04AEEP1ZDM-74d6d5fcb1f8-72"
            w="16"
            h="16"
            cursor={"pointer"}
          />
        </Box>
        <Text fontSize={"xs"} fontWeight="bold">
          vivek
        </Text>
      </Flex>
      <Flex direction={"column"} maxW="68px" align={"center"}>
        <Box p="2px" mb={"1"} rounded="full" bg={"pink.400"}>
          <Avatar
            name="Dan Abrahmov"
            src="https://avatars.githubusercontent.com/u/107476738?v=4"
            w="16"
            h="16"
            cursor={"pointer"}
          />
        </Box>
        <Text fontSize={"xs"} fontWeight="bold">
          pallavi
        </Text>
      </Flex>
      <Flex direction={"column"} maxW="68px" align={"center"}>
        <Box p="2px" mb={"1"} rounded="full" bg={"pink.400"}>
          <Avatar
            name="Dan Abrahmov"
            src="https://media.licdn.com/dms/image/D4D03AQF98Dah2-61CA/profile-displayphoto-shrink_100_100/0/1664599021420?e=1677110400&v=beta&t=2OsArNt1W0bOc4-1WNOF6JnL4-VOwKa0yi2B0lezkjs"
            w="16"
            h="16"
            cursor={"pointer"}
          />
        </Box>
        <Text fontSize={"xs"} fontWeight="bold">
          Prajwal
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
          src="https://avatars.githubusercontent.com/u/108014776?s=400&u=979d474245e8ae4a151e5efa5864df843cc844c3&v=4"
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
          <Text fontSize={"xl"} color="gray.500"></Text>
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
