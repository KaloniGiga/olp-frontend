import { formatRelative } from 'date-fns';
import React from 'react'

function Message({isUserCreator, message}) {

  return (
    <div className={`w-full flex my-4 ${isUserCreator ? 'justify-end' : 'justify-start'}`}>
      <div className='flex flex-col'>
        {/* {!isUserCreator && <span>{message.author.username}</span>} */}
       {message.content && (
       <span className={`flex flex-col px-2 py-2 rounded-xl ${isUserCreator ? 'bg-primary text-white' : 'bg-screen' }`}>{message.content}</span>
      )}

      
          {message.attachments && message.attachments.map((attachement) => {
            
              return (
                <div className='w-[120px] h-[120px] '>
               <img src={`https://login-olp-backend.onrender.com/attachments/${attachement.fileName}`} alt="attachment" />
              {/* <img className='w-full h-full object-cover object-center'  src={`http://localhost:3000/attachments/f0c30ff5853a4e8c6d07bc5e067c1390.jpg`} alt='attachments'/> */}
              </div>
              )
            })
          }
       
      <span>{formatRelative(new Date(message.createdAt), new Date())}</span>
      </div>
    </div>
  )
}

export default Message;