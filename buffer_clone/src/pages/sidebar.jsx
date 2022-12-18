import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { HiTrendingUp } from "react-icons/hi";
import { MdContentPaste } from "react-icons/md"
import { TbList } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="space-between"
        w="16%"
        h="90vh"
        borderRight="1px solid #c7c7c7"
        fontSize="18px"
      >
        
        <Box mt="15px" w="100%">
            <Box mt="10px"> 
                <NavLink to="#">
                    <Flex
                    w="95%"
                    borderRadius="4px"
                    pl="5px"
                    
                    alignItems="center"
                    gap="5px"
                    m="auto"
                   
                    color="Black"
                    h="33px"
                    _hover={{ cursor: "pointer",backgroundColor: "Blue" ,color:"white", }}
                    >
                    <MdContentPaste />
                    <Text fontSize="sm" fontWeight="semibold">
                        Content
                    </Text>
                    </Flex>
                    </NavLink>
            </Box>
            <Box mt="10px">
          <NavLink to="#">
            <Flex
              w="95%"
              borderRadius="4px"
              pl="5px"
            
              alignItems="center"
              gap="5px"
              m="auto"
              
              color="Black"
              h="33px"
              _hover={{ cursor: "pointer" ,backgroundColor: "Blue" ,color:"white",}}
            >
              <AiTwotoneCalendar />
              <Text fontSize="sm" fontWeight="semibold">
                Calendar
              </Text>
            </Flex>
          </NavLink>
          </Box>
          <Box mt="10px">
            <NavLink to="#">
              <Flex
                w="95%"
                borderRadius="4px"
                pl="5px"
                alignItems="center"
                gap="5px"
                m="auto"
                h="33px"
                color="Black"
                _hover={{
                  cursor: "pointer",
                  backgroundColor: "Blue" , 
                  color:"white"
                }}
              >
                <HiTrendingUp color="#c7c7c7" />
                <Text fontSize="sm" fontWeight="semibold">
                  Campaigns
                </Text>
              </Flex>
            </NavLink>
          </Box>
          <Box mt="10px">
            <NavLink to="#">
              <Flex
                w="95%"
                borderRadius="4px"
                pl="5px"
                alignItems="center"
                gap="5px"
                m="auto"
                h="33px"
                color="Black"
                _hover={{
                  cursor: "pointer",
                  backgroundColor: "Blue" , color:"white"
                }}
              >
                <TbList color="#c7c7c7" />
                <Text fontSize="sm" fontWeight="semibold">
                  Queues
                </Text>
              </Flex>
            </NavLink>
          </Box>
        </Box>
        <Box mb="10px">
          <NavLink to="/channels">
            <Flex
              justifyContent="center"
              alignItems="center"
              w="95%"
              border="1px solid #c7c7c7"
              borderRadius="4px"
              pl="5px"
              gap="5px"
              m="auto"
              h="40px"
              _hover={{
                cursor: "pointer",
                border: "1px solid grey",
              }}
            >
           <Text color="grey" fontSize="sm" fontWeight="semibold"> 
                Manage Channels
              </Text>
            </Flex>
          </NavLink>
        </Box>
      </Flex>
    </>
  );
};

export default SideBar;