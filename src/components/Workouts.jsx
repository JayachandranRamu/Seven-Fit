import React, { useEffect } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator, SimpleGrid } from '@chakra-ui/react'
import { IconName } from "react-icons/bi";
import { TimeIcon } from '@chakra-ui/icons'


import {
    Center,
    chakra,
    Box,
    Flex,
    Link,
    Texxt,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    Text,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
    Spacer,
    Heading,
    Input,
  Stack,
  Image
  } from "@chakra-ui/react";
  import { getData } from '../api.js/api';
  import { FaReact } from 'react-icons/fa';
  import { BiTimeFive ,BiUserPin} from "react-icons/bi";
  import { IoLocationOutline} from "react-icons/io5";
  import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
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
        <Center>
            <VStack>
        <VStack mt={10}>
        <Flex>
<Center>
  <SkeletonCircle size='250' borderRadius={20} w={500}/>
  </Center>
  <Center>
  <VStack>
  <Skeleton height='15px' w={400} ml={5}  />
   <Skeleton height='15px' w={400} ml={5} mt={5} />
  
   <Skeleton height='15px' w={400} ml={5} mt={5} />
   <Skeleton height='15px' w={400} ml={5} mt={5} />
  <Skeleton height='15px' w={400} ml={5} mt={5} />

  </VStack>
    </Center>
</Flex>

</VStack>
<VStack mt={10}>
        <Flex>
<Center>
  <SkeletonCircle size='250' borderRadius={20} w={500}/>
  </Center>
  <Center>
  <VStack>
  <Skeleton height='15px' w={400} ml={5}  />
   <Skeleton height='15px' w={400} ml={5} mt={5} />
  
   <Skeleton height='15px' w={400} ml={5} mt={5} />
   <Skeleton height='15px' w={400} ml={5} mt={5} />
  <Skeleton height='15px' w={400} ml={5} mt={5} />

  </VStack>
    </Center>
</Flex>

</VStack>
</VStack>
</Center>
</>:
        data.map(el=>{
            return <>
            {/* <Flex>
                <Box>
                    <Image src={el.img}/>
                </Box>
    <Box>
        <Text>{el.time}</Text>
<Text>{el.name}</Text>

    </Box>
    <Box>
<Text>{el.trainerName}</Text>
<Text>{el.duration}</Text>
<Text>{el.location}</Text>
    </Box>
</Flex> */}
<Flex
  bg="black"

  pt={10}
  w="full"
  alignItems="center"
  justifyContent="center"

>
  <Box
    bg="black"
    _dark={{
      bg: "gray.800",
    }}
    mx={{
      lg: 8,
    }}
    display={{
      lg: "flex",
    }}
    maxW={{
      lg: "5xl",
    }}
    shadow={{
      lg: "lg",
    }}
    rounded={{
      lg: "lg",
    }}
  >
    <Box
      w={{
        lg: "50%",
      }}
    >
      <Box
        h={{
          base: 64,
          lg: "full",
        }}
        // rounded={{
        //   lg: "lg",
        // }}
        rounded={{base:"lg",lg:0}}
 roundedTopLeft={ {base:"lg",lg:"20px"}}
 roundedBottomLeft={{base:"lg",lg:"20px"}}
        bgSize="cover"
        style={{
          backgroundImage:
            `url(${el.img})`,
        }}
      ></Box>
    </Box>

    <Box
      py={12}
      px={6}
      borderRadius={{base:"lg",lg:0}}
    borderTopRightRadius={ {base:"lg",lg:"20px"}}
      borderBottomRightRadius={{base:"lg",lg:"20px"}}
      bg={"#0D0D0D"}
      maxW={{
        base: "xl",
        lg: "5xl",
      }}
      
      w={{
        lg: "50%",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        color="white"
      
        fontWeight="bold"
      >
        {el.name}{" "}
        <chakra.span
          color="brand.600"
          _dark={{
            color: "brand.400",
          }}
        >
        
        </chakra.span>
      </chakra.h2>
      <SimpleGrid columns={3} mt={4}>
        <Flex >
           
            <BiTimeFive size={18} mt={0}/>
    
            <Center>
            <Text ml={1.5} mt={"-2.012px"}>{el.time}</Text>
            </Center>
       
        </Flex>
      
        <Flex >
           
           <BiUserPin size={18} mt={0}/>
   
           <Center>
           <Text ml={1.5} mt={"-2.012px"}>{el.trainerName}</Text>
           </Center>
      
       </Flex>
       <Flex >
           
           <IoLocationOutline size={18} mt={0}/>
   
           <Center>
           <Text ml={1.5} mt={"-2.012px"}>{el.location}</Text>
           </Center>
      
       </Flex>
      </SimpleGrid>
     
      <chakra.h4
        mt={4}
        color="white"
 
      >
    Begin your mornings by engaging in a Pilates session, focusing on enhancing core strength and boosting flexibility for overall wellness.
      </chakra.h4>

      <Box mt={8}>
        <Button
          bg="#097fd9"
          color="white"
          px={5}
          py={3}
          colorScheme='#097fd9'
          fontWeight="semibold"
          rounded="lg"
variant={"solid"}
        >
          Start Now
        </Button>
      </Box>
    </Box>
  </Box>
</Flex>
            </>
        })}
    
    </TabPanel>
    
  </TabPanels>
</Tabs>
</Box>
  
  )
}

export default Workouts