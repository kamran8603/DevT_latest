import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";
import { createSocketConnection } from "../utils/socket";

function Messages() {

  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  const user = useSelector((store) => store.user);

  const userId = user?._id;

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [lastMessages, setLastMessages] = useState({});

  // fetch connections
  const fetchConnections = async () => {

    const res = await axios.get(BASE_URL + "/user/connections", {
      withCredentials: true,
    });

    dispatch(addConnections(res.data.data));
  };

  // fetch chat messages
  const fetchChatMessages = async (targetUserId) => {

    const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
      withCredentials: true,
    });

    const chatMessages = chat?.data?.messages.map((msg) => {

      const { senderId, text, createdAt } = msg;

      return {
        firstName: senderId?.firstName,
        lastName: senderId?.lastName,
        text,
        createdAt,
      };
    });

    setMessages(chatMessages);

    const lastMsg = chatMessages[chatMessages.length - 1];

    if (lastMsg) {
      setLastMessages((prev) => ({
        ...prev,
        [targetUserId]: lastMsg.text,
      }));
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  useEffect(() => {

    if (!selectedUserId) return;

    fetchChatMessages(selectedUserId);

  }, [selectedUserId]);

  // socket connection
  useEffect(() => {

    if (!userId || !selectedUserId) return;

    const socket = createSocketConnection();

    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId: selectedUserId,
    });

    socket.on("messageReceived", ({ firstName, lastName, text }) => {

      setMessages((messages) => [
        ...messages,
        { firstName, lastName, text },
      ]);

      setLastMessages((prev) => ({
        ...prev,
        [selectedUserId]: text,
      }));

    });

    return () => socket.disconnect();

  }, [userId, selectedUserId]);

  // send message
  const sendMessage = () => {

    if (!newMessage.trim()) return;

    const socket = createSocketConnection();

    socket.emit("sendMessage", {
      firstName: user.firstName,
      lastName: user.lastName,
      userId,
      targetUserId: selectedUserId,
      text: newMessage,
    });

    setNewMessage("");

  };

  return (

    <div className="h-screen bg-black text-white flex">

      {/* LEFT CONNECTIONS */}

      <div className="w-[300px] border-r border-gray-800 bg-[#0f0f0f]">

        <div className="p-5 border-b border-gray-800">
          <h1 className="text-xl font-bold">Messages</h1>
        </div>

        <div className="overflow-y-auto">

          {connections?.map((user) => (

            <div
              key={user._id}
              onClick={() => setSelectedUserId(user._id)}
              className="flex items-center gap-3 p-4 hover:bg-[#1a1a1a] border-b border-gray-800 transition cursor-pointer"
            >

              <img
                src={user.photoUrl}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div className="flex-1">

                <p className="font-semibold">
                  {user.firstName} {user.lastName}
                </p>

                <p className="text-gray-400 text-sm truncate w-[170px]">
                  {lastMessages[user._id] || "Start chatting..."}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* RIGHT CHAT */}

      <div className="flex-1 flex items-center justify-center">

        {!selectedUserId ? (

          <div className="text-gray-400 text-lg">
            Select a conversation 💬
          </div>

        ) : (

          <div className="h-[70vh] w-full max-w-xl flex flex-col bg-[#0f0f0f] border border-gray-800 rounded-xl shadow-xl overflow-hidden">

            <div className="px-6 py-4 border-b border-gray-800 bg-[#141414]">
              <h1 className="font-semibold text-lg">Developer Chat 💬</h1>
            </div>

            {/* CHAT MESSAGES */}

            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">

              {messages.map((msg, index) => {

                const isMe = user.firstName === msg.firstName;

                return (

                  <div
                    key={index}
                    className={`flex ${isMe ? "justify-end" : "justify-start"}`}
                  >

                    <div
                      className={`
                      max-w-[65%] px-4 py-3 rounded-2xl text-sm
                      ${isMe
                          ? "bg-blue-600 text-white"
                          : "bg-[#1f1f1f] text-gray-200"}
                      `}
                    >

                      <div className="text-xs text-gray-400 mb-1">
                        {msg.firstName} {msg.lastName}
                      </div>

                      <div>{msg.text}</div>

                      <div className="text-[10px] text-gray-400 text-right mt-1">
                        {msg.createdAt
                          ? new Date(msg.createdAt).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : ""}
                      </div>

                    </div>

                  </div>

                );

              })}

            </div>


            {/* INPUT */}

            <div className="border-t border-gray-800 bg-[#141414] px-5 py-4 flex gap-3 items-center">

              <input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type message..."
                className="flex-1 bg-[#1f1f1f] text-white px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={sendMessage}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                Send
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Messages;