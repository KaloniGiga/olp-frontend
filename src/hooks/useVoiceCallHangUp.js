import { useContext } from "react";
import { SocketContext } from "../utils/context/SocketContext";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resetState } from "../store/features/callSlice";

export function useVoiceCallHangUp() {
    const socket = useContext(SocketContext);
    const dispatch= useDispatch();
    const { call, connection, localStream, remoteStream } = useSelector((state) => state.call);

    useEffect(() => {
        socket.on('onVoiceCallHangUp', () => {
            console.log('onvoiceCall Hangup');

            localStream && localStream.getTracks().forEach((track) => {
                track.stop();
            })

            remoteStream && remoteStream.getTracks().forEach((track) => {
                track.stop();
            })

            call && call.close();
            connection && connection.close();
            dispatch(resetState());
        });

        return () => {
            socket.off('onVoiceCallHangUp');
        }
    }, [call, remoteStream, localStream])
}