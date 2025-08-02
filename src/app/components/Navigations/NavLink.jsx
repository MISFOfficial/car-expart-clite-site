import Link from 'next/link';
import React from 'react';

const NavLink = () => {
    return (
        <>
            <li ><Link href={'/'}>Home</Link></li>
            <li ><Link href={'/about'}>About</Link></li>
            <li ><Link href={'/services'}>Services</Link></li>
            <li ><Link href={'/blogs'}>Blogs</Link></li>
            <li ><Link href={'/contact'}>Contact</Link></li>
        </>
    );
};

export default NavLink;