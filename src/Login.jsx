import React, { useState } from "react";

function Login() {
  const [emailId, setEmailId]= useState();
  const [password, setPassword]= useState()
  return (
    <div className="flex justify-center my-10 ">
      <div className="card bg-base-300 text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div className="">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email Id</legend>
              <input type="text" value={emailId} onChange={(e)=>setEmailId(e.target.value)} className="input"  />
            </fieldset>
            {/* //password */}
             <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password} className="input"  />
             
            </fieldset>
          </div>
          <div className="card-actions justify-end">
            <button className="btn brn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
