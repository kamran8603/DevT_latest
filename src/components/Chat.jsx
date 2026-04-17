import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createSocketConnection } from '../utils/socket'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'


function Chat() {
    const { targetUserId } = useParams()
    const [messages, setMessages] = useState([])
    //this useState is used to send the message
    const [newMessage, setNewMessage] = useState("")
    // we get the user id from redux
    const user = useSelector(store => store.user)
    const userId = user?._id

    const fetchChatMessages = async () => {
        const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
            withCredentials: true,
        })
        console.log(chat.data.messages);
        const chatMessages = chat?.data?.messages.map((msg) => {
            const {senderId, text,createdAt}= msg
            return { 
                firstName: senderId?.firstName,
                 lastName: senderId?.lastName, 
                 text,
                 createdAt,
                }
        })
        setMessages(chatMessages)
    }
    useEffect(()=>{
        fetchChatMessages()
    },[])

    //we just start creating scoket Connection
    useEffect(() => {
        //agar mera userId ni hoga to connection craete ni krega
        if (!userId) {
            return
        }
        const socket = createSocketConnection();
        //as soon as the page loaded the socket connection is made and joinChat event is emmited
        // this joinChat is a event
        socket.emit("joinChat", {
            firstName: user.firstName,
            userId,
            targetUserId
        })
        //this is to receive the message from the user
        socket.on("messageReceived", ({ firstName,lastName, text }) => {
            console.log(firstName + " : " + text)
            setMessages(messages => [...messages, { firstName,lastName, text }])
        })

        //   as soon as component is unmount this connection should be disconnect
        return () => {
            socket.disconnect()
        }

    }, [userId, targetUserId])
    //make sure when you create connection disconnection should be also there
    const sendMessage = () => {
        //phir se scoket ka connection krna pdega kyuki woh useEffcet me kiye page load hone pr
        const socket = createSocketConnection()
        //yh ek event hai jo user ke action pr hoga
        socket.emit("sendMessage", {
            firstName: user.firstName,
            lastName:user.lastName,
            userId,
            targetUserId,
            text: newMessage
        })
        setNewMessage("")
    }


    console.log(targetUserId)
    return (
        <div className='w-1/2 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col'>
            <h1 className='p-5 border-b border-gray-600'>Chat</h1>
            <div className='flex-1 overflow-scroll p-5'>
                {
                    messages.map((msg, index) => {
                        return (
                            <div key={index} className={
                                "chat " +
                                (user.firstName === msg.firstName ? "chat-end" : "chat-start")
                            }>
                                <div className="chat-header">
                                    {`${msg.firstName} ${msg.lastName}`}
                                    <time className="text-xs opacity-50">{new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</time>
                                </div>
                                <div className="chat-bubble">{msg.text}</div>
                                <div className="chat-footer opacity-50">Seen</div>
                            </div>
                        )
                    })
                }

            </div>
            <div className='p-5 border-t border-gray-600 items-center flex gap-2'>
                <input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className='bg-black flex-1 bordr border-gray-500 text-white rounded p-2' />
                <button onClick={sendMessage} className='btn btn-secondary'>Send</button>
            </div>

        </div>
    )
}

export default Chat
