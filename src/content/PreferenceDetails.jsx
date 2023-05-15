import React from "react";
import ProgressBar from "./Progressbar";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import { useState } from "react";
import "../styles/PreferenceDetails.css";
import { Link } from "react-router-dom";
const PreferenceDetails = () => {
  const [familytype, setFamilyType] = useState("");
  const [familystatus, setFamilyStatus] = useState("");
  const [fathername, setFatherName] = useState("");
  const [fatherjob, setFatherJob] = useState("");
  const [mothername, setMotherName] = useState("");
  const [motherjob, setMotherJob] = useState("");
  const [numoffamilymember, setNumOfFamilyMember] = useState("");
  const [numofbrother, setNumOfBrother] = useState("");
  const [numofsister, setNumOfSister] = useState("");
  const [noofunmarried, setNoOfUnmarried] = useState("");
  const [noofmarried, setNoOfMarried] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Submitted: ${familytype} ${familystatus} (${fathername})  ${fatherjob} ${mothername} (${motherjob})  ${numoffamilymember} ${numofbrother} ${numofsister} ${noofunmarried} ${noofmarried}`
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
                <div className="familytype group">
                  <input
                    type="number"
                    value={familytype}
                    onChange={(event) => setFamilyType(event.target.value)}
                    required
                  />
                  <label>Family Type</label>
                </div>
                <div className="familystatus group">
                  <input
                    type="text"
                    value={familystatus}
                    onChange={(event) => setFamilyStatus(event.target.value)}
                    required
                  />{" "}
                  <label>Family Status</label>
                </div>
                <div className="fathername group">
                  <input
                    type="text"
                    value={fathername}
                    onChange={(event) => setFatherName(event.target.value)}
                    required
                  />{" "}
                  <label>Father's Name</label>
                </div>
                <div className="fatherjob group">
                  <input
                    type="text"
                    value={fatherjob}
                    onChange={(event) => setFatherJob(event.target.value)}
                    required
                  />{" "}
                  <label>Father's Job</label>
                </div>
              </div>

              <div className="PreferenceSection-form-middle">
                <div className="mothername group">
                  <input
                    type="text"
                    value={mothername}
                    onChange={(event) => setMotherName(event.target.value)}
                    required
                  />{" "}
                  <label>Mother's Name</label>
                </div>
                <div className="motherjob group">
                  <input
                    type="text"
                    value={motherjob}
                    onChange={(event) => setMotherJob(event.target.value)}
                    required
                  />{" "}
                  <label>Mother's Job</label>
                </div>
                <div className="numoffamilymember group">
                  <input
                    type="number"
                    value={numoffamilymember}
                    onChange={(event) =>
                      setNumOfFamilyMember(event.target.value)
                    }
                    required
                  />
                  <label>No. of family members</label>
                </div>
                <div className="numofbrother group">
                  <input
                    type="number"
                    value={numofbrother}
                    onChange={(event) => setNumOfBrother(event.target.value)}
                    required
                  />
                  <label>No of brothers</label>
                </div>
              </div>

              <div className="PreferenceSection-form-right">
                <div className="numofsister group">
                  <input
                    type="number"
                    value={numofsister}
                    onChange={(event) => setNumOfSister(event.target.value)}
                    required
                  />
                  <label>No of sister</label>
                </div>
                <div className="noofunmarried group">
                  <input
                    type="number"
                    value={noofunmarried}
                    onChange={(event) => setNoOfUnmarried(event.target.value)}
                    required
                  />
                  <label>No of unmarried</label>
                </div>
                <div className="noofmarried group">
                  <input
                    type="number"
                    value={noofmarried}
                    onChange={(event) => setNoOfMarried(event.target.value)}
                    required
                  />
                  <label>No of married</label>
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
