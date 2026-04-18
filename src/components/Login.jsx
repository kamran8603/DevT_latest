// import React, { useState } from "react";
// import axios from "axios"
// import { useNavigate } from "react-router-dom"
// import { addUser } from "../utils/userSlice";
// import { useDispatch } from "react-redux"
// import { BASE_URL } from "../utils/constants";


// function Login() {
//   const [emailId, setEmailId] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName]= useState("")
//   const [lastName, setLastName]= useState("")
//   const [error, setError]= useState("")
//   const [isLoginForm, setLoginForm]=useState(true)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const handleLogin = async () => {

//     try {
//       const res = await axios.post(BASE_URL + "/login", {
//         emailId,
//         password
//       }, { withCredentials: true })
     
//       dispatch(addUser(res.data))
//       return navigate("/")
//     }
//     catch (err) {
//       setError(err?.response?.data  || "Something went wrong")
      
//     }

//   }
//   const handleSignUp= async ()=>{
//     try{
//       const res = await axios.post(BASE_URL+"/signup",{firstName,lastName,emailId,password},{withCredentials:true})
//       console.log(res.data)
//       dispatch(addUser(res.data.data))
//        return navigate("/profile")
//     }
//     catch(err){
//     console.log(err.message)
//     }
//   }

//   return (
//     <div className="flex justify-center my-10 ">
//       <div className="card bg-base-300 text-primary-content w-96">
//         <div className="card-body">
//           <h2 className="card-title">{isLoginForm ? "Login" : "SignUp"}</h2>


       
      
//             <div className="">

//               {
//         !isLoginForm && (
//           <>
//           <fieldset className="fieldset">
//               <legend className="fieldset-legend">First Name {emailId}</legend>
//               <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input" />
//             </fieldset>
//             {/* //password */}
//             <fieldset className="fieldset">
//               <legend className="fieldset-legend">Last Name</legend>
//               <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} className="input" />

//             </fieldset>
//           </>
//         )
//        }

          
        
//             <fieldset className="fieldset">
//               <legend className="fieldset-legend">Email Id: {emailId}</legend>
//               <input type="text" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="input" />
//             </fieldset>
//             {/* //password */}
//             <fieldset className="fieldset">
//               <legend className="fieldset-legend">Password</legend>
//               <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} className="input" />

//             </fieldset>
//           </div>
//           <p className="text-red-500">{error}</p>
//           <div className="card-actions justify-center m-2">
//             <button className="btn btn-primary" onClick={isLoginForm ? handleLogin : handleSignUp}>{isLoginForm ?"Login":"SignUp"}</button>
//           </div>
//           <p className="m-auto cursor-pointer py-2" onClick={()=>setLoginForm((value)=>!value)}>
//            {
//             isLoginForm? "New User? SignUp Here" : "Existing User ? Login Here"
//            }
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from "react";
// import axios from "axios"
// import { useNavigate } from "react-router-dom"
// import { addUser } from "../utils/userSlice";
// import { useDispatch } from "react-redux"
// import { BASE_URL } from "../utils/constants";

// function Login() {
//   const [emailId, setEmailId] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("")
//   const [lastName, setLastName] = useState("")
//   const [error, setError] = useState("")
//   const [isLoginForm, setLoginForm] = useState(true)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post(BASE_URL + "/login", {
//         emailId,
//         password
//       }, { withCredentials: true })
     
//       dispatch(addUser(res.data))
//       return navigate("/")
//     }
//     catch (err) {
//       setError(err?.response?.data || "Something went wrong")
//     }
//   }

//   const handleSignUp = async () => {
//     try {
//       const res = await axios.post(BASE_URL + "/signup", { firstName, lastName, emailId, password }, { withCredentials: true })
//       console.log(res.data)
//       dispatch(addUser(res.data.data))
//       return navigate("/profile")
//     }
//     catch (err) {
//       console.log(err.message)
//     }
//   }

//   return (
//     <div className="fixed inset-0 bg-gradient-to-br from-rose-500 via-pink-500 to-orange-500 overflow-y-auto">
//       <div className="min-h-screen flex items-center justify-center p-4">
//         <div className="w-full max-w-6xl mx-auto">
//           <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            
//             {/* Left Side - Content Section */}
//             <div className="flex-1 max-w-md lg:max-w-lg text-center lg:text-left">
//               <div className="space-y-6">
//                 {/* Logo/Brand */}
//                 <div className="inline-flex items-center justify-center lg:justify-start w-full">
//                   <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 inline-flex items-center space-x-2">
//                     <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                     </svg>
//                     <span className="text-2xl font-bold text-white">CodeSwipe</span>
//                   </div>
//                 </div>

//                 {/* Main Heading */}
//                 <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
//                   {isLoginForm ? "Welcome Back to" : "Join the"}
//                   <span className="block text-yellow-300">Developer's Dating Hub</span>
//                 </h1>

//                 {/* Description */}
//                 <p className="text-white/90 text-lg lg:text-xl">
//                   {isLoginForm 
//                     ? "Connect with like-minded developers who share your passion for coding and technology." 
//                     : "Find your perfect coding partner! Meet developers who understand your late-night debugging sessions and coffee addiction."}
//                 </p>

//                 {/* Features List */}
//                 <div className="space-y-3">
//                   <div className="flex items-center space-x-3 text-white/80">
//                     <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     <span>Connect with 1000+ developers</span>
//                   </div>
//                   <div className="flex items-center space-x-3 text-white/80">
//                     <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     <span>Find your coding soulmate</span>
//                   </div>
//                   <div className="flex items-center space-x-3 text-white/80">
//                     <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     <span>Pair programming never felt better</span>
//                   </div>
//                 </div>

//                 {/* Stats */}
//                 <div className="grid grid-cols-3 gap-4 pt-6">
//                   <div className="text-center lg:text-left">
//                     <div className="text-2xl font-bold text-white">10K+</div>
//                     <div className="text-white/70 text-sm">Active Users</div>
//                   </div>
//                   <div className="text-center lg:text-left">
//                     <div className="text-2xl font-bold text-white">5K+</div>
//                     <div className="text-white/70 text-sm">Successful Matches</div>
//                   </div>
//                   <div className="text-center lg:text-left">
//                     <div className="text-2xl font-bold text-white">100+</div>
//                     <div className="text-white/70 text-sm">Tech Communities</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Form Section */}
//             <div className="flex-1 w-full max-w-md">
//               <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
//                 <div className="p-6 sm:p-8">
//                   {/* Form Header */}
//                   <div className="text-center mb-6">
//                     <h2 className="text-2xl sm:text-3xl font-bold text-white">
//                       {isLoginForm ? "Sign In" : "Create Account"}
//                     </h2>
//                     <p className="text-white/70 mt-2 text-sm sm:text-base">
//                       {isLoginForm 
//                         ? "Enter your credentials to access your account" 
//                         : "Fill in your details to get started"}
//                     </p>
//                   </div>

//                   {/* Form Fields */}
//                   <div className="space-y-4">
//                     {!isLoginForm && (
//                       <>
//                         <div>
//                           <label className="block text-white text-sm font-medium mb-2">
//                             First Name
//                           </label>
//                           <input
//                             type="text"
//                             value={firstName}
//                             onChange={(e) => setFirstName(e.target.value)}
//                             className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
//                             placeholder="Enter your first name"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-white text-sm font-medium mb-2">
//                             Last Name
//                           </label>
//                           <input
//                             type="text"
//                             value={lastName}
//                             onChange={(e) => setLastName(e.target.value)}
//                             className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
//                             placeholder="Enter your last name"
//                           />
//                         </div>
//                       </>
//                     )}

//                     <div>
//                       <label className="block text-white text-sm font-medium mb-2">
//                         Email Address
//                       </label>
//                       <input
//                         type="email"
//                         value={emailId}
//                         onChange={(e) => setEmailId(e.target.value)}
//                         className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
//                         placeholder="Enter your email"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-white text-sm font-medium mb-2">
//                         Password
//                       </label>
//                       <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
//                         placeholder="Enter your password"
//                       />
//                     </div>
//                   </div>

//                   {/* Error Message */}
//                   {error && (
//                     <div className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-xl">
//                       <p className="text-red-100 text-sm text-center">{error}</p>
//                     </div>
//                   )}

//                   {/* Action Button */}
//                   <div className="mt-6">
//                     <button
//                       onClick={isLoginForm ? handleLogin : handleSignUp}
//                       className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 rounded-xl hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg text-sm sm:text-base"
//                     >
//                       {isLoginForm ? "Sign In" : "Create Account"}
//                     </button>
//                   </div>

//                   {/* Toggle Form */}
//                   <div className="mt-6 text-center">
//                     <button
//                       onClick={() => setLoginForm((value) => !value)}
//                       className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
//                     >
//                       {isLoginForm ? "New to CodeSwipe? Create an account" : "Already have an account? Sign in"}
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Trust Badge */}
//               <div className="mt-4 text-center">
//                 <p className="text-white/60 text-xs">
//                   🔒 Secure Login • 100% Privacy Guaranteed • 24/7 Support
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";

function Login() {

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [isLoginForm, setLoginForm] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {

      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));

      return navigate("/");

    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  const handleSignUp = async () => {
    try {

      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );

      dispatch(addUser(res.data.data));

      return navigate("/profile");

    } catch (err) {
      console.log(err.message);
    }
  };

  return (

    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-y-auto">

      <div className="min-h-screen flex items-center justify-center p-4">

        <div className="w-full max-w-6xl mx-auto">

          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">

            {/* LEFT SIDE */}

            <div className="flex-1 max-w-md lg:max-w-lg text-center lg:text-left">

              <div className="space-y-6">

                {/* LOGO */}

                <div className="inline-flex items-center justify-center lg:justify-start w-full">

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 inline-flex items-center space-x-2">

                    <span className="text-2xl font-bold text-white">
                      CodeSwipe 💻
                    </span>

                  </div>

                </div>

                {/* HEADING */}

                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">

                  {isLoginForm ? "Welcome Back to" : "Join"}

                  <span className="block text-yellow-400">
                    CodeSwipe
                  </span>

                </h1>

                {/* DESCRIPTION */}

                <p className="text-gray-300 text-lg lg:text-xl">

                  {isLoginForm
                    ? "Connect with developers, collaborate on projects and grow your coding network."
                    : "Find developers to collaborate with, get help in coding and build your developer network."}

                </p>

                {/* FEATURES */}

                <div className="space-y-3">

                  <div className="flex items-center space-x-3 text-gray-300">
                    <span>✔</span>
                    <span>Find freelance project partners</span>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-300">
                    <span>✔</span>
                    <span>Get help from experienced developers</span>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-300">
                    <span>✔</span>
                    <span>Build your developer network</span>
                  </div>

                </div>

                {/* STATS */}

                <div className="grid grid-cols-3 gap-4 pt-6">

                  <div>
                    <div className="text-2xl font-bold text-white">5K+</div>
                    <div className="text-gray-400 text-sm">Developers</div>
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-white">2K+</div>
                    <div className="text-gray-400 text-sm">Projects Built</div>
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-white">100+</div>
                    <div className="text-gray-400 text-sm">Tech Stacks</div>
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE FORM */}

            <div className="flex-1 w-full max-w-md">

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8">

                <div className="text-center mb-6">

                  <h2 className="text-2xl font-bold text-white">
                    {isLoginForm ? "Sign In" : "Create Account"}
                  </h2>

                </div>

                {/* FORM */}

                <div className="space-y-4">

                  {!isLoginForm && (
                    <>
                      <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-xl text-white"
                      />

                      <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-xl text-white"
                      />
                    </>
                  )}

                  <input
                    type="email"
                    placeholder="Email"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-xl text-white"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-xl text-white"
                  />

                </div>

                {/* ERROR */}

                {error && (
                  <p className="text-red-400 text-sm mt-3 text-center">
                    {error}
                  </p>
                )}

                {/* BUTTON */}

                <button
                  onClick={isLoginForm ? handleLogin : handleSignUp}
                  className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-xl hover:scale-105 transition"
                >

                  {isLoginForm ? "Sign In" : "Create Account"}

                </button>

                {/* TOGGLE */}

                <div className="mt-6 text-center">

                  <button
                    onClick={() => setLoginForm((value) => !value)}
                    className="text-gray-300 hover:text-white"
                  >

                    {isLoginForm
                      ? "New here? Create an account"
                      : "Already have an account? Sign In"}

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;

