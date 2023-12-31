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
Text,
Image,
useToast
} from "@chakra-ui/react";
import Ham from "../assets/icons/Ham.png"
import Toggle from "react-toggle"; 
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../route/AuthContext';
import F6 from "../assets/images/F6.png"
import { HamburgerIcon } from '@chakra-ui/icons'
import { RxHamburgerMenu } from "react-icons/rx";


export default function Navbar() {
  const bg = useColorModeValue("black", "black");
  let Navigate=useNavigate()
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { login,status,isData,logout,isActive} = useContext(AuthContext);
  return (
    <>
    <Box bg={"black"}>
      <Button m={5} color={"black"} colorScheme='black' >
   <Image mt={10} ref={btnRef}
    onClick={onOpen} 
    src={Ham} w={"45px"} />
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
                onClick={(e)=>{ 
                  onClose() ;
                  Navigate("/")}}
                _hover={{
                  color: "#097FD9",
             }}
              >
               Home
              </Button>
              
              <Button colorScheme={bg} color={"white"} variant='ghost'
         fontWeight="500"
                onClick={(e)=>{
                   onClose() ;Navigate("/workout")}}
                _hover={{
                  color: "#097FD9",
             }}
              >
            Workout
              </Button>
              {!isActive?
              <Button colorScheme={bg} variant='ghost' color={"white"}
                onClick={(e)=>{ onClose() ;Navigate("/pricing")}}
                fontWeight="500"
                _hover={{
                  color: "#097FD9",
             }}
              >
               Pricing
              </Button> :""}
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
          {status?<>
            <Button color="white" variant='outline' colorScheme="white"   onClick={() => { onClose() ;
         Navigate("/booked-workout")
        }}>Booked Workouts</Button>
           
         
            <Spacer />
            <Button bg="#097FD9" variant='solid' colorScheme="#097FD9"  onClick={() => { onClose() ;
             logout()
             toast({
              title: 'Logout Succesfully',
              description: "You are logged out from our website",
              status: 'success',
              duration: 3000,
              isClosable: true,
            })
        }}>Logout</Button>
          </>:<>
        <Button color="white" variant='outline' colorScheme="white"   onClick={() => { onClose() ;
         Navigate("/login")
        }}>Login</Button>
           
         
            <Spacer />
            <Button bg="#097FD9" variant='solid' colorScheme="#097FD9"  onClick={() => { onClose() ;
             Navigate("/register")
        }}>Register</Button></>
            }
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

