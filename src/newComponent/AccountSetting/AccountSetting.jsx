import React from 'react'
import { AiFillAccountBook } from 'react-icons/ai'
import DeleteButton from '../DeleteButton/DeleteButton'

function AccountSetting() {

  return (
     
        <div className='flex flex-col shadow-md'>
       <div className='flex border-b-2 py-4 px-2'>
          <span className='mr-4'><AiFillAccountBook size={30} /></span>
          <h1 className='text-md lg:text-lg font-semibold'>Account Settings</h1>
       </div>

    
      <div className='flex flex-col my-4 px-2 py-2'>
          <h1 className='font-semibold text-md lg:text-lg px-2'>Delete Account</h1>
          <div className='w-full px-2 py-2'>
            <DeleteButton classes1="px-4 py-2 bg-[#ec1c24] text-white rounded-lg" classes2="flex justify-start " />
          </div> 
      </div>


    </div>
  )
}

export default AccountSetting;