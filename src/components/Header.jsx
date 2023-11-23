import React, { useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import { GoThreeBars } from "react-icons/go";
import logo from "../images/lifepartnerlogo.png";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../http";
import { addToast } from "../store/features/toastSlice";
import { logOutUser, setCurrentUser } from "../store/features/authSlice";
import axios, { Axios } from "axios";
import { useMediaQuery } from "react-responsive";
import { AiFillHome } from "react-icons/ai";
import { RiProfileFill } from "react-icons/ri";
import { FiHelpCircle } from "react-icons/fi";
import { Button, createStyles } from "@mantine/core";
import whiteLogo from '../images/logo.png';

const useStyles = createStyles((theme) => ({

}))

const Header = () => {
  const {user} = useSelector((state) => state.auth);
  const sidenav = useRef();
  const sidenavblur = useRef();
  const dispatch = useDispatch();
  const isTablet = useMediaQuery({query: '(max-width: 992px)'})
  const navigate = useNavigate();
  const {classes} = useStyles();
  const location = useLocation();
  const largeDesktop = useMediaQuery({query: '(min-width: 1750px)'})
  const mediumDesktop = useMediaQuery({query: '(max-width: 1440px)'})


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
     
    axios.post(`${import.meta.env.VITE_BASE_URL}/authentication/log-out`,{}, {
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
         navigate('/auth')
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
            navigate('/auth');
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
      <header className={`Navbar z-50 ${location.pathname == '/' ? 'absolute top-0 left-0 w-full' : ''}`}>
        <NavLink className="navbar-logo" to="/">
          <img src={location.pathname !== '/' ? logo : whiteLogo} alt="logo" />
        </NavLink>  
        <div className="Navbar-items">
        <ul className="flex gap-6 justify-end w-full">
          <li className="navbar-item mt-2">
            <NavLink
              className={`navbar-link cool-link font-montserrat ${location.pathname !== '/' && 'text-black'}`}
              aria-current="page"
              to="/"
              // style={{color: 'rgba(255, 255, 255, 1) !important'}}
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-item mt-2">
            <NavLink className={`navbar-link cool-link ${location.pathname !== '/' && 'text-black'}`} to="/about">
             {isTablet ? 'About Us' : 'About Our Life Partner'}
            </NavLink>
          </li>
          <li className="navbar-item mt-2">
            <NavLink className={`navbar-link cool-link ${location.pathname !== '/' && 'text-black'}`} to="/help">
              Help?
            </NavLink>
          </li>
       
        </ul>

        {!user ? (
              // <li className="navbar-item">
                <Link to="/auth">
                  {" "}
                  <Button size={largeDesktop ? 'lg': (mediumDesktop ? 'sm' : 'md')} variant="filled" style={{backgroundColor: 'var(--secondary)'}}>Login</Button>
                </Link>
              // </li>
              ):(
                // <li className="navbar-item">
                <Link >
                  {" "}
                  <Button size={largeDesktop ? 'lg': (mediumDesktop ? 'sm' : 'md')} variant="filled" style={{backgroundColor: 'var(--secondary)'}} onClick={(e) => handleLogout(e)}>Logout</Button>
                </Link>
              // </li>
              )}
        </div>
        <div className="sidenavbar">
          <GoThreeBars onClick={sidenavs} className="navbar-toggle" color="black" />
          <div ref={sidenav} className="sidenav">
            <div className="snbar"></div>
            <ul className="sidenavbar-items">
              <li className="sidenavbar-item">
                <NavLink
                  className="flex py-2 px-4 text-xl hover:bg-screen rounded-xl"
                  aria-current="page"
                  to="/"
                >

                  <AiFillHome size={25} color="var(--primary)" /> 
                  <span className=" ml-3 font-semibold text-xl cursor-pointer">Home</span>
                </NavLink>
              </li>
              <li className="sidenavbar-item text-xl cursor-pointer">
                <NavLink className="w-full flex text-xl py-2 px-4 hover:bg-screen rounded-xl" to="/about">
                 <RiProfileFill size={25} color="var(--primary)" />
                 <span className="ml-3 font-semibold "> About Our Life Partner</span>
                </NavLink>
              </li>
              <li className="sidenavbar-item">
                <NavLink className="flex py-2 px-4 text-xl hover:bg-screen rounded-xl" to="/help">
                  <FiHelpCircle size={25} color="var(--primary)" />
                  <span className="ml-2 font-semibold">Help?</span>
                </NavLink>
              </li> 
         
            </ul>
            
            <div className="mt-4 ml-2">
                 {!user ? (
              <span className="sidenavbar-item ">
                <Link to="/auth">
                  {" "}
                  <button className="sidenav-btn px-8 py-2 ml-4 bg-[var(--secondary)] rounded-lg text-white">Login</button>
                </Link>
              </span>
              ):(
                <span className="sidenavbar-item ">
                <Link >
                  {" "}
                  <button className="sidenav-btn px-8 py-2 ml-4 bg-[var(--secondary)] rounded-lg text-white" onClick={(e) => handleLogout(e)}>Logout</button>
                </Link>
              </span>
              )}
            </div>
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
