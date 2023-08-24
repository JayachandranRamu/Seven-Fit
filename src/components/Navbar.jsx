import React from "react";

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
  Image,
  Spacer,
  Heading,

} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";



export default function Navbar(){
  const bg = useColorModeValue("black", "gray");
  const mobileNav = useDisclosure();
const Navigate=useNavigate();
  return (
    <React.Fragment>
      <chakra.header
        bg="black"
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-around" mx="auto" fontFamily="Poppins">
          <Flex>
             <Image w="190px" src="../assests/images/6.png" />
   
          </Flex>
          <HStack display="flex"  alignItems="center" justifyContent="space-evenly">
            <HStack
              spacing={10}
              mr={1}
              color="white"
              display={{ base: "none", md: "inline-flex" }}
            >
      <Button colorScheme={bg} variant='ghost'
    fontWeight="500"
                onClick={(e)=>{Navigate("/")}}
                _hover={{
                  color: "#097FD9",
             }}
              >
               Home
              </Button>
              
              <Button colorScheme={bg} variant='ghost'
         fontWeight="500"
                onClick={(e)=>{Navigate("/program")}}
                _hover={{
                  color: "#097FD9",
             }}
              >
              Program
              </Button>
              <Button colorScheme={bg} variant='ghost'
                onClick={(e)=>{Navigate("/pricing")}}
                fontWeight="500"
                _hover={{
                  color: "#097FD9",
             }}
              >
               Pricing
              </Button>
              <Button colorScheme={bg} variant='ghost'
                onClick={(e)=>{Navigate("/community")}}
               fontWeight="500"
                mr="80px"
                _hover={{
                  color: "#097FD9",
             }}
              >
               Community
              </Button>
              <Button color="white" variant='outline' colorScheme="white" >
           Login
            </Button>
            </HStack>
         
            <Spacer />
            <Button bg="#097FD9" variant='solid' colorScheme="#097FD9">
            Register
            </Button>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="white"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
               
                spacing={3}
                rounded="m"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                  color="white"
                />

                <Button  color="white" w="full" variant='ghost'>
                 Home
                </Button>
                <Button w="full"  color="white" variant="ghost">
                  Program
                </Button>
                <Button w="full"  color="white" variant="ghost">
                  Pricing
                </Button>
                <Button w="full"  color="white" variant="ghost">
                  Community
                </Button>
                <Button w="full"   color="white" variant="ghost">
                  Login
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
