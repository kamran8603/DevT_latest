import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'
function Feed() {
  // it will give the whole feed we can access using selectore
  const feed = useSelector((store)=>store.feed)

  const dispatch = useDispatch()
  const getFeed = async()=>{
    
    //if feed isliye ki agar data redux me ho to api call ni krna hai 
    if(feed) return
    try{const res = await axios.get(BASE_URL+"/feed",{withCredentials:true})
    dispatch(addFeed(res.data))
    
  }
    catch(err){
      console.err(err)
    }

  }
  useEffect(()=>{
    getFeed()
  },[])
  if(!feed)return;
  if(feed.length<=0) return <h1>No new Users founds!</h1>
  return (
    //condition lgaye hai agr mera when the feed is present then load the data otherwise dont loaded
    // when there is a feed then it will load
  feed && (  <div className='flex justify-center my-10'>
     <UserCard user={feed[0]}/>
    </div>
  )
)
}

export default Feed
