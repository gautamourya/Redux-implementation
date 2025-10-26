import { NavLink } from 'react-router-dom'
import {useSelector} from "react-redux"

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  console.log(user)
  return (
    <>
      <nav className='flex justify-center items-center gap-[3rem]'>
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "/products">products</NavLink>
        {user ? (
          <> 
            <NavLink to = "/admin/create-products">Create product</NavLink>
          </> 
        ):( 
          <>
          <NavLink to = "/login">login</NavLink>
        </>)}
            {/* <NavLink to = "/admin/create-products">Create product</NavLink>
          <NavLink to = "/login">login</NavLink> */}
         


        {/* <NavLink to = "/admin/update-product/:id">Create product</NavLink>
        <NavLink to = "/admin/delete-product/:id">Create product</NavLink> */}
      </nav>
    </>
  )
}

export default Nav


// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Menu, X } from "lucide-react";

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const user = useSelector((state) => state.userReducer.user);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const linkClasses = ({ isActive }) =>
//     `relative px-4 py-2 font-semibold transition-all duration-300 rounded-lg 
//      ${
//        isActive
//          ? "text-indigo-600 bg-white shadow-md"
//          : "text-white hover:text-indigo-200 hover:bg-white/10"
//      }`;

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gradient-to-r from-indigo-600/90 via-indigo-500/90 to-indigo-700/90 shadow-lg border-b border-indigo-400/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
//         <div className="flex justify-between items-center h-16">
//           {/* Brand Logo */}
//           <NavLink
//             to="/"
//             className="text-2xl font-extrabold text-white tracking-tight drop-shadow-md"
//           >
//             Redux<span className="text-indigo-200">Store</span>
//           </NavLink>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-6">
//             <NavLink to="/" className={linkClasses}>
//               Home
//             </NavLink>
//             <NavLink to="/products" className={linkClasses}>
//               Products
//             </NavLink>
//             <NavLink to="/admin/create-products" className={linkClasses}>
//               Create Product
//             </NavLink>

//             {user ? (
//               <span className="ml-3 text-sm text-indigo-100 font-medium bg-white/10 px-3 py-1 rounded-full">
//                 👋 {user.username}
//               </span>
//             ) : (
//               <NavLink to="/login" className={linkClasses}>
//                 Login
//               </NavLink>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden text-white hover:text-indigo-200 transition duration-300"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-indigo-700/90 backdrop-blur-xl border-t border-indigo-400/40 shadow-xl animate-slide-down">
//           <div className="flex flex-col items-center gap-4 py-5">
//             <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClasses}>
//               Home
//             </NavLink>
//             <NavLink to="/products" onClick={() => setIsOpen(false)} className={linkClasses}>
//               Products
//             </NavLink>
//             <NavLink
//               to="/admin/create-products"
//               onClick={() => setIsOpen(false)}
//               className={linkClasses}
//             >
//               Create Product
//             </NavLink>
//             {user ? (
//               <span className="text-white font-medium bg-white/10 px-3 py-1 rounded-full">
//                 👋 {user.username}
//               </span>
//             ) : (
//               <NavLink to="/login" onClick={() => setIsOpen(false)} className={linkClasses}>
//                 Login
//               </NavLink>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Nav;
