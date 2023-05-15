import React from "react";
import ProgressBar from "./Progressbar";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import { useState } from "react";
import "../styles/ContactDetails.css";
import { Link } from "react-router-dom";

const ContactDetails = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [landlineNo, setLandlineNo] = useState("");
  const [houseno, setHouseNo] = useState("");
  const [housename, setHouseName] = useState("");
  const [street, setStreet] = useState("");
  const [townorpost, setTownOrPost] = useState("");
  const [countryordistrict, setCountryOrDistrict] = useState("");
  const [stateorprovince, setStateOrProvince] = useState("");
  const [country, setCountry] = useState("");
  const [pincodeorpostcode, setPinCodeOrPostCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Submitted: ${mobileNo} ${landlineNo} (${houseno})  ${housename} ${street} (${townorpost})  ${countryordistrict} ${stateorprovince} ${country}  ${pincodeorpostcode}`
    );
  };
  return (
    <>
      <div className="Contact-detail-form">
        <ProgressBar />
        <h1>"Please fill up the Contact details"</h1>
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
                <div className="landlineNo group">
                  <input
                    type="number"
                    value={landlineNo}
                    onChange={(event) => setLandlineNo(event.target.value)}
                    required
                  />{" "}
                  <label>Landline No</label>
                </div>
                <div className="houseno group">
                  <input
                    type="number"
                    value={houseno}
                    onChange={(event) => setHouseNo(event.target.value)}
                    required
                  />{" "}
                  <label>House No</label>
                </div>
                <div className="housename group">
                  <input
                    type="text"
                    value={housename}
                    onChange={(event) => setHouseName(event.target.value)}
                    required
                  />{" "}
                  <label>House Name</label>
                </div>
              </div>

              <div className="Contact-details-form-middle">
                <div className="street group">
                  <input
                    type="text"
                    value={street}
                    onChange={(event) => setStreet(event.target.value)}
                    required
                  />{" "}
                  <label>Street</label>
                </div>
                <div className="townorpost group">
                  <input
                    type="number"
                    value={townorpost}
                    onChange={(event) => setTownOrPost(event.target.value)}
                    required
                  />{" "}
                  <label>Town/post office</label>
                </div>
                <div className="countryordistrict group">
                  <input
                    type="text"
                    value={countryordistrict}
                    onChange={(event) =>
                      setCountryOrDistrict(event.target.value)
                    }
                    required
                  />
                  <label>Country/District</label>
                </div>
                <div className="stateorprovince group">
                  <input
                    type="number"
                    value={stateorprovince}
                    onChange={(event) => setStateOrProvince(event.target.value)}
                    required
                  />
                  <label>State/Province</label>
                </div>
              </div>

              <div className="Contact-details-form-right">
                <div className="country group">
                  <input
                    type="text"
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                    required
                  />
                  <label>Country</label>
                </div>
                <div className="pincodeorpostcode group">
                  <input
                    type="number"
                    value={pincodeorpostcode}
                    onChange={(event) =>
                      setPinCodeOrPostCode(event.target.value)
                    }
                    required
                  />
                  <label>Pincode/postcode</label>
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
