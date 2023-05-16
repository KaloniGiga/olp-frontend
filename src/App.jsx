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
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Toasts from "./components/Toast/Toast";
import { PrivateRoute } from "./layout/PrivateLayout";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Toasts />
      <BrowserRouter>
        <Homebtn />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<Page_Not_Found />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profiles" element={<PrivateRoute><Profile_Page /></PrivateRoute>} />
          <Route path="/userprofile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
          <Route path="/chat" element={<PrivateRoute><ChatSection /></PrivateRoute>} />
          <Route path="/personaldetails" element={<PrivateRoute><PresonaldetailForm /></PrivateRoute>} />
          <Route path="/contactdetails" element={<PrivateRoute><ContactDetails /></PrivateRoute>} />
          <Route path="/familydetails" element={<PrivateRoute><FamilyDetails /></PrivateRoute>} />
          <Route path="/uploadprofile" element={<PrivateRoute><UploadProfileSection /></PrivateRoute>} />
          <Route path="/preferencedetails" element={<PrivateRoute><PreferenceDetails /></PrivateRoute>} />
          <Route path="/myprofile" element={<MyProfilesSidebar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
