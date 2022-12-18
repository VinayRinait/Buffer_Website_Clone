import { Box, Button, Flex, Grid, Heading, Image, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const Year = () => {

  const obj = [
    {
      id: 1,
      Year: "10 years",
      small: "in business"
    },
    {
      id: 2,
      Year: "140,000",
      small: "users"
    },
    {
      id: 3,
      Year: "100k+",
      small: "monthly blog readers"
    },
    {
      id: 4,
      Year: "1.2m+",
      small: "social followers"
    }
  ]


  return (
    <>
      <Grid gridTemplateColumns={{ sm: "repeat(1,1fr)", md: "repeat(1,1fr)", lg: "repeat(4,1fr)" }} marginTop={20} textAlign="center" mb={20}>
        {
          obj.map((el) => (
            <Box key={el.id}>
              <Heading as='h2' size='xl' color={"blue"} key={el.id}>
                {el.Year}
              </Heading>
              <Text fontSize='xl'>{el.small}</Text>
            </Box>
          ))
        }


      </Grid>


      <Box display={{ sm: "grid", md: "grid", lg: "flex" }} justifyContent={"center"} p={5} mt={"140px"} gap={20}>

        <Box maxW='32rem' >
          <Image src="https://static.buffer.com/cdn-cgi/image/w=640,quality=90,format=auto/marketing/static/team/buffer-team-map-2022@2x.jpg"></Image>
        </Box>

        <Box>
          <Box maxW='34rem' textAlign={"left"} >

            <Heading mb={4} mt={"5"}>And we are here to help</Heading>
            <Text fontSize='2xl' mt={10}>
              Our customer advocates are standing by 24/7 to support you via email and social media. We also have a comprehensive, regularly updated help center for those who prefer to find help themselves.
            </Text>

            <Button size='lg' mt='10' colorScheme='messenger' variant='outline'>
              Visit our help center
            </Button>

          </Box>
        </Box>
      </Box>
      <Grid >
        <Box marginTop={"100px"}>
          <Heading as='h1' size='md' textAlign="center" mb={10}>
            An official marketing partner of the industry leaders
          </Heading>
        </Box>
        <Box display={"flex"} justifyContent={"center"} marginTop={"20px"} >
          <Box display={{ sm: "grid", md: "grid", lg: "flex" }} justifyContent={"space-around"} width={"600px"} gap={10}>
            <Image boxSize={"60px"} width={"150px"} src='https://buffer.com/static/ui/meta-business-partner@2x-2.png'></Image>
            <Image boxSize={"60px"} width={"150px"} src='https://buffer.com/static/ui/pinterest-marketing-partner@2x-2.png'></Image>
            <Image boxSize={"60px"} width={"150px"} src='https://buffer.com/static/ui/linkedin-marketing-partner@2x-2.png'></Image>


          </Box>

        </Box>

      </Grid>


      <SimpleGrid
        backgroundColor={"blue"}
        height={{ lg: "400px", md: "300px", sm: "200px", base: "none" }}
        // border={"1px solid red"}
        mt={{ lg: "80px", md: "40px", sm: "20px" }}
        display="flex"
        justifyContent={"space-between"}
        width={{ lg: "auto", md: "auto", sm: "auto", base: "none" }}
      >
        <Box display={{ lg: "grid", md: "none", sm: "none", base: "none" }}>
          <Image
            boxSize={10}
            ml={"40"}
            mt="10"
            src="https://buffer.com/static/background/triangle-green.svg"
          ></Image>
          <Image
            boxSize={40}
            mt="13"
            src="https://buffer.com/static/background/planet@2x.png"
          ></Image>
          <Image
            boxSize={20}
            mt="20"
            src="https://buffer.com/static/background/circle-pink.svg"
          ></Image>
        </Box>

        <Box width={{ lg: "400px", md: "300px", sm: "250px", base: "none" }} mt={{ lg: "100px", md: "50px", sm: "30px", base: "none" }}>

          <Heading as='h3' color={"white"} textAlign="initial" size={{ lg: 'lg', sm: 'sm', md: 'md' }}>
            140,000+ people like you use Buffer to build their brand on social media every month
          </Heading>
          <Button width={{ lg: "300px", md: "200px", sm: "190px", base: "sm" }} mt='10' colorScheme='pink' p={10} alignContent="center">
            Get started now
          </Button>



        </Box>


        <Box display={{ lg: "grid", md: "none", sm: "none", base: "none" }}>
          <Image
            boxSize={10}
            mr={"40"}
            mt="10"
            src="https://buffer.com/static/background/circle-brush@2x.png"
          ></Image>
          <Image
            boxSize={40}
            mt="13"
            ml={"30"}
            src="https://buffer.com/static/background/lines-orange.svg"
          ></Image>
          <Image
            boxSize={10}
            mt="20"
            src="https://buffer.com/static/background/triangle-yellow.svg"
          ></Image>

        </Box>

      </SimpleGrid>

    </>
  )
}
