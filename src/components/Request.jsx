import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests } from '../utils/requestSlice'

function Request() {
    const dispatch = useDispatch()
    const requests = useSelector((store) => store.request)
//reject accepted api 
    const reviewRequest = async(status, _id)=>{
        try{
          const res = axios.post(BASE_URL+"/request/review/"+status+"/"+_id)
        }
        catch(err){
            console.log(err.message)
        }
    }

    const fetchRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/received", {
                withCredentials: true,
            })
            console.log(res.data.data)
            dispatch(addRequests(res.data.data))
        }
        catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        fetchRequests()
    }, [])
    if (!requests) return
    if (requests.length === 0) return <h1>No Request Found</h1>
    return (
        <div className='text-center my-10'>
            <h1 className='text-bold text-white text-3xl'>Request</h1>
            {
                requests.map((request) => {
                    const {_id, firstName, lastName, photoUrl, age, gender, about } = request.fromUserId;
                
                    return (
                        <div key={_id} className=' flex justify-between items-center m-4 p-4 border-rounded-lg bg-base-300 w-2/3 mx-auto'>
                            <div>
                                <img className='w-20 h-20 rounded-full' alt='photo' src={photoUrl} />
                            </div>
                            <div className='text-left mx-4'>
                                <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
                                {age && gender && <p>{age + ", " + gender}</p>}
                                <p>{about}</p>
                            </div>
                            <div>
                                <button className='btn btn-primary mx-2'>Rejected</button>
                                <button className='btn btn-secondary mx-2'>Accept</button>

                                </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Request
