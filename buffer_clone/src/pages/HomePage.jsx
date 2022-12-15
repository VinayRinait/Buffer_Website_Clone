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
  import React, { useContext } from "react";
//   import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
  import { Link } from 'react-router-dom'
import { Sliding } from "./Sliding";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';
import FiberNewIcon from '@mui/icons-material/FiberNew';
//   import { AuthContext } from '../Context/AuthContext'
// import { Andbox } from '../component/Andbox'
  export const HomePage = () => {
    // const {loginUser,authState}=useContext(AuthContext)
    
    const obj=[
      {
          id:1,
          Year:"10 years",
          small:"in business"
      },
      {
          id:2,
          Year:"140,000",
          small:"users"
      },
      {
          id:3,
          Year:"100k+",
          small:"monthly blog readers"
      },
      {
          id:4,
          Year:"1.2m+",
          small:"social followers"
      }
  ]
  
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
          <Box width={{ md: "auto", lg: 600 }} textAlign="left" mt={20}>
            <Stack spacing={8}>
              <Heading size={{ sm: "2xl", md: "2xl", lg: "3xl" }}>
                Grow your audience on social and beyond
              </Heading>
              <Text fontSize="2xl">
                Buffer helps you build an audience organically. We’re a
                values-driven company that provides affordable, intuitive,
                marketing tools for ambitious people and teams.
              </Text>
  
              <WrapItem
                gap={{ lg: 10, sm: 5 }}
                display={{ base: "grid", sm: "grid", md: "grid", lg: "flex" }}
                justifyContent={{ base: "center", sm: "center", md: "center" }}
              >
                {/* {authState.isAuth ? (
                  <Link to={"/create"}>
                    {" "}
                    <Button
                      colorScheme="messenger"
                      width={{ base: "200px", sm: "200px" }}
                      fontSize={20}
                      p={6}
                    >
                      Get started now
                    </Button>
                  </Link>
                ) : (
                  <Link to={"/login"}>
                    <Button colorScheme='messenger' width={{base:"200px",sm:"200px"}} fontSize={20} p={6}>Get started now</Button>
                  </Link>
                )}
   */}
                <Button
                  width={{ base: "200px", sm: "200px" }}
                  fontSize={20}
                  p={6}
                  colorScheme={"blue"}
                  variant="outline"
                >
                  {/* <PlayCircleOutlinedIcon /> */}
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
  
        {/* <Box display={{sm:"grid",md:"flex"}} justifyContent={"space-around"} p={20}> */}
        <Grid
          gridTemplateColumns={{
            sm: "repeat(3,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(6,1fr)",
          }}
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
  
        {/* </Box> */}
        <Box mt={"140px"}>
    <Box >
    <Heading mb={4}>Grow your following without draining your time</Heading>
  
    </Box>
    <Box maxW={{lg:'32rem'}} ml={{lg:500}}>
    <Text fontSize='2xl' >
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

  {/* {authState.isAuth?(<Link to={"/create"}><Button size='lg' colorScheme='messenger' mt='24px'>
    Get started now
  </Button></Link>):<Link to={"/login"}><Button size='lg' colorScheme='messenger' mt='24px'>
    Get started now
  </Button></Link>} */}
  
</Box>
        </Box>
        <Box>
            <Image boxSize={500} src="https://buffer.com/static/illustrations/thumb-stop-content-2.webp"></Image>
        </Box>
    </Box>


{/* // -----------************************--------------- */}


<Box display={"flex"} justifyContent={"center"} p={5} mt={"120px"} gap={3}>

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
{/* {authState.isAuth?(<Link to={"/create"}><Button size='lg' colorScheme='messenger' mt='24px'>
    Get started now
  </Button></Link>):<Link to={"/login"}><Button size='lg' colorScheme='messenger' mt='24px'>
    Get started now
  </Button></Link>} */}
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
  {/* {authState.isAuth?(<Link to={"/create"}><Button size='lg' colorScheme='messenger' mt='24px'>
    Get started now
  </Button>
  </Link>):<Link to={"/login"}><Button size='lg' colorScheme='messenger' mt='24px'>
    Get started now
  </Button></Link>} */}
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
<Heading mb={4} mt={"5"}>Collaboration has never been easier</Heading>
<Text fontSize='2xl' mt={10}>
With Buffer’s permissions levels and approval flows, your team can work freely without any micro-management.
</Text>
</Box>
</Box>
</Box>
<Sliding/>


<Grid gridTemplateColumns={{sm:"repeat(1,1fr)",md:"repeat(1,1fr)",lg:"repeat(4,1fr)"}} marginTop={20}>
{
    obj.map((el)=>(
<Box>
<Heading as='h2' size='2xl' color={"blue"}>
{el.Year}
  </Heading>
  <Text fontSize='xl'>{el.small}</Text>
</Box>
    ))
}


</Grid>

{/* <Andbox/> */}
<Box display={"flex"} justifyContent={"center"} p={5} mt={"140px"} gap={20}>

<Box maxW='32rem' >
    <Image src="https://static.buffer.com/cdn-cgi/image/w=640,quality=90,format=auto/marketing/static/team/buffer-team-map-2022@2x.jpg"></Image>
</Box>

<Box>
<Box maxW='34rem' textAlign={"left"} >

<Heading mb={4} mt={"5"}>And we are here to help</Heading>
<Text fontSize='2xl' mt={10}>
Our customer advocates are standing by 24/7 to support you via email and social media. We also have a comprehensive, regularly updated help center for those who prefer to find help themselves.
</Text>
{/* {authState.isAuth ? (
                <Link to={"/create"}>
                  {" "}
                  <Button size='lg' mt='10' colorScheme='messenger' variant='outline'>
Visit our help center
</Button>
                </Link>
              ) : (
                <Link to={"/login"}>
                <Button size='lg' mt='10' colorScheme='messenger' variant='outline'>
Visit our help center
</Button>
                </Link>
              )} */}



</Box>
</Box>
</Box>
    
<Grid>
    <Box marginTop={"180px"}>
    <Heading as='h1' size='md'>
    An official marketing partner of the industry leaders
  </Heading>
    </Box>
        <Box display={"flex"} justifyContent={"center"} marginTop={"25px"}>
    <Box display={{sm:"grid",md:"grid",lg:"flex"}} justifyContent={"space-around"} width={"600px"} gap={10}>
        <Image boxSize={"60px"} width={"150px"} src='https://buffer.com/static/ui/meta-business-partner@2x-2.png'></Image>
        <Image boxSize={"60px"} width={"150px"} src='https://buffer.com/static/ui/pinterest-marketing-partner@2x-2.png'></Image>
        <Image boxSize={"60px"} width={"150px"} src='https://buffer.com/static/ui/linkedin-marketing-partner@2x-2.png'></Image>


        </Box>
      
    </Box>

    </Grid>



    <Box
        backgroundColor={"blue"}
        height={"550px"}
        border={"1px solid red"}
        mt={"100px"}
        display={"flex"}
        justifyContent={"space-around"}
        
      >
        <Box display={{lg:"grid",md:"none",sm:"none",base:"none"}}>
          <Image
            boxSize={10}
            ml={"40"}
            mt="10"
            src="https://buffer.com/static/background/triangle-green.svg"
          ></Image>
          <Image
            boxSize={40}
            mt="20"
            src="https://buffer.com/static/background/planet@2x.png"
          ></Image>
          <Image
            boxSize={40}
            mt="20"
            src="https://buffer.com/static/background/circle-pink.svg"
          ></Image>
        </Box>

<Box width={"500px"} mt={"100px"}>

<Heading as='h4' size='lg' color={"white"}>
140,000+ people like you use Buffer to build their brand on social media every month
  </Heading>

  {/* {authState.isAuth ? (
                <Link to={"/create"}>
                  {" "}
                  <Button size='lg' mt='10' colorScheme='orange' p={10}>
Get started now
</Button>
                </Link>
              ) : (
                <Link to={"/login"}>
                  <Button size='lg' mt='10' colorScheme='orange' p={10}>
Get started now
</Button>
                </Link>
              )} */}




  

</Box>


<Box display={{lg:"grid",md:"none",sm:"none",base:"none"}}>
<Image
            boxSize={10}
            mr={"40"}
            mt="10"
            src="https://buffer.com/static/background/circle-brush@2x.png"
          ></Image>
          <Image
            boxSize={40}
            mt="20"
            ml={"30"}
            src="https://buffer.com/static/background/lines-orange.svg"
          ></Image>
          <Image
            boxSize={10}
            mt="20"
            src="https://buffer.com/static/background/triangle-yellow.svg"
          ></Image>

</Box>

      </Box>


      {/* --------footer-------------- */}
      <Box display={{base:"grid",sm:"grid",md:"grid",lg:"flex"}} justifyContent={{sm:"center",md:"center",lg:"space-around"}} margin={"auto"} backgroundColor={"white"} height={"500px"} p={10} mt={20}>
<Box >
<Grid>
    <Box>
    <Heading as='h2' size='3xl' noOfLines={1}>
    Post Adda
  </Heading>

    </Box>
<Box  display={"flex"} justifyContent={{sm:"center",md:"center",lg:"left"}} gap={4} mt={{sm:10,md:10,lg:40}} >
    <InstagramIcon/>
    <FacebookIcon/>
<TwitterIcon/>
<PinterestIcon/>
<Box display={"flex"} gap={4}>
<Image
                boxSize="25px"
                src="data:image/png;base64,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"
                alt="tiktok"
                />

<Image
                boxSize="20px"
                src="data:image/png;base64,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"
                alt="Dan Abramov"
                />

</Box>


</Box>

<Box alignItems={"left"} mt={10}>
<Heading as='h5' size='sm'>
Download
  </Heading>
<Box display={{lg:"flex" ,md:"grid" ,sm:"grid",base:"grid"}} gap={5}>
<Button leftIcon={<AppleIcon/>} colorScheme="blue" variant='outline' borderRadius={"25PX"} marginRight={3} mt={2}>
    App Store
  </Button>

  <Button leftIcon={<ShopIcon/>} colorScheme="blue" variant='outline'  borderRadius={"25PX"} mt={2}>
    Google Play
  </Button>
</Box>
 

  <Text mt={5} fontSize={"15px"}>Copyright ©2022 Buffer|Privacy|Terms|Security</Text>


</Box>

</Grid>

</Box>



{/* -----------------************************--------------------------------- */}

<Box textAlign={{sm:"center",md:"center",lg:"left"}} mt={5}>

  <Stack spacing={4}>
  <Heading as='h3' size='lg'>
Tools
  </Heading>
  <Text fontSize={"20px"}>Publishing</Text>
  <Text fontSize={"20px"}>Analytics</Text>
  <Text fontSize={"20px"}>Engagement</Text>
  <Text fontSize={"20px"}>
      <FiberNewIcon/>
Start Page</Text>
  <Text fontSize={"20px"}>Extras</Text>
  </Stack>
  
</Box>

<Box textAlign={{sm:"center",md:"center",lg:"left"}} mt={5}>
    <Stack spacing={4}>

    <Heading as='h3' size='lg'>
Resources
  </Heading>
  <Text fontSize={"20px"}>Blog</Text>
  <Text fontSize={"20px"}>Content Library</Text>
  <Text fontSize={"20px"}>Browser Extension</Text>
  <Text fontSize={"20px"}>Free Image Editor</Text>
    </Stack>

</Box>

<Box textAlign={{sm:"center",md:"center",lg:"left"}} mt={5}>
    <Stack spacing={4}>
    <Heading as='h3' size='lg'>
Support
  </Heading>
  <Text fontSize={"20px"}>Help Center</Text>
  <Text fontSize={"20px"}>Status</Text>
  <Text fontSize={"20px"}>Changelog</Text>
  <Text fontSize={"20px"}>Product Roadmap</Text>

    </Stack>

</Box>

<Box textAlign={{sm:"center",md:"center",lg:"left"}} mt={5}>
    <Stack spacing={4}>
    <Heading as='h3' size='lg'>
Company
  </Heading>
  <Text fontSize={"20px"}>About</Text>
  <Text fontSize={"20px"}>Transparency</Text>
  <Text fontSize={"20px"}>Careers</Text>
  <Text fontSize={"20px"}>Accessibility</Text>
  <Text fontSize={"20px"}>Press</Text>
  <Text fontSize={"20px"}>Sitemap</Text>

    </Stack>

</Box>




    </Box>
      </>
    );
  };
  