import { Box 
  ,Popover,
  Textarea,
  Button,
  PopoverTrigger,
   PopoverContent,
   PopoverArrow,
   PopoverBody, 
   Portal,
   PopoverCloseButton, 
   useDisclosure,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    ModalFooter
 } from '@chakra-ui/react'
import React from 'react'
// import Contentbox from './contentbox'
import Dropzone from "../content/dropzone/dropzone"
const Content = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)


  return (
    <>
         <Box width="100%" p={5} >
              <Box  width="100%" display="flex" alignItems="center" justifyContent="space-between">
                <Box fontSize={20} fontWeight={600}>
                        <h1 >Content</h1>
                </Box>
                
                <Box display="flex" ml={100} alignItems="center" gap={8} pr={12}>
                      <Box>
                              <Popover>
                                    <PopoverTrigger>
                                      <Box  display="flex" alignItems="center" gap={1.5}>
                                      <img width="15px" src="https://img.icons8.com/material-two-tone/512/comments.png" alt="feed" />
                                      <Button p={0} backgroundColor="white" _hover={{backgroundColor:"white"}} Color="black">Share Feedback</Button>

                                      </Box>
                                    </PopoverTrigger>
                                    
                                    <Portal >
                                      <PopoverContent>
                                        <PopoverArrow />
                                        <Box><PopoverCloseButton /></Box> 
                                       
                                        <PopoverBody width="100%" p={7}>
                                        <Box>
                                          <h1 style={{fontSize:"20px",fontWeight:"700",width:"100%"}}>How can we improve this feature?</h1>
                                          <p style={{paddingTop:"10px",fontSize:"12px"}}>Thanks for checking out our new feature. We would love to know what you think of it!</p>
                                        </Box>
                                        <Box mt={7} mb={5}>
                                          <Textarea placeholder="Add your Feedback Here..."></Textarea>
                                        </Box>
                                          <Button p={5} colorScheme="blue">Submit Feedback</Button>
                                        </PopoverBody>
                                      </PopoverContent>
                                    </Portal>
                                </Popover>

                      </Box>
                      <Box>
                            <Button colorScheme="blue" onClick={onOpen}>
                              Create idea
                            </Button>
                            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                              <ModalOverlay />
                              
                              <ModalContent width="800px" >
                              <ModalCloseButton />
                                <ModalHeader mt={10}>
                                    <Textarea placeholder="The journey of a thousand followers begins with a single idea" height="150px" border="none"></Textarea>
                                  </ModalHeader>
                                <Box >
                                <ModalBody >
                                  <Box mt={25} width="100px"><Dropzone/></Box>
                                </ModalBody>
                                </Box>
                                <ModalFooter>
                                  <Button colorScheme='blue' >
                                    Create Post
                                  </Button>
                                </ModalFooter>
                              </ModalContent>
                            </Modal>
                      </Box>
                </Box>
                            
            
              </Box>

          </Box>

          {/* <Box mt={5} display="flex">
          <Contentbox/>
          </Box> */}

         
    </>
  )
}

export default Content