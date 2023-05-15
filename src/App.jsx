import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homebtn from "./components/Homebtn";
import Signup from "./components/Signup";
import About from "./pages/About";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Page_Not_Found from "./pages/Page_Not_Found";
import Profile_Page from "./components/Profile_Page";
import UserProfile from "./content/UserProfile";
import ChatSection from "./content/ChatSection";
import PresonaldetailForm from "./content/PresonaldetailForm";
import ContactDetails from "./content/ContactDetails";
import FamilyDetails from "./content/FamilyDetails";
import UploadProfileSection from "./content/UploadProfileSection";
import PreferenceDetails from "./content/PreferenceDetails";
import MyProfilesSidebar from "./content/MyProfilesSidebar";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Homebtn />
        <Routes>         
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<Page_Not_Found />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/profiles" element={<Profile_Page/>}/>
          <Route path="/userprofile" element={<UserProfile/>}/>
          <Route path="/chat" element={<ChatSection/>}/>          
          <Route path="/personaldetails" element={<PresonaldetailForm/>}/>          
          <Route path="/contactdetails" element={<ContactDetails/>}/>          
          <Route path="/familydetails" element={<FamilyDetails/>}/>          
          <Route path="/uploadprofile" element={<UploadProfileSection/>}/>          
          <Route path="/preferencedetails" element={<PreferenceDetails/>}/>          
          <Route path="/myprofile" element={<MyProfilesSidebar/>}/>          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
