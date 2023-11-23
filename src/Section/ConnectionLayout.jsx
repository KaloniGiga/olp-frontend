import React, { useState } from 'react'
import ConnectionRequestSection from './connectionRequestSection'
import ConnectionSection from './ConnectionSection'
import { Box, Center, SegmentedControl, createStyles } from '@mantine/core'
import { BiPhotoAlbum } from 'react-icons/bi';
import { AiOutlinePullRequest } from 'react-icons/ai';

 const useStyles = createStyles((theme) => ({
    segment: {
      color: theme.colors.second[4],
    }
 }))

function ConnectionLayout() {
   
  const [active, setActive] = useState('0');
  
  const handleChange = (value) => {
     setActive(value);
  }

  const {classes, theme} = useStyles();

  return (

    <div className='w-full h-full  flex flex-col min-h-screen  bg-screen '>

      <div className=' w-[90%] md:w-[80%] lg:w-[70%] xl:w-[70%] mx-auto'>
      <SegmentedControl
       size='md'
       radius={'sm'}
       className={classes.segment}
       color={theme.colors.second[5]}
       my={20}
       style={{backgroundColor: 'white'}}
       onChange={handleChange}
        data={[
          {value: '0', label: (
            <Center>
            <BiPhotoAlbum size={20} />
            <Box ml={10}>Invitation</Box>
            </Center>
            
          )},
          // {value: '1', label: 'Sent Request'},
          { value: '1', label: (
            <Center>
            <AiOutlinePullRequest size={20} />
            <Box ml={10}>Connection</Box>
            </Center>
            )} 
        ]}
       />
       
     </div>
      {active == '0' && <ConnectionRequestSection />}
         {active == '1' && <ConnectionSection /> }
    </div>

  )
}

export default ConnectionLayout
