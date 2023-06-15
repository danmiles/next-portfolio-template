'use client';
import React from 'react';
import styles from '@/styles/home-page/hero.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { overturnFadeIn, fadeIn } from '@/data/motionData';

const Hero = () => {
  const line1 = 'Front-End Insights: Harnessing the Power of Design ';
  const line2 = 'and Technology for Web Excellence';

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <motion.h1
              className={styles.title}
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {line1.split('').map((char, index) => {
                return (
                  <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
              <br />
              {line2.split('').map((char, index) => {
                return (
                  <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.h1>
            <p className={styles.description}>
              We are a team of passionate designers and developers who are
              dedicated to delivering the best possible solutions for our
              clients.
            </p>
            <p className={styles.description}>
              Next 13 is a revolutionary software solution that offers a wide
              range of benefits to businesses and individuals alike. With Next
              13, you can streamline your operations, enhance productivity, and
              stay ahead of the competition.
            </p>
          </div>
          <div className={styles.right}>
            <motion.div variants={overturnFadeIn('right')}>
              <Image
                src="/images/home-page/hero-image.png"
                alt="hero image"
                width={600}
                height={600}
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* end container */}
    </section>
  );
};

export default Hero;