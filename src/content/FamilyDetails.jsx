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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Submitted: ${education} ${subject} (${occupation})  ${companyname} ${monthlysalery} (${annualincome})  ${universitycollage} ${foreign} ${job} ${business}`
    );
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
                    value={education}
                    onChange={(event) => setEducation(event.target.value)}
                    required
                  />
                  <label>Education</label>
                </div>
                <div className="subject group">
                  <input
                    type="text"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    required
                  />{" "}
                  <label>subject</label>
                </div>
                <div className="occupation group">
                  <input
                    type="text"
                    value={occupation}
                    onChange={(event) => setOccupation(event.target.value)}
                    required
                  />{" "}
                  <label>occupation</label>
                </div>
                <div className="companyname group">
                  <input
                    type="text"
                    value={companyname}
                    onChange={(event) => setCompanyName(event.target.value)}
                    required
                  />{" "}
                  <label>Company Name</label>
                </div>
              </div>

              <div className="Family-details-form-middle">
                <div className="monthlysalery group">
                  <input
                    type="number"
                    value={monthlysalery}
                    onChange={(event) => setMonthlySalery(event.target.value)}
                    required
                  />{" "}
                  <label>monthlysalery</label>
                </div>
                <div className="annualincome group">
                  <input
                    type="number"
                    value={annualincome}
                    onChange={(event) => setAnnualIncome(event.target.value)}
                    required
                  />{" "}
                  <label>annualincome</label>
                </div>
                <div className="universitycollage group">
                  <input
                    type="text"
                    value={universitycollage}
                    onChange={(event) =>
                      setUniversityCollage(event.target.value)
                    }
                    required
                  />
                  <label>university/collage</label>
                </div>
                <div className="foreign group">
                  <input
                    type="text"
                    value={foreign}
                    onChange={(event) => setForeign(event.target.value)}
                    required
                  />
                  <label>foreign</label>
                </div>
              </div>

              <div className="Family-details-form-right">
                <div className="job group">
                  <input
                    type="text"
                    value={job}
                    onChange={(event) => setJob(event.target.value)}
                    required
                  />
                  <label>job</label>
                </div>
                <div className="business group">
                  <input
                    type="text"
                    value={business}
                    onChange={(event) => setBusiness(event.target.value)}
                    required
                  />
                  <label>Business</label>
                </div>
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
