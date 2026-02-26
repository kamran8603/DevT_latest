import React from 'react'
import { useState } from 'react';

function EditProfile({user}) {
    const [firstName, setFirstName]=useState(user.firstName)
    const [lastName, setLastName]=useState(user.lastName)
    const [age, setAge]=useState(user.age)
    const [gender, setGender]= useState(user.gender)
    const [about, setAbout]= useState(user.about)
    const [photoUrl, setPhotoUrl]=useState(user.photoUrl)
  console.log(user)
     const [error, setError]= useState("")
  return (
    <div>


        <div className="flex justify-center my-10 ">
      <div className="card bg-base-300 text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">Edit Profile</h2>
          <div className="">
             {/* yeh firstName ke liye hai  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">First Name</legend>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input" />
            </fieldset>
             {/* yeh last name ke liye hai  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Last Name</legend>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input" />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Age</legend>
              <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="input" />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Gender</legend>
              <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} className="input" />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">About</legend>
              <input type="text" value={about} onChange={(e) => setAbout(e.target.value)} className="input" />
            </fieldset>

             <fieldset className="fieldset">
              <legend className="fieldset-legend">Photo Url</legend>
              <input type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} className="input" />
            </fieldset>
           
            
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" >Save Profile</button>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default EditProfile
