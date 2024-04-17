import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../pages/AuthProvider";

const NavBar = () => {

    const { logOut, user } = useContext(AuthContext);
    return (
        <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-bold text-green-500 border border-green-500 rounded-md' : 'text-bold'}>Home</NavLink></li>
                        <li><NavLink to="/contact-us" className={({ isActive }) => isActive ? 'text-bold text-green-500 border border-green-500 rounded-md' : 'text-bold'}>Contact Us</NavLink></li>
                        <li><NavLink to="/update-profile" className={({ isActive }) => isActive ? 'text-bold text-green-500 border border-green-500 rounded-md' : 'text-bold'}>Update Profile</NavLink></li>
                    </ul>
                </div>
                <NavLink to='/' className="btn btn-ghost text-xl lg:text-5xl text-secondary"><span className="text-primary">Guest</span>Manager</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-bold text-green-500 border border-green-500 rounded-md' : 'text-bold'}>Home</NavLink></li>
                    <li><NavLink to="/contact-us" className={({ isActive }) => isActive ? 'text-bold text-green-500 border border-green-500 rounded-md' : 'text-bold'}>Contact Us</NavLink></li>
                    <li><NavLink to="/update-profile" className={({ isActive }) => isActive ? 'text-bold text-green-500 border border-green-500 rounded-md' : 'text-bold'}>Update Profile</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="dropdown dropdown-end flex items-center gap-4">
                        <label tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img title={user.displayName} alt="Tailwind CSS Navbar component" src={user.photoURL} />
                        </div>
                        </label>

                        <div>
                            <button onClick={logOut} className="btn py-4 bg-red-600 text-white hover:bg-red-500">Logout</button>
                        </div>
                    </div> : <NavLink to='/login' className="btn text-white bg-green-600 hover:bg-green-500">Login</NavLink>
                }

            </div>
        </div>
    );
};

export default NavBar;