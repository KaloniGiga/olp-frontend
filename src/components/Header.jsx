import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { GoThreeBars } from "react-icons/go";
import logo from "../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../http";
import { addToast } from "../store/features/toastSlice";
import { logOutUser, setCurrentUser } from "../store/features/authSlice";
import axios, { Axios } from "axios";
const Header = () => {

  const {user} = useSelector((state) => state.auth);
  const sidenav = useRef();
  const sidenavblur = useRef();
  const dispatch = useDispatch();

  const sidenavs = () => {
    sidenav.current.style.bottom = "0px";
    sidenavblur.current.style.bottom = "0px";
  };

  const sidenavss = () => {
    sidenav.current.style.bottom = "-100%";
    sidenavblur.current.style.bottom = "-100%";
  };

  const handleLogout = (e) => {
    e.preventDefault();
     
    axios.post('http://localhost:3000/v1/api/authentication/log-out',{}, {
      withCredentials: true,
      headers: {
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
       
      if(response.status === 200) {
         dispatch(addToast({msg: "Logged Out successfully", kind:"SUCCESS"}))
         dispatch(logOutUser());
      }
    }).catch((error) => {
        
      if(error.response) {
        const response = error.response;
        const { message } = response.data;
        console.log(message);
        switch (response.status) {
          case 401:
            dispatch(addToast({msg: "Logged Out successfully", kind:"SUCCESS"}))
            dispatch(logOutUser());
            break;
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
    })
  }
  return (
    <>
      <header className="Navbar">
        <NavLink className="navbar-logo" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <ul className="Navbar-items">
          <li className="navbar-item mt-2">
            <NavLink
              className="navbar-link cool-link "
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-item mt-2">
            <NavLink className="navbar-link cool-link" to="/about">
              About Our Life Partner
            </NavLink>
          </li>
          <li className="navbar-item mt-2">
            <NavLink className="navbar-link cool-link" to="/help">
              Help?
            </NavLink>
          </li>
          {!user ? (
              <li className="navbar-item">
                <Link to="/signup">
                  {" "}
                  <button className="nav-btn">Register Now</button>
                </Link>
              </li>
              ):(
                <li className="navbar-item">
                <Link >
                  {" "}
                  <button className="nav-btn" onClick={(e) => handleLogout(e)}>Logout</button>
                </Link>
              </li>
              )}
        </ul>
        <div className="sidenavbar">
          <GoThreeBars onClick={sidenavs} className="navbar-toggle" />
          <div ref={sidenav} className="sidenav">
            <div className="snbar"></div>
            <ul className="sidenavbar-items">
              <li className="sidenavbar-item">
                <NavLink
                  className="navbar-link cool-link "
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="sidenavbar-item">
                <NavLink className="navbar-link cool-link" to="/about">
                  About Our Life Partner
                </NavLink>
              </li>
              <li className="sidenavbar-item">
                <NavLink className="navbar-link cool-link" to="/help">
                  Help?
                </NavLink>
              </li>
              {!user ? (
              <li className="sidenavbar-item">
                <Link to="/signup">
                  {" "}
                  <button className="sidenav-btn">Register Now</button>
                </Link>
              </li>
              ):(
                <li className="sidenavbar-item">
                <Link >
                  {" "}
                  <button className="sidenav-btn" onClick={(e) => handleLogout(e)}>Logout</button>
                </Link>
              </li>
              )}
            </ul>
          </div>
          <div
            ref={sidenavblur}
            className="sidenavblur"
            onClick={sidenavss}
          ></div>
        </div>
      </header>
    </>
  );
};

export default Header;
