import React, { useRef, useState } from "react";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import { VscDeviceCamera} from "react-icons/vsc";
import { Link } from "react-router-dom";
import "../styles/UploadProfileSection.css";
import ProgressBar from "./Progressbar";
const UploadProfileSection = (props) => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState('https://www.caltrain.com/files/images/2021-09/default.jpg'
  );

  const handleCircleClick = () => {
    fileInputRef.current.click();
  };
  const handleFileSelect = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };
  
  return (
    <>
      <div className="UploadProfileSection">
        <ProgressBar />
        <h1>"Please Upload your Profile Picture"</h1>
        <div className="container">
               
        <div className="upload-form">
        <div className="upload-box">
        {selectedImage ? (<img src={selectedImage} alt="profile pic" className="profilepic" />):("")}
        <div className="ppupload"onClick={handleCircleClick}><VscDeviceCamera className="profilecamera"/></div>
        <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept="image/*" onChange={handleFileSelect}/>
        </div>
         <div className="profile-bio">
          <h2>Samar Rai</h2>
         </div>
        </div>
       </div>
        </div>
        <div className="UploadProfileSection-btn">
          <Link to="/preferencedetails">
            {" "}
            <button type="reset" className="btnprev">
              <HiChevronDoubleLeft /> Prev
            </button>
          </Link>
          <Link to="#">
            <button type="submit" className="btnnext">
              Next <HiChevronDoubleRight />
            </button>
          </Link>
        </div>
    </>
  );
};
export default UploadProfileSection;
