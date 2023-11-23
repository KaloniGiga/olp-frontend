import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import CustomSelect from "./CustomSelect";
import "../Store/data.json";
import { useState } from "react";
import heroImage from '../images/olpherosection.jpg'
import { useDispatch } from "react-redux";
import { setAgeFrom, setAgeto, setCaste, setLetsBegin, setSearchingFor } from "../store/features/searchFromHome";
import { Button, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";

const Herosection = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    searching_for: "",
    // looking_for: "",
    agefrom: "",
    ageto: "",
    caste: "",
  });
  const navigate = useNavigate();
   const largeDesktop = useMediaQuery('(min-width: 1750px)')
  const mediumDesktop = useMediaQuery('(max-width: 1440px)')


  const handleSearchingChange = (value) => {
     setValues({...values, searching_for: value})
     dispatch(setSearchingFor(value.value))
  }

  const handleAgeFrom = (value) => {
    setValues({ ...values, agefrom: value})
    dispatch(setAgeFrom(value.value));
  }

  const handleAgeTo = (value) => {
    setValues({ ...values, ageto: value})
     dispatch(setAgeto(value.value));
  }

  const handleCaste = (value) => {
    setValues({...values, caste: value})
    dispatch(setCaste(value.value))
  }


  const handleSearch = () => {
      if(!values.searching_for && !values.agefrom && !values.ageto && !values.caste) {

        return showNotification({
          title: 'Please fill all fields 😷',
        })
      }
      
      dispatch(setLetsBegin(true));
      navigate('/home/main/dashboard/letsBegin');
  };
  console.log(values);

  return (
    <>
      <div className="herosection overflow-hidden">
        {/* <div id="overlay"> */}
          <div className="relative w-full h-full">
            {/* <p className="glass-text">Let's find</p> */}

            <div className="w-full h-full">
              <img src={heroImage} alt="" className="w-[100%] h-[100%] object-cover object-center scale-120" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]"></div>

           <div className="absolute top-[55%] left-[10%] w-[80%] h-[20%] bg-transparnet flex justify-center items-center">
            <div className="bg-[#E61A52] w-[80%] px-4 pb-4 mb-4 md:mb-4 rounded-xl flex flex-col items-center">
             <p className="text-xl lg:text-2xl 2xl:text-3xl text-white py-2">Find Your Partner Here</p>
              <div className="middlehero">
                <div className="input1 ipt">
                  <label className="lbl">Searching For</label>
                  <CustomSelect
                    onChange={handleSearchingChange}
                    name="searching_for"
                    value={values.searching_for}
                    options={[
                      { value: "Myself", label: "Myself" },
                      { value: "Brother", label: "Brother" },
                      { value: "Sister", label: "Sister" },
                    ]}
                  />
                </div>
{/* 
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
                </div> */}

                <div className="age">
                  <div className="input3 ipt">
                    <label className="lbl">Age</label>
                    <CustomSelect
                      onChange={handleAgeFrom}
                      name="agefrom"
                      value={values.agefrom}
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
                      onChange={handleAgeTo}
                      name="ageto"
                      value={values.ageto}
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
                    onChange={handleCaste}
                    name="caste"
                    value={values.caste}
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
                  <Group align="end">
                    <Button onClick={handleSearch} size={largeDesktop ? 'lg': (mediumDesktop ? 'sm' : 'md')}  variant="filled" style={{backgroundColor: 'var(--secondary)'}}>Let's Begin</Button>
                </Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
