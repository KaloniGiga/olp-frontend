import React from "react";
import "../styles/ChatPerson.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { AuthContext } from "../utils/context/AuthContext";
import profileAvatar from '../images/olp_avatar.avif';
import { useEffect } from "react";
import { useState } from "react";

const ChatPerson = ({ conversation }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useContext(AuthContext);
  const [recepient, setRecepient] = useState("");

  useEffect(() => {
    setRecepient(user[0].id === conversation && conversation.creator.id
       ? conversation && conversation.recipient
       : conversation && conversation.creator
    )
   }, [])

  return (
    <>
      <div className="chat-person w-full py-2 md:hover:bg-screen md:rounded-xl   overflow-hidden" onClick={() => navigate(`/home/chat/conversation/${conversation.id}`)}>
        <div className="chat-person-img w-[70px] h-[70px] rounded-[50%]">
          <img
            src={`${recepient && recepient.avatarId ? '' : profileAvatar  }`}
            alt="chat-friend-img"
          />
        </div>
        <div className="chat-person-name">
          <h6 className="font-semibold text-xl">{recepient && recepient.username}</h6>
          {/* <h6>{conversation && conversation.lastMessageSent}</h6> */}
          <h6 className="line-clamp-2">{`Hello how are you and how to make you day i?`}</h6>
        </div>
        <div className="chat-person-date-notification">
          {/* <h6>{}</h6> */}
          {/* <div className="chat-badge">10</div> */}
         <h6>{`5:43 AM`}</h6>
        </div>
      </div>
    </>
  );
};

export default ChatPerson;
