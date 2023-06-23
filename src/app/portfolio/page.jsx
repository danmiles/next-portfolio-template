'use client';
import React from 'react';
import styles from '@/styles/pages/portfolioPage.module.css';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/motion';
import Link from 'next/link';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <section className={styles.portfolioPage}>
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>Choose a gallery</h1>
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
            variants={fadeIn('left', 'tween', 0.2, 2)}
          >
            <Link href="/portfolio/illustrations" className={styles.link}>
              <Image
                src="/images/portfolio/illustration.png"
                alt="illustration"
                quality={70}
                fill={true}
              />
              <span className={styles.title}>Illustrations</span>
            </Link>
          </motion.div>
          {/* element 1 end */}
          {/* element 2 start */}
          <motion.div
            className={styles.galleryItem}
            variants={fadeIn('up', 'tween', 0.2, 2)}
          >
            <Link href="/portfolio/websites" className={styles.link}>
              <Image
                src="/images/portfolio/websites.jpg"
                alt="illustration"
                quality={70}
                fill={true}
              />
              <span className={styles.title}>Websites</span>
            </Link>
          </motion.div>
          {/* element 2 end */}
          {/* element 3 start */}
          <motion.div
            className={styles.galleryItem}
            variants={fadeIn('right', 'tween', 0.2, 2)}
          >
            <Link href="/portfolio/applications" className={styles.link}>
              <Image
                src="/images/portfolio/apps.jpg"
                alt="illustration"
                quality={70}
                fill={true}
              />
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
