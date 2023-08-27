import React from 'react'
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
  Input,
Stack,
Image,
InputGroup,
InputRightElement
} from "@chakra-ui/react";
import { PiEyeBold,PiEyeClosedBold } from "react-icons/pi";
import { Fade,Slide } from "react-awesome-reveal";
import { Tabs, TabList, TabPanels, Tab,Heading, TabPanel,TabIndicator,Text, SimpleGrid } from '@chakra-ui/react'
import { getData } from '../api.js/api';
import { getUserData } from '../api.js/api';
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import { AuthContext } from '../route/AuthContext';
import { useContext } from 'react';
const Payment= () => {
  

const [show, setShow] = React.useState(false)
const handleClick = () => setShow(!show)
let Navigate=useNavigate()
const toast = useToast()
let {activeChange}=useContext(AuthContext)

function HandleSubmit(e){
e.preventDefault();
toast({
    title: 'Payment Succesfully',
    description: "You have brought our package.",
    status: 'success',
    duration: 3000,
    isClosable: true,
  })
activeChange();

Navigate("/")
}


  return (
<>
<Heading fontFamily="urbanist" textAlign={"center"} pb={"60px"}  mt={0} pt={0} color={"white"} fontSize={"56"}>Payment Details</Heading>


  <Box  fontFamily="poppins" bg="black" color={"white"} w={"80%"} m={"auto"}>
<Tabs isFitted variant='unstyled'>
  <TabList mb='1em'>
    <Tab>Credit/Debit Card</Tab>
    <Tab>UPI Payment</Tab>
    <Tab>Net Banking</Tab>
  </TabList>
     <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />
  <TabPanels>
    <TabPanel>
    <Slide direction="up" triggerOnce>
    <Stack direction={"column"} w={{base:300,md:450}} m={"auto"}  textAlign={"center"} placeItems={"center"}>

<form action="" onSubmit={HandleSubmit}>
        <Input size='lg' type='number' mt={20} mb={8}   required  placeholder='Card Number' 
         />
   <SimpleGrid columns={2} >
         <Input size='lg' type='number' mt={"20px"} w={{base:145,md:200}} mb={8} mr={"70px"}  required  placeholder='Expiry Year' 
         />   
   <Input size='lg' type='number' mt={"20px"} mb={8} w={{base:125,md:200}} ml={"25px"}  required  placeholder='CVV' 
         />    
      </SimpleGrid>
        <Button h={"50px"} type='submit' w={{base:130,md:200}}  mt={"20px"}  bgColor={"#097fd9"} color={"white"} colorScheme='#097fd9'>SUBMIT</Button>
        </form>
  </Stack>
 
 </Slide>
    </TabPanel>
  
    <TabPanel>
    <Slide direction="up" triggerOnce>
    <Stack direction={"column"} w={{base:300,md:450}} m={"auto"}  textAlign={"center"} placeItems={"center"}>

    <form action=""  onSubmit={HandleSubmit}>

<Input size='lg' type='text' mt={20} mb={8}   required  placeholder='UPI ID' 
 />

<InputGroup size='lg' w={{base:300,md:450}} mt={4}>
<Input
pr='4.5rem'
type={show ? 'text' : 'password'}
placeholder='Password'


required
/>
<InputRightElement width='4.5rem'>

  {(show) ?<><PiEyeBold color='#097fd9'  size={20}  /></> : <>
 <> <PiEyeClosedBold   size={20}  /></>
  </>}

</InputRightElement>
</InputGroup>
<Button h={"50px"} type='submit' w={{base:130,md:200}}  mt={"35px"} bgColor={"#097fd9"} color={"white"} colorScheme='#097fd9'>SUBMIT</Button>
</form>
</Stack>
</Slide>
</TabPanel>
<TabPanel>
<Slide direction="up" triggerOnce>
<Stack direction={"column"} w={{base:300,md:450}} m={"auto"}  textAlign={"center"} placeItems={"center"}>

<form action="" onSubmit={HandleSubmit}>

        <Input size='lg' type='text' mt={20} mb={8}   required  placeholder='User Name' 
         />
        
    <InputGroup size='lg' w={{base:300,md:450}} mt={4}>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Password'
        
   
        required
      />
      <InputRightElement width='4.5rem'>
    
          {(show) ?<><PiEyeBold color='#097fd9'  size={20}  /></> : <>
         <> <PiEyeClosedBold   size={20}  /></>
          </>}
        
      </InputRightElement>
    </InputGroup>
        <Button h={"50px"} type='submit' w={{base:130,md:200}}  mt={"35px"} bgColor={"#097fd9"} color={"white"} colorScheme='#097fd9'>SUBMIT</Button>
        </form>
  </Stack>

</Slide>
</TabPanel>
  </TabPanels>

</Tabs>
</Box>
</>
  )
}

export default Payment