import { useContext } from "react";
import { SocketContext } from "../utils/context/SocketContext";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetState } from "../store/features/callSlice";

export function useVideoCallRejected() {
    const socket = useContext(SocketContext);
    const dispatch = useDispatch();

    useEffect(() => {
        socket.on('onVideoCallRejected', (data) => {
            console.log('receiver rejected the call', data.receiver)
            dispatch(resetState())
        });

        return () => {
            socket.off('onVideoCallRejected');
        }
    }, []);
}