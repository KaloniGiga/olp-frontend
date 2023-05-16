import React from "react";
import ProgressBar from "./Progressbar";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import { useState } from "react";
import "../styles/ContactDetails.css";
import { Link } from "react-router-dom";

const ContactDetails = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [siblings, setSiblings] = useState("");
  const [familymember, setFamilyMember] = useState("");
  const [motheroccupation, setMotherOccupation] = useState("");
  const [municipility, setMunicipility] = useState("");
  const [fatheroccupation, setFatherOccupation] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [familytype, setFamilyType] = useState("");
  const [unmarried, setUnmarried] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Submitted: ${mobileNo} ${siblings} (${familymember})  ${motheroccupation} ${municipility} (${fatheroccupation})  ${district} ${province} ${country}  ${familytype} ${unmarried}`
    );
  };
  return (
    <>
      <div className="Contact-detail-form">
        <ProgressBar />
        <h1>"Please fill up the important details"</h1>
        <div className="container">
          <div className="row">
            <form className="Contact-details" onSubmit={handleSubmit}>
              <div className="Contact-details-form-left">
                <div className="mobileNo group">
                  <input
                    type="number"
                    value={mobileNo}
                    onChange={(event) => setMobileNo(event.target.value)}
                    required
                  />
                  <label>Mobile No</label>
                </div>
                <div className="country group">
                  <input
                    type="text"
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                    required
                  />
                  <label>Country</label>
                </div>
                <div className="municipility group">
                  <input
                    type="text"
                    value={municipility}
                    onChange={(event) => setMunicipility(event.target.value)}
                    required
                  />{" "}
                  <label>municipility</label>
                </div>
                <div className="province group">
                  <input
                    type="number"
                    value={province}
                    onChange={(event) => setProvince(event.target.value)}
                    required
                  />
                  <label>State/Province</label>
                </div>
              </div>

              <div className="Contact-details-form-middle">
              
                <div className="district group">
                  <input
                    type="text"
                    value={district}
                    onChange={(event) =>
                      setDistrict(event.target.value)
                    }
                    required
                  />
                  <label>Country/District</label>
                </div>
                <div className="fatheroccupation group">
                  <input
                    type="text"
                    value={fatheroccupation}
                    onChange={(event) => setFatherOccupation(event.target.value)}
                    required
                  />{" "}
                  <label>Father's Occupation</label>
                </div>
                <div className="motheroccupation group">
                  <input
                    type="text"
                    value={motheroccupation}
                    onChange={(event) => setMotherOccupation(event.target.value)}
                    required
                  />{" "}
                  <label>Mother Occupation</label>
                </div>
                <div className="familymember group">
                  <input
                    type="number"
                    value={familymember}
                    onChange={(event) => setFamilyMember(event.target.value)}
                    required
                  />{" "}
                  <label> No of family member</label>
                </div>
               
              </div>

              <div className="Contact-details-form-right">
            
                <div className="familytype group">
                  <input
                    type="text"
                    value={familytype}
                    onChange={(event) =>
                      setFamilyType(event.target.value)
                    }
                    required
                  />
                  <label>Family Type</label>
                </div>
                <div className="unmarried group">
                  <input
                    type="text"
                    value={unmarried}
                    onChange={(event) =>
                      setUnmarried(event.target.value)
                    }
                    required
                  />
                  <label>No of unmarried</label>
                </div>
                <div className="siblings group">
                  <input
                    type="number"
                    value={siblings}
                    onChange={(event) => setSiblings(event.target.value)}
                    required
                  />{" "}
                  <label>No of siblings</label>
                </div>
               
                
              </div>
            </form>
          </div>
        </div>
        <div className="Contact-details-btn">
          <Link to="/personaldetails">
            {" "}
            <button type="reset" className="btnprev">
              <HiChevronDoubleLeft /> Prev
            </button>
          </Link>
          <Link to="/familydetails">
            <button type="submit" className="btnnext">
              Next <HiChevronDoubleRight />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
