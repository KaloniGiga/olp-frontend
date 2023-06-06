import React from 'react'
import { useSelector } from 'react-redux'
import ConnectionRequestCard from '../newComponent/ConnectionRequestCard/ConnectionRequestCard';
import { RiArrowDownSFill } from 'react-icons/ri';
import { useState } from 'react';
import noDataSvg from '../images/No data-pana.svg'
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../utils/context/AuthContext';

export default function ConnectionRequestSection () {

  const [showRequests, setShowRequests] = useState(true);

    const [invitations, setInvitations] = useState([0, 1, 2]);
    const [pending, setPending] = useState([0, 1, 2]);
    const user = useContext(AuthContext);


    // const connectionRequests = useSelector((state) => state.connection.connectionRequests);
     const connectionRequests = [1, 2, 3, 4]
    console.log(connectionRequests);

    // useEffect(() => {
    //     if(connectionRequests) {
    //       const sentRequests = connectionRequests.find((cr) => {
    //            if(connectionRequests.sender.id === user[0].id && connectionRequests.status === "pending"){
    //               return cr;
    //            }

    //            if(connectionRequests.receiver.id === user[0].id && connectionRequests.status === "pending") {
    //              return cr
    //            }
    //       })

    //       const invite = connectionRequests.find((cr) => {
    //         if(connectionRequests.receiver.id === user[0].id && connectionRequests.status === "pending") {
    //             return cr;
    //         }
    //       })

    //       setInvitations(invite);
    //       setPending(sentRequests);
    //     }
    // }, [connectionRequests])

  return (

    <div className='w-full h-full'>
        <div className='flex flex-col mb-3 w-[80%] mx-auto h-full bg-screen rounded-xl overflow-hidden'>
          {connectionRequests ? (
            <>
            {/* invitations */}
          {invitations && (
            <>
          <div className='px-2 py-2 border-b-[1px] border-[rgba(0, 0, 0, 0.4)] flex justify-between pr-4' onClick={() => setShowRequests((prev) => !prev)}>
            <h2 className='text-lg font-bold text-[rgba(0, 0, 0, 0.6)] xl:text-xl '>Invitations</h2>
             {/* <span><RiArrowDownSFill size={25} /></span> */}
          </div>
              {/* { connectionRequests.length === 0 && <div>No Connection Requests :</div>} */}
            <div className={`transition-all duration-500 overflow-hidden  ${showRequests ? 'h-full' : 'h-0'}`}>
              {invitations && (invitations.map((connectionRequest) => {

                 return (<ConnectionRequestCard key={connectionRequest.id} connectionRequest={connectionRequest} />)
              })) }
            </div>
            </>
            )}
       {/* pending request */}
          {pending && (
            <>
           <div className='px-2 py-2 border-b-[1px] border-[rgba(0, 0, 0, 0.4)] flex justify-between pr-4' onClick={() => setShowRequests((prev) => !prev)}>
            <h2 className='text-lg font-bold text-[rgba(0, 0, 0, 0.6)] xl:text-xl '>Sent Requests</h2>
             {/* <span><RiArrowDownSFill size={25} /></span> */}
            </div>
              {/* { connectionRequests.length === 0 && <div>No Connection Requests :</div>} */}
            <div className={`transition-all duration-500 overflow-hidden  ${showRequests ? 'h-full' : 'h-0'}`}>
              {pending && (pending.map((connectionRequest) => {

                 return (<ConnectionRequestCard key={connectionRequest.id} connectionRequest={connectionRequest} />)
              })) }
            </div>
            </>
            )}
            </>
          ) : (
            <div>

                <div className='h-[30vh]'>
                  <img className='w-full h-full object-contain object-center' src={noDataSvg} alt="" />
                </div>
            </div>
          )}
        </div>
    </div>
  )
}
