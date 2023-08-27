import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import Program from '../pages/Program'
import Pricing from '../pages/Pricing'
import Community from '../pages/Community'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Payment from '../pages/Payment'
import Booked from '../pages/Booked'
const AllRoute = () => {
  return (
   
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/workout' element={<Program />} />
    <Route path='/pricing' element={<Pricing />} />
    <Route path='/community' element={<Community />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/payment' element={<Payment />} />
    <Route path='/booked-workout' element={<Booked />} />
   </Routes>
   
  )
}

export default AllRoute