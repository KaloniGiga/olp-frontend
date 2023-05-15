import React, { useState } from "react";
import "../styles/PresonaldetailForm.css";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import ProgressBar from "./Progressbar";
import { Link } from "react-router-dom";
function PresonaldetailForm() {
  const [fullname, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [profilecreatedby, setProfileCreatedBy] = useState("");
  const [religion, setReligion] = useState("");
  const [sex, setSex] = useState("");
  const [caste, setCaste] = useState("");
  const [subcaste, setSubCaste] = useState("");
  const [language, setLanguage] = useState("");
  const [maritalstatus, setMaritalStatus] = useState("");
  const [dob, setDOB] = useState("");
  const [smokedrink, setSmokeDrink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Submitted: ${fullname} ${age} (${height}) ${profilecreatedby}   ${religion} ${sex} (${dob})  ${caste} ${subcaste} ${language} ${maritalstatus} ${dob}  ${smokedrink} `
    );
  };

  return (
    <div className="personal-detail-form">
      <ProgressBar />
      <h1>"Please fill up the personal details"</h1>
      <div className="container">
        <div className="row">
          <form className="personal-details" onSubmit={handleSubmit}>
            <div className="personal-details-form-left">
              <div className="fullname group">
                <input
                  type="text"
                  value={fullname}
                  onChange={(event) => setFullName(event.target.value)}
                  required
                />
                <label>FullName</label>
              </div>
              <div className="Age group">
                <input
                  type="number"
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                  required
                />{" "}
                <label>Age</label>
              </div>

              <div className="height group">
                <input
                  type="number"
                  value={height}
                  onChange={(event) => setHeight(event.target.value)}
                  required
                />{" "}
                <label>height</label>
              </div>
              <div className="profilecreatedby group">
                <input
                  type="text"
                  value={profilecreatedby}
                  onChange={(event) => setProfileCreatedBy(event.target.value)}
                  required
                />{" "}
                <label>profile created by</label>
              </div>
            </div>
            <div className="personal-details-form-middle">
              <div className="Religion group">
                <input
                  type="text"
                  value={religion}
                  onChange={(event) => setReligion(event.target.value)}
                  required
                />{" "}
                <label>religion</label>
              </div>
              <div className="sex group">
                <input
                  type="text"
                  value={sex}
                  onChange={(event) => setSex(event.target.value)}
                  required
                />{" "}
                <label>sex</label>
              </div>

              <div className="caste group">
                <input
                  type="text"
                  value={caste}
                  onChange={(event) => setCaste(event.target.value)}
                  required
                />
                <label>caste</label>
              </div>

              <div className="subcaste group">
                <input
                  type="text"
                  value={subcaste}
                  onChange={(event) => setSubCaste(event.target.value)}
                  required
                />
                   <label>subcaste</label>
              </div>
            </div>

            <div className="personal-details-form-right">
              <div className="language group">
                <input
                  type="text"
                  value={language}
                  onChange={(event) => setLanguage(event.target.value)}
                  required
                />
                <label>language</label>
              </div>
              <div className="maritalstatus group">
                <input
                  type="text"
                  value={maritalstatus}
                  onChange={(event) => setMaritalStatus(event.target.value)}
                  required
                />
                <label>maritalstatus</label>
              </div>
              <div className="dob group">
                <input
                  type="date"
                  value={dob}
                  onChange={(event) => setDOB(event.target.value)}
                  required
                />
              </div>
              <div className="smokedrink group">
                <input
                  type="text"
                  value={smokedrink}
                  onChange={(event) => setSmokeDrink(event.target.value)}
                  required
                />
                <label>smokedrink</label>
              </div>
              {/* <div className="gender">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    value={male}
                    onChange={(event) => setMale(event.target.value)}
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
                    onChange={(event) => setFemale(event.target.value)}
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
          </form>
        </div>
      </div>
      <div className="personal-details-btn">
        <Link to="/signup">
          {" "}
          <button type="reset" className="btnprev">
            <HiChevronDoubleLeft /> Prev
          </button>
        </Link>
        <Link to="/contactdetails">
          <button type="submit" className="btnnext">
            Next <HiChevronDoubleRight />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PresonaldetailForm;
