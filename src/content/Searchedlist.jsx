import React from 'react'
import '../styles/Searchedlist.css'
import { Link } from 'react-router-dom';
import data from '../Store/data.json'
import { useNavigate } from 'react-router-dom';


const Searchedlist = () => {
  const navigate = useNavigate();
  const handleCardClick = (value) => {
    navigate(`/userprofile/${value.id}`, { state: { value } });
  };


  return (
    <>
      {data.map((value)=>( 
      <div key={value.id}  className="searchedlist">
     <div className="searchedlist-left">
        <img src="https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png" alt="Profile"/>
     </div>
     <div className="searchedlist-middle">
        <h3>{value.full_name}</h3>
        <hr/>
        <div className="user-details">
            <div className="user-details-left">
                <p>{value.age}, <span>{value.height}</span></p>
                <p>{value.religion}, <span>{value.caste}</span></p>
                <p>{value.education}</p>
                <p>{value.marital_status}</p>            
            </div>
            <div className="user-details-middle">
                <p>{value.city}</p>
                <p>{value.occupation}</p>
                <p>{value.country}</p>
                <p>{value.salery}</p>
            </div>
            <div className="user-details-right">
               <Link to="/userprofile"><button onClick={() => handleCardClick()}  className="searchedlist-outline-btn">View Profile</button></Link> 

                <button   className="searchedlist-btn">Connect</button>
            </div>
        </div>
     </div>
      </div>
       ))} 
    </>
  )
}

export default Searchedlist