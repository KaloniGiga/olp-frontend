import axios from 'axios';
import React, {useContext, useState} from 'react'
import { useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addToast } from '../../store/features/toastSlice';
import { logOutUser } from '../../store/features/authSlice';
import profileAvatar from '../../images/olp_avatar.avif';
import { AuthContext } from '../../utils/context/AuthContext';
import { RiProfileFill, RiSettingsFill } from 'react-icons/ri';
import { CgLogOut } from 'react-icons/cg';
import './style.css'
import { NavLink } from 'react-router-dom';

function HeaderProfile() {

    const [imageUrl, setImageUrl] = useState(null);
    const dispatch = useDispatch();
    const [showLogout, setShowLogout] = useState(false);
    const user = useContext(AuthContext);

    useEffect(() => {
       if(!imageUrl) {
         setImageUrl('https://www.caltrain.com/files/images/2021-09/default.jpg')
       }
    }, [])

    const handleLogout = (e) => {
    e.preventDefault();
     
    axios.post('http://localhost:3000/v1/api/authentication/log-out',{}, {
      withCredentials: true,
      headers: {
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
       
      if(response.status === 200) {
         dispatch(addToast({msg: "Logged Out successfully", kind:"SUCCESS"}))
         dispatch(logOutUser());
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
    <div className='relative flex justify-between rounded-2xl items-center mt-2'>
    
      <div className='flex justify-between items-center' onClick={() => setShowLogout((prev) => !prev)}>
        <div className=' w-[40px] h-[40px] rounded-full'>
            <img src={user[0].avatarId ? `http://localhost:3000/v1/api/user-avatar/${user && user[0].id}` : profileAvatar}  alt="" className='w-full h-full rounded-full object-cover object-center' />
        </div>
        {/* <span className='ml-2'><FiChevronDown size={30} /></span> */}
        </div>

        <div className={`absolute  min-w-[300px] h-auto right-[-100%]  rounded-lg  z-50 bg-white overflow-hidden ${showLogout ? 'px-2 py-2 top-[150%] shadow-md flex flex-col' : '  hidden' }`}>
              <div className='flex py-2 px-2 hover:bg-screen rounded-xl'>
                 <RiProfileFill size={25} color="var(--primary)" />
                 <NavLink to={'/home/profile/me/about'}><span className='w-full ml-3 font-semibold text-xl cursor-pointer'>My Profile</span></NavLink>
                </div>

                 <div className='flex py-2 px-2 hover:bg-screen rounded-xl'>
                 <RiSettingsFill size={25} color="var(--primary)" />
                 <NavLink to={'/home/profile/setting'}><span className='w-full ml-3 font-semibold text-xl cursor-pointer'>Settings</span></NavLink>
                 </div>

            <div className='flex py-2 px-2 rounded-xl hover:bg-screen'>
              <CgLogOut size={25} color="var(--primary)" />
             <span className='w-full ml-3 font-semibold text-xl cursor-pointer' onClick={(e) => handleLogout(e)}>Logout</span>
             </div>
        </div>
    </div>
  )
}

export default HeaderProfile;