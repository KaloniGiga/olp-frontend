import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import RecommendItem from '../newComponent/RecommendSection/RecommendItem';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../utils/context/AuthContext';
import { RiArrowDownSFill } from 'react-icons/ri';
import noData from '../images/3009287.jpg';

function SearchResultSection() {

    const [showRecommend, setShowRecommend] = useState(true)
    const user = useContext(AuthContext);
    

    const { result, filteredResult, loading } = useSelector((state) => state.search);
    

  return (
      <div className=' mx-3 my-3 rounded-xl mt-4 flex flex-col min-h-[75vh]'>
      <div className='py-2 px-2 flex justify-between' onClick={() => setShowRecommend((prev) => !prev)}>
       <h3 className=' text-lg xl:text-xl font-bold pl-2'>{`${result.length} search results found.`}</h3>
       
       <div className='flex gap-4'>
       {/* <span className=''><RiArrowDownSFill size={25} /></span> */}
       </div>

      </div>
      {result.length > 0 ? (
     <div className={`px-3 py-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 transition-all duration-500 overflow-hidden ${showRecommend ? 'h-full' : 'h-0'}`}>

      {
        result && result.map((recommend, index) => {
           return (
             <RecommendItem key={index} recommend={recommend} />
           )
        })
      }
     </div>
      ): (
        <div className='w-full h-[60vh]'>
            <img src={noData} alt="" className='w-full h-full object-contain' />
        </div>
      )}
    </div>
  )
}

export default SearchResultSection