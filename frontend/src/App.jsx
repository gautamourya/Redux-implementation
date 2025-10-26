import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { asynccurrentuser } from "./store/actions/userAction";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(asynccurrentuser());
  },[])
  
  return (
    <>
      <Nav/>
      <Mainroutes/>
    </>
  )
  
};

export default App;
