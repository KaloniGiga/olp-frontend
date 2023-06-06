import React, { useRef, useState } from 'react'
import { useContext } from 'react';
import { SocketContext } from '../../utils/context/SocketContext';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  BiMicrophone,
  BiMicrophoneOff,
  BiVideo,
  BiVideoOff,
} from 'react-icons/bi';
import { ImPhoneHangUp } from 'react-icons/im';


function ConversationAudioCall() {

  const localAudioRef = useRef(null);
  const remoteAudioRef = useRef(null);

   const [microphoneEnabled, setMicrophoneEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);

  const socket = useContext(SocketContext);
  const { caller, receiver, localStream, remoteStream } = useSelector((state) => state.call );

  useEffect(() => {
      
    if(localAudioRef.current && localStream) {
       localAudioRef.current.srcObject = localStream;
       localAudioRef.current.muted = true;
    }
  }, [localStream])

  useEffect(() => {
     if(remoteAudioRef.current && remoteStream) {
       remoteAudioRef.current.srcObject = remoteStream;
     }
  })

    const toggleMicrophone = () =>
    localStream &&
    setMicrophoneEnabled((prev) => {
      localStream.getAudioTracks()[0].enabled = !prev;
      return !prev;
    });

  const toggleVideo = () =>
    localStream &&
    setVideoEnabled((prev) => {
      localStream.getVideoTracks()[0].enabled = !prev;
      return !prev;
    });

    const closeCall = () => {
       socket.emit('onVoiceCallHangUp', { caller, receiver});
    }

  return (
          <div className='fixed w-[90vw] h-[90vh] top-[5%] left-[5%] z-50 flex flex-col justify-center bg-white rounded-xl shadow-lg'>
      <div className='flex justify-between w-full h-[90%]'>
      {localStream && (
        <div className='basis-1/2 h-[90%] '>
        <video className='h-full w-full' ref={localAudioRef} playsInline autoPlay />
        </div>
      )}

      {remoteStream && (
        <div className='basis-1/2 h-[90%] '>
        <video ref={remoteAudioRef} playsInline autoPlay className='w-full h-full' />
        </div>
      )}
      </div>

       <div className='flex justify-around items-center'>
          {/* <div>
             {videoEnabled ? (
               <BiVideo size={35} onClick={toggleVideo} className='cursor-pointer' />
             ) : (
               <BiVideoOff size={35} onClick={toggleVideo} className='cursor-pointer' />
             )}
          </div> */}

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

export default ConversationAudioCall