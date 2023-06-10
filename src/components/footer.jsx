import React from 'react';
import styles from '@/styles/footer.module.css';

const Footer = () => {
  // get current year
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>&copy;{year} - Next.js 13 portfolio</p>
    </footer>
  );
};

export default Footer;
