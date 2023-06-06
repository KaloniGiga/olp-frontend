import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchConversationsThunk } from '../../store/features/conversationSlice';
import { SocketContext } from '../../utils/context/SocketContext';
import ChatPerson from '../../components/ChatPerson';
import { BsChatDots, BsChatDotsFill, BsChatLeftText, BsSearchHeart } from 'react-icons/bs';
import { NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom';
import ConversationBox from './ConversationBox';
import CallBox from './CallBox';
import './style.css';
import InputSelect from '../../newComponent/Profile/Select';
import SearchSelect from '../../newComponent/Profile/SearchSelect';
import debounce from 'debounce-promise';
import { axiosInstance } from '../../http';
import OptionComponent from './OptionComponent';
import AsyncSelect from 'react-select/async';
import { AuthContext } from '../../utils/context/AuthContext';
import { updateSelectedConversation } from '../../store/features/selectedConversationSlice';
import { MdAddIcCall } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';

function ChatSidebar() {
    const dispatch = useDispatch();
    const socket = useContext(SocketContext)
    const navigate = useNavigate();
    const user = useContext(AuthContext);
    const [showCall, setShowCall] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [conver, setConver] = useState([]);
    // useEffect(() => {
    //     dispatch(fetchConversationsThunk());
    // }, [dispatch])
    const { selectedConversation , type } = useSelector((state) => state.selectedConversation)
    const { conversations } = useSelector((state) => state.conversation);
  
    
  

    const searchConv = async (value) => {
      if(value) {
        const response = await axiosInstance.get(`/users/search/conversation?username=${value}`)
        console.log(response.data)
        return response.data.filter((search) => search.id !== user[0].id).map((search) => { 
          return {value: search.id, label: search.username}
        })
      }
    }
    const delayfetchConversation = useCallback(debounce(searchConv, 5000), []);

    const fetchConversation = (value) => {
        return delayfetchConversation(value);
    }

    const getConversationByUserId = (userId) => {
        const targetConversation = conversations.find((conv) => {
            const recepientId = user[0].id == conv.creator.id ? conv.recepient.id : conv.creator.id;
            if(recepientId == userId) {
              return conv;
            }
        })

        return targetConversation;
    }


    const handleChange = (value) => {
       setSearchValue(value);
       console.log('we are here');

       const targetConversation = getConversationByUserId(value.value);
       if(targetConversation) {
          dispatch(
            updateSelectedConversation({conversation: targetConversation, type: 'conversation'})
          )
          navigate(`/home/chat/conversation/${targetConversation.id}`)
       }else {
         dispatch(
          updateSelectedConversation({conversation: value, type: 'createConversation'})
         )

          setConver([value, ...conversations]);
       }
    }

    const handleSubmit = useCallback((e) => {
       e.preventDefault();
    })

    useEffect(() => {
        if(conversations) {
          setConver(conversations)
        }
    }, [conversations]);

    console.log(selectedConversation, type);

  return (
          <div className='w-full md:basis-1/3 rounded-xl md:rounded-tr-none md:rounded-br-none bg-white py-2 border-r-2 border-[rgba(0 , 0, 0, 0.8)] lg:fixed lg:h-[90vh] lg:w-[30vw] lg:bottom-0 lg:left-0'> 
             <div className="chat-friend-list h-full overflow-hidden ">
               <div className='w-full flex  flex-col justify-around relative'>
                <div className='w-full flex justify-around '>
                  
                  <div className='flex items-center justify-center hover:bg-screen px-3 py-2 rounded-xl'>
                    <span className='mr-2'><BsChatDots size={20} color={!showCall && 'var(--primary)'} /></span>
                  <span className={ !showCall ? 'font-bold xl:text-xl text-[var(--primary)]' : 'font-bold xl:text-xl'} onClick={() => setShowCall(false)}>Chat</span> 
                  </div>

                 <div className='flex items-center justify-center hover:bg-screen px-3 py-2 rounded-xl'>
                   <span className='mr-2'><FiPhoneCall size={20} color={showCall && 'var(--primary)'} /></span>
                   <span  className={ showCall ? 'font-bold xl:text-xl text-[var(--primary)]' : 'font-bold xl:text-xl'} onClick={() => setShowCall(true)}>Call</span>
                 </div>

                 </div>
                  <div className='xl:px-2 xl:py-2 my-2 mx-2'>
                    <AsyncSelect
                   placeholder="Search..."
                   onChange={handleChange} 
                   loadOptions={fetchConversation}
                   id="aysnc-select"
                   name="async-select"
                   value={searchValue}
                   components={{Option: OptionComponent}}
     
                    styles={{
           control: (baseStyles, state) => ({
            ...baseStyles,
            // border: 'none',
               backgroundColor: 'var(--screen)',
              padding: '2px 5px',
              borderRadius: '20px',
              zIndex: '9999',
            })}}
                    />

      
                 </div>
                </div>
                <div>
                <form className='w-full mx-2 my-2 z-50 flex rounded-3xl shoadow-none overflow-hidden'>
                  {/* <input className='border-none bg-transparent w-full outline-none shadow-none' type="text" name="search" placeholder="Search.." /> */}
         

                   
                  {/* <button type='submit' className='mx-2 px-2 rounded-lg border-l-[1px] border-[rgba(0 ,0 ,0 ,0.6)]'>
                    <BsSearchHeart size={25}  color="var(--primary)" />
                  </button> */}
                </form>
                </div>
                <div className="chat-sidebar w-full px-2">
                 {
                  !showCall ? (
                     <ConversationBox conversations={conver} />
                  ): (
                     <CallBox />
                  )
                 }
                </div>
              </div>
      </div>
  )
}

export default ChatSidebar;