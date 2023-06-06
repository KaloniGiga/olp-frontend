import React from 'react'
import { AiFillSetting } from 'react-icons/ai'
import PasswordSetting from '../newComponent/PasswordSetting/PasswordSetting'
import AccountSetting from '../newComponent/AccountSetting/AccountSetting'

function SettingSection() {



  return (


    <div className='flex flex-col'>
       <div className='flex '>
         <span className='mr-4'><AiFillSetting size={35} /></span>
         <h1 className='text-lg lg:text-xl'>Settings</h1>
       </div>
        
        <div className='my-4'>
          <PasswordSetting />
        </div>

        <div className='my-4'>
           <AccountSetting />
        </div>
    </div>
  )
}

export default SettingSection