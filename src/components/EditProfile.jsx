// import React from 'react'
// import { useState } from 'react';
// import UserCard from './UserCard';
// import axios from 'axios';
// import { BASE_URL } from '../utils/constants';
// import { useDispatch } from 'react-redux';
// import { addUser } from '../utils/userSlice';

// function EditProfile({ user }) {
//     const [firstName, setFirstName] = useState(user.firstName)
//     const [lastName, setLastName] = useState(user.lastName)
//     const [age, setAge] = useState(user.age || "")
//     const [gender, setGender] = useState(user.gender || "")
//     const [about, setAbout] = useState(user.about || "")
//     const [photoUrl, setPhotoUrl] = useState(user.photoUrl)
//     const [error, setError] = useState("")
//     const [showToast, setShowToast] = useState(false)
//     const dispatch = useDispatch()

//     const saveProfile = async () => {
//         //clear errors jb error aa gya uske baad 
//         // change krte hai to pehle error hat jaye then save ho
//         setError("")
//         try {
//             const res = await axios.patch(BASE_URL + "/profile/edit", {
//                 firstName,
//                 lastName,
//                 photoUrl,
//                 age,
//                 gender,
//                 about
//             }, { withCredentials: true }
//             );
//             dispatch(addUser(res?.data?.data))
//             //THIS is used for notification when we save
//             // profile notification and after 3 sec it will go
//             setShowToast(true)
//             setTimeout(() => {
//                 setShowToast(false)
//             }, 3000)

//         }
//         catch (err) {
//             setError(err.response.data)
//         }
//     }
//     return (
//         <>
//             <div className='flex justify-center m-10' >


//                 <div className="flex justify-center mx-10 ">
//                     <div className="card bg-base-300 text-primary-content w-96">
//                         <div className="card-body">
//                             <h2 className="card-title">Edit Profile</h2>
//                             <div className="">
//                                 {/* yeh firstName ke liye hai  */}
//                                 <fieldset className="fieldset">
//                                     <legend className="fieldset-legend">First Name</legend>
//                                     <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input" />
//                                 </fieldset>
//                                 {/* yeh last name ke liye hai  */}
//                                 <fieldset className="fieldset">
//                                     <legend className="fieldset-legend">Last Name</legend>
//                                     <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input" />
//                                 </fieldset>

//                                 <fieldset className="fieldset">
//                                     <legend className="fieldset-legend">Age</legend>
//                                     <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="input" />
//                                 </fieldset>

//                                  <fieldset className="fieldset">
//                                     <legend className="fieldset-legend">Photo Url</legend>
//                                     <input type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} className="input" />
//                                 </fieldset>


//                                 <fieldset className="fieldset">
//                                     <legend className="fieldset-legend">Gender</legend>
//                                     <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} className="input" />
//                                 </fieldset>

                            
//                                  <fieldset className="fieldset">
//                                     <legend className="fieldset-legend">About</legend>
//                                     {/* <input type="text" value={about} onChange={(e) => setAbout(e.target.value)} className="input" /> */}
//                                     <textarea value={about} onChange={(e) => setAbout(e.target.value)} className="textarea" placeholder="Bio"></textarea>
//                                 </fieldset>


//                             </div>
//                             <p className="text-red-500">{error}</p>
//                             <div className="card-actions justify-center m-2">
//                                 <button className="btn btn-primary" onClick={saveProfile} >Save Profile</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <UserCard user={{ firstName, lastName, photoUrl, age, gender, about }} />




//             </div>


//             {showToast && <div className="toast toast-top toast-center">

//                 <div className="alert alert-success">
//                     <span>Profile Saved successfully.</span>
//                 </div>
//             </div>}
//         </>
//     )
// }

// export default EditProfile

import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

function EditProfile({ user }) {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age || "");
    const [gender, setGender] = useState(user.gender || "");
    const [about, setAbout] = useState(user.about || "");
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();

    const saveProfile = async () => {
        setError("");
        try {
            const res = await axios.patch(BASE_URL + "/profile/edit", {
                firstName,
                lastName,
                photoUrl,
                age,
                gender,
                about
            }, { withCredentials: true });
            dispatch(addUser(res?.data?.data));
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        } catch (err) {
            setError(err.response.data);
        }
    };

    // Preview user data
    const previewUser = {
        firstName,
        lastName,
        photoUrl,
        age,
        gender,
        about,
        _id: "preview" // dummy id for key
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 p-6">
            {/* Toast Notification */}
            {showToast && (
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-fadeInDown">
                    <div className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Profile saved successfully!</span>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white">Edit Profile</h1>
                    <p className="text-gray-300 mt-2">Update your information and see how it looks on your profile card</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Edit Form */}
                    <div className="flex-1 w-full">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6">
                            <h2 className="text-xl font-semibold text-white mb-6">Personal Details</h2>
                            
                            <div className="space-y-5">
                                {/* First Name */}
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">First Name</label>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition"
                                        placeholder="Your first name"
                                    />
                                </div>
                                
                                {/* Last Name */}
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition"
                                        placeholder="Your last name"
                                    />
                                </div>

                                {/* Age */}
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Age</label>
                                    <input
                                        type="number"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition"
                                        placeholder="Your age"
                                    />
                                </div>

                                {/* Gender */}
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Gender</label>
                                    <select
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition"
                                    >
                                        <option value="" className="text-gray-900">Select gender</option>
                                        <option value="Male" className="text-gray-900">Male</option>
                                        <option value="Female" className="text-gray-900">Female</option>
                                        <option value="Other" className="text-gray-900">Other</option>
                                    </select>
                                </div>

                                {/* Photo URL */}
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Photo URL</label>
                                    <input
                                        type="text"
                                        value={photoUrl}
                                        onChange={(e) => setPhotoUrl(e.target.value)}
                                        className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition"
                                        placeholder="https://example.com/photo.jpg"
                                    />
                                </div>

                                {/* About / Bio */}
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">About / Bio</label>
                                    <textarea
                                        rows="4"
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                        className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition resize-none"
                                        placeholder="Tell others about yourself..."
                                    ></textarea>
                                </div>

                                {/* Error */}
                                {error && (
                                    <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                                        <p className="text-red-100 text-sm">{error}</p>
                                    </div>
                                )}

                                {/* Save Button */}
                                <div className="pt-4">
                                    <button
                                        onClick={saveProfile}
                                        className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-2 rounded-lg hover:from-red-600 hover:to-pink-600 transition transform hover:scale-105 duration-200 shadow-lg"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Live Preview Card */}
                    <div className="flex-1 w-full">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6">
                            <h2 className="text-xl font-semibold text-white mb-6">Live Preview</h2>
                            <div className="transform scale-95 origin-top">
                                {/* Reusing UserCard but passing dummy user - we'll make a simplified preview */}
                                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                    <div className="relative h-80">
                                        <img
                                            src={photoUrl || "https://via.placeholder.com/400x500"}
                                            alt="Preview"
                                            className="w-full h-full object-cover"
                                            onError={(e) => e.target.src = "https://via.placeholder.com/400x500?text=No+Image"}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                        {(age || gender) && (
                                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                                                {age && `${age} yrs`} {gender && `• ${gender}`}
                                            </div>
                                        )}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <h2 className="text-3xl font-bold">{firstName} {lastName}</h2>
                                            {about && <p className="text-gray-200 text-sm mt-1 line-clamp-2">{about}</p>}
                                        </div>
                                    </div>
                                    <div className="p-5 space-y-3">
                                        {about && (
                                            <div>
                                                <div className="flex items-center space-x-2 text-gray-700">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                    <span className="font-semibold">About</span>
                                                </div>
                                                <p className="text-gray-600 text-sm mt-1">{about}</p>
                                            </div>
                                        )}
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">React</span>
                                            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Node.js</span>
                                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">TypeScript</span>
                                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Python</span>
                                        </div>
                                        <div className="flex justify-center space-x-4 pt-2">
                                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center opacity-50">
                                                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center opacity-50">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-white/60 text-sm mt-4">This is how your profile will appear to others</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Keyframes for toast animation */}
            <style jsx>{`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translate(-50%, -20px);
                    }
                    to {
                        opacity: 1;
                        transform: translate(-50%, 0);
                    }
                }
                .animate-fadeInDown {
                    animation: fadeInDown 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}

export default EditProfile;