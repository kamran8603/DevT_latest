import React from 'react'
import { useState } from 'react';
import UserCard from './UserCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

function EditProfile({ user }) {
    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [age, setAge] = useState(user.age || "")
    const [gender, setGender] = useState(user.gender || "")
    const [about, setAbout] = useState(user.about || "")
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl)
    const [error, setError] = useState("")
    const [showToast, setShowToast] = useState(false)
    const dispatch = useDispatch()

    const saveProfile = async () => {
        //clear errors jb error aa gya uske baad 
        // change krte hai to pehle error hat jaye then save ho
        setError("")
        try {
            const res = await axios.patch(BASE_URL + "/profile/edit", {
                firstName,
                lastName,
                photoUrl,
                age,
                gender,
                about
            }, { withCredentials: true }
            );
            dispatch(addUser(res?.data?.data))
            //THIS is used for notification when we save
            // profile notification and after 3 sec it will go
            setShowToast(true)
            setTimeout(() => {
                setShowToast(false)
            }, 3000)

        }
        catch (err) {
            setError(err.response.data)
        }
    }
    return (
        <>
            <div className='flex justify-center m-10' >


                <div className="flex justify-center mx-10 ">
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
                                    <legend className="fieldset-legend">Photo Url</legend>
                                    <input type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} className="input" />
                                </fieldset>


                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Gender</legend>
                                    <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} className="input" />
                                </fieldset>

                            
                                 <fieldset className="fieldset">
                                    <legend className="fieldset-legend">About</legend>
                                    {/* <input type="text" value={about} onChange={(e) => setAbout(e.target.value)} className="input" /> */}
                                    <textarea value={about} onChange={(e) => setAbout(e.target.value)} className="textarea" placeholder="Bio"></textarea>
                                </fieldset>


                            </div>
                            <p className="text-red-500">{error}</p>
                            <div className="card-actions justify-center m-2">
                                <button className="btn btn-primary" onClick={saveProfile} >Save Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                <UserCard user={{ firstName, lastName, photoUrl, age, gender, about }} />




            </div>


            {showToast && <div className="toast toast-top toast-center">

                <div className="alert alert-success">
                    <span>Profile Saved successfully.</span>
                </div>
            </div>}
        </>
    )
}

export default EditProfile
