import React, { useRef} from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import {GoThreeBars} from 'react-icons/go'
import {RxCross1} from 'react-icons/rx'
import logo from "../images/logo.png";
const Header = () => {
  const sidenav = useRef();
  const sidenavblur = useRef();

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
      <header>
      <nav className="navbar">
      <NavLink className="navbar-logo" to="/">
              <img src={logo} alt="logo" />
      </NavLink>
      <ul className="navbar-items">
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
                <li className="navbar-item">
                <Link to="/signup"> <button className="nav-btn">Register Now</button></Link> 
                </li>
            </ul>
      <div className="sidenavbar">
        <GoThreeBars onClick={sidenavs} className="navbar-toggle"/>       
        <div ref={sidenav} className='sidenav' style={{bottom:"0px"}}>
            <div className='snbar'></div>
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
                <li className="sidenavbar-item">
                <Link to="/signup"> <button className="sidenav-btn">Register Now</button></Link> 
                </li>
            </ul>
        </div>
        <div ref={sidenavblur} className='sidenavblur' onClick={sidenavss} style={{bottom:"0px"}}></div>
      </div>
    </nav>
      </header>
    </>
  );
};

export default Header;
