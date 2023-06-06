import React, { useState } from 'react'
import ProgressBar from '../content/Progressbar'
import Footer from '../components/Footer';
import NewHeader from '../newComponent/NewHeader/NewHeader';
import NewProgressBar from '../newComponent/NewProgressBar/NewProgressBar';
import { current } from '@reduxjs/toolkit';
import FirstForm from '../newComponent/Forms/FirstForm';
import SecondForm from '../newComponent/Forms/SecondForm';
import FourthForm from '../newComponent/Forms/FourthForm';
import ThirdForm from '../newComponent/Forms/ThirdForm';
import { Outlet } from 'react-router-dom';
import InnerHeader from '../pages/InnerHome/InnerHeader/InnerHeader';

function HomeLayout({children}) {

return (
     <div className="w-full min-h-[100vh]">
        <InnerHeader />
        <Outlet />
        
    </div>
  )
}

export default HomeLayout;