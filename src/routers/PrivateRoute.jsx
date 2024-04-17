import { useContext } from "react";
import { AuthContext } from "../pages/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    if (loading) {
        return <Spinner />;
    }

    if (!user) {
        navigate('/login', { state: { from: location.pathname } });
        return null;
    }

    return <div>{children}</div>;
};

export default PrivateRoute;
