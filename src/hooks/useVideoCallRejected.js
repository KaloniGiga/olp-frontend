import { useContext } from "react";
import { SocketContext } from "../utils/context/SocketContext";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetState } from "../store/features/callSlice";
import { addCallMessage, updateCallMessage } from "../store/features/messageSlice";
import { AuthContext } from "../utils/context/AuthContext";
import { updateConversation } from "../store/features/conversationSlice";

export function useVideoCallRejected() {
    const socket = useContext(SocketContext);
    const dispatch = useDispatch();
    const user = useContext(AuthContext);

    useEffect(() => {
        socket.on('onVideoCallRejected', (data) => {
            // console.log('receiver rejected the call', data.receiver)
            dispatch(resetState())
           if(data.caller.id === user[0].id) {
             dispatch(addCallMessage(data.callDetail));
           } else {
             dispatch(updateCallMessage(data.callDetail));
           }

           dispatch(updateConversation({...data.callDetail.conversation, lastMessageSent: {...data.callDetail.conversation.lastMessageSent, call: data.callDetail.call}}));
        });

        return () => {
            socket.off('onVideoCallRejected');
        }
    }, []);
}