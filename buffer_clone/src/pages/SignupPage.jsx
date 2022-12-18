//
import React, { useState } from "react";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    Stack,
    Tag,
    Text,
} from "@chakra-ui/react";
// import Logo from "../components/images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";


export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = React.useState(false);



    const getData = {
        email: email,
        password: password,
    };
    const handleSignup = async () => {
        return axios({
            method: "GET",

            url: `https://mp0i41.sse.codesandbox.io/posts`,
            data: getData
        }).then((res) => {
            localStorage.setItem("userName", JSON.stringify(getData))
            checkcredentials(res.data)

        })

    }

    const checkcredentials = (data) => {
        let filtered = data.filter((el) => {
            return el.email === email && el.password === password
        })
        return finalcheck(filtered)
    }

    const finalcheck = (filtered) => {
        if (filtered.length > 0) {
            alert("signup successfull")
            setStatus(true)
        } else {
            alert("signup failed")
        }
    }
    if (status === true) {
        return <Navigate to="/login" />
    }




    return (
        <>
            <Box display={{ lg: "flex" }}>
                <Box width={"40%"} margin={"auto"}>
                    <Flex flex={{ base: 1 }} justify={{ md: "start" }}>
                        {/* <Image boxSize="150px" src={Logo} alt="logo" /> */}

                        <Heading as="h1" size="2xl">
                            {/* <Link to={"/"}>Post</Link> */}
                        </Heading>
                        {/* <Image boxSize="50px" src={Logo} alt="logo" /> */}
                        {/* <Heading size="2xl">dda</Heading> */}
                    </Flex>
                    <FormControl margin={"auto"} width={{ sm: "100%", md: "100%", lg: "70%" }}>
                        <Stack>
                            <Heading textAlign={"left"} size={"2xl"} marginBottom={"50px"} >
                                Signup
                            </Heading>
                            <FormLabel>Email Address</FormLabel>
                            <Input
                                type="email"
                                size="lg"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <FormLabel>Create a Password</FormLabel>
                            <Input
                                type="password"
                                size="lg"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />



                            <Input onClick={handleSignup} m={5} bg="#2c4bff" color={"white"} size="lg"
                                type="submit" value="Sign UP" />



                            <Box display={{ sm: "grid", md: "grid", lg: "flex" }}>
                                <Tag bg="transparent" m={5}>
                                    I agree to Buffer's Terms of Service
                                </Tag>
                                <Tag bg="transparent" m={5}>
                                    Already have an account?
                                </Tag>
                            </Box>
                            {/* <Stack spacing={30}>
                <Tag bg="transparent" m={5} mt={10}>
                  We no longer support social sign on. Please click here to set
                  your password and access your account.
                </Tag>
                <Box textAlign={"center"}>
                  <Tag bg="transparent" m={5}>
                    Terms of Service •Privacy Policy •Security
                  </Tag>
                </Box>
              </Stack> */}
                        </Stack>
                    </FormControl>
                </Box>
                <Box backgroundColor={"#6B81FF"} height={"700px"} width={"40%"} display={{ base: "none", sm: "none", md: "none", lg: "block" }}>
                    <Box textAlign={"left"} width={"450px"} mt={"80px"} ml={"80px"}>
                        <Stack>
                            <Button
                                backgroundColor={"white"}
                                variant={"outline"}
                                width={"200px"}
                                color={"brown.400"}
                                size="sm"
                                borderRadius={"25px"}
                            >
                                New from Buffer
                            </Button>
                            <Heading as="h2" size="xl">
                            “With Buffer I can build social content out as far as I want into the future but also tailor campaigns if we see certain trends within the industry.”
                            </Heading>
                            {/* <Text fontSize="xl">
                A Start Page is a beautiful, flexible, mobile-friendly landing
                page that you can build in minutes and update in seconds
              </Text> */}
                        </Stack>
                    </Box>
          <Image
            ml={"200px"}
            height={300}
            src="https://static.buffer.com/login/public/img/signup-avatar-publish.png"
          ></Image>
                </Box>
            </Box>
        </>
    );
};
