import React, { useContext, useState } from 'react'
import ProgressBar from '../content/Progressbar'
import Footer from '../components/Footer';
import NewHeader from '../newComponent/NewHeader/NewHeader';
import NewProgressBar from '../newComponent/NewProgressBar/NewProgressBar';
import { current } from '@reduxjs/toolkit';
import FirstForm from '../newComponent/Forms/FirstForm';
import SecondForm from '../newComponent/Forms/SecondForm';
import FourthForm from '../newComponent/Forms/FourthForm';
import ThirdForm from '../newComponent/Forms/ThirdForm';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import InnerHeader from '../pages/InnerHome/InnerHeader/InnerHeader';
import { AuthContext } from '../utils/context/AuthContext';
import { useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Button, Dialog, Group, Text } from '@mantine/core';

function HomeLayout({children}) {
   const location = useLocation();
   const navigate = useNavigate();
   const user = useContext(AuthContext);
   const [opened, { toggle, close }] = useDisclosure(false);

   if (user[0] && (!user[0].profile || !user[0].family || !user[0].education || !user[0].preferance)) {
    
    return navigate('/home/form')
   } else if(!user[0]) {
     return <Navigate to={'/auth'} state={{ from: location }} replace />
   }

  useEffect(() => {
   if(user[0] && !user[0].emailVerified) {
    toggle();
   }
  }, [user])
return (
     <div className="w-full min-h-[100vh] pt-[10vh] bg-screen">
        <InnerHeader />
        <Outlet /> 
        <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md">
        
        <Group spacing={10}>
          <Text size="sm" weight={400}>
           A verificaiton link has been sent to your email.
        </Text>
          <Button variant='outline' onClick={() => navigate('/home/resend/email')}>Resend Verification Email</Button>
        </Group>
      </Dialog>
    </div>
  )
}

export default HomeLayout;