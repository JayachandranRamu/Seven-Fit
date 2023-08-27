import React from 'react'
import {Box,Flex, Heading,SimpleGrid,Image,Text} from "@chakra-ui/react"

import I1 from "../assets/icons/I1.jpg"
import Workouts from './Workouts'
const Explore = () => {
  return (
   <>
   <Box  fontFamily="urbanist" bg="black" color={"white"}>
<Heading fontFamily="urbanist" textAlign={"center"} pb={"60px"}  mt={0} pt={0} fontSize={"56"}>Book Your Workout</Heading>
<Workouts />

   </Box>
   </>
    
  )
}

export default Explore