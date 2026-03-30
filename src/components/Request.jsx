// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { BASE_URL } from '../utils/constants'
// import { useDispatch, useSelector } from 'react-redux'
// import { addRequests,removeRequest } from '../utils/requestSlice'

// function Request() {
//     const dispatch = useDispatch()
//     const requests = useSelector((store) => store.request)
//     const [showButtons, setShowButtons]= useState(true)
// //reject accepted api 
//     const reviewRequest = async(status, _id)=>{
//         try{
//           const res = axios.post(BASE_URL+"/request/review/"+status+"/"+_id,
//             {},
//             {withCredentials:true}
//           )
//           dispatch(removeRequest(_id))
//         }
//         catch(err){
//             console.log(err.message)
//         }
//     }

//     const fetchRequests = async () => {
//         try {
//             const res = await axios.get(BASE_URL + "/user/requests/received", {
//                 withCredentials: true,
//             })
//             console.log(res.data.data)
//             dispatch(addRequests(res.data.data))
//         }
//         catch (err) {
//             console.error(err)
//         }
//     }
//     useEffect(() => {
//         fetchRequests()
//     }, [])
//     if (!requests) return
//     if (requests.length === 0) return <h1 className='flex justify-center my-10'>No Request Found</h1>
//     return (
//         <div className='text-center my-10'>
//             <h1 className='text-bold text-white text-3xl'>Request</h1>
//             {
//                 requests.map((request) => {
//                     const {_id, firstName, lastName, photoUrl, age, gender, about } = request.fromUserId;
                
//                     return (
//                         <div key={_id} className=' flex justify-between items-center m-4 p-4 border-rounded-lg bg-base-300 w-2/3 mx-auto'>
//                             <div>
//                                 <img className='w-20 h-20 rounded-full' alt='photo' src={photoUrl} />
//                             </div>
//                             <div className='text-left mx-4'>
//                                 <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
//                                 {age && gender && <p>{age + ", " + gender}</p>}
//                                 <p>{about}</p>
//                             </div>
//                             <div>
//                                 <button className='btn btn-primary mx-2' onClick={()=>reviewRequest("rejected",request._id)}>Reject</button>
//                                 <button className='btn btn-secondary mx-2' onClick={()=>reviewRequest("accepted",request._id)}>Accept</button>

//                                 </div>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Request


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests, removeRequest } from '../utils/requestSlice';

function Request() {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store.request);
    const [loading, setLoading] = useState(true);

    const reviewRequest = async (status, _id) => {
        try {
            await axios.post(
                BASE_URL + "/request/review/" + status + "/" + _id,
                {},
                { withCredentials: true }
            );
            dispatch(removeRequest(_id));
        } catch (err) {
            console.log(err.message);
        }
    };

    const fetchRequests = async () => {
        setLoading(true);
        try {
            const res = await axios.get(BASE_URL + "/user/requests/received", {
                withCredentials: true,
            });
            dispatch(addRequests(res.data.data));
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="text-white mt-4">Loading requests...</p>
                </div>
            </div>
        );
    }

    if (!requests || requests.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 flex items-center justify-center">
                <div className="text-center text-white">
                    <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    <p className="text-2xl font-bold">No Requests Found</p>
                    <p className="text-gray-300 mt-2">You don't have any pending connection requests.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-white mb-2">Connection Requests</h1>
                    <p className="text-gray-300">People who want to connect with you</p>
                </div>

                {/* Requests List */}
                <div className="space-y-6">
                    {requests.map((request) => {
                        const { _id, firstName, lastName, photoUrl, age, gender, about } = request.fromUserId;
                        return (
                            <div
                                key={_id}
                                className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 transition transform hover:scale-105 duration-300"
                            >
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                    {/* Avatar */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src={photoUrl || "https://via.placeholder.com/80"}
                                            alt={`${firstName} ${lastName}`}
                                            className="w-24 h-24 rounded-full object-cover border-4 border-white/30 shadow-lg"
                                            onError={(e) => (e.target.src = "https://via.placeholder.com/80?text=User")}
                                        />
                                    </div>

                                    {/* User Info */}
                                    <div className="flex-1 text-center sm:text-left">
                                        <h2 className="text-2xl font-bold text-white">
                                            {firstName} {lastName}
                                        </h2>
                                        {(age || gender) && (
                                            <p className="text-gray-300 text-sm mt-1">
                                                {age && `${age} yrs`} {gender && `• ${gender}`}
                                            </p>
                                        )}
                                        {about && (
                                            <p className="text-gray-200 text-sm mt-2 leading-relaxed">
                                                {about}
                                            </p>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-3">
                                        <button
                                            onClick={() => reviewRequest("rejected", request._id)}
                                            className="px-5 py-2 bg-gray-700 hover:bg-red-600 text-white rounded-full transition duration-200 flex items-center space-x-2"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span>Reject</span>
                                        </button>
                                        <button
                                            onClick={() => reviewRequest("accepted", request._id)}
                                            className="px-5 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-full transition duration-200 flex items-center space-x-2"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Accept</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Request;