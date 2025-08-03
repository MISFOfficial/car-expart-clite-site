import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';


const Navigation = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-3 md:px-10 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink></NavLink>
                    </ul>
                </div>
                <a className="text-2xl font-bold">Car Exparts</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   <NavLink></NavLink>
                </ul>
            </div>

            <div className="navbar-end gap-3">
                <Link href={'/signin'}><button className='btn btn-outline'>Sign In</button></Link>
                <Link href={'/register'}><button className='btn btn-outline'>Register</button></Link>
                <a className="btn btn-outline text-xl font-thin">Appointment</a>
            </div>
        </div>
    );
};

export default Navigation;