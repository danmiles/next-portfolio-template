'use client';
import React from 'react';
import styles from '@/styles/home-page/hero.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TitleText, TypingText } from '@/components/CustomTexts';
import { fadeIn, staggerContainer } from '@/utils/motion';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container">
          <div className={styles.content}>
            <div className={styles.left}>
              <TitleText
                stylesClass={styles.title}
                title="Front-End Insights: Harnessing the Power of Design and Technology for Web Excellence"
              />
              <div className={styles.description}>
                <TypingText
                  text="We are a team of passionate designers and developers who are 
                dedicated to delivering the best possible solutions for our clients."
                />
                <TypingText
                  text="Next 13 is a revolutionary software solution that offers a
                  wide range of benefits to businesses and individuals alike.
                  With Next 13, you can streamline your operations, enhance
                  productivity, and stay ahead of the competition."
                />
              </div>
            </div>
            <div className={styles.right}>
              <motion.div variants={fadeIn('left','tween', 0.2, 1)}>
                <Image
                  src="/images/home-page/hero/hero-image.png"
                  alt="hero image"
                  width={500}
                  height={500}
                  className={styles.heroImage}
                />
              </motion.div>
            </div>
          </div>
          {/* end content */}
        </div>
        {/* end container */}
      </motion.div>
    </section>
  );
};

export default Hero;
