import {Routes , Route} from 'react-router-dom'
import Home from "../pages/Home";
import Login from '../pages/Login';
import Register from "../pages/Register";
import Products from "../pages/products";
import CreateProduct from '../pages/admin/CreateProduct';
import UpdateProduct from '../pages/admin/UpdateProduct';
const Mainroutes = () => {

  return (
    <>
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path ="/login" element = {<Login/>}/>
        <Route path ="/register" element = {<Register/>}/>
        <Route path ="/products" element = {<Products/>}/>
        <Route path ="/admin/create-products" element = {<CreateProduct/>}/>
        <Route path ="/admin/update-products/:id" element = {<UpdateProduct/>}/>
      </Routes>
    </>
  )
}

export default Mainroutes
