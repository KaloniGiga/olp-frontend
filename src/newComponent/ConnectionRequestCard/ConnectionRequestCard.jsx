import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { acceptConnectionRequestThunk, cancelConnectionRequestThunk, rejectConnectionRequestThunk } from '../../store/thunk/connectionsThunk';
import { Link, useNavigate } from 'react-router-dom';
import profileAvatar from '../../images/olp_avatar.avif';
import { useContext } from 'react';
import { AuthContext } from '../../utils/context/AuthContext';
import { AgeFromDate} from 'age-calculator';
import { SocketContext } from '../../utils/context/SocketContext';
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
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
function ConnectionRequestCard(props) {
   const {classes} = useStyles();
    const [imageUrl, setImageUrl] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useContext(AuthContext);
   const socket = useContext(SocketContext);
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
    useEffect(() => {
       if(!imageUrl) {
         setImageUrl('https://www.caltrain.com/files/images/2021-09/default.jpg');
       }
    }, [])
    console.log(props);
    const handleRequestAccept = () => {
       dispatch(acceptConnectionRequestThunk(props && props.connectionRequest.id, socket));
       
    }

    const handleRequestReject = () => {
       dispatch(rejectConnectionRequestThunk(props && props.connectionRequest.id))
    }

    const handleRequestCancel = () => [
       dispatch(cancelConnectionRequestThunk(props && props.connectionRequest.id))
    ]
    
    const recepient = props.connectionRequest &&  props.connectionRequest.sender && props.connectionRequest.sender.id === user[0].id ? props.connectionRequest.receiver : props.connectionRequest.sender;
    

  return (
      <Card className={classes.card}>
      <Flex
       direction={{base: 'column', md: 'row'}}
       justify={'space-between'}
       align={'center'}
      > 
      <div className={classes.image}>
      <Image   width={60} height={60} radius={100} src={recepient && recepient.avatarId ? `${import.meta.env.VITE_BASE_URL}/user-avatar/${recepient.avatarId}` : imageUrl} alt="Profile" />
       </div>
       <Stack spacing={0} className={classes.name}>
        <Title order={3} size={'h4'} transform='capitalize'>{recepient && recepient.profile.fullname}</Title>
         <Text size={'lg'} color='dimmed'>{recepient && recepient.profile.address}</Text>
        </Stack>
    
      
      <Stack spacing={0} align='center' className={classes.badges}>
      <Group position='center' my="sm">
        <Tooltip label="Age" withArrow>
         <Badge size='lg'>
           {new AgeFromDate(new Date(recepient.profile.year, monthToNum[recepient.profile.month], recepient.profile.day)).age}
         </Badge>
        </Tooltip>

        <Tooltip label="Religion" withArrow>
         <Badge size='lg'>
            {recepient.profile.religion}
         </Badge>
         </Tooltip>

         
        <Tooltip label="Caste" withArrow>
         <Badge size='lg' >
            {recepient.profile.caste}
         </Badge>
         </Tooltip>
     
      </Group>
    
      <Tooltip label="Profession" withArrow>
         <Badge size='lg'>
            {recepient && recepient.education && recepient.education.occupation}
         </Badge>
         </Tooltip>

   </Stack>
    
           <Group position='right' align='center' className={classes.button}>
               <Button leftIcon={<AiOutlineDisconnect size={20} />} style={{backgroundColor: 'var(--secondary)'}} size="sm" variant="filled" onClick={props.type == 'invite' ? () => handleRequestAccept() : () => navigate(`/home/main/profile/${recepient.id}`)} >{props.type == 'invite' ? 'Accept' : 'View Profile'}</Button> 

                <Button leftIcon={<AiOutlineSend size={20} />}  size="sm" variant="outline" onClick={props.type == 'invite' ? () => handleRequestReject() : () => handleRequestCancel()}>{props.type == 'invite' ? 'Ignore' : 'Cancel'}</Button>
          </Group>
      </Flex>
    </Card> 
  )
}

export default ConnectionRequestCard;