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
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container">
          <TitleText
            stylesClass="section-title"
            title="| About Us"
          />

          <div className={styles.content}>
            <div className={styles.left}>
              <motion.div variants={fadeIn('right')}>
              <Image
                src="/images/home-page/about-us.webp"
                alt="about image"
                width={600}
                height={600}
                className={styles.aboutImage}
              />
              </motion.div>

          </div>
          </div>
        </div>
        {/* end container */}
      </motion.div>
    </section>
  );
};

export default About;
