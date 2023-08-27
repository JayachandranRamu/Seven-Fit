import {createContext, useEffect, useState} from "react";
import { getAuthDetails, postAuthDetails } from "../api.js/api";
export const AuthContext=createContext();

export const AuthContextProvider = ({children}) => {

  let [authDetails,setAuthDetails]=useState({})
let [flag,setFlag]=useState(0)
  console.log(authDetails)

 function login(data) {
let obj={...authDetails,isAuth: true ,
    isData:data
}
 postAuthDetails(obj)
setFlag(flag+1)
  };
  function logout(){
   let obj={
        ...authDetails,
      isAuth:false,
      active:false,
      isData:{}
    }
    postAuthDetails(obj)
    setFlag(flag+1)
  }
console.log(flag)
  function activeChange(){
 let obj={
        ...authDetails,
       isAuth:true,
        active:true
      }
      postAuthDetails(obj)
      setFlag(flag+1)
   
  }
function addWorkout(obj){
    let data=authDetails;
    data.isData.workouts.push(obj);
      postAuthDetails(data) 
      setFlag(flag+1)
}
function deleteWorkout(obj){
    let r={
        ...authDetails,
        isData:{
            ...isData,
            workouts:obj
        }
    }
    console.log(r.isData.workouts)
      postAuthDetails(r) 
      setFlag(flag+1)
}


  let providerState={
    authDetails,login,logout
  }
let status=authDetails.isAuth;
let isData=authDetails.isData
let isActive=authDetails.active

useEffect(()=>{
getAuthDetails().then(res=>setAuthDetails(res.data))
},[flag])

  return <AuthContext.Provider value={{status,isData,login,logout,activeChange,isActive,addWorkout,deleteWorkout}}>
  {children}
</AuthContext.Provider>

};