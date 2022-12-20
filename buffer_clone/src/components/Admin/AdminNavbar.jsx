import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react";

import { Routes, Route, useNavigate } from "react-router-dom";
import socialhub from "../../images/logo.png";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/AllAdminRedux/AdminRedux/admin.actions";
const Links = [
  { title: "Channels", to: "/adminchannel" },
  { title: "User Data", to: "/adminuserpage" },
];
// { title: "Login", to: "/admin/login/*" },
// { title: "Login", to: "/login" },
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function AdminNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let { isAuth, token } = useSelector((store) => store.authManager);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  // console.log(isAuth);
  let handleClick = () => {
    if (isAuth) {
      dispatch(logout());
    } else {
      navigate("/adminchanel");
    }
  };
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"left"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <img
                src={socialhub}
                alt="socialhub"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link key={link.title} href={link.to}>
                  {link.title}
                </Link>
              ))}

              <Button onClick={handleClick}>
                {isAuth ? "Logout" : "Login"}
              </Button>
            </HStack>
            <Box>
              <Heading color={"red"} as="h6" size="xs">
                {isAuth ? `Token Id :- ${token}` : ""}
              </Heading>
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                {/* <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                /> */}
                {/* <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                ></MenuButton> */}
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link key={link.title} href={link.to}>
                  {link.title}
                </Link>
              ))}
            </Stack>
            <Stack>
              <Button onClick={handleClick}>
                {isAuth ? "Logout" : "Login"}
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

// : { children: ReactNode }
