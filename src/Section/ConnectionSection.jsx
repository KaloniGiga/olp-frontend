import React, { useContext } from 'react'
import noData from '../images/NoDataFound.png'
import ConnectionCard from '../newComponent/ConnectionCard/ConnectionCard'
import { useDispatch, useSelector } from 'react-redux';
import { SocketContext } from '../utils/context/SocketContext';
import { useEffect } from 'react';
import { fetchConnectionsThunk } from '../store/thunk/connectionsThunk';
import { removeConnection, setOfflineConnections, setOnlineConnections } from '../store/features/connectionSlice';
import { RiArrowDownSFill } from 'react-icons/ri';
import { useState } from 'react';
import { fetchConnections } from '../utils/api';
import { setConnection } from '../store/features/connectionSlice';

function ConnectionSection() {

     const dispatch = useDispatch();
     const socket = useContext(SocketContext);
     const [conn, setConn] = useState([])
     const [onlineConnection, setOnlineConnection]  = useState([])
     const [offlineConnection, setOfflineConnection] = useState([])
     const { connections, loading, onlineConnections, offlineConnections } = useSelector((state) => state.connection); 
     
     useEffect(() => {
         fetchConnections()
         .then((res) => {
          console.log(res.data);
            dispatch(setConnection(res.data))
         })
         .catch((error) => {
           console.log(error);
         })
     }, [])

     useEffect(() => {
          socket.emit('getConnectionOnline');

         const interval = setInterval(() => {
           socket.emit('getConnectionOnline');
          }, 10000)

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
            console.log('connections online')
            dispatch(setOnlineConnections(connections));
            dispatch(setOfflineConnections());
         })
     }, [])
     
       


      useEffect(() => {
          
        if(connections) {
            setConn(connections)
            setOfflineConnection(offlineConnections)
        }
        
        if(onlineConnections) {
            setOnlineConnection(onlineConnections)
        }

        if(offlineConnections) {
            setOfflineConnection(offlineConnections)
        }
      }, [connections,  onlineConnections, offlineConnections])
   

      console.log(connections, onlineConnections, offlineConnections);
      
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

    <div className='flex w-[70%] mx-auto flex-col my-3 rounded-xl overflow-hidden'>
     {/* <div className='px-2 border-b-2 border-[rgba(0,0,0,0.2)] flex justify-between py-1' onClick={() => setShowRequests((prev) => !prev)}> */}
          {/* <h2 className='text-lg font-bold text-[rgba(0, 0, 0, 0.6)] xl:text-xl mx-2 '>Your Connection </h2> */}
             {/* <span><RiArrowDownSFill size={25} /></span> */}
     {/* </div>   */}
     {connections.length > 0 ? (
        <>
      {/* <div className='w-full'>
          {onlineConnections.length > 0 && <span className="text-lg font-bold text-[rgba(0, 0, 0, 0.6)] xl:text-xl my-0 mx-3">Online ({onlineConnections.length})</span>}
          {onlineConnections && onlineConnection.length > 0 && onlineConnections.map((connection, index) => {
              return (  <ConnectionCard key={index} connection={connection} />)

          })}
      </div> */}
      
      {/* <div className=' w-full'>
          {offlineConnections.length > 0 && <span className="text-lg font-bold text-[rgba(0, 0, 0, 0.6)] xl:text-xl my-0 mx-3">Offline ({offlineConnections.length})</span>}
          {offlineConnections && offlineConnection.length > 0 && offlineConnections.map((connection, index) => {
              return ( <ConnectionCard key={index} connection={connection} />)
          })}
      </div> */}

      <div className='w-full py-2'>
         {connections && connections.length > 0 && connections.map((connection, index) => {
           return (
            <> 
           <ConnectionCard key={index} connection ={connection} />
           </>
           )
         })}
      </div>
      </>
     ) : (
        <div className='w-full h-[25vh] flex justify-center items-center rounded-xl '>
          <div className='w-[100px] h-[100px] md:w-[150px]  md:h-[150px]  relative'>
           <img src={noData} alt="" className='w-full h-full object-contain' />
           <span className='absolute bottom-0 lg:bottom-5 left-[20%] llg:eft-[30%] font-semibold  '>No Data</span>
          </div>
        </div>
     )}
      
   </div>
  )
}

export default ConnectionSection;