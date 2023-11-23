import { useSelector } from "react-redux"
import { Navigate, useLocation, useNavigate} from "react-router-dom"
import { useAuth } from "../hooks/useAuth";
import { ClipLoader } from "react-spinners";
import { useState } from "react";

export const PrivateRoute = ({children}) => {
   
   const location = useLocation();
   const navigate = useNavigate();
   const { loading, user } = useAuth();
   const [color, setColor] = useState('var(--primary)')


  // if (loading) {
  //   return (
  //   <div className="w-screen h-screen flex justify-center items-center">
  //     <ClipLoader
  //       color={color}
  //       loading={loading}
  //       cssOverride={{}}
  //       size={150}
  //       aria-label="Loading Spinner"
  //       data-testid="loader"
  //     />
  //     </div>
  //   )
  // }
   

  

  
   if(user && !user.profile) {
    console.log('prof')
    return navigate('/home/form')
  }else if(user && !user.family) {
    console.log('fimaki')
    return navigate('/home/form')

  }else if(user && !user.education) {
     console.log('education')
    return navigate('/home/form');
  }else if(user && !user.preferance) {
    console.log('pref')
    return navigate('/home/form')
  }
  
  if(user) {
    console.log('returning children')
     return children;
  }

  if(!user && !loading) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  
}