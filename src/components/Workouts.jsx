import React, { useEffect } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator,Text, SimpleGrid } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import { getData } from '../api.js/api';
import WorkoutCard from './WorkoutCard';
import WorkoutCardSkeleton from './WorkoutCardSkeleton';
const Workouts = () => {
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

let [data,setData]=React.useState([]);
let [loading,setLoading]=React.useState(false)
useEffect(()=>{
setLoading(true)
    getData()
    .then(res=>{setData(res.data)
    setLoading(false)
    })

},[])



  return (

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
        data.map(el=>{
          // let r=new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
          var dt = new Date();
          var hours = dt.getHours(); // gives the value in 24 hours format
          var minutes = dt.getMinutes() ; 
          var finalTime =hours + ":" + minutes; 
          if(el.railway>=finalTime){
          //  setFlags(false)
            return <>
<WorkoutCard key={el.id} date={name} el={el} />
            </>}
  
        })
}
  {/* { flags?<><Text fontSize={"32"} fontFamily={"urbanist"} fontWeight={600} textAlign={"center"} mt={20}>Currently There Is No Workout Sessions !!!</Text></> :""} */}
        
    
    </TabPanel>
  
    <TabPanel>

{loading?<>
<WorkoutCardSkeleton />
</>:
data.map(el=>{
  

    return <>
<WorkoutCard el={el} date={name1} />
    </>
})}

</TabPanel>
<TabPanel>

{loading?<>
<WorkoutCardSkeleton />
</>:
data.map(el=>{
    return <>
<WorkoutCard el={el} date={name2}/>
    </>
})}

</TabPanel>
  </TabPanels>

</Tabs>
</Box>
  
  )
}

export default Workouts