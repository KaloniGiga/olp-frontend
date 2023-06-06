import React, {useContext, useState} from 'react'
import { useEffect } from 'react';
import { VscDeviceCamera } from 'react-icons/vsc';
import { AuthContext } from '../../utils/context/AuthContext';
import profileAvatar from '../../images/olp_avatar.avif'


function ProfileBox() {

    const [imageUrl, setImageUrl] = useState(null);
    const user = useContext(AuthContext);
    

    useEffect(() => {
      // console.log(user);
       if(!imageUrl) {
         setImageUrl('https://www.caltrain.com/files/images/2021-09/default.jpg')
       }
    }, [])

    console.log(user);

  return (
    <div className='flex w-full  md:hidden md:justify-center rounded-xl md:items-center  md:py-8 bg-white my-2 md:mb-2 outline-none border-t-none'>
        <div className='relative w-[80px] h-[80px] md:w-[150px] lg:w-[120px] lg:h-[120px] xl:w-[150px] xl:h-[150px] md:h-[150px] rounded-full my-2'>
            <img src={user && user[0].avatarId ? `http://localhost:3000/v1/api/user-avatar/${user && user[0].id}` : profileAvatar} alt="" className='w-full h-full rounded-full object-cover object-center' />
            {/* <span className='absolute right-0 bottom-0'><VscDeviceCamera size={30} /></span> */}
        </div>

        <div className='flex flex-col justify-center md:items-center mt-2 ml-3 md:ml-0'>
            <h3 className='text-md font-semibold lg:text-lg xl:text-xl'>{user && user[0].username}</h3>
            <h4 className='text-md font-semibold lg:text-sm'>{user && user[0].email}</h4>
            {/* <h4  className='text-md lg:text-lg'>{user && user[0].id}</h4> */}
        </div>
    </div>
  )
}

export default ProfileBox;