import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {addConnections} from "../utils/connectionsSlice"

function Connections() {
    const dispatch = useDispatch()
    const connections = useSelector((store)=>store.connections)
    const fetchConnection = async ()=>{
        try{
            const res = await axios.get(BASE_URL+"/user/connections",{
                withCredentials:true,
            })
            console.log(res.data.data)
            dispatch(addConnections(res.data.data))
        }
        catch(err){
            console.error(err)
        }
    }
    useEffect(()=>{
        fetchConnection()
    },[])
    if(!connections)return
    if(connections.length===0) return <h1>No Connections Found</h1>
  return (
    <div className='flex justify-center my-10'>
      <h1 className='text-bold text 4xl'>Connections</h1>
      {
        connections.map((connection)=>(
            <div>{connection.firstName}</div>
        ))
      }
    </div>
  )
}

export default Connections
