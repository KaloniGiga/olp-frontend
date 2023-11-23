import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../utils/context/AuthContext'
import { SocketContext } from '../utils/context/SocketContext';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchConnectionRequestThunk } from '../store/thunk/connectionsThunk';
import Peer from 'peerjs';
import { setCall, setLocalStream, setPeer, setPeerId, setRemoteStream } from '../store/features/callSlice';
import { addConnection, removeConnectionRequest } from '../store/features/connectionSlice';
import { useVoiceCallRejected } from '../hooks/useVoiceCallRejected';
import { useVoiceCallHangUp } from '../hooks/useVoiceCallHangUp';
import { useVoiceCallAccept } from '../hooks/useVoiceCallAccept';
import { useVoiceCall } from '../hooks/useVoiceCall';
import { useVideoCallHangUp } from '../hooks/useVideoCallHangUp';
import { useVideoCallAccept } from '../hooks/useVideoCallAccept';
import { useVideoCall } from '../hooks/useVideoCall';
import { useVideoCallRejected } from '../hooks/useVideoCallRejected';
import { useConnectionRequestReceived } from '../hooks/useConnectionRequestReceived';
import CallReceiveDialog from '../newComponent/Call/CallReceiveDialog';
import { useUserUnavailable } from '../hooks/useUserUnavailable';
import { addToast } from '../store/features/toastSlice';
import { addNotification, increaseNotification } from '../store/features/notificationSlice';
import { fetchUnreadNotificationThunk } from '../store/thunk/notificationThunk';

function AppLayout({children}) {

    const user = useContext(AuthContext);
    const socket = useContext(SocketContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { peer, call, isReceivingCall, caller, connection, callType } = useSelector((state) => state.call);

    useEffect(() => {
        dispatch(fetchConnectionRequestThunk())
    }, [dispatch])
    
    useEffect(() => {
      if(user) {
        console.log(user[0].lastReadNotification);
      dispatch(fetchUnreadNotificationThunk(user[0].lastReadNotification));
      }
    }, [user])

    useEffect(() => {
      if(!user) return;
      const newPeer = new Peer();
      dispatch(setPeer(newPeer));
      
    }, [user]);
    useConnectionRequestReceived()
    useVideoCall();

    useEffect(() => {
       peer && peer.on('open', (id) => {
         console.log(`My peer ${id}`)
          dispatch(setPeerId(id));
       })
    }, [peer])

    useEffect(() => {
       socket.on('onConnectionRequestCancelled', (payload) => {
          console.log('onConnectionRequestCancelled');
          dispatch(removeConnectionRequest(payload));
       });

       socket.on('onConnectionRequestAccepted', (payload) => {
           console.log('onConnectionRequestAccepted');
           if(payload.connectionRequest.sender.id == user[0].id) {
           dispatch(removeConnectionRequest(payload.connectionRequest));
           }

           dispatch(addConnection(payload.connection));
           socket.emit('getConnectionOnline');
          //  if(payload.connectionRequest.sender.id == user[0].id) {
          //  dispatch(
          //   addToast({kind: 'INFO', msg: `${payload.connectionRequest.receiver.username} accepted your connection request`})
          //  )
          //  }
       });

       socket.on('onConnectionRequestRejected', (payload) => {
         console.log('onConnectionRequestRejected');
         dispatch(removeConnectionRequest(payload));
       });

       socket.on('onNotificationReceived', (payload) => {
         console.log('NotificationReceived');
         dispatch(addNotification(payload))
         dispatch(increaseNotification());
       })

       return () => {
        socket.off('onConnectionRequestCancelled');
        socket.off('onConnectionRequestAccepted');
        socket.off('onConnectionRequestRejected');
        socket.off('onNotificationReceived');
       }
    }, [socket, isReceivingCall]);


    useEffect(() => {
       if(!peer) return console.log('peer is empty in inoming call');
       peer.on('call', async (incomingCall) => {
             
          const constraints = { video: callType === 'video', audio: true};

          navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
          console.log(stream)
          incomingCall.answer(stream);
          dispatch(setLocalStream(stream));
          dispatch(setCall(incomingCall));
          }).catch((error) => {
            console.log(error);
          })
        
       });

       return () => {
        peer.off('call');
       }
    }, [peer, callType, dispatch]);

    useEffect(() => {
       if(!call) return;
       call.on('stream', (remoteStream) => dispatch(setRemoteStream(remoteStream)))

       call.on('close', () => console.log('call was closed'));

       return () => {
         call.off('stream');
         call.off('close');
       }
    }, [call])


    useVideoCallAccept();
    useVideoCallRejected();
    useVideoCallHangUp();
    
    useVoiceCall();
    useVoiceCallAccept();
    useVoiceCallHangUp();
    useVoiceCallRejected();
    useUserUnavailable();

    useEffect(() => {
      if(connection) {
        console.log('connection is up')
           
         if(connection) {
           connection.on('open', () => {
             console.log('connection opened');
           })

            connection.on('error', () => {
             console.log('an error occured');
           })

             connection.on('data', (data) => {
             console.log('data received', data);
           })

             connection.on('close', () => {
             console.log('connection closed');
           })
         }
        return () => {
           connection.off('open');
           connection.off('error');
           connection.off('data');
          }
        }
    }, [connection]);

  return (

    <div className=''>
      {isReceivingCall && caller && <CallReceiveDialog />}
       {children}
      
    </div>
  )
}

export default AppLayout;