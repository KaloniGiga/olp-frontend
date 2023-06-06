import React, { useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../../../App.css";
import { GoThreeBars } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../../http";
import { addToast } from "../../../store/features/toastSlice";
import { logOutUser, setCurrentUser } from "../../../store/features/authSlice";
import axios, { Axios } from "axios";
import HeaderProfile from "../../../newComponent/HeaderProfile/HeaderProfile";
import { AiFillDollarCircle, AiFillHome, AiFillNotification, AiOutlineHome } from "react-icons/ai";
import { BsChatHeart, BsMessenger, BsPersonAdd, BsSearchHeart } from "react-icons/bs";
import logo from '../../../images/lifepartnerlogo.png';
import Search from "./Search";
import { RiMessengerLine, RiProfileFill } from "react-icons/ri";
import { CgLogOut } from "react-icons/cg";
import { MdNotificationsNone } from "react-icons/md";

function InnerHeader() {
  const {user} = useSelector((state) => state.auth);
  const sidenav = useRef();
  const sidenavblur = useRef();
  const dispatch = useDispatch();

  const location = useLocation()

  const sidenavs = () => {
    sidenav.current.style.bottom = "0px";
    sidenavblur.current.style.bottom = "0px";
  };

  const sidenavss = () => {
    sidenav.current.style.bottom = "-100%";
    sidenavblur.current.style.bottom = "-100%";
  };
  return (
       <>
        <header className="Navbar z-50 shadow-sm flex justify-between items-center md:fixed w-full left-0 top-0 bg-white">
          <div className="basis-1/2 flex justify-start items-center">
        <NavLink className="navbar-logo basis-1/3" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
         <div className="basis-1/2">
            <Search /> 
         </div>
          </div>
        <div className="basis-1/2 xl:basis-1/2  md:flex md:justify-between items-center hidden">
        <ul className="flex md:justify-between w-full md:basis-1/2 mr-3">
          <li className="navbar-item inline-block mt-2  hover:bg-screen px-3 py-2 rounded-xl">
            <NavLink
              className="navbar-link cool-link "
              aria-current="page"
              to="/home/dashboard"
            >
              <AiOutlineHome size={30} color={location.pathname == "/home/dashboard" ? 'var(--primary)' : "rgba(0,0,0,0.8)"} />
              {/* <AiFillHome size={30} color="var(--primary)"/> */}
            </NavLink>
          </li>
          <li className="navbar-item mt-2 hover:bg-screen py-2 px-3 rounded-xl">
            <NavLink className="navbar-link cool-link" to="/home/connection">
              <BsPersonAdd size={30} color={location.pathname == "/home/connection" ? 'var(--primary)' : "rgba(0,0,0,0.8)"} />
            </NavLink>
          </li>
        <li className="navbar-item mt-2 hover:bg-screen py-2 px-3 rounded-xl">
            <NavLink className="navbar-link cool-link" to="/home/chat/conversation">
             {/* <BsMessenger size={30}  color="rgba(0,0,0,0.6)" /> */}
             {/* <MdNotificationsNone size={30} /> */}
             <RiMessengerLine size={30} color={location.pathname == "/home/chat/conversation" ? 'var(--primary)' : "rgba(0,0,0,0.8)"} />
            </NavLink>
       </li>

           <li className="navbar-item mt-2 hover:bg-screen py-2 px-3 rounded-xl">
            <NavLink to="/home/notification" className="navbar-link cool-link">
             {/* <AiFillNotification size={30} color="rgba(0 ,0 , 0, 0.6)" /> */}
             <MdNotificationsNone size={30} color={location.pathname == "/home/notification" ? 'var(--primary)' : "rgba(0,0,0,0.8)"} />
            </NavLink>

          </li>
        </ul>

          <div className="flex items-center justify-between">
            <Link to={'/home/pricing'} className="flex rounded-3xl py-1 px-2 mr-2 border-2 border-[rgba(0, 0,0,0.6)] hover:bg-screen">
              <span className=""><AiFillDollarCircle color="#EDA800" size={25} /></span>
              <button className="mr-2 text-sm">Upgrade </button>
            </Link>
        {!user ? (
              // <li className="navbar-item">
                <Link to="/login">
                  {" "}
                  <button className="nav-btn text-white">Login</button>
                </Link>
              // </li>
              ):(       
                  <HeaderProfile />
              )}
          </div>
        </div>
           <div className="sidenavbar">
          <GoThreeBars onClick={sidenavs} className="navbar-toggle" color="#111" />
          <div ref={sidenav} className="sidenav">
            <div className="snbar"></div>
            <ul className="sidenavbar-items mt-0">
                <li className="sidenavbar-item px-2 py-2">
                  <Search />
              </li>
              <li className="sidenavbar-item">
                <NavLink
                  className="flex py-2 px-2 hover:bg-screen rounded-xl "
                  aria-current="page"
                  to="/home/dashboard"
                >
                   <AiFillHome size={25} color="var(--primary)" />
                  <span className=" ml-3 font-semibold text-xl cursor-pointer">Home</span>
                  
                </NavLink>
              </li>
              <li className="sidenavbar-item">
                <NavLink className="flex py-2 px-2 hover:bg-screen rounded-xl" to="/home/chat/conversation">
                    <BsChatHeart size={25} color="var(--primary)" />
                    <span className="ml-3 font-semibold text-xl cursor-pointer">Chat</span>
                </NavLink>
              </li>
            
              {user ? (
                <>
                <li className="sidenavbar-item">
                   <div className='flex py-2 px-2 hover:bg-screen rounded-xl'>
                 <RiProfileFill size={25} color="var(--primary)" />
                 <NavLink to={'/home/profile/me/about'}><span className='w-full ml-3 font-semibold text-xl cursor-pointer'>My Profile</span></NavLink>
                 </div>
           
                </li>
              <li className="sidenavbar-item">
                <div className='flex py-2 px-2 rounded-xl hover:bg-screen'>
                 <CgLogOut size={25} color="var(--primary)" />
                 <span className=' ml-3 font-semibold text-xl cursor-pointer' onClick={(e) => handleLogout(e)}>Logout</span>
                 </div>
              </li>
            </>
              ):(
                <li className="sidenavbar-item">
                <Link >
                  {" "}
                  <button className="sidenav-btn" onClick={(e) => handleLogout(e)}>Login</button>
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
  )
}

export default InnerHeader