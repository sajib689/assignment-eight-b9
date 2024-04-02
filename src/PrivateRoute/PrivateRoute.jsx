import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../Components/Loader/Loader";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading) {
        return <Loader/>
    }
    if(user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;