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

export default function Home(){
  return (
    <SimpleGrid
    fontFamily="Poppins"
   ml={100}
   mt={50}
      columns={{ base: 1, md: 2 }}
      spacing={100}
      color="white"
      _after={{
        bg: "black",
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
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, lg: 20 }}
        ml={30}
        py={24}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }}
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
      Motivate users with benefits and positive reinforcement,
      and offer notifications and progress tracking. 
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
      <Box>
        <Image
          src="assests/images/F2.png"

          fit="cover"

          w="480px"
          h={{ base: 64, md: "full" }}
       
          bg="gray.100"
          loading="lazy"
        />
      </Box>
    </SimpleGrid>
  );
};

