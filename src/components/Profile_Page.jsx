import React from 'react'
import '../styles/Profile_page.css'
import Layout from './Layout'
import Filter from '../content/Filter'
import Searchedlist from '../content/Searchedlist'
const Profile_Page = () => {
  return (
    <>
  <Layout>
  <div className="profiles py-4">
    <div className="container">
        <div className="profile-section position-relative">
          <Filter/>
            <div className='profile-right px-3'>
              <div className="profile-right-title">
               <h1>Here is your Perfect Match...</h1>
               <div className="profile-details">
                  <div className="p1"> <p className=''>20 <span>Profiles</span></p></div>
                  <div className="p1"> <p>Female, <span>18 - 25 Years</span></p></div>
               </div>
              </div>
                <Searchedlist/>
            </div>
        </div>
    </div>
  </div>
  </Layout>
    </>
  )
}

export default Profile_Page