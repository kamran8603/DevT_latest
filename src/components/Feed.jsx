import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
function Feed() {
  // it will give the whole feed we can access using selectore
  const feed = useSelector((store)=>store.feed)

  const dispatch = useDispatch()
  const getFeed = async()=>{
    
    //if feed isliye ki agar data redux me ho to api call ni krna hai 
    if(feed) return
    try{const res = await axios.get(BASE_URL+"/feed",{withCredentials:true})
    dispatch(addFeed(res.data))
    console.log(res.data)
  }
    catch(err){
      console.log(err)
    }

  }
  useEffect(()=>{
    getFeed()
  },[])
  return (
    <div>
      this is my feed
    </div>
  )
}

export default Feed
