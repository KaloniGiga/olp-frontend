import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  rem,
  Group,
  Divider,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react';
import { useState } from 'react';
import GoogleBtn from './GoogleBtn/GoogleBtn';
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { axiosInstance } from '../http';
import { addToast } from '../store/features/toastSlice';
import { useNavigate } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';
import authImage from '../images/4796268.jpg'
import { useContext } from 'react';
import { AuthContext } from '../utils/context/AuthContext';
import { setPersonalDetail } from '../store/features/personalDetailSlice';
import { setFamilyDetail } from '../store/features/familyDetailSlice';
import { setEducationDetail } from '../store/features/educationDetailSlice';
import { setPreferanceDetail } from '../store/features/preferanceDetailSlice';


const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: rem(300),
    height: rem(600),
    maxHeight: rem(650),
    backgroundSize: 'cover',
    width: '75%',
    boxShadow: '0px 0px 5px rgba(0,0,0,0.2)',
    backgroundImage:
      "url('../images/4796268.jpg')",
   
  
    [theme.fn.smallerThan('sm')]: {
      width: '95%',
    },
    [`@media (min-width: 1600px)`]: {
      width: '60%',
    },
  },

  wrapperContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: 'var(--screen)',

  },
  form: {
    height: '100%',
    flexBasis: '50%',
    maxWidth: rem(450),

   [`@media (min-width: ${rem(100)})`]: {
      maxWidth: rem(600),
    },
    [theme.fn.smallerThan('lg')]: {
      flexBasis: '100%',
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Montserrat, ${theme.fontFamily}`,
  },
}));



export default function Authentication() {

  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useContext(AuthContext);

  const form = useForm({
     initialValues: {
      username: '',
      email: '',
      password: '',
     },


     validate: {
      ...(!isLogin ?  {username: (val) => (val.length <= 3 ? 'Username must have at least three characters' : null)}: {}) ,
       email: (val) =>  (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
       password: (val) =>  (val.length <= 6 ? 'Password should include at least 6 characters' : null),
     }
  })

  const { classes } = useStyles()

   const handleSubmit = (data) => {
     
     const user = !isLogin ? {email:  data.email, username: data.username, password: data.password} : {email: data.email, password: data.password};

     console.log(user);
     axiosInstance
     .post(!isLogin ? 'authentication/register' : 'authentication/log-in', user)
     .then((response) => {
        
        const user = response.data;
        setUser(user);
           
        // dispatch(setPersonalDetail(user.profile && user.profile))
        // dispatch(setFamilyDetail(user.family && user.family));
        // dispatch(setEducationDetail(user.education && user.education));
        // dispatch(setPreferanceDetail(user.preferance && user.preferance));

        // showNotification({
        //   title: 'Congrats! 😀🖐',
        //   message: "You're logged in successfully!"
        // })
      
         
        if(user && !user.profile) {
          navigate('/home/form')
        }else if(user && !user.family) {
          navigate('/home/form');
        }else if(user && !user.education) {
          navigate('/home/form');
        }else if(user && !user.preferance) {
          navigate('/home/form');
        }else {
           navigate('/home/main/dashboard');
        }
     })
     .catch((error) => {
      console.log(error);
        if(error.response) {
          const response = error.response;
          const { message } = response.data;
          console.log(message);
          switch (response.status) {
            case 400:
            case 500:
              
               showNotification({
                title: 'Something went wrong!'
               })
             
             break;
            default: 
             showNotification({
              title: 'Something went wrong!'
             })
             break;
          }
        }
     });
  };




  return (
    <div className={classes.wrapperContainer}>
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="sm" mb={20}>
         {`${isLogin ? 'Welcome back!' : 'Create an Account' }`}
        </Title>

         <Group >
          <GoogleBtn />
        </Group>

        <Divider label="Or continue with email" labelPosition="center" my="xs" />
        
      <form onSubmit={form.onSubmit(handleSubmit)}>

        {!isLogin && <TextInput
         required
         icon={<AiOutlineUser size={'1rem'} color='var(--primary)' />}
         label="Username"
          placeholder='rational Cayote'
          size='md'
          mb='sm'
          value={form.values.username}
          error={form.errors.username && 'Username must have at least 3 characters'}
          onChange={(e) => form.setFieldValue('username', e.currentTarget.value)}
            />}

        <TextInput 
        icon={<AiOutlineMail size={'1rem'} color='var(--primary)' />}
        required 
        value={form.values.email}
        onChange={(e) => {
          // console.log(e.currentTarget.value)
          form.setFieldValue('email', e.currentTarget.value)
         
        }}
        label="Email address"
        placeholder="hello@gmail.com"
        size="md"
        error={form.errors.email && 'Invalid email'}
         />
        
        <PasswordInput label="Password"
        required
        // description="Password must have at least 6 characters"
         icon={<AiOutlineLock size={'1rem'} color='var(--primary)'/>}
         placeholder="Your password"
         value={form.values.password}
         onChange={(e) => form.setFieldValue('password', e.currentTarget.value)}
         mt="md"
         size="sm" 
         error={form.errors.password && 'Invalid Password'}
         />
        {/* <Checkbox label="Keep me logged in" mt="xl" size="md" /> */}
       {isLogin ? (
         <Button type='submit' fullWidth mt="xl" size="md" style={{backgroundColor: 'var(--secondary)'}}>
            Login
        </Button> 
        ): (
       <Button type='submit' fullWidth mt="xl" size="md" style={{backgroundColor: 'var(--secondary)'}}>
            Register
        </Button> 
        ) }
        </form>

        {isLogin ? (
        <Text ta="center" mt="md">
          Don&apos;t have an account?{" "}
          <Anchor weight={700} variant='link' onClick={() => {
            setIsLogin(false)
            form.reset();
          }}>
            Register
          </Anchor>
        </Text>
        ):(
         <Text ta="center" mt="md">
          Already have an account?{" "}
          <Anchor variant='link' style={{}} weight={700} onClick={() => {
            setIsLogin(true)
            form.reset();
            }}>
            Sign up
          </Anchor>
        </Text>
        )}
      </Paper>

      <div className='basis-[50%] hidden lg:block bg-white'>
        <img className='w-full h-full object-center object-contain ' src={authImage} alt="authImage" />
      </div>
    </div>
    </div>
  );
}