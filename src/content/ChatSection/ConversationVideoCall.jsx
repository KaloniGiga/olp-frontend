import React, { useContext, useState } from 'react'
import { SocketContext } from '../../utils/context/SocketContext';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  BiMicrophone,
  BiMicrophoneOff,
  BiVideo,
  BiVideoOff,
} from 'react-icons/bi';
import { ImPhoneHangUp } from 'react-icons/im';

function ConversationVideoCall() {

   const [videoEnabled, setVideoEnabled] = useState(true);
   const [microphoneEnabled, setMicrophoneEnabled] = useState(true);

   const socket = useContext(SocketContext);
   const localVideoRef = useRef(null);
   const remoteVideoRef = useRef(null);

   const {localStream, remoteStream, caller, receiver } = useSelector((state) => state.call);

   useEffect(() => {
         console.log('localStream was update', localStream);
         if(localVideoRef.current && localStream) {
           localVideoRef.current.srcObject = localStream;
           localVideoRef.current.muted = true;
         }
   }, [localStream])

   useEffect(() => {
     if(remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream;
     }
   }, [remoteStream]);


   const toggleMicrophone = () => {
     localStream && setMicrophoneEnabled((prev) => {
       localStream.getAudioTracks()[0].enabled = !prev;
      return !prev;
     })
   }

   const toggleVideo = () => {
     localStream && setVideoEnabled((prev) => {
        localStream.getVideoTracks()[0].enabled = !prev;
       return !prev;
     })
   }

   const closeCall = () => {
     socket.emit('onVideoCallHangUp', { caller, receiver });
   };

  return (
    <div className='fixed w-[90vw] h-[90vh] top-[5%] left-[5%] z-50 flex flex-col justify-center bg-white rounded-xl shadow-lg'>
      <div className='flex justify-between w-full h-[90%]'>
      {localStream && (
        <div className='basis-1/2 h-[90%] '>
        <video className='h-full w-full' ref={localVideoRef} playsInline autoPlay />
        </div>
      )}

      {remoteStream && (
        <div className='basis-1/2 h-[90%] '>
        <video ref={remoteVideoRef} playsInline autoPlay className='w-full h-full' />
        </div>
      )}
      </div>

       <div className='flex justify-around items-center'>
          <div>
             {videoEnabled ? (
               <BiVideo size={35} onClick={toggleVideo} className='cursor-pointer' />
             ) : (
               <BiVideoOff size={35} onClick={toggleVideo} className='cursor-pointer' />
             )}
          </div>

          <div>
            {
              microphoneEnabled ? (
                <BiMicrophone size={35} onClick={toggleMicrophone} className='cursor-pointer' />
              ) : (
                <BiMicrophoneOff size={35} onClick={toggleMicrophone} className='cursor-pointer' />
              )
            }
          </div>

          <div>
             <ImPhoneHangUp size={35} onClick={closeCall} className='cursor-pointer' />
          </div>
      </div>
    </div>
  )
}

export default ConversationVideoCall