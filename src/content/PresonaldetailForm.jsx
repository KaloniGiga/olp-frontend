import React, { useEffect, useState } from "react";
import "../styles/PresonaldetailForm.css";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import ProgressBar from "./Progressbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { axiosInstance } from "../http";
function PresonaldetailForm() {
   
  const [profileId, setProfileId] = useState(null);
  const {user} = useSelector((state) => state.auth);

  const [values, setValues] = useState({
    fullname: '',
    age: '',
    height: '',
    profileCreatedBy: '',
    religion: '',
    sex: '',
    caste: '',
    subcaste: '',
    language: '',
    marital_status: '',
    dateOfBirth: '',
    smokeOrdrink: ''
  })

  useEffect(() => {
    if(user && user.profile) {
       setProfileId(user.profile);
    }
  }, [user]);

  const handleChange = (e) => {
     setValues({...values, [e.target.name]: e.target.value})
  }



  const handleSubmit = (event) => {
    event.preventDefault();

         axiosInstance.post('/users/personal-detail', values)
          .then((response) => {
            
         }).catch((error) => {
           console.log(error);
         })
  };

  return (
    <div className="personal-detail-form">
      <ProgressBar />
      <h1>"Please fill up the personal details"</h1>
      <div className="container">
        <div className="row">
          <form className="" onSubmit={handleSubmit}>
            <div className="personal-details">
            <div className="personal-details-form-left">
              <div className="fullname group">
                <input
                  type="text"
                  name="fullname"
                  value={values.fullname}
                  onChange={(e) => handleChange(e)}
                  required
                />
                <label>FullName</label>
              </div>
              <div className="Age group">
                <input
                  type="number"
                  name="age"
                  value={values.age}
                  onChange={(e) => handleChange(e)}
                  required
                />{" "}
                <label>Age</label>
              </div>

              <div className="height group">
                <input
                  type="text"
                  value={values.height}
                  name="height"
                  onChange={(e) => handleChange(e)}
                  required
                />{" "}
                <label>height</label>
              </div>
              <div className="profilecreatedby group">
                <input
                  type="text"
                  value={values.rofileCreatedBy}
                  name="profileCreatedBy"
                  onChange={(e) => handleChange(e)}
                  required
                />{" "}
                <label>profile created by</label>
              </div>
            </div>
            <div className="personal-details-form-middle">
              <div className="Religion group">
                <input
                  name="religion"
                  type="text"
                  value={values.religion}
                  onChange={(e) => handleChange(e)}
                  required
                />{" "}
                <label>religion</label>
              </div>
              <div className="sex group">
                <input
                  type="text"
                  name="sex"
                  value={values.sex}
                  onChange={(e) => handleChange(e)}
                  required
                />{" "}
                <label>sex</label>
              </div>

              <div className="caste group">
                <input
                  type="text"
                  value={values.caste}
                  name="caste"
                    onChange={(e) => handleChange(e)}
                  required
                />
                <label>caste</label>
              </div>

              <div className="subcaste group">
                <input
                  type="text"
                  name="subcaste"
                  value={values.subcaste}
                    onChange={(e) => handleChange(e)}
                  required
                />
                   <label>subcaste</label>
              </div>
            </div>

            <div className="personal-details-form-right">
              <div className="language group">
                <input
                  type="text"
                  value={values.language}
                  name="language"
                    onChange={(e) => handleChange(e)}
                  required
                />
                <label>language</label>
              </div>
              <div className="maritalstatus group">
                <input
                  type="text"
                  name="marital_status"
                  value={values.marital_status}
                    onChange={(e) => handleChange(e)}
                  required
                />
                <label>maritalstatus</label>
              </div>
              <div className="dob group">
                <input
                  type="date"
                  name="dateOfBirth"
                  value={values.dateOfBirth}
                    onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="smokedrink group">
                <input
                  type="text"
                  name="smokeOrdrink"
                  value={values.smokeOrdrink}
                    onChange={(e) => handleChange(e)}
                  required
                />
                <label>smokeOrdrink</label>
              </div>
              {/* <div className="gender">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    value={male}
                    onChange={(e)}
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    value={female}
                    onChange={(e) => handleChange(e)}
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    female
                  </label>
                </div>
              </div> */}
            </div>
            </div>

            <div className="personal-details-btn">
          <button className="btnprev" onClick={() => handlePrevClick()}>
            <HiChevronDoubleLeft /> Prev
          </button>
      
      
          <button type="submit" className="btnnext">
            Next <HiChevronDoubleRight />
          </button>
       
          </div>
              
          </form>
        </div>
      </div>
  
    </div>
  );
}

export default PresonaldetailForm;
