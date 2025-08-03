'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = () => {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/blogs', label: 'Blogs' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <>
            {links.map((link) => (
                <li key={link.href}>
                    <Link
                        href={link.href}
                        className={`font-bold text-[16px] ${pathname === link.href ? 'text-blue-700' : 'text-gray-500 '}`}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </>
    );
};

export default NavLink;
