import { useContext } from "react";
import { AuthContext } from "../utils/context/AuthContext";
import { SocketContext } from "../utils/context/SocketContext";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setActiveConversationId, setCall, setConnection, setIsCallInProgress, setIsReceivingCall } from "../store/features/callSlice";

export function useVideoCallAccept() {

    const user = useContext(AuthContext);
    const socket = useContext(SocketContext);
    const dispatch = useDispatch();

    const { peer, localStream } = useSelector((state) => state.call);
    
    useEffect(() => {
        socket.on('onVideoCallAccept', (data) => {
            console.log('videoCallAccepted');
            dispatch(setIsCallInProgress(true));
            dispatch(setIsReceivingCall(false));
            dispatch(setActiveConversationId(data.conversation.id));
        
            if(!peer) return console.log('No peer');
            if(data.caller.id === user[0].id) {
                console.log(data);
                const connection = peer.connect(data.peerId);
                console.log(connection);
                dispatch(setConnection(connection));
              
            if(!connection) return console.log('No Connection');
             if(localStream) {
                console.log('local stream for caller exists');
                console.log(data.acceptor.peer.id);
                const newCall = peer.call(data.peerId, localStream);
                console.log(newCall);
                dispatch(setCall(newCall));
             }
            }
        });

        return () => {
            socket.off('onVideoCallAccept');
        }
    }, [localStream, peer, user])

}