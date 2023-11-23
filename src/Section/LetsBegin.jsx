import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance } from '../http';
import { useNavigate } from 'react-router-dom';
import RecommendItem from '../newComponent/RecommendSection/RecommendItem';
import { setSearchResults } from '../store/features/searchUser';
import { AuthContext } from '../utils/context/AuthContext';
import NoDataFound from '../newComponent/NoDataFound/NoDataFound';

function LetsBegin() {
   
 const dispatch = useDispatch();
 const navigate = useNavigate()
 const { searching_for, agefrom, ageto, caste, letsBegin } = useState([]);
 
 const [searchedBegin, setSearchedBegin] = useState([]);
 const [loading, setLoading] = useState(false);

   const [showRecommend, setShowRecommend] = useState(true)
    const user = useContext(AuthContext);
    const [color, setColor] = useState('var(--primary)');
    
    const { result, filteredResult} = useSelector((state) => state.search);
    console.log(filteredResult);

 useEffect(() => {
    if(letsBegin) {
        setLoading(true)
    axiosInstance.get(`/search/letsBegin?searching_for=${searching_for}&agefrom=${agefrom}&ageto=${ageto}&caste=${caste}`)
    .then((res) => {
      const data = res.data;
      setSearchedBegin(res.data);
      dispatch(setSearchResults(res.data));
      setLoading(false);
    })
    .catch((err) => {
       console.log(err);
     })
    } else {
        navigate('/home/main/dashboard');
    }
 }, [])


  if(loading) {
   <div className="w-screen h-screen flex justify-center items-center">
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={{}}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
  }

  return (
    <div className=' mx-3 my-3 rounded-xl mt-4 flex flex-col min-h-[75vh] px-2 py-2'>
      <div className='py-2 px-2 flex justify-between' onClick={() => setShowRecommend((prev) => !prev)}>
       <h3 className=' text-lg xl:text-xl font-bold pl-2'>{`${result.length} search results found.`}</h3>
       
       <div className='flex gap-4'>
       {/* <span className=''><RiArrowDownSFill size={25} /></span> */}
       </div>

      </div>
      {result.length > 0 || filteredResult.length > 0 ? (
     <div className={`px-3 py-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 transition-all duration-500 overflow-hidden ${showRecommend ? 'h-full' : 'h-0'}`}>
      {
        filteredResult.length > 0 ? (
          filteredResult.map((recommend, index) => {
           return (
             <RecommendItem key={index} recommend={recommend} />
           )
        })
        ): (
           
            result.map((recommend, index) => {
               return (
                <RecommendItem key={index} recommend={recommend} />
               )
            })
    
        )
      }
     </div>
      ): (
        // <div className='w-full h-[60vh]'>
        //     <img src={noData} alt="" className='w-full h-full object-contain' />
        // </div>
        <NoDataFound />
      )}
    </div>
  )
}

export default LetsBegin