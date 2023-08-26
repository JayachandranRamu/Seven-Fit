import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Spacer,
  Heading,
  Input,
Stack,
Image
} from "@chakra-ui/react";
import Ham from "../assets/icons/Ham.png"
import Toggle from "react-toggle"; 
import { useNavigate } from "react-router-dom";


import F6 from "../assets/images/F6.png"
import { HamburgerIcon } from '@chakra-ui/icons'
import { RxHamburgerMenu } from "react-icons/rx";
import Login from './Login';
import Register from './Register';
export default function Navbar() {
  const bg = useColorModeValue("black", "black");
  let Navigate=useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
    <Box bg={"black"}>
      <Button m={5} color={"black"} colorScheme='black' position={"fixed"}>
   <Image mt={10} ref={btnRef} onClick={onOpen}  src={Ham} w={"45px"}/>
      </Button>
      <Box  bg="black">
      <Drawer
   
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}
       border="1px solid white"
      >
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerCloseButton color={"#097FD9"} border="1px solid #097FD9" /> */}
          <DrawerHeader bg="black"  >
    
          <Flex  gap={5} alignItems={"center"} justifyContent={"space-around"} direction={{base:'column',sm:'column',md:'row'}}
            bg="black" fontFamily={"Poppins"} >
              <Flex>
              <Image w="190px" src={F6} />
              </Flex>
             
             <Stack direction={{base:'column',sm:'column',md:'row'}}
              spacing={{base:2,sm:2,md:10}}
              mr={1}
              alignItems="center" justifyContent="space-evenly"
              color="white"
             
            >
      <Button colorScheme={"white"} color={"white"} variant='ghost'
    fontWeight="500"
                onClick={(e)=>{ onClose() ;Navigate("/")}}
                _hover={{
                  color: "#097FD9",
             }}
              >
               Home
              </Button>
              
              <Button colorScheme={bg} color={"white"} variant='ghost'
         fontWeight="500"
                onClick={(e)=>{ onClose() ;Navigate("/program")}}
                _hover={{
                  color: "#097FD9",
             }}
              >
            Workout
              </Button>
              <Button colorScheme={bg} variant='ghost' color={"white"}
                onClick={(e)=>{ onClose() ;Navigate("/pricing")}}
                fontWeight="500"
                _hover={{
                  color: "#097FD9",
             }}
              >
               Pricing
              </Button> 
              <Button colorScheme={bg} variant='ghost' color={"white"}
                onClick={(e)=>{ onClose() ; Navigate("/community")}}
               fontWeight="500"
            
                _hover={{
                  color: "#097FD9",
             }}
              >
               Community
              </Button>
            </Stack>
             
                     
       
        <HStack>
       <Login />
           
         
            <Spacer />
            <Register />
            
          </HStack>

        
        </Flex>
            
          
          </DrawerHeader>
        
          
        </DrawerContent>
      </Drawer>
      </Box>
      </Box>
    </>
  )
}

