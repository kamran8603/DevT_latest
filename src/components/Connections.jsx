// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { BASE_URL } from '../utils/constants'
// import { useDispatch, useSelector } from 'react-redux'
// import { addConnections } from "../utils/connectionsSlice"
// import { Link } from 'react-router-dom'

// function Connections() {
//     const dispatch = useDispatch()
//     const connections = useSelector((store) => store.connections)
//     const fetchConnection = async () => {
//         try {
//             const res = await axios.get(BASE_URL + "/user/connections", {
//                 withCredentials: true,
//             })
//             console.log(res.data.data)
//             dispatch(addConnections(res.data.data))
//         }
//         catch (err) {
//             console.error(err)
//         }
//     }
//     useEffect(() => {
//         fetchConnection()
//     }, [])
//     if (!connections) return
//     if (connections.length === 0) return <h1>No Connections Found</h1>
//     return (
//         <div className='text-center my-10 '>
//             <h1 className='text-bold text-white text-3xl'>Connections</h1>
//             {
//                 connections.map((connection) => {
//                     const {_id, firstName, lastName, photoUrl, age, gender, about } = connection;
//                     console.log(connection)
//                     return (
//                         <div key={_id} className=' flex  m-4 p-4 border-rounded-lg bg-base-300 w-1/2 mx-auto'>
//                             <div>
//                                 <img className='w-20 h-20 rounded-full object-contain' alt='photo' src={photoUrl} />
//                             </div>
//                             <div className='text-left mx-4'>
//                                 <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
//                                 {age && gender && <p>{age + ", " + gender}</p>}
//                                 <p>{about}</p>
                                
//                             </div>
//                             <Link to={"/chat/"+_id}>
//                             <button className='btn btn-primary'>Chat</button>
//                             </Link>
                            
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Connections

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { BASE_URL } from '../utils/constants';
// import { useDispatch, useSelector } from 'react-redux';
// import { addConnections } from "../utils/connectionsSlice";
// import { Link } from 'react-router-dom';

// function Connections() {
//     const dispatch = useDispatch();
//     const connections = useSelector((store) => store.connections);
//     const [loading, setLoading] = useState(true);

//     const fetchConnection = async () => {
//         setLoading(true);
//         try {
//             const res = await axios.get(BASE_URL + "/user/connections", {
//                 withCredentials: true,
//             });
//             console.log(res.data.data);
//             dispatch(addConnections(res.data.data));
//         } catch (err) {
//             console.error(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchConnection();
//     }, []);

//     if (loading) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//                     <p className="text-white mt-4">Loading connections...</p>
//                 </div>
//             </div>
//         );
//     }

//     if (!connections || connections.length === 0) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 flex items-center justify-center">
//                 <div className="text-center text-white">
//                     <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                     </svg>
//                     <p className="text-2xl font-bold">No Connections Found</p>
//                     <p className="text-gray-300 mt-2">You haven't connected with anyone yet. Start swiping!</p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-4xl mx-auto">
//                 {/* Header */}
//                 <div className="text-center mb-10">
//                     <h1 className="text-4xl font-bold text-white mb-2">Your Connections</h1>
//                     <p className="text-gray-300">Developers you've connected with</p>
//                 </div>

//                 {/* Connections List */}
//                 <div className="space-y-6">
//                     {connections.map((connection) => {
//                         const { _id, firstName, lastName, photoUrl, age, gender, about } = connection;
//                         return (
//                             <div
//                                 key={_id}
//                                 className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 transition transform hover:scale-105 duration-300"
//                             >
//                                 <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
//                                     {/* Avatar */}
//                                     <div className="flex-shrink-0">
//                                         <img
//                                             src={photoUrl || "https://via.placeholder.com/80"}
//                                             alt={`${firstName} ${lastName}`}
//                                             className="w-24 h-24 rounded-full object-cover border-4 border-white/30 shadow-lg"
//                                             onError={(e) => (e.target.src = "https://via.placeholder.com/80?text=User")}
//                                         />
//                                     </div>

//                                     {/* User Info */}
//                                     <div className="flex-1 text-center sm:text-left">
//                                         <h2 className="text-2xl font-bold text-white">
//                                             {firstName} {lastName}
//                                         </h2>
//                                         {(age || gender) && (
//                                             <p className="text-gray-300 text-sm mt-1">
//                                                 {age && `${age} yrs`} {gender && `• ${gender}`}
//                                             </p>
//                                         )}
//                                         {about && (
//                                             <p className="text-gray-200 text-sm mt-2 leading-relaxed">
//                                                 {about}
//                                             </p>
//                                         )}
//                                     </div>

//                                     {/* Chat Button */}
//                                     <Link to={`/chat/${_id}`}>
//                                         <button className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-full transition duration-200 flex items-center space-x-2 shadow-lg">
//                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                                             </svg>
//                                             <span>Chat</span>
//                                         </button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Connections;




import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from "../utils/connectionsSlice";
import { Link } from 'react-router-dom';

function Connections() {

    const dispatch = useDispatch();
    const connections = useSelector((store) => store.connections);
    const [loading, setLoading] = useState(true);

    const fetchConnection = async () => {

        setLoading(true);

        try {

            const res = await axios.get(BASE_URL + "/user/connections", {
                withCredentials: true,
            });

            dispatch(addConnections(res.data.data));

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchConnection();
    }, []);

    /* ---------------- LOADING ---------------- */

    if (loading) {

        return (

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">

                <div className="text-center">

                    <div className="w-14 h-14 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

                    <p className="text-gray-300 mt-4 text-lg">
                        Loading your connections...
                    </p>

                </div>

            </div>

        );
    }

    /* ---------------- EMPTY STATE ---------------- */

    if (!connections || connections.length === 0) {

        return (

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">

                <div className="text-center text-white">

                    <p className="text-3xl font-bold">
                        No Connections Yet 🤝
                    </p>

                    <p className="text-gray-400 mt-2">
                        Start swiping developers to build your network.
                    </p>

                </div>

            </div>

        );
    }

    /* ---------------- MAIN UI ---------------- */

    return (

        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4 py-10">

            <div className="max-w-4xl mx-auto">

                {/* HEADER */}

                <div className="text-center mb-10">

                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Your Connections
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Developers you've connected with
                    </p>

                </div>

                {/* CONNECTION LIST */}

                <div className="space-y-6">

                    {connections.map((connection) => {

                        const {
                            _id,
                            firstName,
                            lastName,
                            photoUrl,
                            age,
                            gender,
                            about
                        } = connection;

                        return (

                            <div
                                key={_id}
                                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition"
                            >

                                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

                                    {/* AVATAR */}

                                    <img
                                        src={photoUrl || "https://via.placeholder.com/100"}
                                        alt={`${firstName} ${lastName}`}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
                                        onError={(e) =>
                                            (e.target.src = "https://via.placeholder.com/100")
                                        }
                                    />

                                    {/* USER INFO */}

                                    <div className="flex-1 text-center md:text-left">

                                        <h2 className="text-2xl font-bold text-white">
                                            {firstName} {lastName}
                                        </h2>

                                        {(age || gender) && (
                                            <p className="text-gray-400 text-sm mt-1">
                                                {age && `${age} yrs`} {gender && `• ${gender}`}
                                            </p>
                                        )}

                                        {about && (
                                            <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                                                {about}
                                            </p>
                                        )}

                                    </div>

                                    {/* CHAT BUTTON */}

                                    <Link to={`/chat/${_id}`}>

                                        <button className="px-5 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-full transition shadow-lg flex items-center gap-2">

                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863
                                                    9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512
                                                    15.042 3 13.574 3 12c0-4.418
                                                    4.03-8 9-8s9 3.582 9 8z"
                                                />
                                            </svg>

                                            Chat

                                        </button>

                                    </Link>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </div>

    );
}

export default Connections;
