import { useSelector } from "react-redux"
import { Navigate} from "react-router-dom"

export const PrivateRoute = ({children}) => {
   
  
    const {user} = useSelector((state) => state.auth);

    if(!user) {
       return <Navigate replace to="/signup"></Navigate>
    }

    return children;
}