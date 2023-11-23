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
import RegisterPage from "./pages/authentication/RegisterPage";
import FormLayout from "./layout/FormLayout";
import FirstForm from "./newComponent/Forms/FirstForm";
import SecondForm from "./newComponent/Forms/SecondForm";
import ThirdForm from "./newComponent/Forms/ThirdForm";
import FourthForm from "./newComponent/Forms/FourthForm";
import PhotoUploadForm from "./newComponent/Forms/PhotoUploadForm";
import HomeLayout from "./layout/HomeLayout";
import Searchedlist from "./content/Searchedlist";
import Dashboard from "./pages/InnerHome/Dashboard";
import DashboardSection from "./Section/DashboardSection";
import UserProfileSection from "./Section/UserProfileSection";
import ConnectionSection from "./Section/ConnectionSection";
import NotificationSection from "./Section/NotificationSection";
import EventSection from "./Section/EventSection";
import SettingSection from "./Section/SettingSection";
import { useState } from "react";
import { socket, SocketContext } from './utils/context/SocketContext';
import { AuthContext } from './utils/context/AuthContext';
import AppLayout from "./pages/AppLayout";
import ChatLayout from "./content/ChatSection/ChatLayout";
import ChatPanel from "./content/ChatSection/ChatPanel";
import RecommendSection from "./newComponent/RecommendSection/RecommendSection";
import NewProfileSection from "./newComponent/NewProfileSection/NewProfileSection";
import AboutMe from "./newComponent/AboutMe/AboutMe";
import Photos from "./newComponent/Photos/Photos";
import Connections from "./newComponent/Connections/Connections";
import ConversationBox from "./content/ChatSection/ConversationBox";
import CallBox from "./content/ChatSection/CallBox";
import CallPanel from "./newComponent/CallPanel/CallPanel";
import SearchResultSection from "./Section/SearchResultSection";
import { useMediaQuery } from "react-responsive";
import ConnectionLayout from "./Section/ConnectionLayout";
import PricingSection from "./Section/PricingSection";
import ViewUserProfile from "./newComponent/NewProfileSection/ViewUserProfile";
import AboutUser from "./newComponent/NewProfileSection/AboutUser";
import UserPhoto from "./newComponent/NewProfileSection/UserPhoto";
import LetsBegin from "./Section/LetsBegin";
import EmailNotVerified from "./pages/EmailVerification/EmailNotVerified";
import VerifyEmail from "./pages/EmailVerification/VerifyEmail";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./pages/ForgetPassword/ResetPassword";
import Login from "./components/Login/Login";
import { PrivateFormRoute } from "./layout/PrivateFormLayout";
import { EmailVerifyLayout } from "./layout/EmailVerifyLayout";
import Authentication from "./components/Authentication";
import NewFormLayout from "./layout/NewFormLayout";
import NewUploadAvatar from "./components/NewForm/NewUploadAvatar";
import NewFirstForm from "./components/NewForm/NewFirstForm";

const App = () => {
   const isMobile = useMediaQuery({query: '(max-width: 992px)'});
  const [user, setUser] = useState();
  const isTablet = useMediaQuery({query: '(max-width: 992px)'});

  return (
    <>
     <AuthContext.Provider value={[user, setUser]}>
       <SocketContext.Provider value={socket}>
      <ToastContainer />
      <Toasts />
      <BrowserRouter>
        <Homebtn />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/form" element={<PrivateFormRoute><NewFormLayout /></PrivateFormRoute>} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={isTablet ? <Login /> : <Signup />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/avatar/upload" element={<NewUploadAvatar />} />
          <Route path="/profile/info" element={
            <PrivateFormRoute>
              <FormLayout />
            </PrivateFormRoute>} />

             <Route path="/secondform" element={
               <PrivateRoute>
                 <FormLayout />
              </PrivateRoute>} />

            <Route path="/thirdform" element={
            <PrivateRoute>
            <FormLayout><ThirdForm /></FormLayout>
            </PrivateRoute>} />

            <Route path="/fourthform" element={
            <PrivateRoute>
            <FormLayout><FourthForm /></FormLayout>
            </PrivateRoute>} />

          <Route path="/avatarUpload" element={<PrivateRoute><PhotoUploadForm /></PrivateRoute>}  />
          <Route path="/userprofile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
          <Route path="/chat" element={<PrivateRoute><ChatSection /></PrivateRoute>} />
          <Route path="/personaldetails" element={<PrivateRoute><PresonaldetailForm /></PrivateRoute>} />
          <Route path="/contactdetails" element={<PrivateRoute><ContactDetails /></PrivateRoute>} />
          <Route path="/familydetails" element={<PrivateRoute><FamilyDetails /></PrivateRoute>} />
          <Route path="/uploadprofile" element={<PrivateRoute><UploadProfileSection /></PrivateRoute>} />
          <Route path="/preferencedetails" element={<PrivateRoute><PreferenceDetails /></PrivateRoute>} />
          <Route path="/myprofile" element={<MyProfilesSidebar />} />
          <Route path="/email/verify/:resetToken" element={<VerifyEmail />} />
          <Route path="/password/forget" element={<ForgetPassword />} />
          <Route path="/reset/password/:token" element={<ResetPassword />} /> 

          <Route path="/home" element={<PrivateFormRoute />}>
            <Route path="resend/email" element={<EmailVerifyLayout><EmailNotVerified /></EmailVerifyLayout>} />
            <Route path="form" element={<NewFormLayout />}></Route>
             <Route path="avatar/upload" element={<NewUploadAvatar /> } />

            <Route path="main" element={<AppLayout><HomeLayout /></AppLayout>}>
 
            <Route path="dashboard" element={<Dashboard />} >
                <Route path="" element={<DashboardSection />} />
                <Route path="search/:name" element={<SearchResultSection />} />
                <Route path="letsBegin" element={<LetsBegin />} />
                 {/* <Route path="profile" element={<UserProfileSection />} /> */}
            </Route>
      
            <Route path="connection"  element={<ConnectionLayout />} />
            <Route path="notification" element={<NotificationSection />} />
            <Route path="pricing" element={<PricingSection />} />
            <Route path="settings" element={<SettingSection />} />
            
           {!isMobile ? 
           (<Route path="chat" element={<ChatLayout />} >
              <Route path="conversation" element={<ChatPanel />} >
                <Route path=":id" element={<ChatPanel />} />
              </Route>
            </Route>
           ): (
            <>
             <Route path="chat/conversation" element={<ChatLayout />} />
             <Route path="chat/conversation/:id" element={<ChatPanel />} />
             </>
           )}
            
            <Route path="profiles" element={<Profile_Page />} />
            <Route path="search" element={<Searchedlist />} />

            <Route path="profile/me" element={<NewProfileSection />} >
              <Route path="about" element={<AboutMe />} />
              <Route path="photos" element={<Photos />} />
              <Route path="connections" element={<Connections />} />
            </Route>
             
            <Route path="profile/:id" element={<ViewUserProfile />} >
              <Route path="about" element={<AboutUser />} />
              <Route path="photos" element={<UserPhoto />} />
              <Route path="connections" element={<Connections />} />
            </Route>
            </Route>
            </Route>
          <Route path="*" element={<Page_Not_Found />} />
        </Routes>
      </BrowserRouter>
     </SocketContext.Provider>
   </AuthContext.Provider>
    </>
  );
};

export default App;
