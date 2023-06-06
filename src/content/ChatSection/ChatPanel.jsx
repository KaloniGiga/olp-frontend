import React, { useRef } from 'react'
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { SocketContext } from '../../utils/context/SocketContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchMessagesThunk } from '../../store/thunk/messagesThunk';
import { createMessage, editMessage } from '../../utils/api';
import { AuthContext } from '../../utils/context/AuthContext';
import { createConversationThunk, selectConversationById } from '../../store/features/conversationSlice';
import { RiSendPlaneFill } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { IoIosCall, IoIosVideocam } from "react-icons/io";
import { selectConversationMessage } from '../../store/features/messageSlice';
import Message from './Message';
import { initiateCallState } from '../../store/features/callSlice';
import ConversationVideoCall from './ConversationVideoCall';
import ConversationAudioCall from './ConversationAudioCall';
import profileAvatar from '../../images/olp_avatar.avif';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

function ChatPanel() {

   const {id} = useParams();
   const dispatch = useDispatch();
   const socket = useContext(SocketContext);
   const [isTyping, setIsTyping] = useState(false);
   const [isRecipientTyping, setIsRecipientTyping] = useState(false);
   const [time, setTime] = useState(null);
   const user = useContext(AuthContext);
   const conversation = useSelector((state) => selectConversationById(state, id));
   const [content, setContent] = useState("");
   const [attachments, setAttachments] = useState([]);
   const ref = useRef(null);
   const fileRef = useRef(null);
   const [timer, setTimer] = useState(null);
   const [showContent, setShowContent] = useState(false);
   const [message, setMessage] = useState('');
   const [recepient, setRecepient] = useState("");
   const [isMultiLine, setIsMultiLine] = useState(false);
   const [showEmoji, setShowEmoji] = useState(false);

   const { isCalling, isCallInProgress, activeConversationId, callType } = useSelector((state) => state.call)
   const showCallPanel = isCallInProgress || isCalling;
   
   const {selectedConversation, type} = useSelector((state) => state.selectedConversation);

   const isRouteActive = activeConversationId == id

  // console.log(showCallPanel, isRouteActive);

  // const handleButtonClick = () => {
  //   setShowContent(!showContent);
  // };

  const handleSelectEmoji = (emoji) => {
    console.log(emoji)
    setContent(content + emoji.native);
  };

  const handleShowEmoji = () => {
    setShowEmoji((prev) => !prev)
  }

  // useEffect(() => {
  //   if(showEmoji) {
  //    window.addEventListener('click', (e) => {
  //     // if(e.target.name !== 'emoji-picker') {
  //      setShowEmoji(false);
      
  //    })
  //   }
  // }, [])

   useEffect(() => {
    console.log(conversation && conversation.creator)
    setRecepient(conversation && user[0].id == conversation.creator.id
       ? conversation && conversation.recepient
       : conversation && conversation.creator
    )
   }, [conversation])

   useEffect(() => {
    if(!(type == 'createConversation')) {
     dispatch(fetchMessagesThunk(id))
    }
   }, [id])

    const conversationMessages = useSelector((state) => selectConversationMessage(state, id));

    const sendTypingStatus = () => {
     if(isTyping) {
       clearTimeout(timer);
       setTimer(
         setTimeout(() => {
           console.log('user stopped typing');
           socket.emit('onTypingStop', {conversationId: id})
           setIsTyping(false);
         }, 2000)
       )
     } else {
        setIsTyping(true);
        socket.emit('onTypingStart', {conversationId: id})
     }
   }
   useEffect(() => {
      // socket.emit('onConversationJoin', { conversationId: id });
      // socket.on('userJoin', () => {
      //   console.log('user joined')
      // })

      // socket.on('onuserLeave', () => {
      //   console.log('user leave')
      // });

      socket.on('onTypingStart', () => {
        console.log('onTypingStart');
        setIsRecipientTyping(true);
      })

      socket.on('onTypingStop', () => {
        console.log('onTyping Stop');
        setIsRecipientTyping(false);
      })

      socket.on('onMessageUpdate', (message) => {
        console.log('onMessageUpdate');
        dispatch(editMessage(message));
      })

      return () => {
        socket.off('onMessageUpdate');
        socket.off('onTypingStart');
        socket.off('onTypingStop');
        // socket.off('onuserJoin');
        // socket.off('onuserLeave');
        // socket.off('onConversationJoin');
        // socket.emit('onConversationLeave');
      }
   }, [id])
  const createConversation = async () => {
    const trimmedContent = content.trim();
    
    if(!trimmedContent && !attachments.length) return;
    const formData = new FormData();
    formData.append('userId', selectedConversation && selectedConversation.id);
    trimmedContent && formData.append('message', trimmedContent);
    
    attachments.forEach((attachment) => {
       formData.append('attachments', attachment.file)
    });
 
       attachments.forEach((attachment) => {
       formData.append('attachments', attachment.file)
    });

        try {
       dispatch(createConversationThunk(formData))
        setContent('');
        setAttachments([]);
    } catch (err) {
       console.log(err);
    }

  }

   const sendMessage = async () => {
    const trimmedContent = content.trim();
    if(!id) return ;
    if(!trimmedContent && !attachments.length) return;
    const formData = new FormData();
    trimmedContent && formData.append('message', trimmedContent);
    attachments.forEach((attachment) => {
       formData.append('attachments', attachment)
    });

    try {
        console.log(formData);
        await createMessage(id, formData);
        setContent('');
        setAttachments([]);
    } catch (err) {
       console.log(err);
    }
   };

   const onMessageChange = (e) => {

    e.preventDefault();
    setContent(e.target.value);

    const { current } = ref;
    if(current) {
       const height = parseInt(current.style.height);
       current.style.height = current.scrollHeight + 'px';
       height > 21 ? setIsMultiLine(true) : setIsMultiLine(false);
    }
   }

   const onKeyDown = (e) => {
     sendTypingStatus();
     if(e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
        if(ref.current) ref.current.style.height = '21px'
     }
   };

   const handleFileAdd = (files) => {
      const maxFilesDropped = 5 - attachments.length;
      if(maxFilesDropped === 0) return error('Max file reached');
       const filesArray = Array.from(files);
       for(let i = 0; i < filesArray.length; i++) {
          if(i === maxFilesDropped) break;
          setAttachments([...attachments, filesArray[i]]);
       }
   }

   const onDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const { files } = e.dataTransfer;
    handleFileAdd(files);
   }
    
   const onPaste = (e) => {
     const { files } = e.clipboardData;
     console.log('pasting...');
     handleFileAdd(files)
   }

   const fileInputChange = (e) => {
     const {files} = e.target;
     if(!files) return;
     handleFileAdd(files);
     
   } 

   const handleSelectFileClick = (e) => {
     fileRef.current.click();
   }

   const voiceCallUser = async () => {
     if(!recepient) return console.log('recepient is undefined')
     socket.emit('onVoiceCallInitiate', {
        conversationId: conversation.id,
        recepientId: recepient.id
     })

     const constraints = { video: false, audio: true}
     const stream = await navigator.mediaDevices.getUserMedia(constraints);
     console.log(stream);
     const payload = conversation && {
       localStream: stream,
       caller: user[0],
       receiver: recepient,
       callType: 'audio',
       activeConversationId: conversation.id,
       isCalling: true
     }

     if(!payload) return 'voice call payload is not defined'
     dispatch(initiateCallState(payload));
   }

   const videoCallUser = async () => {
     console.log(recepient)
      if(!recepient) return console.log('recepient is not defined');
      socket.emit('onVideoCallInitiate', {
        conversationId: conversation.id,
        recepientId: recepient.id
      })

      const constraints = { video: true, audio: true }
      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
            console.log(stream);
           const payload = conversation && {
          localStream: stream,
          caller: user[0],
          receiver: recepient,
          callType: 'video',
          activeConversationId: conversation.id,
          isCalling: true
         }
        if(!payload) return 'video call payload is not defined'
        dispatch(initiateCallState(payload))
      }).catch((error) => {
        console.log(error);
      });
    
   }
  return (
        <>
       {id || type == "createConversation" ? (
            <div className='w-[70%] ml-auto min-h-[90vh] md:h-full rounded-xl overflow-hidden relative md:rounded-tl-none md:rounded-bl-none'>
              <div className="w-full h-full">
                <div className="flex justify-between items-center border-b-[1px] border-[rgba(0, 0, 0, 0.7)]">
                  <div className="px-2 flex items-center justify-center basis-1/3">
                    <div className='relative w-[50px] h-[50px] md:w-[70px] md:h-[70px]  rounded-[50%] '>
                    <img
                      className='w-full h-full object-cover object-center rounded-[50%]'
                      src={profileAvatar}
                      alt="chat-profile"
                    />
                    </div>
                    <div className="">
                      <h5 className='font-semibold text-xl px-2 pt-2 pb-0'>
                         {type === 'createConversation' ? selectedConversation && selectedConversation.username : recepient && recepient.username}
                      </h5> 
                      <div className='flex items-center ml-2'>
                     <div className=" w-[10px] h-[10px] rounded-[50%] bg-green-500"></div>
                      {/* <p>{conversation && conversation.}</p> */}
                      <div className='ml-2 text-lg'>Active</div>
                    </div>
                    </div>
                  </div>
                 {!showCallPanel ? (
                   <div className="chat-name-icons mr-4">
                    <IoIosCall className="chat-voice-icon cursor-pointer" onClick={() => voiceCallUser()} />
                    <IoIosVideocam className="chat-video-icon cursor-pointer" onClick={() => videoCallUser()} />
                  </div>
                 ): (
                    <>
                    {isRouteActive && callType === 'video' ? (
                         <ConversationVideoCall />
                    ): (
                        <ConversationAudioCall />
                    )}
                    </>
                 )
                  }
                </div>
                <div className="w-full h-[72vh]">
                  <div className="chat-box w-full h-full flex flex-col-reverse overflow-y-auto">
                     {conversationMessages && conversationMessages.length === 0 && (<span>NO Conversation</span>)}
                     {conversationMessages && conversationMessages.messages.map((message, index) => {
                         return (
                          <Message key={index} message={message} isUserCreator={message.author.id == user[0].id ? true : false}/>
                         )
                     })}
                  </div>
                </div>
                {/* {showContent && (
                  <div className="emojieselection">
                    <button onClick={() => handleSelectEmoji("😀")}>😀</button>
                    <button onClick={() => handleSelectEmoji("😍")}>😍</button>
                    <button onClick={() => handleSelectEmoji("👍")}>👍</button>
                    <button onClick={() => handleSelectEmoji("❤️")}>❤️</button>
                  </div>
                )} */}
                <span>{isRecipientTyping ? `${recepient.username} is typing...`: ''}</span>
                <div className="chat-write absolute bg-screen bottom-2 left-0 mb-2 w-full ">
                 <span className='cursor-pointer' onClick={() => handleSelectFileClick()}><CiImageOn className="photoIcon" /></span> 
                 <input multiple type="file" accept='image/*' onChange={fileInputChange} className='hidden' ref={fileRef}/>
                  <div className="relative">
                    <BsEmojiSmile
                      className="emojiIcon"
                      onClick={() => handleShowEmoji()}
                    />
                     {showEmoji && <div name="emoji-picker" className='absolute bottom-[200%] left-[-250%] md:left-0'><Picker data={data} onEmojiSelect={handleSelectEmoji} /></div>}
                  </div>
                  <input
                    type="text"
                    ref={ref}
                    value={content}
                    onChange={(e) => onMessageChange(e)}
                    placeholder="Send a message"
                    onKeyDown={onKeyDown}
                    onDrop={onDrop}
                    onPaste={onPaste}
                    className='w-full px-2 pt-2 bg-white text-lg rounded-3xl align-middle bg-screen'
                  ></input>
                  <span onClick={type == 'createConversation' ? () => createConversation() : () => sendMessage()}><RiSendPlaneFill className="sendIcon" /></span>
                </div>
          
               </div>
           </div>
       ) : (
           <div className='w-[70%] ml-auto min-h-[80vh] flex justify-center items-center text-xl font-semibold'>
             <span className='text-center'>
               No Conversation Selected
             </span>
          </div>
       )}
  </>

  )
}

export default ChatPanel;