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
 SlideFade
} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import F1 from "../assets/images/F1.jpg"
export default function Hero(){
  return (
    <div  style={{backgroundImage:`url(${F1})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"left 0",height:"800px"}}>
   <SlideFade direction='bottom' offsetY='50px'  in="true">

   
    <SimpleGrid 
    fontFamily="Poppins"
 
      columns={{ base: 1, md: 2 }}
      spacing={100}
      color="white"
      _after={{
        pos: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        content: '" "',
      }}
    >
      <Flex
        direction="column"
        // w="90%"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, lg: 20 }}
       m="auto"
        py={24}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
          fontWeight="400"
          color="brand.600"
          _dark={{ color: "gray.300" }}
          lineHeight="shorter"
          fontFamily="Poppins"
        >
        Helps for your <br />
        ideal body fitness
        </chakra.h1>
  
        
        

    
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="m"
          color="brand.600"
          _dark={{ color: "gray.400" }}
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
             mt={10}
              >
                Start Training
              </Button>
      </Flex>
    </SimpleGrid>
    </SlideFade>
    </div>
  );
};

