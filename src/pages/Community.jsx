import React from 'react'
import { Fade,Slide } from "react-awesome-reveal";
import About from '../components/About';
import Card from '../components/Card';
import { Flex ,Heading,Box} from '@chakra-ui/react';
import A1 from "../assets/images/A1.webp"
import A2 from "../assets/images/A2.webp"
import A3 from "../assets/images/A3.webp"
import A4 from "../assets/images/A4.webp"
import A5 from "../assets/images/A5.webp"
import Trainers from '../components/Trainers';


const Community = () => {
  return (
    <>
    <Box bg={"black"}>

    <Slide direction="up" triggerOnce>
    <About />

    <Flex flexWrap={{base:"wrap",md:"nowrap"}} w={"100%"}>
    <Card img={A1} name="LUXURY ATMOSPHERE" des="We redefine your perfection of a gym"/> 
    <Card img={A2} name="A CROWD-FREE GYM" des="Get ready for the ultimate transformation"/> 
    </Flex>

  
   <Card img={A5} name="STAR TRAINERS" des="Meet your friends who are all going to help you"/>
   <Flex flexWrap={{base:"wrap",md:"nowrap"}}>
    <Card img={A3} name="LUXURY LOCKER ROOMS" des="Casually cool retreats for post-workout recovery"/> 
    <Card img={A4} name="CUSTOMIZED EQUIPMENT" des="For your ultimate workout experience"/> 
    </Flex>
   
    <Box  fontFamily="urbanist" bg="black" color={"white"}>
<Heading fontFamily="urbanist" textAlign={"center"} p={"60px"} fontSize={"56"}>Meet Our Top Trainers</Heading>
</Box>
<Trainers />
</Slide>
</Box>
  </>
  )
}

export default Community