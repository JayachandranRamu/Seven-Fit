
import {Box,Flex, Heading,SimpleGrid,Image,Text} from "@chakra-ui/react"

import I1 from "../assets/icons/I1.jpg"
import React, { useEffect } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'
import { getAuthDetails, getData } from '../api.js/api';
import WorkoutCard from "../components/WorkoutCard"
import WorkoutCardSkeleton from "../components/WorkoutCardSkeleton"
import { useToast } from '@chakra-ui/react'
import { AuthContext } from '../route/AuthContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import BookedCard from "../components/BookedCard";
const Booked = () => {
    let Navigate=useNavigate()
const toast = useToast()
let {activeChange,isData,deleteWorkout}=useContext(AuthContext)
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    const tomorrow  = new Date(); // The Date object returns today's timestamp
    const tomorrow1  = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow1.setDate(tomorrow.getDate() + 1);
let name = month[d.getMonth()]+" "+d.getDate();
let name1 = month[tomorrow.getMonth()]+" "+tomorrow.getDate();
let name2=month[tomorrow1.getMonth()]+" "+tomorrow1.getDate();
let [flags,setFlags]=React.useState(true)
let [BookDate,isBookDate]=React.useState({
BD:name,
BD1:name1,
BD2:name2
})
let [data,setData]=React.useState([]);
let [loading,setLoading]=React.useState(false)

function HandleDelete(id){
   let r= data.filter(el=>(el.id!=id))
    setData(r)
    deleteWorkout(r)
    toast({
        title: 'You Have Cancelled Your Session!',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
}

useEffect(()=>{
setLoading(true)
    getAuthDetails().then(res=>{
        console.log(res.data.isData.workouts)
        return setData(res.data.isData.workouts)})
    
    setLoading(false)
    },[])


  return (
   <>
   <Box  fontFamily="urbanist" bg="black" color={"white"}>
<Heading fontFamily="urbanist" textAlign={"center"} pb={"60px"}  mt={0} pt={0} fontSize={"56"}>Booked Workouts Of {isData.name}</Heading>


 
  <Box  fontFamily="poppins" bg="black" color={"white"} w={"80%"} m={"auto"}>
<Tabs isFitted variant='unstyled'>
  <TabList mb='1em'>
    <Tab>{name}</Tab>
    <Tab>{name1}</Tab>
    <Tab>{name2}</Tab>
  </TabList>
     <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />
  <TabPanels>
    <TabPanel>
       {loading?<>
    <WorkoutCardSkeleton />
</>:
        data?.map(el=>{
          // let r=new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
     if(BookDate.BD==el.date) {
          //  setFlags(false)
            return <>
<BookedCard key={el.id} el={el} HandleDelete={HandleDelete} />
            </>}
  
        })
}
  {/* { flags?<><Text fontSize={"32"} fontFamily={"urbanist"} fontWeight={600} textAlign={"center"} mt={20}>Currently There Is No Workout Sessions !!!</Text></> :""} */}
        
    
    </TabPanel>
  
    <TabPanel>

{loading?<>
<WorkoutCardSkeleton />
</>:
data?.map(el=>{
  
    if(BookDate.BD1==el.date){
    return <>
<BookedCard el={el} HandleDelete={HandleDelete}/>
    </>}
})}

</TabPanel>
<TabPanel>

{loading?<>
<WorkoutCardSkeleton />
</>:
data?.map(el=>{
    if(BookDate.BD2==el.date) {
    return <>
<BookedCard el={el} HandleDelete={HandleDelete}/>
    </>}
})}

</TabPanel>
  </TabPanels>

</Tabs>
</Box>
  </Box>
  </>
  )
}




export default Booked;