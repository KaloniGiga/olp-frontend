import React, { useContext, useState } from 'react'
import ConnectionCard from '../newComponent/ConnectionCard/ConnectionCard'
import NotificationCard from '../newComponent/NotificaitonCard/NotificationCard';
import { useEffect } from 'react';
import { getNotifications, markNotificationAsRead } from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { resetUnreadNotification, setInitialNotification, setNotification } from '../store/features/notificationSlice';
import NoDataFound from '../newComponent/NoDataFound/NoDataFound';
import NotificationMissedCallCard from '../newComponent/NotificaitonCard/NotificationCard';
import NotificationCreateConnectionRequest from '../newComponent/NotificaitonCard/NotificationCreateConnectionRequest';
import NotificationAcceptedConnectionRequest from '../newComponent/NotificaitonCard/NotificationAcceptedConnectionRequest';
import NotificationMessageReceived from '../newComponent/NotificaitonCard/NotificationMessageReceived';
import NotificationConversationReceived from '../newComponent/NotificaitonCard/NotificationConversationReceived';
import { AuthContext } from '../utils/context/AuthContext';

function NotificationSection() {
   
  const dispatch = useDispatch();
  const [user, setUser] = useContext(AuthContext);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(30);
  const [initial, setInitial] = useState(true)
  const [color, setColor] = useState('var(--primary)');

  const { notification, unReadNotificationCount, loading } = useSelector((state) => state.notification);
// console.log(unReadNotificationCount, user.lastReadNotification)
  useEffect(() => {
    if(initial) {
    getNotifications(page, limit)
    .then((res) => {
      // console.log(res.data);
        dispatch(setInitialNotification(res.data));
    })
    .catch((error) => {
       console.log(error);
    })
  }
  }, [])

  useEffect(() => {
     if(!initial) {
         getNotifications(page, limit)
         .then((res) => {
             dispatch(setNotification(res.data));
         })
         .catch((error) => {
          console.log(error);
         })
     }
  }, [page])

  useEffect(() => {
      console.log(notification.length > 0);
      // console.log(notification && notification[0].markAsRead);
    if(notification.length > 0 && notification[0].markAsRead == false) {
       console.log('marking notification')
      markNotificationAsRead(notification[0].id)
       .then((res) => {
        console.log(res.data);
          setUser({...user, lastReadNotification: res.data})
          dispatch(resetUnreadNotification())
       })
       .catch((error) => {
          dispatch(resetUnreadNotification())
       })
    }
  }, [notification])

  const handleLoadMore = () => {
    setInitial(false);
    setPage((prev) => prev + 1);
  }

console.log(notification);

 if(loading) {
  return (
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
     ) 
  }
  return (
    <div className='w-full min-h-screen bg-screen'>
     <div className='flex w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto flex-col my-3 rounded-xl'>
     <div className='px-2 border-b-2 border-[rgba(0, 0, 0, 0.6)] flex justify-between py-1' onClick={() => setShowRequests((prev) => !prev)}>
         {/* <h2 className='text-lg font-bold text-[rgba(0, 0, 0, 0.6)] xl:text-xl mx-2 2xl:text-2xl'>Notifications</h2>         */}
     </div>  
      <div className='w-full'>
        {
         (notification && notification.length > 0) ? 
         ( notification.map((notif, index) => {
           return (
            <>
            {notif.type == 'missedCall' && (
            <NotificationMissedCallCard notification={notif} key={index} />
           )}

           {notif.type == 'createConnectionRequest' && (
             <NotificationCreateConnectionRequest notification={notif} key={index} />
           )}

           {notif.type == 'connectionRequestAccepted' && (
            <NotificationAcceptedConnectionRequest notification={notif} key={index} />
           )}

           {notif.type == 'messageReceived' && (
            <NotificationMessageReceived notification={notif} key={index} />
           )}

           {
            notif.type == 'conversationReceived' && (
              <NotificationConversationReceived notification={notif} key={index} />
            )
           }
          {notification && notification.length % 30 == 0 && (
          <div className='w-full flex justify-center items-center rounded-3xl'>
            <button onClick={() => handleLoadMore()} className='px-4 py-2 rounded-3xl border-2 border-[var(--secondary)] hover:text-[var(--primary)]'>See More</button>
          </div>
          )}
           </>
           )
          })
         ) : (
            <NoDataFound />
         )
        }
      </div>
   </div>
   </div>
  )
}

export default NotificationSection;