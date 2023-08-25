import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {Heading,Text,Box,Image} from "@chakra-ui/react"

import 'swiper/css';
import 'swiper/css/effect-cards';
import T1 from "../assets/images/T1.webp"
import T2 from "../assets/images/T2.webp"
import T3 from "../assets/images/T3.webp"
import T4 from "../assets/images/T4.webp"
import T5 from "../assets/images/T5.webp"



import { EffectCards } from 'swiper/modules';

export default () =>{
  return (
    <>
    <Box bg={"black"} color={"white"} textAlign={"center"}>

<Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
          <SwiperSlide><Box border="1px solid #097FD9" bg={"black"} w={300}  m={"auto"}>
            <Image src={T1}  w={"300px"}/>
            <Box m={5} >
            <Heading fontSize={'4xl'} fontFamily={'urbanist'} fontWeight={500} letterSpacing={3}>
           NOAH
          </Heading>
            <Text fontWeight={400} fontSize={14} fontFamily={"poppins"}>
          Star Trainer
            </Text>
            </Box>
            </Box></SwiperSlide>
            <SwiperSlide><Box border="1px solid #097FD9" bg={"black"} w={300}  m={"auto"}>
            <Image src={T3}  w={"300px"}/>
            <Box m={5} >
            <Heading fontSize={'4xl'} fontFamily={'urbanist'} fontWeight={500} letterSpacing={3}>
           EVA
          </Heading>
            <Text fontWeight={400} fontSize={14} fontFamily={"poppins"}>
          Star Trainer
            </Text>
            </Box>
            </Box></SwiperSlide>
            <SwiperSlide><Box border="1px solid #097FD9" bg={"black"} w={300}  m={"auto"}>
            <Image src={T5}  w={"300px"}/>
            <Box m={5} >
            <Heading fontSize={'4xl'} fontFamily={'urbanist'} fontWeight={500} letterSpacing={3}>
         TIJN
          </Heading>
            <Text fontWeight={400} fontSize={14} fontFamily={"poppins"}>
          Star Trainer
            </Text>
            </Box>
            </Box></SwiperSlide>
            <SwiperSlide><Box border="1px solid #097FD9" bg={"black"} w={300}  m={"auto"}>
            <Image src={T2}  w={"300px"}/>
            <Box m={5} >
            <Heading fontSize={'4xl'} fontFamily={'urbanist'} fontWeight={500} letterSpacing={3}>
          DENNIS
          </Heading>
            <Text fontWeight={400} fontSize={14} fontFamily={"poppins"}>
          Star Trainer
            </Text>
            </Box>
            </Box></SwiperSlide>
            <SwiperSlide><Box border="1px solid #097FD9" bg={"black"} w={300}  m={"auto"}>
            <Image src={T4}  w={"300px"}/>
            <Box m={5} >
            <Heading fontSize={'4xl'} fontFamily={'urbanist'} fontWeight={500} letterSpacing={3}>
          FLORA
          </Heading>
            <Text fontWeight={400} fontSize={14} fontFamily={"poppins"}>
          Star Trainer
            </Text>
            </Box>
            </Box></SwiperSlide>
           </Swiper>
    </Box>
      
    </>
  );
}

     