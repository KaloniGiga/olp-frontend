import { useSelector } from "react-redux"
import { Navigate, useLocation} from "react-router-dom"
import { useAuth } from "../hooks/useAuth";
import { ClipLoader } from "react-spinners";
import { useState } from "react";

export const PrivateRoute = ({children}) => {
   
    const location = useLocation();
  const { loading, user } = useAuth();
   const [color, setColor] = useState('var(--primary)')


  if (loading) {
    return (
    <div className="w-screen h-screen flex justify-center items-center">
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={{}}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    )
  }
  // if (user)
   return <>{children}</>;
   
  // return <Navigate to="/login" state={{ from: location }} replace />;


}