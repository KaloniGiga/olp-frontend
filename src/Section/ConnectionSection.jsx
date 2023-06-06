import React, { useContext } from 'react'
import ConnectionCard from '../newComponent/ConnectionCard/ConnectionCard'
import { useDispatch, useSelector } from 'react-redux';
import { SocketContext } from '../utils/context/SocketContext';
import { useEffect } from 'react';
import { fetchConnectionsThunk } from '../store/thunk/connectionsThunk';
import { removeConnection, setOfflineConnections, setOnlineConnections } from '../store/features/connectionSlice';
import { RiArrowDownSFill } from 'react-icons/ri';

function ConnectionSection() {

     const dispatch = useDispatch();
     const socket = useContext(SocketContext);

     useEffect(() => {
          dispatch(fetchConnectionsThunk());
     }, [dispatch])


     useEffect(() => {
          socket.emit('getConnectionOnline');

         const interval = setInterval(() => {
           socket.emit('getConnectionOnline');
          }, 100000)

          socket.on('onConnectionRemoved', (connection) => {
             console.log('connection removed');
             dispatch(removeConnection(connection));
             socket.emit('getConnectionOnline');
          })

          return () => {
               clearInterval(interval);
               socket.off('onConnectionRemoved');
               socket.off('getConnectionOnline');
          }
     }, [])


     useEffect(() => {
         socket.on('getConnectionOnline', (connections)  => {
            
            dispatch(setOnlineConnections(connections));
            dispatch(setOfflineConnections());
         })
     }, [])

     const { connections, loading, onlineConnections, offlineConnections } = useSelector((state) => state.connection);

     if(loading) { 
        return  (
     <div className="w-screen h-screen flex justify-center items-center">
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={{}}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
      )}
      
  return (

    <div className='flex w-[80%] mx-auto flex-col my-3 rounded-xl overflow-hidden'>
     <div className='px-2 border-b-2 border-[rgba(0, 0, 0, 0.6)] flex justify-between py-1' onClick={() => setShowRequests((prev) => !prev)}>
            <h2 className='text-lg font-bold text-[rgba(0, 0, 0, 0.6)] xl:text-xl mx-2 '>Your Connection </h2>
             {/* <span><RiArrowDownSFill size={25} /></span> */}
     </div>  
      <div className='w-full'>
          {onlineConnections.length > 0 && <span className="text-lg font-bold text-[rgba(0, 0, 0, 0.6)] xl:text-xl my-0 mx-3">Online ({onlineConnections.length})</span>}
          {onlineConnections && onlineConnections.map((connection) => {
              return (  <ConnectionCard connection={connection} />)
          })}
      </div>
      
      <div className=' w-full'>
          {offlineConnections.length > 0 && <span className="text-lg font-bold text-[rgba(0, 0, 0, 0.6)] xl:text-xl my-0 mx-3">Offline ({offlineConnections.length})</span>}
          {offlineConnections && offlineConnections.map((connection) => {
              return ( <ConnectionCard connection={connection} />)
          })}
      </div>
      
   </div>
  )
}

export default ConnectionSection;