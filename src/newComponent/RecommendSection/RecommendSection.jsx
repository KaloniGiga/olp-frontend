import React, { useState } from 'react'
import RecommendItem from './RecommendItem'
import { useContext } from 'react'
import { AuthContext } from '../../utils/context/AuthContext'
import { RiArrowDownSFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import noData from '../../images/3009287.jpg';

function RecommendSection() {

   const [showRecommend, setShowRecommend] = useState(true)
    const user = useContext(AuthContext);
    const recommendItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];

    const {recommendUser} = useSelector((state) => state.recommend);
    
    

  return (
    <div className=' mx-3 my-3 rounded-xl mt-4 flex flex-col'>


    { recommendItem ? (
      <>
      <div className='py-2 px-2 flex justify-between' onClick={() => setShowRecommend((prev) => !prev)}>
       <h3 className=' text-xl font-semibold'>People you may be interested in</h3>
       {/* <span className=''><RiArrowDownSFill size={25} /></span> */}
      </div>
     <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 transition-all duration-500 overflow-hidden ${showRecommend ? 'h-full' : 'h-0'}`}>
      {
         recommendItem.map((recommend, index) => {
           return (
             <RecommendItem key={index} recommend={recommend} />
           )
        }) 
      }
     </div>
     </>
    ):(
       <div className='w-full h-[60vh]'>
            <img src={noData} alt="" className='w-full h-full object-contain' />
        </div>
    )
    }
    </div>
  )
}

export default RecommendSection