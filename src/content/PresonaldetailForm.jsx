import React, { useState } from "react";
import "../styles/PresonaldetailForm.css";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import ProgressBar from "./Progressbar";
import { Link } from "react-router-dom";
function PresonaldetailForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [male, setMale] = useState("");
  const [female, setFemale] = useState("");
  const [dob, setDOB] = useState("");
  const [mobileno, setMobileNo] = useState("");
  const [pcb, setPCB] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Submitted: ${firstName} ${lastName} (${email})  ${male} ${female} (${dob})  ${mobileno} ${pcb} ${country}  ${password}  ${confirmpassword} `
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
              <div className="firstname group">
                <input
                  type="text"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
                <label>FullName</label>
              </div>
              <div className="caste group">
                <input
                  type="text"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />{" "}
                <label>Caste</label>
              </div>

              <div className="email group">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />{" "}
                <label>Email</label>
              </div>
              <div className="password group">
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />{" "}
                <label>Password</label>
              </div>
            </div>
            <div className="personal-details-form-middle">
              <div className="confirm-password group">
                <input
                  type="password"
                  value={confirmpassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  required
                />{" "}
                <label>Confirm Password</label>
              </div>
              <div className="pcb group">
                <input
                  type="text"
                  value={pcb}
                  onChange={(event) => setPCB(event.target.value)}
                  required
                />{" "}
                <label>Profile Created By group</label>
              </div>

              <div className="dob group">
                <input
                  type="date"
                  value={dob}
                  onChange={(event) => setDOB(event.target.value)}
                  required
                />
              </div>

              <div className="mobile-no group">
                <input
                  type="number"
                  value={mobileno}
                  onChange={(event) => setMobileNo(event.target.value)}
                  required
                />
                <label>Mobile Number</label>
              </div>
            </div>

            <div className="personal-details-form-right">
              <div className="country group">
                <input
                  type="text"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  required
                />
                <label>Country</label>
              </div>
              <div className="gender">
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
              </div>
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
