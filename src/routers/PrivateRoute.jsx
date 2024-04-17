import { useContext } from "react";
import { AuthContext } from "../pages/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner />;
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'} />
    }

    return <div>{children}</div>;
};

export default PrivateRoute;
