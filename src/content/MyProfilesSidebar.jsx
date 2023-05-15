import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Myprofiles.css'
import {AiFillSetting,AiOutlineCamera} from 'react-icons/ai'
import {BsFillPeopleFill} from 'react-icons/bs'
import {MdEventAvailable} from 'react-icons/md'
import {MdNotifications} from 'react-icons/md'
import LayoutwithoutFooter from '../components/LayoutwithoutFooter'

const MyProfilesSidebar = () => {
  const fileInputRef = useRef(null);
  const imageRef=useRef(null)
  const [selectedFile, setSelectedFile] = useState('https://www.caltrain.com/files/images/2021-09/default.jpg');
  const [formData, setFormData] = useState(
    { 
      username: "",
     education: "",
     country:"",
     state:"",
     religion:"",
     caste:"",
     profession:"",
     bio:"",
     income:"",
     marital_status:"",
     height:"",
     age:"",
    }
    );
  const handleClick = () => {
    fileInputRef.current.click(); 
  };

  function handleInputChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  }

  const handleFileSelect = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };
  const showimage=()=>{
    imageRef.current.classList.add('show');
  }
  const handleClose = () => {
    imageRef.current.classList.remove('show');
  };

  return (
    <>
      <LayoutwithoutFooter>
      <div className="myprofileSection">
      <div className="myprofileside-right">
      <div className="profile-theme"> 
      <div className="viewprofile-box">
           {selectedFile ? (<img src={selectedFile} ref={imageRef} onClick={showimage} alt="profile pic" className="viewprofile-box-pp"/>):("")}
           <div className="viewprofileupdate-box" onClick={handleClick}><AiOutlineCamera/></div>
           <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="image/*"
            />
          <div className="profile-modal" ref={imageRef} onClick={handleClose}>
        <img
          src={selectedFile}
          alt="Sample Large"
          className="profile-modal-content"
        />
          </div>
        </div> 
      </div>
      <div className="profile-save-cancel">
        <div className="">
          <h4>Profile</h4>
          <p>Update Your Photo and personal details</p>
        </div>
        <div className="">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
      <div className="profile-form pt-4">

      <div className="profile-form-left pt-4">
                <h6>My Profiles</h6><hr/>
                <ul>
                    <li><Link><BsFillPeopleFill className='myprofileside-left-icon'/> Connected<div className="badge1"></div> </Link> </li>
                    <li><Link><i className="bi bi-chat-heart"></i> Messages <div className="badge1"></div></Link></li>
                    <li><Link><MdNotifications className='myprofileside-left-icon'/> Notification <div className="badge1"></div></Link></li>
                    <li><Link><MdEventAvailable className='myprofileside-left-icon'/> Events </Link></li>
                    <li><Link><AiFillSetting className='myprofileside-left-icon me-2'/>Settings</Link></li>
                </ul>
      </div>
      <div className="profile-form-middle">
      <div className="p profile-username">
      <p>UserName:</p>
      <input type="text" name='username' value={formData.username} onChange={handleInputChange} placeholder=' @username'/>
      </div>
      <div className="p profile-bio">
      <p>Your Bio:</p>
      <textarea type="text" value={formData.bio} onChange={handleInputChange} id="bio" name="bio" maxlength="80" placeholder=' write about yourself'/>
      </div>    
      <div className="p profile-education">
      <p>Education:</p>
      <input type="text" name='education' value={formData.education} onChange={handleInputChange} placeholder=' Education'/>
      </div>
      <div className="p profile-country">
      <p>Country:</p>
      <input type="text" name='country' value={formData.country} onChange={handleInputChange} placeholder=' Country' />
      </div>
      </div>
      <div className="profile-form-right">

      <div className="p profile-username">
      <p>State:</p>
      <input type="text" name='state' value={formData.state} onChange={handleInputChange} placeholder=' State'/>
      </div>
      <div className="p profile-bio">
      <p>Religion:</p>
      <input type="text" name='religion' value={formData.religion} onChange={handleInputChange} placeholder=' Religion'/>
      </div>    
      <div className="p profile-education">
      <p>Caste:</p>
      <input type="text" name='caste' value={formData.caste} onChange={handleInputChange} placeholder=' Caste'/>
      </div>
      <div className="p profile-country">
      <p>Profession:</p>
      <input type="text"name='profession' value={formData.profession} onChange={handleInputChange} placeholder=' Profession'/>
      </div>
      </div>
      <div className="profile-form-right">

      <div className="p profile-username">
      <p>Income:</p>
      <input type="number" name='income' value={formData.income} onChange={handleInputChange} placeholder=' income'/>
      </div>
      <div className="p profile-bio">
      <p>Height:</p>
      <input type="number" name='height' value={formData.height} onChange={handleInputChange} placeholder=' Height'/>
      </div>    
      <div className="p profile-education">
      <p>Caste:</p>
      <input type="text" name='marital_status' value={formData.marital_status} onChange={handleInputChange} placeholder=' marital_status'/>
      </div>
      <div className="p profile-country">
      <p>age:</p>
      <input type="number"name='age' value={formData.age} onChange={handleInputChange} placeholder=' age'/>
      </div>
      </div>
      </div>
    </div>
    </div>
    </LayoutwithoutFooter>
    </>
  )
}

export default MyProfilesSidebar