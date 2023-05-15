import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import CustomSelect from "./CustomSelect";
import '../Store/data.json'
import { useState } from "react";

const Herosection = () => {

  const [values, setValues] = useState({
      searching_for: '',
      looking_for: '',
      agefrom: '',
      ageto: '',
      caste: ''
  })
  const handleSearch = () => {
    const filteredData = data.filter((match) => {
      if (
        searchInputs.looking_for &&
        match.looking_for.toLowerCase() !== searchInputs.looking_for.toLowerCase()
      ) {
        return false;
      }
      if (
        searchInputs.caste &&
        match.caste.toLowerCase() !== searchInputs.caste.toLowerCase()
      ) {
        return false;
      }
      if (searchInputs.agefrom && match.age < searchInputs.agefrom) {
        return false;
      }
      if (searchInputs.ageto && match.age > searchInputs.ageto) {
        return false;
      }
      return true;
    });
    // Redirect to search results page with filtered data
    history.push('/userdetail', { filteredData });
  };
  
  
  return (
    <>
      <div className="herosection">
        <div id="overlay">
          <div className="container">
              <p className="glass-text">Let's find</p>
            <div className="glass-container">
              <div className="middlehero">
                <div className="input1 ipt">
                  <label className="lbl">Searching For</label>
                  <CustomSelect
                     setValues={setValues}
                     name="searching_for"
                     value={values}
                    options={[
                      { value: "Myself", label: "Myself" },
                      { value: "Brother", label: "Brother" },
                      { value: "Sister", label: "Sister" },
                    ]}
                  />
                </div>

                <div className="input2 ipt">
                  <label className="lbl">I'm looking for a</label>
                  <CustomSelect
                     setValues={setValues}
                     name="looking_for"
                     value={values}
                    options={[
                      { value: "Men", label: "Men" },
                      { value: "Women", label: "Women" },
                      { value: "Widow", label: "Widow" },
                      { value: "Naver Married", label: "Naver Married" },
                    ]}
                  />
                </div>

            <div className="age">
            <div className="input3 ipt">
                  <label className="lbl">Age</label>
                  <CustomSelect
                     setValues={setValues}
                     name="agefrom"
                     value={values}
                    options={[
                      { value: 22, label: 22 },
                      { value: 23, label: 23 },
                      { value: 24, label: 24 },
                      { value: 25, label: 25 },
                      { value: 26, label: 26 },
                      { value: 27, label: 27 },
                    ]}
                  />
                </div>

                <div className="input4 ipt">
                  <label className="lbl ms-2">to</label>
                  <CustomSelect
                     setValues={setValues}
                     name="ageto"
                     value={values}
                   className="Age-input4"
                    options={[
                      { value: 22, label: 22 },
                      { value: 23, label: 23 },
                      { value: 24, label: 24 },
                      { value: 25, label: 25 },
                      { value: 26, label: 26 },
                      { value: 27, label: 27 },
                    ]}
                  />
                </div>
            </div>

                <div className="input5 ipt">
                  <label className="lbl">Caste</label>
                  <CustomSelect
                     setValues={setValues}
                     name="caste"
                     value={values}
                    options={[
                      { value: "Tharu", label: "Tharu" },
                      { value: "Bahun", label: "Bahun" },
                      { value: "Chhetri", label: "Chhetri" },
                      { value: "Magar", label: "Magar" },
                      { value: "Rai", label: "Rai" },
                      { value: "Limbu", label: "Limbu" },
                      { value: "Sherpa", label: "Sherpa" },
                    ]}
                  />
                </div>

                <div className="input6 ipt">
                  <Link to="/profiles"><button onClick={handleSearch}>Let's Begin</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
