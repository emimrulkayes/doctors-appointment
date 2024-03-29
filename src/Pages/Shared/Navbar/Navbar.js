import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li><Link to="/" className='text-black '>Home</Link></li>
        <li><Link to="/appointment" className='text-black'>Appointment</Link></li>
        <li><Link to="/about" className='text-black'>About</Link></li>
        <li><Link to="/reviews" className='text-black'>Reviews</Link></li>
        <li><Link to="/contact" className='text-black'>Contact</Link></li>
        {user?.uid ?
            <li><button onClick={handleLogOut} className='text-black'>Log out</button></li>
            : <li><Link to="/login" className='text-black'>Login</Link></li>
        }
    </React.Fragment>

    return (
        <div>
            <div className="navbar container mx-auto bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                    </div>
                    <Link to="/" className=" normal-case text-xl font-bold text-secondary">Doctor Bari</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;