import React from "react";
import ProgressBar from "./Progressbar";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import { useState } from "react";
import "../styles/FamilyDetails.css";
import { Link } from "react-router-dom";
const FamilyDetails = () => {
  const [education, setEducation] = useState("");
  const [subject, setSubject] = useState("");
  const [occupation, setOccupation] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [monthlysalery, setMonthlySalery] = useState("");
  const [annualincome, setAnnualIncome] = useState("");
  const [universitycollage, setUniversityCollage] = useState("");
  const [foreign, setForeign] = useState("");
  const [job, setJob] = useState("");
  const [business, setBusiness] = useState("");
  // const [noofmarried, setNoOfMarried] = useState("");
  // const [noofmarried, setNoOfMarried] = useState("");

  const [values, setValues] = useState({
    education_degree: '',
    subject: '',
    college: '',
    occupation: '',
    job: '',
    selfEmployed: '',
    monthlysalery: '',
    annualincome: '',
    companyName: '',
    foreignEmployment: '',
    country: '',

  })

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
    <>
      <div className="Family-detail-form">
        <ProgressBar />
        <h1>"Please fill up the education and occupation details"</h1>
        <div className="container">
          <div className="row">
            <form className="Family-details" onSubmit={handleSubmit}>
              <div className="Family-details-form-left">
                <div className="education group">
                  <input
                    type="text"
                    value={values.education_degree}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <label>Education Degree</label>
                </div>
                <div className="subject group">
                  <input
                    type="text"
                    value={values.subject}
                    onChange={(e) => handleChange(e)}
                    required
                  />{" "}
                  <label>Subject</label>
                </div>
                <div className="occupation group">
                  <input
                    type="text"
                    value={values.college}
                    onChange={(e) => handleChange(e)}
                    required
                  />{" "}
                  <label>College/University</label>
                </div>
                <div className="companyname group">
                  <input
                    type="text"
                    value={values.occupation}
                    onChange={(e) => handleChange(e)}
                    required
                  />{" "}
                  <label>Occupation</label>
                </div>
              </div>

              <div className="Family-details-form-middle">
                <div className="monthlysalery group">
                  <input
                    type="number"
                    value={values.monthlySalary}
                    onChange={(e) => handleChange(e)}
                    required
                  />{" "}
                  <label>monthly Salery</label>
                </div>
                <div className="annualincome group">
                  <input
                    type="number"
                    value={values.annualIncome}
                    onChange={(e) => handleChange(e)}
                    required
                  />{" "}
                  <label>Annual Income</label>
                </div>
                <div className="universitycollage group">
                  <input
                    type="text"
                    value={values.companyName}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <label>Company Name</label>
                </div>
                <div className="foreign group">
                  <input
                    type="text"
                    value={values.foreignEmployment}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <label>Foreign Employment</label>
                </div>
              </div>

              <div className="Family-details-form-right">
                <div className="job group">
                  <input
                    type="text"
                    value={values.country}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <label>Country</label>
                </div>
                {/* <div className="business group">
                  <input
                    type="text"
                    value={business}
                    onChange={(event) => setBusiness(event.target.value)}
                    required
                  />
                  <label>Business</label>
                </div> */}
                {/* <div className="noofmarried group">
                  <input
                    type="number"
                    value={noofmarried}
                    onChange={(event) => setNoOfMarried(event.target.value)}
                    required
                  />
                  <label>No of married</label>
                </div> */}
              </div>
            </form>
          </div>
        </div>
        <div className="Family-details-btn">
          <Link to="/contactdetails">
            {" "}
            <button type="reset" className="btnprev">
              <HiChevronDoubleLeft /> Prev
            </button>
          </Link>
          <Link to="/preferencedetails">
            <button type="submit" className="btnnext">
              Next <HiChevronDoubleRight />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FamilyDetails;
