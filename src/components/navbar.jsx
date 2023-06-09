'use client';
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'Portfolio',
      url: '/portfolio',
    },
    {
      id: 3,
      title: 'Blog',
      url: '/blog',
    },
    {
      id: 4,
      title: 'About',
      url: '/about',
    },
    {
      id: 5,
      title: 'Contact',
      url: '/contact',
    },
    {
      id: 6,
      title: 'Dashboard',
      url: '/dashboard',
    },
  ];

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <ul className={styles.navbarList}>
          <Link href="/">
            <Image src="images/vercel.svg" width={80} height={30} alt="logo" />
          </Link>
          <div className={styles.navbarMenu}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link className={styles.navbarLink} href={link.url}>
                    {link.title}
                  </Link>
                </li>
              );
            })}
            <button className='button-main' onClick={() => console.log('logout')}>Logout</button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
