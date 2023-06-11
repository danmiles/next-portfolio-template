'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import styles from '@/styles/navbarMobile.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { navbarLinks } from '@/data/constData';

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  // function close menu on press escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <nav className={styles.navbarMobile}>
      <div className={styles.menu}>
        <button
          aria-label="Navbar mobile toggle button"
          onClick={() => setIsOpen(!isOpen)}
          className={styles.menuBtn}
        >
          {isOpen ? (
            <Image
              src="images/navbar/menu-mobile__close.svg"
              width={40}
              height={40}
              alt="menu"
              className={styles.menuBtn}
            />
          ) : (
            <Image
              src="images/navbar/menu-mobile.svg"
              width={40}
              height={40}
              alt="menu"
              className={styles.menuBtn}
            />
          )}
        </button>
      </div>

      <div className={`${styles.menuMobile} ${isOpen ? `${styles.open}` : ''}`}>
        <ul className={styles.menuList}>
          {navbarLinks.map((link) => {
            return (
              <li key={link.id} className={styles.item}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            );
          })}
          <button
            className={styles.buttonMobile}
            onClick={() => console.log('logout')}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMobile;
