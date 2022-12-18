import React from "react";
import { Box, Button } from "@chakra-ui/react";
// import { Link } from 'react-router-dom'
import Content from "../components/content/content";
import { Calender } from "../components/Calender/Calender";
import Year from "../components/Calender/Year";
import Navbar2 from "../components/Navbar2";
const Publishing = () => {
  return (
    <>
      <Navbar2 />
      <Box
        width={{ lg: "100%", md: "75%", sm: "50%" }}
        display="flex"
        fontSize="15px"
        gap={6}
        border="1px solid black"
      >
        {/* first Container */}
        <Box
          border="1px solid lightgrey"
          fontSize={15}
          font-family="Roboto ,sansrif"
          width="20%"
          height={500}
          justifyItems="center"
          p={3}
          fontWeight={600}
        >
          <Box
            display="flex"
            gap="2"
            borderRadius={5}
            padding="2"
            _hover={{
              background: "lightblue",
              color: "lightblue",
            }}
          >
            <img
              width={20}
              src="https://img.icons8.com/material-outlined/512/ftp.png"
              alt="content"
            />
            <h1 width="100%">Content</h1>
          </Box>
          <Box
            display="flex"
            gap="2"
            fontWeight={600}
            borderRadius={5}
            padding="2"
            mt={2}
            _hover={{
              background: "lightblue",
            }}
          >
            <img
              width={20}
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/512/external-Calendar-cenima-flatart-icons-outline-flatarticons.png"
              alt="content"
            />
            <h1 width="100%">Calender</h1>
          </Box>
          <Box
            display="flex"
            gap="2"
            fontWeight={600}
            borderRadius={5}
            padding="2"
            mt={2}
            _hover={{
              background: "lightblue",
            }}
          >
            <img
              width={20}
              src="https://img.icons8.com/material-sharp/512/graph.png"
              alt="content"
            />
            <h1 width="100%">Campaigns</h1>
          </Box>
          <hr style={{ border: "1px solid lightgrey", marginTop: "10px" }}></hr>
          <Box mt={290}>
            <Button
              colorScheme="white"
              color="black"
              border="1px solid black"
              p={5}
            >
              Manage Channels
            </Button>
          </Box>
        </Box>
        {/* Second Container */}
        {/* <Content /> */}
        {/* <Box><Year /></Box> */}
        <Calender />
      </Box>
    </>
  );
};

export default Publishing;
