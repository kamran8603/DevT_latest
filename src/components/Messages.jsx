import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";
import { Link, Outlet } from "react-router-dom";

function Messages() {

  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    const res = await axios.get(BASE_URL + "/user/connections", {
      withCredentials: true,
    });


    

    dispatch(addConnections(res.data.data));
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (

    <div className="h-screen bg-black text-white flex">

      {/* LEFT SIDEBAR */}

      <div className="w-[320px] border-r border-gray-800 bg-[#0f0f0f]">

        <div className="p-5 border-b border-gray-800">
          <h1 className="text-xl font-bold">Messages</h1>
        </div>

        <div className="overflow-y-auto">

          {connections?.map((user) => (

            <Link key={user._id} to={`/chat/${user._id}`}>

              <div className="flex items-center gap-3 p-4 hover:bg-[#1a1a1a] transition cursor-pointer">

                <img
                  src={user.photoUrl}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold">
                    {user.firstName} {user.lastName}
                  </p>

                  <p className="text-gray-400 text-sm">
                    Start chatting...
                  </p>
                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>


      {/* RIGHT CHAT WINDOW */}

      <div className="flex-1">

        <Outlet />

      </div>

    </div>

  );
}

export default Messages