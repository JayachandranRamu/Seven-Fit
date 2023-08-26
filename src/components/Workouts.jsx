import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'
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
  Image
  } from "@chakra-ui/react";
const Workouts = () => {
  return (

  <Box  fontFamily="urbanist" bg="black" color={"white"} w={"80%"} m={"auto"}>
<Tabs isFitted variant='unstyled'>
  <TabList mb='1em'>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>3</Tab>
  </TabList>
     <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />
  <TabPanels>
    <TabPanel>
      <p>one!</p>
<Image src='https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f6ie1r2lm5mtgw0wlpj1.jpg' />
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
</Box>
  
  )
}

export default Workouts