import React, { useState } from 'react'
import { BsSearchHeart } from 'react-icons/bs'
import { axiosInstance } from '../../../http';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSearchUserThunk } from '../../../store/thunk/searchUserThunk';
import { getSearchUser } from '../../../utils/api';

function Search() {
    const [value, setValue] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      
      dispatch(
        fetchSearchUserThunk(value)
      )
      navigate('/home/dashboard/search');
      // console.log(value);
  }

  return (
    <div className='flex w-full overflow-hidden justify-between bg-screen rounded-3xl items-center border-[2px] border-[rgba(0 ,0, 0, 0.6)]'>
      <form className='flex w-full justify-between bg-screen items-center py-2 2xl:py-2 ' action="" onSubmit={(e) => handleSubmit(e)}>
        <input className='w-full bg-transparent outline-none border-none px-2 text-sm 2xl:text-md' onChange={(e) => setValue(e.target.value)} placeholder='Search by name' />
           <button type='submit' className='h-full px-2  border-l-[2px] border-[rgba(0, 0, 0, 0.6)]'><BsSearchHeart size={20} color='var(--primary)'/></button>
        </form>
    </div>
  )
}

export default Search