import axios from "axios";

let url=`https://seven-fit-api.onrender.com`;

export function getData(){
    return axios.get(`${url}/workouts`);
}

export function getUserData(){
    return axios.get(`${url}/users`);
}

export function postUserData(obj){
    axios.post(`${url}/users`,
        {
           ...obj,
membership:{
    status:"inactive",
    type:"none",
    expires:""
},
workouts:[]
        
    })
}

export function getAuthDetails(){
    return axios.get(`${url}/authDetails/1`);
}
export function postAuthDetails(obj){
     axios.put(`${url}/authDetails/1`,{
    ...obj}
    );
}

