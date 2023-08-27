
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
  Heading,
  Input,
Stack,
Image,
InputGroup,
InputRightElement
} from "@chakra-ui/react";

import { PiEyeBold,PiEyeClosedBold } from "react-icons/pi";
import { Fade,Slide } from "react-awesome-reveal";
import { getUserData } from '../api.js/api';
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import { postUserData } from '../api.js/api';
const Register = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    let [loginData,setLoginData]=React.useState({
        name:"",
        email:"",
        password:""
    })
    let [usersData,setUsersData]=React.useState([]);
    let Navigate=useNavigate()
    const toast = useToast()
    let flag=React.useRef(true);
    let {name,email,password}=loginData;
function HandleSubmit(e){
    e.preventDefault();
       usersData.forEach(el=>{
        if(el.email==email){
          flag.current=false;
         
        }
       })
       if(!flag.current){
        toast({
          title: 'Email Is Already Present.',
          description: "You can give another email",
          status: 'warning',
          duration: 3000,
          isClosable: true,
        })
       }
       if(flag.current){
    postUserData(loginData)
            toast({
                title: 'Account Created Succesfully',
                description: "You can login to our website",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
Navigate("/login")
}}
React.useEffect(()=>{
  getUserData().then(res=>setUsersData(res.data))
},[])

   
  return (
    <>

    <Box   bgColor={"black"} color={"white"} fontFamily={"Poppins"}>
    <Slide direction="up" triggerOnce>
      <Heading fontFamily="urbanist" textAlign={"center"} pb={"60px"} mt={0} pt={0}  fontSize={"56"}>User Register</Heading>
 
  <Stack direction={"column"} w={{base:300,md:450}} m={"auto"}  textAlign={"center"}>
    <form action="" onSubmit={HandleSubmit}>
    <Input size='lg' value={name} type='text'  onChange={e=>setLoginData({
            ...loginData,
            name: e.target.value
        })} mt={5} mb={8}  placeholder='Name'  />
        <Input size='lg' value={email} type='email'  onChange={e=>setLoginData({
            ...loginData,
            email: e.target.value
        })} mt={5} mb={8}  placeholder='Email'  />
        
    <InputGroup size='lg' w={{base:300,md:450}} mt={4}>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Password'
        value={password}
        onChange={e=>setLoginData({
            ...loginData,
            password: e.target.value
        })}
      />
      <InputRightElement width='4.5rem'>
    
          {(show) ?<><PiEyeBold color='#097fd9'  size={20} onClick={handleClick} /></> : <>
         <> <PiEyeClosedBold   size={20} onClick={handleClick} /></>
          </>}
        
      </InputRightElement>
    </InputGroup>
        <Button h={"50px"} type='submit' w={{base:130,md:200}}  mt={"55px"} bgColor={"#097fd9"} color={"white"} colorScheme='#097fd9'>SUBMIT</Button>
        
    </form>

  </Stack>
 </Slide>
  </Box>
 
  
    </>
  )
}

export default Register