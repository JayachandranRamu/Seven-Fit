'use client'

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import { Fade ,Slide} from 'react-awesome-reveal'


function PriceWrapper(props) {
  const { children } = props

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
   borderColor={"black"}
      borderRadius={'xl'}>
      {children}
      
    </Box>
  )
}

export default function Pricing() {
  return (
    <Box   bgColor={"black"} color={"white"} fontFamily={"Poppins"}>
 <Slide direction="down" triggerOnce>
      <Heading fontFamily="urbanist" textAlign={"center"} pb={"60px"} mt={0} pt={0}  fontSize={"56"}>Our List Packages</Heading>
      </Slide>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
   
        spacing={{ base: 4, lg: 10 }}
        >
          <Fade cascade damping={0.65} triggerOnce>
            <Box>

            </Box>
        <PriceWrapper bgColor={'#0D0D0D'}>
          <Box py={4} px={12} bgColor={'#0D0D0D'} borderTopLeftRadius={`xl`} borderTopRightRadius={`xl`}>
            <Text fontWeight="500" textAlign={"left"} fontFamily="Poppins" fontSize="2xl">
              Basic Package
            </Text>
         
              <Text textAlign={"left"} fontSize={56} fontFamily="urbanist" fontWeight="500">
                $79 
              </Text>
        
              
            
            <Text fontSize="l" mt={-3} textAlign={"left"} color="#878787">
                Per Month
              </Text>
          </Box>
          <VStack
            bg={useColorModeValue('#0D0D0D', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="#097FD9" />
                Unlimited Gym Access
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="#097FD9" />
                2x Fitness Coonsultant
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="#097FD9" />
               Nutrition Tracking
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="#097FD9" />
               1x Free Suplement
              </ListItem>  <ListItem>
                <ListIcon as={FaCheckCircle} color="#097FD9" />
               3 Days Per Week
              </ListItem>  <ListItem>
                <ListIcon as={FaCheckCircle} color="#097FD9" />
              Personal Trainer
              </ListItem>
              
            </List>
            <Box w="80%" pt={7}>
              <Button w="full"  bg={"#097FD9"} colorScheme='blue' color={"color"} variant={"solid"} fontSize={16} fontWeight={500} >
               Register Now
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
             
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('white', 'red.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                borderRadius={5}
                >
               BEST OFFER
              </Text>
            </Box>
            <Box py={4} px={12}  bgColor={'#097FD0'} borderTopLeftRadius={`xl`} borderTopRightRadius={`xl`}>
            <Text fontWeight="500" textAlign={"left"} fontFamily="Poppins" fontSize="2xl" mt={5}>
              Mid Package
            </Text>
              <Text textAlign={"left"} fontSize={56} fontFamily="urbanist" fontWeight="500">
                $55
              </Text>
            <Text fontSize="l" mt={-3} textAlign={"left"} >
                Per Month
              </Text>
           
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}  bgColor={'#097FD0'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="white" />
                Unlimited Gym Access
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="white" />
                  4x Fitness Consultant
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="white" />
                  Nutrition Tracking
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="white" />
                 3x Free Suplement
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="white" />
                5 Days Per Week
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="white" />
                 Personal Trainer
                </ListItem>
                
              </List>
              <Box w="80%" pt={10} pb={5} >
                <Button w="full" colorScheme="#0D0D0D" bg={"#0D0D0D"} fontSize={16} fontWeight={400}>
                  Register Now
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper bgColor={'#0D0D0D'}>
          <Box py={4} px={12} bgColor={'#0D0D0D'} borderTopLeftRadius={`xl`} borderTopRightRadius={`xl`}>
            <Text fontWeight="500" textAlign={"left"} fontFamily="Poppins" fontSize="2xl">
             Pro Package
            </Text>
         
              <Text textAlign={"left"} fontSize={56} fontFamily="urbanist" fontWeight="500">
                $75 
              </Text>
        
              
            
            <Text fontSize="l" mt={-3} textAlign={"left"} color="#878787">
                Per Month
              </Text>
          </Box>
          <VStack
            bg={useColorModeValue('#0D0D0D', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="#097FD9" />
                Unlimited Gym Access
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="#097FD9" />
                7x Fitness Coonsultant
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="#097FD9" />
               Nutrition Tracking
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="#097FD9" />
               5x Free Suplement
              </ListItem>  <ListItem>
                <ListIcon as={FaCheckCircle} color="#097FD9" />
              Gym Card
              </ListItem>  <ListItem>
                <ListIcon as={FaCheckCircle} color="#097FD9" />
              Personal Trainer
              </ListItem>
              
            </List>
            <Box w="80%" pt={7}>
              <Button w="full"  bg={"#097FD9"} colorScheme='blue' color={"color"} variant={"solid"} fontSize={16} fontWeight={500} >
               Register Now
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
        </Fade>
      </Stack>
    </Box>
  )
}