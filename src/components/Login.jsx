import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux"
import { BASE_URL } from "../utils/constants";


function Login() {
  const [emailId, setEmailId] = useState("elon@gmail.com");
  const [password, setPassword] = useState("Elon@123");
  const [error, setError]= useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async () => {

    try {
      const res = await axios.post(BASE_URL + "/login", {
        emailId,
        password
      }, { withCredentials: true })
     
      dispatch(addUser(res.data))
      return navigate("/")
    }
    catch (err) {
      setError(err?.response?.data  || "Something went wrong")
      
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
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
