import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../pages/Footer";

const MainLayout = () => {
    return (
        <div>

            <div className="h-16">
                <NavBar />
            </div>

            <Outlet />

            <div className="mt-10">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;