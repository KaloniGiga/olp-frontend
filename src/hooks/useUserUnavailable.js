import { useContext, useEffect } from "react";
import { SocketContext } from "../utils/context/SocketContext";
import { useDispatch } from "react-redux";
import { resetState } from "../store/features/callSlice";
import { addCallMessage } from "../store/features/messageSlice";
import { updateConversation } from "../store/features/conversationSlice";


export function useUserUnavailable() {
    const socket = useContext(SocketContext);
    const dispatch = useDispatch();

    useEffect(() => {
        socket.on('onUserUnavailable', (data) => {
            console.log('user is unavailable')
            dispatch(addCallMessage(data));
            dispatch(updateConversation({ ...data.callDetail.conversation, lastMessageSent: {...data.callDetail.callDetail.conversation.lastMessageSent, call: data.callDetail.call }}));
            dispatch(resetState())
        })

        return () => {
            socket.off('onUserUnavailable')
        }
    })
}