import React, { useEffect, useRef, useState } from 'react'
import { VscDeviceCamera } from 'react-icons/vsc';
import Footer from '../../components/Footer';
import NewHeader from '../../newComponent/NewHeader/NewHeader';
import cover from '../../images/73273620.webp';
import { Link } from 'react-router-dom';
// import useWindowSize from 'react-use/lib/useWindowSize'
// import Confetti from 'react-confetti'

function PhotoUploadForm() {

    const [defaultUrl, setDefaultUrl] = useState(null);
    const fileInputRef = useRef(null);
    // const { width, height } = useWindowSize()

    useEffect(() => {
      if(!defaultUrl) {
        setDefaultUrl('https://www.caltrain.com/files/images/2021-09/default.jpg')
      }
    }, [])

    const handleProfileClick = () => {
        if(fileInputRef) {
            fileInputRef.current.click();
        }
    }


return (

  <>
     {/* <Confetti
      width={'1000px'}
      height={'500px'}
    /> */}
    <NewHeader />
     <div className='w-full min-h-[85vh]  flex flex-col justify-center items-center bg-screen'>
      
     <div className='w-[80%] mx-auto flex justify-between items-center'>
        {/* <h1 className='w-full text-2xl font-semibold my-4'>People with profile picture are more likely to get attention</h1> */}
      
     </div>
       <div className='w-[35%] bg-white mx-auto flex justify-between shadow-md items-center rounded-3xl overflow-hidden'>

          <div className='w-full min-h-[50vh] h-full flex flex-col justify-center items-center bg-white'>
                    <h3 className='text-center font-semibold text-2xl mb-3'>Upload a profile photo.</h3>
              <div className='relative w-[200px] h-[200px] rounded-[50%]' onClick={() => handleProfileClick()}>
                <img className='rounded-full object-cover w-full h-full object-center' src={defaultUrl} alt="" />

                {/* <span className='absolute right-0 bottom-0'><VscDeviceCamera size={30} /></span> */}
              </div>
              <button className='px-4 py-2 bg-primary rounded-xl text-white text-xl my-3' onClick={() => handleProfileClick()}>Add a Photo +</button>

              <div>
                 <input type="file" ref={fileInputRef} className='d-none' accept="image/*" />
              </div>
              
              <div className='w-full flex flex-col justify-center align-center'>
                {/* <h3 className='text-center my-2'>{`Groom and bridge`}</h3> */}
                <Link to="/home/dashboard"><h6 className='text-md lg:text-lg 2xl:text-xl underline text-center'>Skip</h6></Link>
              </div>
          </div>

          {/* <div className='basis-1/2 h-full flex justify-center items-center bg-black '>
             <img src={cover} alt="" className='w-full h-full object-cover object-center' />
          </div> */}

       </div>

       
    </div>

    <Footer />
    </>
  )
}

export default PhotoUploadForm;