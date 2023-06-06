import { useContext, useEffect } from "react";
import { SocketContext } from "../utils/context/SocketContext";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../store/features/callSlice";

export function useVideoCallHangUp() {
    const socket = useContext(SocketContext);
    const dispatch = useDispatch();

    const { call, connection, localStream, remoteStream } = useSelector((state) => state.call);

    useEffect(() => {
        socket.on('onVideoCallHangUp', () => {
            console.log('onVideoCallHangUp');

            localStream && localStream.getTracks().forEach((track) => {
                console.log(localStream.id);
                track.stop();
            });

            remoteStream && remoteStream.getTracks().forEach((track) => {
                 console.log(remoteStream.id);
                 track.stop();
            });

            call && call.close();
            connection && connection.close();
            dispatch(resetState())

        });

        return () => {
            socket.off('onVideoCallHangUp');
        }
    }, [call, remoteStream, localStream]);
}