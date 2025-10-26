// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import {useDispatch} from 'react-redux'
// import {asyncloginuser} from "../store/actions/userAction";

// const Login = () => {
//   const {register, handleSubmit, reset, formState: { errors },} = useForm();
//   const dispatch = useDispatch();

//   const Loginhandler = (user) => {
//     dispatch(asyncloginuser(user));
//     // reset();
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center p-4 
//                     bg-gray-100"
//     >
//       <form
//         onSubmit={handleSubmit(Loginhandler)}
//         className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg 
//                    border border-gray-100 transition-all duration-300 hover:shadow-2xl"
//       >
//         <h2 className="text-4xl font-extrabold text-gray-800 mb-2 text-center">
//           Login Account
//         </h2>
//         <p className="text-center text-gray-500 mb-8 font-medium">
//           Welcome back, please login to continue.
//         </p>

//         {/* --- INPUT FIELD GROUPS --- */}

//         {/* Username Field */}
//         <div className="mb-5">
//           <label
//             htmlFor="username"
//             className="block text-sm font-semibold text-gray-700 mb-2"
//           >
//             Username
//           </label>
//           <input
//             id="username"
//             type="text"
//             placeholder="Enter your username"
//             {...register("username", { required: "Username is required" })}
//             className={`w-full p-3 border ${
//               errors.username ? "border-red-500" : "border-gray-300"
//             } rounded-lg 
//                         shadow-sm 
//                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
//                         transition duration-200 hover:border-indigo-400 hover:shadow-md focus:shadow-lg`}
//           />
//           {errors.username && (
//             <p className="mt-1 text-xs text-red-500 font-medium">
//               {errors.username.message}
//             </p>
//           )}
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
//             placeholder="Must be at least 6 characters"
//             {...register("password", {
//               required: "Password is required",
//               minLength: { value: 6, message: "Min 6 characters required" },
//             })}
//             className={`w-full p-3 border ${
//               errors.password ? "border-red-500" : "border-gray-300"
//             } rounded-lg 
//                         shadow-sm 
//                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
//                         transition duration-200 hover:border-indigo-400 hover:shadow-md focus:shadow-lg`}
//           />
//           {errors.password && (
//             <p className="mt-1 text-xs text-red-500 font-medium">
//               {errors.password.message}
//             </p>
//           )}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white font-bold 
//                      py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 
//                      focus:ring-indigo-300 transition duration-300 ease-in-out 
//                      transform hover:scale-[1.01]"
//         >
//           LOG IN
//         </button>

//         {/* Link to Register */}
//         <p className="mt-8 text-center text-gray-600 text-sm">
//           Don't have an account?
//           <Link
//             to="/register"
//             className="text-indigo-600 hover:text-indigo-800 font-bold ml-1 transition duration-150 hover:underline"
//           >
//             Register Here
//           </Link>
//         </p>
//       </form>
//     </div>

//     // --------------------------------------------------------
//   );
// };

// export default Login;

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncloginuser } from "../store/actions/userAction";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const Loginhandler = (user) => {
    console.log("Logging In User:", user);
    dispatch(asyncloginuser(user));
    // reset();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 
                 bg-gradient-to-br from-indigo-100 via-white to-indigo-200"
    >
      <form
        onSubmit={handleSubmit(Loginhandler)}
        className="bg-white mt-20 p-10 rounded-2xl shadow-lg w-full max-w-lg 
                   border border-gray-100 transition-all duration-300 hover:shadow-2xl"
      >
        {/* --- HEADING --- */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2 text-center">
          Login Account
        </h2>
        <p className="text-center text-gray-500 mb-8 font-medium">
          Welcome back, please login to continue.
        </p>

        {/* --- USERNAME FIELD --- */}
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "email is required" })}
            className={`w-full p-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg 
              shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
              transition duration-200 hover:border-indigo-400 hover:shadow-md focus:shadow-lg`}
          />
          {errors.username && (
            <p className="mt-1 text-xs text-red-500 font-medium">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* --- PASSWORD FIELD --- */}
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
            placeholder="Must be at least 6 characters"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Min 6 characters required" },
            })}
            className={`w-full p-3 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-lg 
              shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
              transition duration-200 hover:border-indigo-400 hover:shadow-md focus:shadow-lg`}
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-500 font-medium">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* --- LOGIN BUTTON --- */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold 
                     py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 
                     focus:ring-indigo-300 transition duration-300 ease-in-out 
                     transform hover:scale-[1.01]"
        >
          LOG IN
        </button>

        {/* --- REGISTER LINK --- */}
        <p className="mt-8 text-center text-gray-600 text-sm">
          Don't have an account?
          <Link
            to="/register"
            className="text-indigo-600 hover:text-indigo-800 font-bold ml-1 transition duration-150 hover:underline"
          >
            Register Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
