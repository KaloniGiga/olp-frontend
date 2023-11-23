import React from "react";
import "../styles/ChatPerson.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { AuthContext } from "../utils/context/AuthContext";
import profileAvatar from '../images/olp_avatar.avif';
import { useEffect } from "react";
import { useState } from "react";
import {RxAvatar} from 'react-icons/rx';
import {CgProfile} from 'react-icons/cg';
import { updateSelectedConversation } from "../store/features/selectedConversationSlice";
import { MdCallMade, MdCallMissedOutgoing, MdCallReceived, MdOutlineCallMissed } from "react-icons/md";
import { format } from 'date-fns';
import { CiImageOn } from "react-icons/ci";
import { formatDistanceToNow } from 'date-fns'

const ChatPerson = ({ conversation }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useContext(AuthContext);
  const [recepient, setRecepient] = useState("");
  const {id} = useParams();
  
  const {selectedConversation, type} = useSelector((state) => state.selectedConversation);
  // console.log(conversation)
  useEffect(() => {
    console.log(conversation);
    if(!conversation.type) {
    setRecepient((user[0].id == (conversation && conversation.creator.id))
       ? conversation && conversation.recepient
       : conversation && conversation.creator
    )
    } else {
      console.log(conversation);
      setRecepient(conversation);
    }
   }, [conversation])

   const handleChatPersonClick = () => {
      updateSelectedConversation({conversation: conversation, type: ''});
      navigate(`/home/main/chat/conversation/${!conversation.type && conversation.id}`)
   }
   console.log(conversation);

   const [isOnline, setIsOnline] = useState(false);
   const {onlineConnections} = useSelector((state) => state.connection);

   useEffect(() => {
      if(onlineConnections && recepient) {
        const isAvailable = onlineConnections.find((conn) =>  conn.sender.id == recepient.id || conn.receiver.id == recepient.id);
        if(isAvailable) {
          console.log(isAvailable)
          setIsOnline(true);
        }
      }
   }, [onlineConnections, recepient])
 
  return (
    <>
      <div className={`chat-person items-center w-full py-2 xl:py-3 2xl:py-4 md:hover:bg-[#EAF3FF] ${ (id && id == conversation.id) ? 'bg-[#EAF3FF]' : (selectedConversation && selectedConversation.id == conversation.id)  && 'bg-[#EAF3FF]'} md:rounded-md overflow-hidden`} onClick={() => handleChatPersonClick()} >
      <div className="flex w-full">
        <div className="m-auto">
        <div className="w-[30px] relative h-[30px] lg:w-[40px] lg:h-[40px] rounded-[50%] mr-2 ">
          <img className="rounded-[50%] object-cover object-center w-full h-full"
            src={`${(recepient && recepient.avatarId) ? `${import.meta.env.VITE_BASE_URL}/user-avatar/${recepient && recepient.avatarId}` : <CgProfile size={30} />  }`}
            alt="chat-friend-img" 
          />
           
           
          {isOnline && (<div className={`absolute px-[2px] py-[2px] bg-white rounded-[50%] bottom-0 right-0`}>
             <span className="block w-[5px] h-[5px] lg:!w-[10px] lg:!h-[10px] rounded-[50%] bg-green-500"></span>
          </div>)}
                      {/* <p>{conversation && conversation.}</p> */}
                {/* <div className='ml-1 text-sm lg:text-lg'>{isOnline? 'Active' : 'Offline'}</div> */}
                 
        </div>
        </div>
        <div className="chat-person-name w-full"> 
          <h5 className="font-semibold text-md capitalize">{recepient && recepient.profile && recepient.profile.fullname}</h5>
          {/* <h6>{conversation && conversation.lastMessageSent}</h6> */}
          <div className="w-full">
            {
              conversation && (
                
                <>
                {conversation.type === 'createConversation' && (
                  <h3 className="text-md">Create new Conversation</h3>
                )}
                 {conversation.lastMessageSent && conversation.lastMessageSent.content && (
                    <h3 className=" text-sm line-clamp-1">{conversation.lastMessageSent.content}</h3>
                 )}

                 {conversation.lastMessageSent && !conversation.lastMessageSent.content && !conversation.lastMessageSent.call && (
                    <h3 className="flex items-center"><CiImageOn size={25} /><span className="ml-2">File message</span></h3>
                 )}

                 {conversation.lastMessageSent && conversation.lastMessageSent.call && (
                   <div className="w-full">
                     <span className="flex w-full items-center">{(
                      conversation.lastMessageSent.call.status == 'missed' 
                      || conversation.lastMessageSent.call.status == "initiate" 
                      || conversation.lastMessageSent.call.status == "rejected"
                    ) 
                    ?  
                    <>
                    {user[0].id === conversation.lastMessageSent.author.id ? (
                       <> 
                        <MdCallMissedOutgoing size={25} color="var(--primary)" /> 
                        <span className="ml-1 text-sm">Call Not Received</span>
                        </>
                    ) : (
                       <>
                        <MdOutlineCallMissed size={25} color="var(--primary)" />
                        <span className="ml-1 text-sm">Missed a Call</span>
                        </>
                    )}
                    
                    </>
                    : 
                    <>
                    {user[0].id === conversation.lastMessageSent.author.id ? (
                       <>
                         <MdCallMade size={20} color="var(--secondary)" /> 
                        <span className="ml-1 text-sm">Call finished.</span>
                        </>
                    ) : (
                       <>
                        <MdCallReceived size={20} color="var(--secondary)" />
                        <span className="ml-1 text-sm">Call received</span>
                        </>
                    )}
                    
                    </>
                    }
                    </span>
                  </div>


                 )

                 }
                 </>
              )
            }
          {/* <h5 className="line-clamp-2">{`${(conversation && conversation.lastMessageSent && conversation.lastMessageSent.content) ? conversation.lastMessageSent.content : ''}`}</h5> */}
         </div>
        </div>
        </div>
        <div className="chat-person-date-notification">
          {/* <h6>{}</h6> */}
          {/* <div className="chat-badge">10</div> */}
          {console.log(new Date(conversation.lastMessageSentAt))}
         <h6 className="text-sm 2xl:text-sm">{`${conversation && (!conversation.type ? (conversation.lastMessageSentAt && `${formatDistanceToNow(new Date(conversation.lastMessageSentAt))} ago`) : formatDistanceToNow(new Date(conversation.lastMessageSentAt)))}`}</h6>
        </div>
      </div>
    </>
  );
};

export default ChatPerson;
