import { useContext } from "react";
import { SocketContext } from "../utils/context/SocketContext";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetState } from "../store/features/callSlice";

export function useVoiceCallRejected() {
    const socket = useContext(SocketContext);
    const dispatch = useDispatch();

    useEffect(() => {
        socket.on('onVoiceCallRejected', (data) => {
            dispatch(resetState());
        })

        return () => {
            socket.off('onVoiceCallRejected');
        };
    }, []);
}