import {
    Box,
    Button,
    Grid,
    Heading,
    Image,
    Stack,
    Text,
    WrapItem,
} from "@chakra-ui/react";
import React from "react";
export const Middle = () => {
    return (
        <>
            <Box
                display={{ sm: "gird", md: "grid", lg: "flex" }}
                p={20}
                gap={10}
                justifyContent={{
                    base: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                }}
            >
                <Box width={{ sm:"auto", md: "auto", lg: 600 }} textAlign="left" mt={20}>
                    <Stack spacing={8} display={{ sm: "gird", md: "grid", lg: "flex" }} >
                        <Heading size={{ sm: "md", md: "xl", lg: "2xl" }}>
                            Grow your audience on social and beyond
                        </Heading>
                        <Text fontSize={{ sm: "lg", md: "md", lg: "2xl" }}>
                            Buffer helps you build an audience organically. We’re a
                            values-driven company that provides affordable, intuitive,
                            marketing tools for ambitious people and teams.
                        </Text>

                        <WrapItem
                            gap={{ lg: 10, sm: 5 }}
                            display={{ base: "grid", sm: "grid", md: "grid", lg: "flex" }}
                            justifyContent={{ base: "center", sm: "center", md: "center" }}
                        >
                            <Button
                                colorScheme="messenger"
                                width={{ base: "200px", sm: "200px" }}
                                fontSize={20}
                                p={6}
                            >
                                Get started now
                            </Button>

                            <Button
                                width={{ base: "200px", sm: "200px" }}
                                fontSize={20}
                                p={6}
                                colorScheme={"blue"}
                                variant="outline"
                            >
                                {/* <PlayCircleOutlinedIcon /> */}
                                <Image justifyContent={{ base: "center", sm: "center", md: "center" }}  colorScheme={"blue"} boxSize="30px" src="https://freeiconshop.com/wp-content/uploads/edd/play-circle-outline.png" marginRight="5px" ></Image>
                                Watch video
                            </Button>
                        </WrapItem>
                    </Stack>
                </Box>
                <Box>
                    <Image
                        boxSize="500px"
                        src="https://buffer.com/static/illustrations/all-channels-3.webp"
                    ></Image>
                </Box>
            </Box>

            {/* ***************************************************************** */}
            <Grid
                gridTemplateColumns={{
                    sm: "repeat(2,1fr)",
                    md: "repeat(3,1fr)",
                    lg: "repeat(6,1fr)",
                }}
                marginLeft="40px"
                marginRight="20px"
            >
                <Text
                    fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
                    as="b"
                    color="RGBA(0, 0, 0, 0.24)"
                >
                    Huckberry
                </Text>

                <Text
                    fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
                    as="abbr"
                    color="RGBA(0, 0, 0, 0.24)"
                >
                    FOOD52
                </Text>

                <Text
                    fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
                    as="b"
                    color="RGBA(0, 0, 0, 0.24)"
                    textDecoration={"underline"}
                >
                    THE SILL
                </Text>

                <Text
                    fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
                    as="samp"
                    color="RGBA(0, 0, 0, 0.24)"
                >
                    BURROW
                </Text>

                <Text
                    fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
                    as="i"
                    color="RGBA(0, 0, 0, 0.24)"
                >
                    Happy Socks
                </Text>

                <Text
                    fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
                    as="abbr"
                    color="RGBA(0, 0, 0, 0.24)"
                >
                    DressUp
                </Text>
            </Grid>

    

            <Box mt={"140px"}>
    <Box >
    <Heading textAlign="center" mb={4}>Grow your following without draining your time</Heading>
  
    </Box>
    <Box textAlign="center"  marginLeft="60px"
                marginRight="60px"  >
    <Text fontSize='xl' >
  Social media can be the fastest and cheapest way to build your following and grow your business. But it can also take up all your time. Here are four ways Buffer can help.
  </Text>
    </Box>
    <Box>
        <Image src='https://buffer.com/static/misc/buffer-loop-v2-variant.svg'></Image>
    </Box>
</Box>


<Box display={{sm:"grid",md:"grid",lg:"flex"}} justifyContent={"center"} p={5} mt={"120px"} >
        <Box>
        <Box maxW='32rem' textAlign={{sm:"center",md:"center",lg:"left"}} mt={"100px"}>
  <Heading size='md'  mb={4} color="blue">1. SHARE CLICK-WORTHY CONTENT</Heading>
  <Heading mb={4}>Get the clicks you deserve</Heading>
  <Text fontSize='2xl'>
  Buffer will tell you when and what to publish to make your content stand out.
  </Text>
  <Button size='lg' colorScheme='messenger' mt='24px'>
    Get started now
  </Button>
</Box>
        </Box>
        <Box>
            <Image boxSize={{sm:"300",md:"400",lg:"500"}} mt={{sm:"10px"}} src="https://buffer.com/static/illustrations/thumb-stop-content-2.webp"></Image>
        </Box>
    </Box>


{/* // -----------************************--------------- */}


<Box display={{sm:"grid",md:"grid",lg:"flex"}} justifyContent={"center"} p={5} mt={"120px"} gap={3}>

<Box maxW='32rem' >
    <Image src="https://buffer.com/static/illustrations/collaborate-more-efficiently@2x.webp"></Image>
</Box>

<Box>
<Box maxW='32rem' textAlign={"left"} >
<Heading size='md' mt={5}  mb={4} color="blue">2. BUILD AN ENGAGED AUDIENCE</Heading>
<Heading mb={4} mt={"5"}>Grow your following</Heading>
<Text fontSize='2xl' mt={10}>
Buffer will share your content on the right channels, with suggested hashtags to help you grow.
</Text>
  <Button size='lg' colorScheme='messenger' mt='24px'>
    Get started now
  </Button>
</Box>
</Box>
</Box>

{/* ---------------------***************************--------------------- */}

<Box display={{sm:"grid",md:"grid",lg:"flex"}} justifyContent={"center"} p={5} mt={"120px"} >
        <Box>
        <Box maxW='32rem' textAlign={{sm:"center",md:"center",lg:"left"}} mt={"100px"}>
  <Heading size='md'  mb={4} color="blue">3. SAVE TONS OF TIME</Heading>
  <Heading mb={4}>Halve your workload</Heading>
  <Text fontSize='2xl'>
  Buffer will publish everything for you to save time and it’ll showcase your work with automated reports.
  </Text>
 <Button size='lg' colorScheme='messenger' mt='24px'>
    Get started now
  </Button>
</Box>
        </Box>
        <Box maxW='32rem'>
            <Image src="https://buffer.com/static/illustrations/hero-reply@2x-2.webp"></Image>
        </Box>
    </Box>

 
    <Box display={"flex"} justifyContent={"center"} p={5} mt={"120px"}>

<Box>
<Box textAlign={"center"} >
<Heading size='md' mt={5}  mb={4} color="blue">4. COORDINATE WITH EASE</Heading>
<Heading mb={4} mt={"4"}>Collaboration has never been easier</Heading>
<Text fontSize='xl' mt={8}>
With Buffer’s permissions levels and approval flows, your team can work freely without any micro-management.
</Text>
</Box>
</Box>
</Box>


        </>
    );
};
