import { useContext } from "react"
import { AuthContext } from "../utils/context/AuthContext"
import { SocketContext } from "../utils/context/SocketContext";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setActiveConversationId, setCall, setConnection, setIsCallInProgress, setIsReceivingCall } from "../store/features/callSlice";

export function useVoiceCallAccept(){

    const user = useContext(AuthContext);
    const socket = useContext(SocketContext);
    const dispatch = useDispatch();

    const { peer, localStream } = useSelector((state) => state.call);

    useEffect(() => {
      socket.on('onVoiceCallAccept', (data) => {
         if(!peer) return console.log('Audio, No Peer');
         console.log('onVoiceCallAccept')
         dispatch(setActiveConversationId(data.conversation.id));
         dispatch(setIsCallInProgress(true));
         dispatch(setIsReceivingCall(false));
          
         if(data.caller.id === user[0].id) {
            console.log('audio: connecting to peer now');

            const connection = peer.connect(data.peerId);
            console.log(connection);
            dispatch(setConnection(connection));

            if(!connection) return console.log('No connection');

            if(localStream) {
                const newCall = peer.call(data.peerId, localStream);
                dispatch(setCall(newCall));
            }
         }
      });

      return () => {
        socket.off('onVoiceCallAccept');
      }
    }, [localStream, peer])
}