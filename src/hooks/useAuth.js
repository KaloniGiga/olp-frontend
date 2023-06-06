import { useContext, useEffect, useState } from "react";
import { getAuthUser } from "../utils/api";
import { AuthContext } from "../utils/context/AuthContext";
import { useDispatch } from "react-redux";
import { setPersonalDetail } from "../store/features/personalDetailSlice";
import { setCurrentUser } from "../store/features/authSlice";
import { setEducationDetail } from "../store/features/educationDetailSlice";
import { setFamilyDetail } from "../store/features/familyDetailSlice";
import { setPreferanceDetail } from "../store/features/preferanceDetailSlice";

export function useAuth() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const [user, setUser] = useContext(AuthContext);
    const controller = new AbortController();

    useEffect(() => {
        getAuthUser()
        .then(({ data }) => {
         console.log(data)     
         setUser(data);
         //add user details in store

        dispatch(
          setCurrentUser(data)
        )
        //add personalDetail in store
        dispatch(
          setPersonalDetail(data.profile && data.profile)
        )
        //add familyDetail in store
         dispatch(
          setFamilyDetail(data.family && data.family)
         )

         //add educationDetail to store

        dispatch(
          setEducationDetail(data.education && data.education)
        )

         //add preferanceDetail to store
         dispatch(
          setPreferanceDetail(data.preferance && data.preferance)
         )

          console.log('use state');
            setTimeout(() => setLoading(false), 1000);
        })
        .catch((err) => {
            console.log(err);
            setTimeout(() => setLoading(false), 1000);
        });

        return () => {
            controller.abort();
        };

    }, []);

    return { user, loading };
}