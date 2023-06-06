import { useContext } from "react";
import { SocketContext } from "../utils/context/SocketContext";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../utils/context/AuthContext";
import { useEffect } from "react";
import { setCallType, setCaller, setIsReceivingCall, setReceiver } from "../store/features/callSlice";

export function useVoiceCall() {
    const socket = useContext(SocketContext);
    const dispatch = useDispatch();
    const { user } = useContext(AuthContext);

    const { isReceivingCall } = useSelector((state) => state.call);

    useEffect(() => {
        socket.on('onVoiceCall', (data) => {
            console.log('receiving voice call');
            if(isReceivingCall) return;

            dispatch(setCaller(data.caller));
            dispatch(setReceiver(user));
            dispatch(setIsReceivingCall(true));
            dispatch(setCallType('audio'));
        })
  
       return () => {
         socket.off('onVoiceCall');
       }
   }, [isReceivingCall]);
}