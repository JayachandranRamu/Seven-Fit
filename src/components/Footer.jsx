import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import F6 from "../assets/images/F6.png"
const Logo = (props) => {
  return (
    <svg height={32} viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* SVG path data */}
    </svg>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg="black"
      color="white"
      fontFamily="Poppins">
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} m="auto" spacing={{ base: 10, sm: 100, md: 150 }}>
          <Stack align={'flex-start'}>

            <ListHeader>Product</ListHeader>
            <Box as="a" href={'#'}>
              Overview
            </Box>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Box as="a" href={'#'}>
                Features
              </Box>
              <Tag
                size={'sm'}
                bg={useColorModeValue('green.300', 'green.800')}
                ml={2}
                color={'white'}>
                New
              </Tag>
            </Stack>
            <Box as="a" href={'#'}>
              Tutorials
            </Box>
            <Box as="a" href={'#'}>
              Pricing
            </Box>
            <Box as="a" href={'#'}>
              Releases
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={'#'}>
              About Us
            </Box>
            <Box as="a" href={'#'}>
              Press
            </Box>
            <Box as="a" href={'#'}>
              Careers
            </Box>
            <Box as="a" href={'#'}>
              Contact Us
            </Box>
            <Box as="a" href={'#'}>
              Partners
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Box as="a" href={'#'}>
              Cookies Policy
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box as="a" href={'#'}>
              Law Enforcement
            </Box>
            <Box as="a" href={'#'}>
              Status
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Box as="a" href={'#'}>
              Facebook
            </Box>
            <Box as="a" href={'#'}>
              Twitter
            </Box>
            <Box as="a" href={'#'}>
              Dribbble
            </Box>
            <Box as="a" href={'#'}>
              Instagram
            </Box>
            <Box as="a" href={'#'}>
              LinkedIn
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
         <Image w="190px" src={F6} />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
     
        </Text>
      </Box>
    </Box>
  )
}
