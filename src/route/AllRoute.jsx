import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import Program from '../pages/Program'
import Pricing from '../pages/Pricing'
import Community from '../pages/Community'
const AllRoute = () => {
  return (
   
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/program' element={<Program />} />
    <Route path='/pricing' element={<Pricing />} />
    <Route path='/community' element={<Community />} />
   </Routes>
   
  )
}

export default AllRoute