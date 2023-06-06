import React, { useContext, useEffect, useState } from 'react';
import profileAvatar from '../../images/olp_avatar.avif';
import ProfileTab from './ProfileTab';
import { Outlet, useNavigate } from 'react-router-dom';
import { VscDeviceCamera } from 'react-icons/vsc';
import { AuthContext } from '../../utils/context/AuthContext';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import axios from 'axios';
import { AiOutlineEdit } from 'react-icons/ai';

function NewProfileSection() {

  const fileInputRef = useRef(null);
  const CoverFileRef = useRef(null);
  const [profile, setProfile] = useState('');
   const user = useContext(AuthContext);
   const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false)
 const [selectedImage, setSelectedImage] = useState('');
 const [selectedCoverFile, setSelectedCoverFile] = useState('');
  useEffect(() => {
    setProfile(user[0]);
  }, [])

  const handleProfileClick = () => {
     fileInputRef.current.click();
  }

  const handleFileSelect = (event) => {
     setSelectedImage(event.target.files[0]);
     setProfile(event.target.files[0]);
  }

  const handleCoverEdit = () => {
    CoverFileRef.current.click();
  }

  const CoverFileSeelct = (e) => {
     setSelectedCoverFile(e.target.files[0])
  }

  const handelProfileUpload = (e) => {
    e.preventDefault();
     const formData = new FormData();
      formData.append('file', selectedImage);

      axios.post('http://localhost:3000/v1/api/users/avatar', formData,
       {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
       }
      ).then((res) => {
         console.log(res.data);
        const userWithNewAvatarId = {...user, avatarId: res.data.id};
        console.log(userWithNewAvatarId);
         dispatch(
          setCurrentUser(userWithNewAvatarId)
         )
      }).catch((error) => {
         console.log(error);
      })
  }

  return (
    <div className='h-full w-full  md:bg-screen md:pb-4 md:pt-[10vh]'>
    <div className='h-full flex flex-col mx-auto bg-white px-2 py-2 md:px-4 md:pt-8 rounded-xl '>

        <div className='relative border-2 h-[300px] border-[var(--secondary)] rounded-xl bg-white w-[80%] mx-auto' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className='w-full h-full flex justify-center rounded-xl items-center bg-red-100'> 
              <h1 className='text-2xl md:text-3xl text-center font-bold text-[rgba(0, 0, 0, 0.9)]'>Life is all about Peace and beauty.</h1>
              <div className={`absolute px-2 py-2 top-2 right-2 ${isHovered ? 'block' : 'hidden'}`} onClick={() => handleCoverEdit()}>
                 <AiOutlineEdit size={30} color="var(--primary)" />
                 <input type='file' ref={CoverFileRef} className='hidden' onChange={(e) => setSelectedCoverFile(e)} />
              </div>
          </div>
          <div className='flex w-[100px] h-[100px] md:w-[130px] md:h-[130px] xl:w-[170px] xl:h-[170px] rounded-[50%] absolute bottom-[-30%] xl:bottom-[-15%] border-2 border-[var(--secondary)] left-[35%] md:left-[43%]' onClick={() => handleProfileClick()} >
            <img src={profileAvatar} alt="" className='w-full h-full object-cover object-center rounded-[50%]' />
            <span className='absolute rounded-[50%] right-0 bottom-0 bg-screen'><VscDeviceCamera size={30} color='var(--primary)' /></span>
          </div>
               <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleFileSelect}
              />
        </div>

        <div className=' w-full md:w-[80%] mx-auto mt-8 pt-2'>
          <div className='w-full flex justify-between items-start'>

           <div className='w-full flex flex-col  justify-center my-2 pl-2'>
            <h2 className='text-xl xl:text-4xl font-bold text-left text-[rgba(0, 0, 0, 0.8)]'>David Warner</h2>
            <h5 className='text-lg font-semibold text-left text-[rgba(0,0,0,0.6)] my-2'>200 Connections</h5>
          </div>

          <div className='w-[200px]'>
            <button className='w-full flex bg-[var(--secondary)] hover:bg-[var(--secondary-light)] rounded-xl px-4 py-2 border-none outline-none'>
              <span><AiOutlineEdit size={25} color="white" /></span>
              <h3 className='w-full ml-2 font-bold text-white'>Edit Profile</h3>
            </button>
          </div>
         </div>
          {/* <div className='w-full flex justify-between px-2'>
            <span className='text-xl font-[500]'>24 years</span>
            <span className='text-xl font-[500]'>5ft 2in</span>
          </div> */}

{/* 
            <div className='w-full flex justify-between px-2 my-2'>
            <span className='text-xl font-[500]'>Hindu, chhetri</span>
            <span className='text-xl font-[500]'>Web Developer</span>
            </div> */}


           <div className='w-full flex justify-between'> 
            {/* <button className='px-2 py-2 xl:py-3 w-full rounded-xl mr-3 text-md text-white bg-[#E61A52]'>Connect Now </button> */}
             {/* <button className='px-2 py-2 xl:py-3 w-full shadow-md rounded-xl text-md'>Send Message</button> */}
           </div>

        </div>
        
        <div className='w-[80%] mx-auto flex flex-col mt-2'>
           <div className='flex'>
             <ProfileTab name={'AboutMe'} link='/home/profile/me/about' />
             <ProfileTab name={'Photos'} link='/home/profile/me/photos' />
             {/* <ProfileTab name={'Connections'} link="/home/profile/me/connections" /> */}

            
           </div>
           
        </div>
    </div>
    <div className='w-full md:w-[80%] mx-auto bg-screen md:mb-8'>
      <Outlet />
    </div>
    </div>
  )
}

export default NewProfileSection