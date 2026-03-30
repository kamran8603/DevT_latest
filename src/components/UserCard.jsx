// import axios from 'axios';
// import React from 'react'
// import { BASE_URL } from '../utils/constants';
// import { useDispatch } from 'react-redux';
// import { removeUserFromFeed } from '../utils/feedSlice';

// function UserCard({ user }) {
//     const {_id, firstName, lastName, photoUrl, age, gender, about } = user;
//     const dispatch= useDispatch()
//     const handleSendRequest = async (status, userId) => {
//         try {
//             const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {},
//                 { withCredentials: true }
//             )
//             dispatch(removeUserFromFeed(userId))
//         }
//         catch (err) {
//             console.log(err.message)
//         }
//     }
//     return (
//         <div>

//             <div className="card bg-base-300 w-96 shadow-sm">
//                 <figure>
//                     <img
//                         src={user.photoUrl}
//                         alt="Shoes" />
//                 </figure>
//                 <div className="card-body">
//                     <h2 className="card-title">{firstName + " " + lastName}</h2>
//                     {age && gender && <p>{age + ", " + gender}</p>}
//                     <p>{about}</p>
//                     <div className="card-actions justify-center my-4">
//                         <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
//                         <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default UserCard


import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

function UserCard({ user }) {
    const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
    const dispatch = useDispatch();
    const [swipeDirection, setSwipeDirection] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);
    const [showFeedback, setShowFeedback] = useState(null);
    const [isLoadingNext, setIsLoadingNext] = useState(false);
    const cardRef = useRef(null);

    const handleSendRequest = async (status, userId) => {
        // Show immediate feedback
        setShowFeedback({
            type: status === 'interested' ? 'success' : 'danger',
            message: status === 'interested' ? '✨ You are interested! ✨' : '👎 Rejected'
        });
        setTimeout(() => setShowFeedback(null), 1500);

        // Show loading spinner
        setIsLoadingNext(true);
        // Hide loading after 2 seconds (UI-only, doesn't affect actual loading)
        const timer = setTimeout(() => setIsLoadingNext(false), 2000);

        try {
            const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {},
                { withCredentials: true }
            );
            dispatch(removeUserFromFeed(userId));
        } catch (err) {
            console.log(err.message);
            setShowFeedback({
                type: 'error',
                message: 'Something went wrong'
            });
            setTimeout(() => setShowFeedback(null), 2000);
            clearTimeout(timer);
            setIsLoadingNext(false);
        }
    };

    // Reset loading state when user changes (new profile appears)
    useEffect(() => {
        setIsLoadingNext(false);
    }, [user]);

    // Swipe handlers (unchanged)
    const handleTouchStart = (e) => {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        setStartX(clientX);
        setIsDragging(true);
        setSwipeDirection(null);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const diff = clientX - startX;
        setCurrentX(diff);
        
        if (cardRef.current) {
            const rotate = diff * 0.1;
            cardRef.current.style.transform = `translateX(${diff}px) rotate(${rotate}deg)`;
            cardRef.current.style.transition = 'none';
            
            if (diff > 50) setSwipeDirection('right');
            else if (diff < -50) setSwipeDirection('left');
            else setSwipeDirection(null);
        }
    };

    const handleTouchEnd = () => {
        if (!isDragging) return;
        const threshold = 100;
        if (currentX > threshold) {
            setSwipeDirection('right');
            if (cardRef.current) {
                cardRef.current.style.transform = `translateX(1000px) rotate(30deg)`;
                cardRef.current.style.transition = 'transform 0.3s ease-out';
            }
            setTimeout(() => handleSendRequest("interested", _id), 300);
        } 
        else if (currentX < -threshold) {
            setSwipeDirection('left');
            if (cardRef.current) {
                cardRef.current.style.transform = `translateX(-1000px) rotate(-30deg)`;
                cardRef.current.style.transition = 'transform 0.3s ease-out';
            }
            setTimeout(() => handleSendRequest("ignored", _id), 300);
        }
        else {
            if (cardRef.current) {
                cardRef.current.style.transform = 'translateX(0) rotate(0)';
                cardRef.current.style.transition = 'transform 0.3s ease-out';
            }
            setSwipeDirection(null);
        }
        
        setIsDragging(false);
        setCurrentX(0);
        setStartX(0);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 pt-20 pb-24 relative overflow-hidden">
            {/* FULL‑SCREEN ANIMATED BACKGROUND */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800"></div>
                <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 -right-40 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-40 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Toast Feedback */}
            {showFeedback && (
                <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-fadeInDown">
                    <div className={`px-6 py-3 rounded-full shadow-lg text-white font-semibold flex items-center space-x-2 ${
                        showFeedback.type === 'success' ? 'bg-green-500' : 
                        showFeedback.type === 'danger' ? 'bg-red-500' : 'bg-gray-700'
                    }`}>
                        {showFeedback.type === 'success' && <span>❤️</span>}
                        {showFeedback.type === 'danger' && <span>💔</span>}
                        <span>{showFeedback.message}</span>
                    </div>
                </div>
            )}

            {/* Loading indicator (UI only – disappears after 2s) */}
            {isLoadingNext && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-40">
                    <div className="bg-white/90 rounded-2xl p-6 flex flex-col items-center space-y-3">
                        <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-700 font-medium">Finding next developer...</p>
                    </div>
                </div>
            )}

            {/* Swipe Card */}
            <div 
                ref={cardRef}
                className="relative w-full max-w-md cursor-grab active:cursor-grabbing select-none"
                onMouseDown={handleTouchStart}
                onMouseMove={handleTouchMove}
                onMouseUp={handleTouchEnd}
                onMouseLeave={handleTouchEnd}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ touchAction: 'none' }}
            >
                {/* Swipe Indicators */}
                {swipeDirection === 'right' && (
                    <div className="absolute top-10 right-8 z-20 transform rotate-12 animate-bounce">
                        <div className="bg-green-500 text-white px-6 py-2 rounded-full text-xl font-bold shadow-lg border-2 border-white/50 backdrop-blur-sm">
                            LIKE
                        </div>
                    </div>
                )}
                {swipeDirection === 'left' && (
                    <div className="absolute top-10 left-8 z-20 transform -rotate-12 animate-bounce">
                        <div className="bg-red-500 text-white px-6 py-2 rounded-full text-xl font-bold shadow-lg border-2 border-white/50 backdrop-blur-sm">
                            NOPE
                        </div>
                    </div>
                )}

                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
                    <div className="relative h-96">
                        <img
                            src={photoUrl || "https://via.placeholder.com/400x500"}
                            alt={`${firstName} ${lastName}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/400x500?text=No+Image";
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        {(age || gender) && (
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                                {age && `${age} yrs`} {gender && `• ${gender}`}
                            </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h2 className="text-3xl font-bold">{firstName} {lastName}</h2>
                            {about && (
                                <p className="text-gray-200 text-sm mt-1 line-clamp-2">{about}</p>
                            )}
                        </div>
                    </div>

                    <div className="p-6 space-y-4">
                        {about && (
                            <div>
                                <div className="flex items-center space-x-2 text-gray-700">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span className="font-semibold">About</span>
                                </div>
                                <p className="text-gray-600 text-sm mt-1 leading-relaxed">{about}</p>
                            </div>
                        )}

                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">React</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">Node.js</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">TypeScript</span>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">Python</span>
                        </div>

                        <div className="flex justify-center space-x-8 pt-4">
                            <button
                                onClick={() => handleSendRequest("ignored", _id)}
                                className="group relative w-14 h-14 bg-gray-200 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md"
                            >
                                <svg className="w-7 h-7 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span className="absolute -bottom-8 text-xs text-gray-500 group-hover:text-red-500 transition-colors">
                                    Ignore
                                </span>
                            </button>
                            <button
                                onClick={() => handleSendRequest("interested", _id)}
                                className="group relative w-14 h-14 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md"
                            >
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span className="absolute -bottom-8 text-xs text-gray-500 group-hover:text-pink-500 transition-colors">
                                    Interested
                                </span>
                            </button>
                        </div>

                        <div className="text-center pt-4 text-xs text-gray-400">
                            <span>Swipe left to ignore • Swipe right to like</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
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
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
                    50% { opacity: 0.5; }
                    100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
                }
                .animate-float {
                    animation: float linear infinite;
                }
            `}</style>
        </div>
    );
}

export default UserCard;