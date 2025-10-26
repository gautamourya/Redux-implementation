import axios from "../../api/axiosconfig"
import { loaduser } from "../reducers/userSlice";

export const asynccurrentuser = () => async (dispatch,getState) =>{
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) dispatch(loaduser(user));
      else console.log ("user not logged in!")
    } catch (error) {
        console.log(error)
    }
}

export const asynclogoutuser = () => async (dispatch,getState) =>{
    try {
        localStorage.removeItem("user");
        console.log("User logged out!")
    } catch (error) {
        console.log(error)
    }
}

export const asyncloginuser = (user) => async (dispatch,getState) =>{
    try {
        console.log("Logging in User:", user);
        const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`);
        console.log(data)
        localStorage.setItem("user", JSON.stringify(data[0]));
    } catch (error) {
        console.log(error)
    }
}

export const asyncregisteruser = (user) => async (dispatch,getState) => {
    try {
        const res = await axios.post("/users",user);
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}