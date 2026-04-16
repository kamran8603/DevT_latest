// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { BASE_URL } from "../utils/constants.js"
// import {removeUser} from "../utils/userSlice.js"

// const Navbar = () => {
//   const user = useSelector((store) => store.user);
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const handleLogout = async () => {
//     try {
//       await axios.post(BASE_URL + "/logout",{}, { withCredentials: true })
//       dispatch(removeUser())
//      return navigate("/login")
//     }
//     catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <div>
//       <div className="navbar bg-base-300 shadow-sm">
//         <div className="flex-1">
//           <Link to="/" className="btn btn-ghost text-xl">👨‍💻Dev_Lookup</Link>
//         </div>
//         {
//           user && (
//             <div className="flex-none gap-2">
//               <div className="form-control">Welcome, {user.firstName}</div>

//               <div className="dropdown dropdown-end mx-5 flex ">

//                 <div
//                   tabIndex={0}
//                   role="button"
//                   className="btn btn-ghost btn-circle avatar"
//                 >
//                   <div className="w-10 rounded-full">
//                     <img
//                       alt="user photo"
//                       src={user.photoUrl}
//                     />
//                   </div>
//                 </div>
//                 <ul
//                   tabIndex="-1"
//                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//                 >
//                   <li>
//                     <Link to="/profile" className="justify-between">
//                       Profile
//                       <span className="badge">New</span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/connections">Connections</Link>
//                   </li>

//                    <li>
//                     <Link to="/requests">Request</Link>
//                   </li>
//                   <li>
//                     <a onClick={handleLogout}>Logout</a>
//                   </li>
//                 </ul>
//               </div>


//             </div>
//           )
//         }

//       </div>
//     </div>
//   );
// };

// export default Navbar;



import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants.js"
import { removeUser } from "../utils/userSlice.js"
import { useState } from "react";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      return navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2 group">
              {/* Animated Heart Icon */}
              <div className="relative">
                <svg 
                  className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 animate-pulse group-hover:scale-110 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <div className="absolute inset-0 animate-ping opacity-75">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 bg-clip-text text-transparent group-hover:from-red-400 group-hover:via-pink-400 group-hover:to-orange-400 transition-all duration-300">
                CodeSwipe
              </span>
            </Link>
            
            {/* Tagline - Hidden on mobile */}
            <div className="hidden md:block border-l border-gray-700 pl-3 ml-2">
              <p className="text-gray-400 text-xs">Find your perfect coding partner ❤️</p>
            </div>
          </div>

          {/* Desktop Navigation - Only when user is logged in */}
          {user && (
            <div className="hidden md:flex items-center space-x-6">
              {/* Welcome Message with Badge */}
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-gray-300 text-sm">
                  Welcome back, <span className="text-white font-semibold">{user.firstName}</span>
                </span>
              </div>

              {/* Navigation Links */}
              <div className="flex space-x-2">
                <Link 
                  to="/profile" 
                  className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2 group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Profile</span>
                  <span className="px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full animate-pulse">New</span>
                </Link>
                
                <Link 
                  to="/connections" 
                  className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2 group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Connections</span>
                </Link>
                
                <Link 
                  to="/requests" 
                  className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2 group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span>Requests</span>
                </Link>
              </div>

              {/* User Avatar Dropdown */}
              <div className="relative">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="group cursor-pointer"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full ring-2 ring-red-500 ring-offset-2 ring-offset-gray-900 group-hover:ring-red-400 transition-all duration-300">
                        <img
                          alt="user photo"
                          src={user.photoUrl || "https://via.placeholder.com/40"}
                          className="w-full h-full rounded-full object-cover"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/40";
                          }}
                        />
                      </div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
                    </div>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-gray-800 rounded-xl mt-3 w-56 p-2 shadow-2xl border border-gray-700"
                  >
                    <li className="border-b border-gray-700 pb-2 mb-2">
                      <div className="px-4 py-2">
                        <p className="text-white font-semibold">{user.firstName} {user.lastName}</p>
                        <p className="text-gray-400 text-xs truncate">{user.emailId}</p>
                      </div>
                    </li>
                    <li>
                      <Link to="/profile" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/connections" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        My Connections
                      </Link>
                    </li>
                    <li>
                      <Link to="/requests" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        Connection Requests
                      </Link>
                    </li>
                    <li className="border-t border-gray-700 mt-2 pt-2">
                      <button onClick={handleLogout} className="text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg w-full">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          {user && (
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {user && isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 animate-slideDown">
            <div className="flex flex-col space-y-3">
              {/* Welcome Message */}
              <div className="flex items-center space-x-3 px-4 py-2 bg-gray-800/50 rounded-lg">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full ring-2 ring-red-500">
                    <img
                      alt="user photo"
                      src={user.photoUrl || "https://via.placeholder.com/32"}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-gray-900"></div>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{user.firstName} {user.lastName}</p>
                  <p className="text-gray-400 text-xs">{user.emailId}</p>
                </div>
              </div>

              {/* Navigation Links */}
              <Link 
                to="/profile" 
                className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg flex items-center space-x-3 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Profile</span>
                <span className="px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">New</span>
              </Link>
              
              <Link 
                to="/connections" 
                className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg flex items-center space-x-3 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Connections</span>
              </Link>
              
              <Link 
                to="/requests" 
                className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg flex items-center space-x-3 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span>Requests</span>
              </Link>
              
              <button 
                onClick={handleLogout}
                className="px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg flex items-center space-x-3 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;