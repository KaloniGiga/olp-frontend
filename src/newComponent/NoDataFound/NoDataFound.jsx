import React from 'react'
import noDataFound from '../../images/noDataFound.png';

function NoDataFound() {

  return (

    <div className='w-full h-[30vh] flex flex-col justify-center items-center realtive'>
        <div className='relative w-[150px] h-[150px]'>
        <img className='object-contain w-full h-full object-center'  src={noDataFound} alt="" />

        <h1 className=' absolute bottom-5 left-[30%] font-semibold text-xl '>No Data</h1>
        </div>
    </div>
  )
}

export default NoDataFound