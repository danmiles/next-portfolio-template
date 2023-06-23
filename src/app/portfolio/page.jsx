'use client';
import React from 'react';
import styles from '@/styles/pages/portfolioPage.module.css';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/motion';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <section className={styles.portfolioPage}>
      <div className={styles.content}>
        <h1 className={styles.selectTitle}>Choose a gallery</h1>
        {/* Background image with Next Image plugin  */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={styles.gallery}
        >
          {/* element 1 start */}
          <motion.div
            className={styles.galleryItem}
            variants={fadeIn('left', 'tween', 0.2, 1)}
          >
            <Link
              href="/portfolio/illustrations"
              className={`${styles.image} ${' '} ${styles.image1}`}
            >
              <span className={styles.title}>Illustrations</span>
            </Link>
          </motion.div>
          {/* element 1 end */}
          {/* element 2 start */}
          <motion.div
            className={styles.galleryItem}
            variants={fadeIn('up', 'tween', 0.2, 1)}
          >
            <Link
              href="/portfolio/websites"
              className={`${styles.image} ${' '} ${styles.image2}`}
            >
              <span className={styles.title}>Websites</span>
            </Link>
          </motion.div>
          {/* element 2 end */}
          {/* element 3 start */}
          <motion.div
            className={styles.galleryItem}
            variants={fadeIn('right', 'tween', 0.2, 1)}
          >
            <Link
              href="/portfolio/applications"
              className={`${styles.image}${' '}${styles.image3}`}
            >
              <span className={styles.title}>Application</span>
            </Link>
          </motion.div>
          {/* element 3 end */}
        </motion.div>
        {/* end stragger container */}
      </div>
    </section>
  );
};

export default Portfolio;
