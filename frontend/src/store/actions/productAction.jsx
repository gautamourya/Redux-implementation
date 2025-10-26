import axios from "../../api/axiosconfig"
import { loadproducts } from "../reducers/productSlice";


export const asyncloadproduct = () => async (dispatch,getState) =>{
    try {
        const {data} = await axios.get("/products");
        dispatch(loadproducts(data));
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const asynccreateproduct = () => async (dispatch,getState) =>{
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) dispatch(loaduser(user));
      else console.log ("user not logged in!")
    } catch (error) {
        console.log(error)
    }
}