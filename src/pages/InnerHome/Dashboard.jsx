import React from 'react'
import MyProfilesSidebar from '../../content/MyProfilesSidebar';
import ProfileBox from '../../newComponent/ProfileBox/ProfileBox';
import { Outlet } from 'react-router-dom';
import './style.css'
import ProfileFilter from '../../newComponent/ProfileFilter/ProfileFilter';
import Filter from '../../content/Filter';
import NewFilter from '../../newComponent/NewFilter/NewFilter';
import { useMediaQuery } from 'react-responsive';
import Search from './InnerHeader/Search';
import Footer from '../../components/Footer';

function Dashboard() {
  
   const isMobile = useMediaQuery({ query: '(max-width: 768px)'})

  return (
    <div className='min-h-screen w-full flex md:flex-row flex-col md:justify-end md:bg-screen'>
       <div className='flex flex-col mt-4 md:mt-0 md:mx-0  md:w-[23vw] md:bg-white fixed top-[6vh] left-0 bottom-0 h-full'>
           {isMobile && <Search />}
           <ProfileBox />
           {/* <MyProfilesSidebar /> */}
           {/* <ProfileFilter /> */}
           {/* <Filter /> */}
           <NewFilter />
       </div>

       <div className='h-full flex flex-col w-[100%] md:basis-[76%] md:mr-4 md:mt-20'>
          <Outlet />
          <Footer />
       </div>
    </div>
  )
}

export default Dashboard