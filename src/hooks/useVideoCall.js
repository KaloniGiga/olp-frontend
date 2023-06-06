import { useContext } from "react";
import { SocketContext } from "../utils/context/SocketContext";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../utils/context/AuthContext";
import { useEffect } from "react";
import { setCallType, setCaller, setIsReceivingCall, setReceiver } from "../store/features/callSlice";

export function useVideoCall() {
    const socket = useContext(SocketContext);
    const dispatch = useDispatch();
    const { user } = useContext(AuthContext);

    const { isReceivingCall } = useSelector((state) => state.call);

    useEffect(() => {
       socket.on('onVideoCall', (data) => {
          console.log('receiving video call...');
          if(isReceivingCall) return;

          dispatch(setCaller(data.caller));
          dispatch(setReceiver(user));
          dispatch(setIsReceivingCall(true));
          dispatch(setCallType('video'));
       });

       return () => {
        socket.off('onVideoCall');
       }
    }, [isReceivingCall]);
}