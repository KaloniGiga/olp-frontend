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
import { useState } from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

function Dashboard() {
  
   const isMobile = useMediaQuery({ query: '(max-width: 992px)'})
   const [showFilter, setShowFilter] = useState(isMobile ? false : true);

  return (
    <div className='min-h-screen w-full flex md:flex-row flex-col md:justify-end md:bg-screen'>
       <div className={`flex z-30 flex-col lg:mt-4 md:mt-0 md:mx-0 w-[80vw] lg:w-[25vw] md:bg-white fixed top-[10vh] lg:top-[6vh] ${showFilter ? 'showFilter' : 'hideFilter' } bottom-0  h-full`}>
           {/* {isMobile && <Search />} */}
           {/* <ProfileBox /> */}
           {/* <MyProfilesSidebar /> */}
           {/* <ProfileFilter /> */}
           {/* <Filter /> */}
           <NewFilter showFilter={showFilter} setShowFilter={setShowFilter} />
       </div>
       <div className={`h-full flex flex-col w-[100%] ${showFilter ? 'lg:basis-[76%]' : 'lg:basis-[100%]'}`}>
          <span className={`hidden overflow-hidden ${showFilter ? 'hidden' : 'lg:inline-block hidden'} `} onClick={() => setShowFilter(true)}><BsFillArrowRightSquareFill color={'var(--secondary)'} size={30} /></span>
          <ProfileBox showFilter={showFilter} setShowFilter={setShowFilter} />
          <Outlet context={[showFilter, setShowFilter]} />
          <Footer />
       </div>
    </div>
  )
}

export default Dashboard;