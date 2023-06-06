import React, { useContext } from 'react'
import { SocketContext } from '../../utils/context/SocketContext';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MdCall, MdCallEnd } from 'react-icons/md';

function CallReceiveDialog() {
   
    const {caller, callType, peerId} = useSelector((state) => state.call);
    const socket = useContext(SocketContext);

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleAcceptCall = () => {
        console.log('accepting call', callType)
        const payload = { caller, peerId }

        if(callType === 'video') {
            socket.emit('onVideoCallAccept', payload);
        }else {
            socket.emit('onVoiceCallAccept', payload);
        }
    }

    const handleRejectCall = () => {
        console.log('rejecting call')
        const payload = { caller };
        if(callType === 'video') {
            socket.emit('onVideoCallRejected', payload);
        }else {
            socket.emit('onVoiceCallRejected', payload);
        }
    }

  return (
    <div className='fixed w-[60vw] h-[65vh] top-[20%] left-[25%] flex flex-col justify-between items-center px-4 py-4 rounded-xl shadow-lg bg-white z-50'>
        <div className='w-[90%] h-[70%] rounded-[50%] my-2'>
            <img className='object-cover object-center w-full h-full' src={'https://www.caltrain.com/files/images/2021-09/default.jpg'} alt="" />
        </div>
        <span className='text-2xl text-center my-2'>{`${caller.username} wants to ${callType == 'audio' ? 'voice' : 'video'} call you`}</span>
         <div className='flex justify-between items-center px-2 py-2 my-2 w-full'>
            <div className='flex-1/2 flex justify-center'>
              <MdCall size={35} className='cursor-pointer' onClick={() => handleAcceptCall()} />
            </div>
             <div className='flex-1/2 flex justify-center'>
                <MdCallEnd size={35} className='cursor-pointer' onClick={() => handleRejectCall()} />
            </div>
         </div>
    </div>
  )
}

export default CallReceiveDialog