import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeConnectionThunk } from '../../store/thunk/connectionsThunk';
import { Link, useNavigate } from 'react-router-dom';
import profileAvatar from '../../images/olp_avatar.avif';
import { useContext } from 'react';
import { AuthContext } from '../../utils/context/AuthContext';
import { AgeFromDate } from 'age-calculator';
import { updateSelectedConversation } from '../../store/features/selectedConversationSlice';
import { Badge, Button, Card, Flex, Group, Image, Stack, Text, Title, Tooltip, createStyles } from '@mantine/core';
import { AiOutlineDisconnect, AiOutlineSend } from 'react-icons/ai';

const useStyles = createStyles((theme) => ({
    card: {
       '&:hover': {
         background: '#EAF3FF'
       }
    },
    image: {
      [theme.fn.largerThan('sm')]: {
        flexBasis: '12%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: ' center',
      }
    },
    name: {
      [theme.fn.largerThan('sm')]: {
        flexBasis: '30%'
      }
    },
    badges: {
      [theme.fn.largerThan('sm')]: {
        flexBasis: '30%'
      }
    },
    button: {
      [theme.fn.largerThan('sm')]: {
        flexBasis: '40%',
      }
    }
}))

function ConnectionCard(props) {
   const { classes } = useStyles();
    const [imageUrl, setImageUrl] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useContext(AuthContext);
    const [monthToNum, setMonthtoNum] = useState({
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11,
    })
    
    const {conversations} = useSelector((state) => state.conversation)

    useEffect(() => {
       if(!imageUrl) {
         setImageUrl('https://www.caltrain.com/files/images/2021-09/default.jpg');
       }
    }, [])

     const recepient = props.connection.sender.id === user[0].id ? props.connection.receiver : props.connection.sender;

    const handleConnectionDisconnect = () => {
          dispatch(removeConnectionThunk(props.connection.id))
    }

    const handleSendMessage = () => {
        const requiredUser = props.connection.sender.id == user[0].id ? props.connection.receiver : props.connection.sender;
        
        const requiredConversationId = conversations.find((cov) => cov.creator.id == requiredUser.id || cov.recepient.id == requiredUser.id);
       
          console.log(requiredConversationId)
          
        dispatch(
          updateSelectedConversation({conversation: requiredConversationId ? requiredConversationId : requiredUser, type: requiredConversationId ? 'conversation' : 'createConversation'})
        )
        requiredConversationId ? navigate(`/home/main/chat/conversation/${requiredConversationId.id}`) : navigate(`/home/main/chat/conversation/`)
    }

  
  return (
     <Card className={classes.card}>
      <Flex
       direction={{base: 'column', md: 'row'}}
       justify={'space-between'}
       align={'center'}
      > 
      
      <div className={classes.image}>
      <Image width={60} height={60} radius={100} src={recepient && recepient.avatarId ? `${import.meta.env.VITE_BASE_URL}/user-avatar/${recepient.avatarId}` : profileAvatar} alt="Profile" />
       </div> 
       <Stack spacing={0} className={classes.name}>
        <Title order={3} size={'h4'} transform='capitalize'>{recepient && recepient.profile && recepient.profile.fullname}</Title>
         <Text size={'md'} color='dimmed'>{recepient && recepient.profile && recepient.profile.address}</Text>
        </Stack>
    
      
      <Stack spacing={0} align='center' className={classes.badges}>
      <Group position='center' my="sm">
        <Tooltip label="Age" withArrow>
         <Badge size='md'>
           {new AgeFromDate(new Date(recepient.profile && recepient.profile.year, monthToNum[recepient.profile && recepient.profile.month], recepient.profile && recepient.profile.day)).age}
         </Badge>
        </Tooltip>

        <Tooltip label="Religion" withArrow>
         <Badge size='md'>
            {recepient && recepient.profile && recepient.profile.religion}
         </Badge>
         </Tooltip>

         
        <Tooltip label="Caste" withArrow>
         <Badge size='md' >
            {recepient && recepient.profile && recepient.profile.caste}
         </Badge>
         </Tooltip>
     
      </Group>
    
      <Tooltip label="Profession" withArrow>
         <Badge size='md'>
            {recepient && recepient.education && recepient.education.occupation}
         </Badge>
         </Tooltip>

   </Stack>
    
           <Group position='right' align='center' className={classes.button}>
               <Button leftIcon={<AiOutlineDisconnect size={20} />} style={{backgroundColor: 'var(--secondary)'}} size="sm" variant="filled" onClick={() => handleConnectionDisconnect()} >Disconnect</Button> 

                <Button leftIcon={<AiOutlineSend size={20} />} size="sm" variant="outline" onClick={() => handleSendMessage()}>Send Message</Button>
          </Group>
      </Flex>
    </Card> 
  )
}

export default ConnectionCard