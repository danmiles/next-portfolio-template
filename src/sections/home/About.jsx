'use client';
import React from 'react';
import styles from '@/styles/home-page/about.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TitleText, TypingText } from '@/components/CustomTexts';
import { fadeIn, staggerContainer } from '@/utils/motion';

const About = () => {
  return (
    <section className={styles.about}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="container">

          <div className={styles.content}>
            <div className={styles.left}>
              <motion.div
                type="spring"
                variants={fadeIn('right')}
                whileHover={{
                  scale: 1.05,
                }}
              >
                <Image
                  src="/images/home-page/about-us.webp"
                  alt="about image"
                  width={600}
                  height={600}
                  className={styles.aboutImage}
                />
              </motion.div>
            </div>
            <div className={styles.right}>
              <TitleText stylesClass="section-title" title="| About Us" />
              <h3 className={styles.subtitle}>
                JsCase is a software development company that provides
                high-quality software development services to its clients
                worldwide.
              </h3>
            </div>
          </div>
          {/* end content */}
        </div>
        {/* end container */}
      </motion.div>
    </section>
  );
};

export default About;
