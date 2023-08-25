'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react'


export default function Card({img,name,des}) {
  return (
    <Center py={12} w={"100%"} bg={"black"}>
      <Box
        role={'group'}
        p={6}
        maxW={'480px'}
        w={'full'}
        bg={useColorModeValue('black', 'gray.800')}
        boxShadow={'2xl'}
        border="2px solid #097FD9"
        rounded={'lg'}
        fontFamily={"poppins"}
        color={"White"}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'330px'}
  >
          <Image
            rounded={'lg'}
            height={330}
            width={422}
            objectFit={'cover'}
            src={img}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>

          <Heading fontSize={'3xl'} fontFamily={'urbanist'} fontWeight={500} letterSpacing={3}>
           {name}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={400} fontSize={15} fontFamily={"poppins"}>
           {des}
            </Text>
       
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}