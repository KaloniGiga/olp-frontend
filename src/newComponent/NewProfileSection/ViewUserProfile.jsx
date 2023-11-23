import { useState } from 'react';
import profileAvatar from '../../images/profileAvatar.png';
import ProfileTab from './ProfileTab';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { VscDebugDisconnect, VscDeviceCamera, VscUnverified } from 'react-icons/vsc';
import { AuthContext } from '../../utils/context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import axios from 'axios';
import { AiOutlineDisconnect, AiOutlineEdit, AiOutlineSend, AiOutlineUser } from 'react-icons/ai';
import { useEffect } from 'react';
import { createConnectionRequest, getUserProfileById } from '../../utils/api';
import { useContext } from 'react';
import { fetchVisitUserThunk } from '../../store/thunk/visitUserThunk';
import { createConnectionRequestThunk, removeConnectionThunk } from '../../store/thunk/connectionsThunk';
import { addConnectionRequest } from '../../store/features/connectionSlice';
import { addToast } from '../../store/features/toastSlice';
import { BsChevronDoubleLeft } from 'react-icons/bs';
import { CgProfile} from 'react-icons/cg';
import { current } from '@reduxjs/toolkit';
import { updateSelectedConversation } from '../../store/features/selectedConversationSlice';
import { setIsConnected, setIsPending } from '../../store/features/visitedProfile';
import { ActionIcon, Box, Button, Center, Group, SegmentedControl, Stack, Text, Title, Tooltip, createStyles } from '@mantine/core';
import { GoVerified } from 'react-icons/go';
import { MdOutlinePending } from 'react-icons/md';
import { BiPhotoAlbum } from 'react-icons/bi';

const useStyle = createStyles((theme) => ({
  
}))
function ViewUserProfile(props) {
 const {classes, theme} = useStyle();
  const {id} = useParams();
  const fileInputRef = useRef(null);
  const CoverFileRef = useRef(null);
  const [profile, setProfile] = useState('');
  const user = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {conversations} = useSelector((state) => state.conversation)

 useEffect(() => {
    if(user[0].id == id) {
      navigate('/home/main/profile/me/about')
    }
 }, [])

  useEffect(() => {
     dispatch(fetchVisitUserThunk(id))
  }, [id])



const {currentVisitedUser} = useSelector((state) => state.visitProfile);
console.log(currentVisitedUser);
const sendConnectionRequest = () => {
  console.log('creating request')
   console.log(id);
    createConnectionRequest(id)
      .then((res) => {
         dispatch(addConnectionRequest(res.data));
         dispatch(addToast({kind: 'SUCCESS', msg: 'Request Set Successfully'}))
         dispatch(setIsPending(true));
      })
      .catch((error) => {
        console.log(error);
        dispatch(addToast({kind: 'ERROR', msg: 'Cannot send request'}))
      })
    // dispatch(createConnectionRequestThunk(id));
}
  //  const recepient = currentVisitedUser && currentVisitedUser.connection && currentVisitedUser.connection.sender.id === user[0].id ? currentVisitedUser.connection.receiver : currentVisitedUser.connection.sender;
   const handleConnectionDisconnect = () => {
          dispatch(removeConnectionThunk(currentVisitedUser && currentVisitedUser.isConnected && currentVisitedUser.isConnected.id))
          dispatch(setIsConnected(false));
          
    }

 const handleSendMessage = () => {
        const requiredUser = currentVisitedUser && currentVisitedUser.isConnected && currentVisitedUser.isConnected.sender.id == user[0].id ? currentVisitedUser && currentVisitedUser.isConnected.receiver : currentVisitedUser && currentVisitedUser.isConnected.sender;
        const requiredConversationId = conversations.find((cov) => cov.creator.id == requiredUser.id || cov.recepient.id == requiredUser.id);
       
        console.log(requiredConversationId)
        dispatch(
          updateSelectedConversation({conversation: requiredConversationId ? requiredConversationId : requiredUser, type: requiredConversationId ? 'conversation' : 'createConversation'})
        )
        requiredConversationId ? navigate(`/home/main/chat/conversation/${requiredConversationId.id}`) : navigate(`/home/chat/conversation/`)
    }

     const handleChange = (value) => {
     value == '0' && navigate(`/home/main/profile/${id}/about`)
     value == '1' && navigate(`/home/main/profile/${id}/photos`)
    }

  return (
    <div className='h-full w-full  md:bg-screen md:pb-4'>
    <div className='h-full flex flex-col mx-auto bg-white px-2 pb-2 lg:px-4 pt-16 lg:rounded-sm '>


      <div className='absolute top-0 left-[0] w-[100vw] h-[300px]  bg-gradient-to-t from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.2)] overflow-hidden'></div>
        <div className='relative border-[1px] h-[300px] border-[var(--secondary)] rounded-sm bg-white w-[80%] mx-auto' >
          <div className='w-full h-full flex justify-center rounded-sm items-center bg-red-100'> 

              <img className='w-full h-full object-cover object-center z-20 rounded-sm' src={(currentVisitedUser && currentVisitedUser.banner) ? `${import.meta.env.VITE_BASE_URL}/banner/${currentVisitedUser.banner.fileName}` : profileAvatar} alt='' />
              {/* <h1 className='text-2xl md:text-3xl text-center font-bold text-[rgba(0, 0, 0, 0.9)]'>Life is all about Peace and beauty.</h1> */}
              {/* <div className={`absolute px-2 py-2 top-2 right-2 ${isHovered ? 'block' : 'hidden'}`} onClick={() => handleCoverEdit()}>
                 <AiOutlineEdit size={30} color="var(--primary)" />
                 <input type='file'  className='hidden' onChange={(e) => setSelectedCoverFile(e)} />
              </div> */}
          </div>
          <div className='flex w-[100px] h-[100px] md:w-[130px] p-[5px] bg-white md:h-[130px] xl:w-[170px] xl:h-[170px] z-50 rounded-[50%] absolute bottom-[-30%] xl:bottom-[-15%] left-[35%] md:left-[43%]' >
            <img src={currentVisitedUser && (currentVisitedUser.avatarId ? `${import.meta.env.VITE_BASE_URL}/user-avatar/${currentVisitedUser.avatarId}` : profileAvatar)} alt="" className='w-full h-full object-cover object-center rounded-[50%]' />
            {/* <span className='absolute rounded-[50%] right-0 bottom-0 bg-screen'>
                <VscDeviceCamera size={30} color='var(--primary)' />
              </span> */}
          </div>
        
        </div>

        <div className=' w-full md:w-[80%] mx-auto pt-4 flex justify-between'>
           <Stack spacing={0}>
           <Group align='center'>
            <Title transform='capitalize' order={1} >{currentVisitedUser && currentVisitedUser.profile && currentVisitedUser.profile.fullname}</Title> 
            {/* <Tooltip withArrow label="Verified"><ActionIcon><GoVerified color='var(--secondary)' size={20} /></ActionIcon></Tooltip> */}
             {currentVisitedUser && currentVisitedUser.emailVerified ? (
                <Tooltip label="User Verified" withArrow size="sm">
               <ActionIcon variant='transparent'>
                 <GoVerified size={15} color='var(--secondary)' />
               </ActionIcon>
               </Tooltip>
              ) : (
                   <Tooltip label="Unverified" withArrow size="sm">
                <ActionIcon variant='transparent'>
                 <VscUnverified size={15} color='var(--secondary)' />
               </ActionIcon>
               </Tooltip>
              )}
           </Group>
           <Stack spacing={0}>
            <Text size={'lg'} color="dimmed">{currentVisitedUser && currentVisitedUser.email}</Text>
            <Text size={'lg'} transform='capitalize'>{`${currentVisitedUser && currentVisitedUser.profile && currentVisitedUser.profile.caste}, ${currentVisitedUser && currentVisitedUser.profile && currentVisitedUser.profile.religion}`}</Text>
           </Stack>
          </Stack>



           <Stack style={{flexBasis: '30%'}}> 
            {currentVisitedUser.isConnected ? (
            <Button fullWidth leftIcon={<AiOutlineDisconnect size={20} />} style={{backgroundColor: 'var(--secondary)'}} onClick={() => handleConnectionDisconnect()}>Disconnect</Button>
              ):(  
              <>
              {currentVisitedUser.isPending ? (

                <Button fullWidth style={{backgroundColor: 'var(--secondary)'}} leftIcon={<MdOutlinePending size={20} />} >Pending</Button>
              ): (
               <Button style={{backgroundColor: 'var(--secondary)'}} fullWidth leftIcon={<VscDebugDisconnect size={20} />}  onClick={() => sendConnectionRequest()}>Connect</Button>
              )}
              </>
            )}
            {/* <button className='px-2 py-2 xl:py-3 w-full rounded-xl mr-3 text-md text-white lg:mb-2 bg-[#E61A52]' onClick={() => sendConnectionRequest()}>Connect Now </button> */}
            {currentVisitedUser.isConnected &&  <Button leftIcon={<AiOutlineSend size={20} color='' />} fullWidth variant='outline' onClick={() => handleSendMessage()}>Send Message</Button> }
           </Stack>
        </div>
        
        <div className='w-[80%] mx-auto border-t-2 border-[rgba(0,0,0,0.2)] mt-2'>
           {/* <div className='flex'>
             <ProfileTab name={'About'} link={`/home/main/profile/${id}/about`} />
             <ProfileTab name={'Photos'} link={`/home/main/profile/${id}/photos`} />
             {/* <ProfileTab name={'Connections'} link="/home/profile/me/connections" /> */}
           {/* </div> */} 

      <SegmentedControl
       transitionDuration={100}
       color={theme.colors.second[3]}
       size='lg'
       radius={'sm'}
       py={10}
       style={{backgroundColor: 'white'}}
       onChange={handleChange}
       data={[
          {
           value: '0',
           label: (
            <Center>
            <AiOutlineUser size={20} />
            <Box ml={10}>About me</Box>
            </Center>
            )},
          // {value: '1', label: 'Sent Request'},
          { value: '1', label: (
            <Center>
            <BiPhotoAlbum size={20} />
            <Box ml={10}>Photos</Box>
            </Center>
            )} 
        ]}
       />
           
        </div>
    </div>
    <div className='w-full md:w-[80%] mx-auto bg-screen md:mb-8'>
      <Outlet />
    </div>
  </div>
  )
}

export default ViewUserProfile;