import axios from "axios";

let url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`;

export function getData(){
    return axios.get(`${url}/workouts`);
}