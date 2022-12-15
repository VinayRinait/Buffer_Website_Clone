import React from 'react'
import { Box } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import Contentbox from '../components/content/contentbox'

const Publishing = () => {
  return (
    <>
      <Box
    width={{
      lg: "100%", // 0-48em
      md: '50%', // 48em-80em,
      xl: '25%', // 80em+
    }}
    display="flex"
    gap={20}
    border="1px solid black"
  >
        <Box border="1px solid lightgrey" fontSize={15} font-family="Roboto ,sansrif" width="20%" height={500} justifyItems="center" p={3} fontWeight={600} >
          <Box display="flex" gap='2'  borderRadius={5} padding="2"_hover={{
          background: "lightblue",
          color: "lightblue" }}
          >
          <img width={20} src="https://img.icons8.com/material-outlined/512/ftp.png" alt="content" />
          <h1 width="100%">Content</h1>
          </Box>
          <Box display="flex" gap='2' fontWeight={600} borderRadius={5} padding="2"  mt={2} _hover={{
          background: "lightblue",
          
          }}>
          <img width={20} src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/512/external-Calendar-cenima-flatart-icons-outline-flatarticons.png" alt="content" />
          <h1 width="100%">Calender</h1>
          </Box>
          <Box display="flex" gap='2'  fontWeight={600} borderRadius={5} padding="2"  mt={2} _hover={{
          background: "lightblue",
          
          }}>
          <img width={20} src="https://img.icons8.com/material-sharp/512/graph.png" alt="content" />
          <h1 width="100%">Campaigns</h1>
          </Box>
        </Box>
        {/* Second Container */}
        <Box mt={5} border="1px solid black" width="70%" >
          <Box>
                <Box>
                    <h1>Content</h1>
                </Box>
                <Box>
                    

                </Box>
          </Box>
         



          <Box mt={5} display="flex">
          <Contentbox/>
          </Box>
          
        </Box>





  </Box>


    </>
  )
}

export default Publishing