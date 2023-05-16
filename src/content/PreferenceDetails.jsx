import React from "react";
import ProgressBar from "./Progressbar";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import { useState } from "react";
import "../styles/PreferenceDetails.css";
import { Link } from "react-router-dom";
const PreferenceDetails = () => {
  const [minage, setMinAge] = useState("");
  const [maxage, setMaxAge] = useState("");
  const [maritalstatus, setMaritalStatus] = useState("");
  const [height, setHeight] = useState("");
  const [smokedrink, setSmokeDrink] = useState("");
  const [caste, setCaste] = useState("");
  const [subcaste, setSubCaste] = useState("");
  const [religion, setReligion] = useState("");
  const [education, setEducation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Submitted: ${minage} ${maxage} (${maritalstatus})  ${height} ${smokedrink} (${caste})  ${subcaste} ${religion} ${education} ${occupation} ${country}`
    );
  };
  return (
    <>
      <div className="PreferenceSection">
        <ProgressBar />
        <h1>"Please fill the important preference"</h1>
        <div className="container">
          <div className="row">
            <form className="PreferenceSection-form" onSubmit={handleSubmit}>
              <div className="PreferenceSection-form-left">
                <div className="minage group">
                  <input
                    type="number"
                    value={minage}
                    onChange={(event) => setMinAge(event.target.value)}
                    required
                  />
                  <label>minimum age</label>
                </div>
                <div className="maxage group">
                  <input
                    type="number"
                    value={maxage}
                    onChange={(event) => setMaxAge(event.target.value)}
                    required
                  />{" "}
                  <label>max age</label>
                </div>
                <div className="maritalstatus group">
                  <input
                    type="text"
                    value={maritalstatus}
                    onChange={(event) => setMaritalStatus(event.target.value)}
                    required
                  />{" "}
                  <label>marital status</label>
                </div>
                <div className="height group">
                  <input
                    type="text"
                    value={height}
                    onChange={(event) => setHeight(event.target.value)}
                    required
                  />{" "}
                  <label>height</label>
                </div>
              </div>

              <div className="PreferenceSection-form-middle">
                <div className="smokedrink group">
                  <input
                    type="text"
                    value={smokedrink}
                    onChange={(event) => setSmokeDrink(event.target.value)}
                    required
                  />{" "}
                  <label>smoke/drink</label>
                </div>
                <div className="caste group">
                  <input
                    type="text"
                    value={caste}
                    onChange={(event) => setCaste(event.target.value)}
                    required
                  />{" "}
                  <label>caste</label>
                </div>
                <div className="subcaste group">
                  <input
                    type="text"
                    value={subcaste}
                    onChange={(event) =>
                      setSubCaste(event.target.value)
                    }
                    required
                  />
                  <label>subcaste</label>
                </div>
                <div className="Religion group">
                  <input
                    type="text"
                    value={religion}
                    onChange={(event) => setReligion(event.target.value)}
                    required
                  />
                  <label>religion</label>
                </div>
              </div>

              <div className="PreferenceSection-form-right">
                <div className="education group">
                  <input
                    type="text"
                    value={education}
                    onChange={(event) => setEducation(event.target.value)}
                    required
                  />
                  <label>education</label>
                </div>
                <div className="occupation group">
                  <input
                    type="text"
                    value={occupation}
                    onChange={(event) => setOccupation(event.target.value)}
                    required
                  />
                  <label>occupation</label>
                </div>
                <div className="country group">
                  <input
                    type="text"
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                    required
                  />
                  <label>country</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="PreferenceSection-form-btn">
          <Link to="/familydetails">
            {" "}
            <button type="reset" className="btnprev">
              <HiChevronDoubleLeft /> Prev
            </button>
          </Link>
          <Link to="/uploadprofile">
            <button type="submit" className="btnnext">
              Next <HiChevronDoubleRight />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default PreferenceDetails;
