import React from 'react'
import { RiLockPasswordLine } from 'react-icons/ri'
import Input from '../Profile/Input'

function PasswordSetting() {


  return (


    <div className='flex flex-col shadow-md'>
       <div className='flex border-b-2 py-4 px-2'>
          <span className='mr-4'><RiLockPasswordLine size={30} /></span>
          <h1 className='text-md lg:text-lg font-semibold'>Password Settings</h1>
       </div>

    
      <div className='flex flex-col my-4 px-2 py-2'>
          <h1 className='font-semibold text-md lg:text-lg'>Reset Password</h1>
          <div>
            <Input label="Old Password" classes3="w-[60%]" classes="px-2" classes2="block text-md xl:text-lg" type="password" placeholder="Enter Old Password" />
            <Input label="New Password" classes3="w-[60%]" classes="px-2" classes2="block text-md xl:text-lg" type="password" placeholder="Enter New Password" />
            <Input label="Confirm New Password" classes3="w-[60%]" classes="px-2" classes2="block text-md xl:text-lg" type="password" placeholder="Confirm New Password" />
          </div> 
      </div>


    </div>
  )
}

export default PasswordSetting