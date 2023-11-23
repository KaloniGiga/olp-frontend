import axios from 'axios';
import React, {useContext, useRef, useState} from 'react'
import { useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addToast } from '../../store/features/toastSlice';
import { logOutUser } from '../../store/features/authSlice';
import profileAvatar from '../../images/olp_avatar.avif';
import { AuthContext } from '../../utils/context/AuthContext';
import { RiLogoutBoxFill, RiProfileFill, RiSettingsFill } from 'react-icons/ri';
import { CgLogOut, CgProfile } from 'react-icons/cg';
import './style.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { Tooltip } from '@mantine/core';

function HeaderProfile() {

    const [imageUrl, setImageUrl] = useState(null);
    const dispatch = useDispatch();
    const [showLogout, setShowLogout] = useState(false);
    const user = useContext(AuthContext);
    const navigate = useNavigate();
    const headerProfileRef = useRef(null);

    useEffect(() => {
       if(!imageUrl) {
         setImageUrl('https://www.caltrain.com/files/images/2021-09/default.jpg')
       }
    }, [])

    useEffect(() => {

      const handleClickOutside = (e) => {
         if(headerProfileRef.current && !headerProfileRef.current.contains(e.target)) {
            setShowLogout(false);
         }
      }
      
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      }
    }, [])

    const handleLogout = (e) => {
    e.preventDefault();
     
    axios.post(`${import.meta.env.VITE_BASE_URL}/authentication/log-out`,{}, {
      withCredentials: true,
      headers: {
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
       
      if(response.status === 200) {
        //  dispatch(addToast({msg: "Logged Out successfully", kind:"SUCCESS"}))
         dispatch(logOutUser());
         user[1](null);
         navigate('/auth', {replace: true})
      }
    }).catch((error) => {
        
      if(error.response) {
        const response = error.response;
        const { message } = response.data;
        console.log(message);
        switch (response.status) {
          case 401:
            dispatch(addToast({msg: "Logged Out successfully", kind:"SUCCESS"}))
            dispatch(logOutUser());
            break;
          case 400:
          case 500:
            console.log(message)
           dispatch(
            addToast({kind: 'ERROR', msg: message})
           )
           break;
          default: 
           dispatch(
            addToast({
              kind: "ERROR", msg: "Oops, Something went wrong",
            })
           )
           break;
        }
      }
    })
  }

  return (
    <div ref={headerProfileRef} className='relative flex justify-between rounded-2xl items-center'>
        <Tooltip label="Profile" withArrow radius={'md'}>
      <div className='flex justify-between items-center' onClick={() => setShowLogout((prev) => !prev)}>
        <div className={`w-[40px] h-[40px] rounded-full flex justify-center ${user && user[0].avatarId ? 'border-[1px]' : 'border-[var(--secondary)]'} `}>
           {user[0].avatarId ? (
             <img src={user[0].avatarId ? `${import.meta.env.VITE_BASE_URL}/user-avatar/${user[0] && user[0].avatarId}` : profileAvatar}  alt="" className='w-full h-full rounded-full object-cover object-center' />
           ) : (
             <CgProfile size={40} />
           )}
             </div>
        {/* <span className='ml-2'><FiChevronDown size={30} /></span> */}
        </div>
      </Tooltip>    

        <div className={`absolute  min-w-[300px] h-auto right-[-100%]  rounded-lg  z-50 bg-white overflow-hidden ${showLogout ? 'px-2 py-2 top-[150%] shadow-md flex flex-col' : '  hidden' }`}>
              <div className='flex py-2 px-2 hover:bg-screen rounded-sm ' onClick={() => setShowLogout(false)}>
                 <FaUserPlus size={20} color="var(--primary)" />
                 <NavLink to={'/home/main/profile/me/about'}><span className='w-full ml-3 font-semibold text-md cursor-pointer'>My Profile</span></NavLink>
                </div>

                 <div className='flex py-2 px-2 hover:bg-screen rounded-sm' onClick={() => setShowLogout(false)}>
                 <AiFillSetting size={20} color="var(--primary)" />
                 <NavLink to={'/home/main/settings'}><span className='w-full ml-3 font-semibold text-md cursor-pointer'>Settings</span></NavLink>
                 </div>

            <div className='flex py-2 px-2 rounded-sm hover:bg-screen' onClick={() => setShowLogout()}>
              <RiLogoutBoxFill size={20} color="var(--primary)" />
             <span className='w-full ml-3 font-semibold text-md cursor-pointer' onClick={(e) => handleLogout(e)}>Logout</span>
             </div>
        </div>
    </div>
  )
}

export default HeaderProfile;