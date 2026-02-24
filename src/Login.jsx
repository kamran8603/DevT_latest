import React, { useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { addUser } from "./utils/userSlice";
import{useDispatch} from "react-redux"
function Login() {
  const [emailId, setEmailId] = useState("elon@gmail.com");
  const [password, setPassword] = useState("Elon@123");
  const dispatch = useDispatch()
const navigate = useNavigate()

  const handleLogin = async () => {
    
    try {
      const res = await axios.post("http://localhost:7777/login", {
        emailId,
        password
      }, { withCredentials: true })
      // console.log(res.data)
      dispatch(addUser(res.data))
     return navigate("/")
    }
    catch (err) {
      console.log(err)
    }

  }

  return (
    <div className="flex justify-center my-10 ">
      <div className="card bg-base-300 text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div className="">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email Id: {emailId}</legend>
              <input type="text" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="input" />
            </fieldset>
            {/* //password */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} className="input" />

            </fieldset>
          </div>
          <div className="card-actions justify-end">
            <button className="btn brn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
