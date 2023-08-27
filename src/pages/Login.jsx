
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
import { AuthContext } from '../route/AuthContext';
import { useContext } from 'react';
const Login = () => {
    const { login } = useContext(AuthContext);
    let [loginData,setLoginData]=React.useState({
        email:"",
        password:""
    })
    let [usersData,setUsersData]=React.useState([]);
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    let Navigate=useNavigate()
    const toast = useToast()
let flag=React.useRef(0);
    let {email,password}=loginData;
function HandleSubmit(e){
    e.preventDefault();
    usersData.forEach((el)=>{
        if (el.email===email && el.password===password){
            toast({
                title: 'Login Succesfully',
                description: "You can book workout sessions now",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
              flag.current=2;
              login(el);
Navigate("/")

        }else if(el.email==email){
            flag.current=1;
        }
    
    })
        if(flag.current==1){
            toast({
                title: 'Credentials Incorrect',
                description: "Kindly check your credentials",
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
        }else if(flag.current==0){
        toast({
            title: 'Kindly Register Your Account',
            description: "If Registered,Check your credentials",
            status: 'warning',
            duration: 3000,
            isClosable: true,
          })
    }
   
}

    React.useEffect(()=>{
getUserData()
.then(res=>setUsersData(res.data))
    },[])

  return (
    <>

    <Box   bgColor={"black"} color={"white"} fontFamily={"Poppins"}>
    <Slide direction="up" triggerOnce>
      <Heading fontFamily="urbanist" textAlign={"center"} pb={"60px"} mt={0} pt={0}  fontSize={"56"}>User Login</Heading>
 
  <Stack direction={"column"} w={{base:300,md:450}} m={"auto"}  textAlign={"center"}
  >
    <form action="" onSubmit={HandleSubmit}>

        <Input size='lg' value={email} type='email' mt={5} mb={8}  placeholder='Email' 
         onChange={e=>setLoginData({
            ...loginData,
            email: e.target.value
        })} />
        
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

export default Login