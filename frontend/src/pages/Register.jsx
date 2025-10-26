// import { nanoid } from "@reduxjs/toolkit";
// import { useForm } from "react-hook-form";
// import { Link } from 'react-router-dom'; 
// import { asyncregisteruser } from "../store/actions/userAction";
// import {useDispatch} from 'react-redux'
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const { register, handleSubmit, reset, formState: { errors } } = useForm();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();


//   const registerhandler = (user) => {
//     user.id = nanoid();    
//     user.isAdmin = false;
//     console.log("Registering User:", user);  
//     dispatch(asyncregisteruser(user));  
//     navigate("/login");
//     // reset(); 
//   };

//   return (
    
//     <div className="min-h-screen flex items-center justify-center p-4 
//                     bg-gray-100">
      
//       <form
//         onSubmit={handleSubmit(registerhandler)}
//         className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg 
//                    border border-gray-100 transition-all duration-300 hover:shadow-2xl"
//       >
//         <h2 className="text-4xl font-extrabold text-gray-800 mb-2 text-center">
//           Create Account
//         </h2>
//         <p className="text-center text-gray-500 mb-8 font-medium">
//             Join us today and unlock new features.
//         </p>

//         {/* --- INPUT FIELD GROUPS --- */}
//         <div className="mb-5">
//           <label 
//             htmlFor="username" 
//             className="block text-sm font-semibold text-gray-700 mb-2"
//           >
//             Full Name
//           </label>
//           <input
//             id="username"
//             type="text"
//             placeholder="Enter your full name"
//             // 💡 Validation: Name required
//             {...register("username", { required: "Full Name is required" })}
//             className={`w-full p-3 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-lg 
//                         shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
//                         transition duration-200 hover:border-indigo-400 hover:shadow-md focus:shadow-lg`} 
//           />
//           {errors.username && <p className="mt-1 text-xs text-red-500 font-medium">{errors.username.message}</p>}
//         </div>
        
//         {/* Email Field */}
//         <div className="mb-5">
//           <label 
//             htmlFor="email" 
//             className="block text-sm font-semibold text-gray-700 mb-2"
//           >
//             Email Address
//           </label>
//           <input
//             id="email"
//             type="email"
//             placeholder="name@example.com"
//             // 💡 Validation: Email required aur format check
//             {...register("email", { 
//                 required: "Email is required", 
//                 pattern: {
//                     value: /^\S+@\S+$/i,
//                     message: "Invalid email format"
//                 }
//             })} 
//             className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg 
//                         shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
//                         transition duration-200 hover:border-indigo-400 hover:shadow-md focus:shadow-lg`}
//           />
//           {errors.email && <p className="mt-1 text-xs text-red-500 font-medium">{errors.email.message}</p>}
//         </div>

//         {/* Password Field */}
//         <div className="mb-6">
//           <label 
//             htmlFor="password" 
//             className="block text-sm font-semibold text-gray-700 mb-2"
//           >
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             placeholder="Create a strong password (min 6 chars)"
//             // 💡 Validation: Password required aur minimum length check
//             {...register("password", { 
//                 required: "Password is required", 
//                 minLength: { value: 6, message: "Min 6 characters required" }
//             })} 
//             className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg 
//                         shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
//                         transition duration-200 hover:border-indigo-400 hover:shadow-md focus:shadow-lg`}
//           />
//           {errors.password && <p className="mt-1 text-xs text-red-500 font-medium">{errors.password.message}</p>}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white font-bold 
//                      py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 
//                      focus:ring-indigo-300 transition duration-300 ease-in-out 
//                      transform hover:scale-[1.01]"
//         >
//           REGISTER ACCOUNT
//         </button>

//         {/* Link to Login */}
//         <p className="mt-8 text-center text-gray-600 text-sm">
//           Already have an account?
//           <Link 
//             to="/login" // 💡 Routing Fix: Login page ke liye link
//             className="text-indigo-600 hover:text-indigo-800 font-bold ml-1 transition duration-150 hover:underline"
//           >
//             Login Here
//           </Link>
//         </p>
//       </form>
//     </div>
   
//   );
// };

// export default Register;

import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncregisteruser } from "../store/actions/userAction";
import { useDispatch } from "react-redux";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerhandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    console.log("Registering User:", user);
    dispatch(asyncregisteruser(user));
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-gray-100 
                 pt-24 sm:pt-28 md:pt-32"
    >
      <form
        onSubmit={handleSubmit(registerhandler)}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg 
                   border border-gray-100 transition-all duration-300 hover:shadow-2xl"
      >
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2 text-center">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-8 font-medium">
          Join us today and unlock new features.
        </p>

        {/* --- INPUT FIELD GROUPS --- */}
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Full Name
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your full name"
            {...register("username", { required: "Full Name is required" })}
            className={`w-full p-3 border ${
              errors.username ? "border-red-500" : "border-gray-300"
            } rounded-lg 
                        shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                        transition duration-200 hover:border-indigo-400 hover:shadow-md focus:shadow-lg`}
          />
          {errors.username && (
            <p className="mt-1 text-xs text-red-500 font-medium">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            className={`w-full p-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg 
                        shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                        transition duration-200 hover:border-indigo-400 hover:shadow-md focus:shadow-lg`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Create a strong password (min 6 chars)"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Min 6 characters required" },
            })}
            className={`w-full p-3 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-lg 
                        shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                        transition duration-200 hover:border-indigo-400 hover:shadow-md focus:shadow-lg`}
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-500 font-medium">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold 
                     py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 
                     focus:ring-indigo-300 transition duration-300 ease-in-out 
                     transform hover:scale-[1.01]"
        >
          REGISTER ACCOUNT
        </button>

        {/* Link to Login */}
        <p className="mt-8 text-center text-gray-600 text-sm">
          Already have an account?
          <Link
            to="/login"
            className="text-indigo-600 hover:text-indigo-800 font-bold ml-1 transition duration-150 hover:underline"
          >
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
