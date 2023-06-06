import React from 'react'
import UserProfileAvatarComponent from '../newComponent/UserProfileAvatarComponent/UserProfileAvatarComponent'
import ProfileFirstForm from '../newComponent/ProfileSectionForm/ProfileFirstForm'
import ProfileThirdForm from '../newComponent/ProfileSectionForm/ProfileThirdForm';
import ProfileSecondForm from '../newComponent/ProfileSectionForm/ProfileSecondForm'
import ProfileFourthForm from '../newComponent/ProfileSectionForm/ProfileFourthForm';

function UserProfileSection() {
    
  return (


    <div className=''>
       {/* <UserProfileAvatarComponent /> */}
       <ProfileFirstForm />
       <ProfileSecondForm />
       <ProfileThirdForm />
       <ProfileFourthForm />
    </div>
    
  )
}

export default UserProfileSection