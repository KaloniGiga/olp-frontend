import React from 'react'
import ChatPanel from './ChatPanel'
import ChatSidebar from './ChatSidebar'
import { Outlet, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { SocketContext } from '../../utils/context/SocketContext';
import { useEffect } from 'react';
import { addConversation, fetchConversationsThunk, updateConversation } from '../../store/features/conversationSlice';
import { addMessage } from '../../store/features/messageSlice';
import { deleteMessage } from '../../utils/api';
import { useMediaQuery } from 'react-responsive';

function ChatLayout() {
      
   const {id} = useParams();
   const dispatch = useDispatch();
   const socket = useContext(SocketContext);

   const isMobile = useMediaQuery({query: '(max-width: 768px)'});
  
   useEffect(() => {
      dispatch(fetchConversationsThunk());
   }, []);

   useEffect(() => {
     socket.on('onMessage', (payload) => {
        console.log('message received');
        const { conversation, message } = payload;
        dispatch(addMessage(payload));
        dispatch(updateConversation(conversation))
     })

     socket.on('onConversation', (payload) => {
        console.log('onConversationEvent');
        dispatch(addConversation(payload));
     })

     socket.on('onMessageDelete', (payload) => {
        console.log('onMessageDelete');
        console.log(payload);
        dispatch(deleteMessage(payload));
     })

     return () => {
        socket.off('connected');
        socket.off('onMessage');
        socket.off('onConversation');
        socket.off('onMessageDelete');
     }
   }, [id]);

  return (
      <div className="w-full min-h-[100vh] md:h-[90vh] md:bg-screen pt-[10vh]">
          <div className="chatsection md:py-5 md:px-4">
            <div className="messagesection">
                    <ChatSidebar />
                 {!isMobile &&   <Outlet />}
            </div>
          </div>
     </div>
  )
}

export default ChatLayout; 