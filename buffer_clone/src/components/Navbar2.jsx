import { Box, Menu,
    MenuButton,
    MenuList,
    MenuItem,
   Button} from '@chakra-ui/react'
   
import {ChevronDownIcon } from '@chakra-ui/icons'
import React from 'react'
import Socialhub from "./SocialHub.jpg"
import {Link } from "react-router-dom"
const Navbar2 = () => {
  return (
    <>
        <Box p={7} border="1px solid black"  fontSize={{ lg:'15px', md:'12px', sm:'12px'}}  width="98%"  height="70px" alignItems="center" display="flex" justifyContent="space-between">
            <Box display="flex" gap={9} alignItems="center" >
                <img width="100px" height="80px" src={Socialhub} alt="socialhub" />
                <Box fontSize="18px"><a href="/">Publishing</a></Box>
                <Box fontSize="18px"><a href="/">Analytics</a></Box>
                <Box fontSize="18px"><a href="/">engagement</a></Box>
                <Box fontSize="18px"><a href="/">Start Page</a></Box>
            </Box>
            <Box display="flex" alignItems="center">
                <Box>
                    <Menu>
                        <MenuButton p={6} _hover={{backgroundColor:"lightgrey"}} colorScheme="white" color="black" as={Button} rightIcon={<ChevronDownIcon left={3}/>}>
                            Apps
                        </MenuButton>
                        <MenuList>
                            <MenuItem>SocialHub for ios</MenuItem>
                            <MenuItem>SocialHub for Android</MenuItem>
                            <MenuItem>Remix by SocialHub</MenuItem>
                            <MenuItem>Integration</MenuItem> 
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Menu>
                        <MenuButton p={6} _hover={{backgroundColor:"lightgrey"}} colorScheme="white" color="black" as={Button} rightIcon={<ChevronDownIcon left={3}/>}>
                            Help
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Visit Help Center</MenuItem>
                            <MenuItem>Quick Help</MenuItem>
                            <MenuItem>Status</MenuItem>
                            <MenuItem>Pricing & Plans</MenuItem> 
                            <MenuItem>Wishlist</MenuItem> 
                            <MenuItem>Changelog</MenuItem> 
                        </MenuList>
                    </Menu>
                </Box>
{/* 
                Profile Name */}

                <Box>Name</Box>
                <Box>Import</Box>
            </Box>


        </Box>


    </>
  )
}

export default Navbar2