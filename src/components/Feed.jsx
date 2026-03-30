// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { BASE_URL } from '../utils/constants'
// import { useDispatch, useSelector } from 'react-redux'
// import { addFeed } from '../utils/feedSlice'
// import UserCard from './UserCard'
// function Feed() {
//   // it will give the whole feed we can access using selectore
//   const feed = useSelector((store)=>store.feed)

//   const dispatch = useDispatch()
//   const getFeed = async()=>{
    
//     //if feed isliye ki agar data redux me ho to api call ni krna hai 
//     if(feed) return
//     try{const res = await axios.get(BASE_URL+"/feed",{withCredentials:true})
//     dispatch(addFeed(res.data))
    
//   }
//     catch(err){
//       console.err(err)
//     }

//   }
//   useEffect(()=>{
//     getFeed()
//   },[])
//   if(!feed)return;
//   if(feed.length<=0) return <h1>No new Users founds!</h1>
//   return (
//     //condition lgaye hai agr mera when the feed is present then load the data otherwise dont loaded
//     // when there is a feed then it will load
//   feed && (  <div className='flex justify-center my-10'>
//      <UserCard user={feed[0]}/>
//     </div>
//   )
// )
// }

// export default Feed


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

function Feed() {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getFeed = async () => {
    // Only fetch if feed is empty
    if (feed && feed.length > 0) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(BASE_URL + '/feed', { withCredentials: true });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to load feed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeed();
  }, []); // only once on mount

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-white mt-4">Loading developers...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
        <div className="text-center text-white">
          <p className="text-red-400">{error}</p>
          <button
            onClick={getFeed}
            className="mt-4 px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!feed || feed.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
        <div className="text-center text-white">
          <p className="text-2xl font-bold">No new users found!</p>
          <p className="text-gray-300 mt-2">Check back later for more developers.</p>
        </div>
      </div>
    );
  }

  // The key prop ensures React creates a new UserCard instance when the user changes
  // This helps animations reset and the card to re‑mount properly.
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 p-4">
      <div className="w-full max-w-md">
        <UserCard key={feed[0]._id} user={feed[0]} />
      </div>
    </div>
  );
}

export default Feed;