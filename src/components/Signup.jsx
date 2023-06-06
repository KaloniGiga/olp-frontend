import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signup.css";
import { axiosInstance } from '../http/index';
import { addToast } from "../store/features/toastSlice";
import { useDispatch } from 'react-redux';
import { setCurrentUser } from "../store/features/authSlice";
import { setPersonalDetail } from "../store/features/personalDetailSlice";
import { setFamilyDetail } from "../store/features/familyDetailSlice";
import { setEducationDetail } from "../store/features/educationDetailSlice";
import { setPreferanceDetail } from "../store/features/preferanceDetailSlice";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAnimated, setIsAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate  = useNavigate();
  const dispatch = useDispatch();
  

  const handleButtonClick = (animate) => {
    setIsAnimated(!isAnimated);
    setIsVisible(!isVisible);
  };

  const handleButtonClick0 = (animate) => {
    if (animate === "login") {
      navigate("/personaldetails");
    } else {
      navigate("/");
    }
  };

  const  handleSignUpClick = () => {
      navigate('/register');
  }

  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     
     const user = isAnimated ? {email: email, username: username, password: password} : {email: email, password:password};
     if((isAnimated && !username) || !email || !password  ) {
      console.log('fill the form');
        dispatch(
          addToast({msg: "Please fill all values", kind: "WARNING"})
        )
        return;
     }
     console.log(user);
     console.log('inside login')
     axiosInstance
     .post(isAnimated ? 'authentication/register' : 'authentication/log-in', user)
     .then((response) => {
        
        const user = response.data;

        //show toast 
        dispatch(
          addToast({kind: "SUCCESS", msg: `${isAnimated ? 'Account created successfully' : 'Logged In successfully'}`})
        )

       //add user details in store
        // dispatch(
        //   setCurrentUser(user)
        // )

        //add personalDetail in store
        // dispatch(
        //   setPersonalDetail(user.profile && user.profile)
        // )

        //add familyDetail in store
        //  dispatch(
        //   setFamilyDetail(user.family && user.family)
        //  )

         //add educationDetail to store

        // dispatch(
        //   setEducationDetail(user.education && user.education)
        // )

         //add preferanceDetail to store

        //  dispatch(
        //   setPreferanceDetail(user.preferance && user.preferance)
        //  )

        //check if  the user has setup profile, family and others
        if(user && !user.profile) {
          navigate('/profile/info')
        }else if(user && !user.family) {
          navigate('/profile/info');
        }else if(user && !user.education) {
          navigate('/profile/info');
        }else if(user && !user.preferance) {
          navigate('/profile/info');
        }else {
           navigate('/home/dashboard');
        }
     })
     .catch((error) => {
      console.log(error);
        if(error.response) {
          const response = error.response;
          const { message } = response.data;
          console.log(message);
          switch (response.status) {
            case 400:
            case 500:
              console.log(message)
             dispatch(
              addToast({kind: 'ERROR', msg: message})
             )
             break;
            default: 
             dispatch(
              addToast({
                kind: "ERROR", msg: "Oops, Something went wrong",
              })
             )
             break;
          }
        }
     });
  };

  return (
    <>
      <div className="signup-page py-5 bg-screen">
        <div className="container">
          <div className="login-signup">
            <div className={`login ${isAnimated ? "animated" : "notanimated"}`}>
              <div className="login-text">
                <form className="form_feild" onSubmit={(e) => handleSubmit(e)}>
                  <h2>{isAnimated ? "Create Account" : "Sign in"} </h2>
                  <div className="form-icon d-flex justify-content-center gap-3">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-google"></i>
                    <i className="bi bi-linkedin"></i>
                  </div>
                  <p>
                    {" "}
                    {isAnimated
                      ? "or use your email for registration"
                      : "or use your email account"}
                  </p>
                  {isVisible && (
                    <input
                      placeholder="UserName....."
                      className="input_field px-3 py-1"
                      type="text"
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  )}
                  <input
                    placeholder="Email....."
                    className="input_field px-3 py-1"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <br />
                  <input
                    placeholder="password...."
                    className="input_field px-3 py-1"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <br />
                  {!isVisible && (
                    <p className="form-forget mt-2">
                      <Link className="text-decoration-none">
                        Forgot your Password?
                      </Link>
                    </p>
                  )}
                <button className="form_btn" type="submit">
                    {isAnimated ? "SignUp" : "Login"}
                  </button>
                </form>
              </div>
            </div>
            <div
              className={`signup ${isAnimated ? "animated" : "notanimated"}`}
            >
              <div className="signup-text">
                <h2> {isAnimated ? "Welcome Back!" : "Hello, Friend"}</h2>
                <p className="px-5">
                  {isAnimated
                    ? `To keep connected with us please  login with your personal details`
                    : `Enter your personal details and start your journey with us`}{" "}
                </p>
                <button
                  className="login_btn"
                  onClick={() =>
                    handleButtonClick(isAnimated ? "login" : "signup")
                  }
                >
                  {isAnimated ? "Login" : "SignUp"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
