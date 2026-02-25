
import { useDispatch, useSelector } from "react-redux"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from "react"
import { BASE_URL } from "../utils/constants"
import { addUser } from "../utils/userSlice"
import axios from "axios"

function Body() {
  const dispatch = useDispatch();
  const Navigate = useNavigate()
  const userData = useSelector((store) => store.user)

  const fetchUser = async () => {
    //yh isliye hai if my user is already
    // login tb woh api call ni krega store se data de dega
    if(userData) return
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true
      })
      dispatch(addUser(res.data))
    }
    catch (err) {
      if (err.status === 401) {
        Navigate("/login")

      }
      console.error(err)
    }
  }
  useEffect(() => {
    //tabhi api call kro jb mera data store me ni ho 
    
      fetchUser()
    

  }, [])
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body