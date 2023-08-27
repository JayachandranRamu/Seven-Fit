import React from "react";
import {
  chakra,
  Box,
  Flex,
  Badge,
  Input,
  VisuallyHidden,
  SimpleGrid,
  Button,
  InputGroup,
  InputRightElement,
  Image,

} from "@chakra-ui/react";
import { Fade, Slide } from "react-awesome-reveal";
import { useContext } from "react";
import { AuthContext } from "../route/AuthContext";
import RF1 from "../assets/images/F3.png"
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'


export default function Hero(){
  let Navigate=useNavigate()
  const { status } = useContext(AuthContext);
  const toast = useToast()
  function start(){
    toast({
      title: 'Kindly Login To Our Website.',
      status: 'info',
      duration: 2000,
      isClosable: true,
    })
    Navigate("/login") 
  }
  return (
    <Box bg={"Black"} >
    
    <SimpleGrid 
    p={{ base: "0 50px", md: "0 140px" }}
    placeItems={"center"} 
    fontFamily="Poppins"
      columns={{ base: 1, md: 2 }}
      color="white"
    >
      <Slide direction="up" triggerOnce>
      <Flex
      p={"50px 0px"}
      ml={10}
      mt={{base:0,md:"-100px"}}
        direction="column"
        alignItems="start"
      
      >
        <chakra.h1
          mb={4}
          fontSize={{ base: "3xl", md: "4xl", lg: "64px" }}
          fontWeight="500"
          color="brand.600"
          lineHeight="shorter"
          fontFamily="urbanist"
        >
        Helps for your <br />
        ideal body fitness
        </chakra.h1>
  
        
        

    
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="18"
          color="brand.600"
          letterSpacing="wider"
        >
      Motivate users with benefits and positive reinforcement, and offer notifications and progress tracking. 
        </chakra.p>
        <Button
                color="white"
                bg="#097FD9"
                colorScheme="brand"
                size="lg"
                type="submit"
       onClick={()=>{
status?Navigate("/workout"):start()
       }}
              >
                Start Training
              </Button>
      </Flex>
      </Slide>
      <Slide direction="right" triggerOnce>

    
      <Box>
        <Image src={RF1} w="500px"/>
      </Box>
      </Slide>
    </SimpleGrid>
    
    </Box>
  );
};

