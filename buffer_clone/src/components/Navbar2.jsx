import { Box, Menu,
    MenuButton,
    MenuList,
    MenuItem,
   Button,MenuDivider} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import React from 'react'
import Socialhub from "./SocialHub.jpg" 
import {Link } from "react-router-dom"
import styles from "./navbar.module.css"

const Navbar2 = () => {
  return (
    <>
        <Box className={styles.Navbar2} p={2} border="1px solid black"  fontSize="12px"  width="98%"  height="70px" alignItems="center" display="flex" justifyContent="space-between">
            <Box display="flex" gap={4} alignItems="center" >
                <img width="100px" height="80px" src={Socialhub} alt="socialhub" />
                <Box _hover={{ boxShadow: "inset 0 -5px 0 0 blue" ,backgroundColor:"rgb(245, 245, 245)",color:"blue"}} p={5} fontSize="18px"><a href="/">Publishing</a></Box>
                <Box _hover={{ boxShadow: "inset 0 -5px 0 0 blue" ,backgroundColor:"rgb(245, 245, 245)",color:"blue"}} p={5} fontSize="18px"><a href="/">Analytics</a></Box>
                <Box _hover={{ boxShadow: "inset 0 -5px 0 0 blue" ,backgroundColor:"rgb(245, 245, 245)",color:"blue"}} p={5} fontSize="18px"><a href="/">Engagement</a></Box>
                <Box _hover={{ boxShadow: "inset 0 -5px 0 0 blue" ,backgroundColor:"rgb(245, 245, 245)",color:"blue"}} p={5} fontSize="18px"><a href="/">Start Page</a></Box>
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

                <Button
                variant={"solid"}
                colorScheme={"teal"}
                size={"sm"}
                mr={4}
                
            >
              name  
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
              id
              </MenuButton>
              <MenuList>
                <MenuItem>
               
                  Account
                </MenuItem>
                <MenuItem>
               
                  My Preferences
                </MenuItem>
                <MenuItem>
                
                  Channels
                </MenuItem>
                <MenuItem>
                
                  Team
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                 
                  Inviter Your Team
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                 
                  <Link to={"/"}>Logout</Link>
                </MenuItem>
              </MenuList>
            </Menu>
            </Box>


        </Box>

    </>
  )
}

export default Navbar2


















































