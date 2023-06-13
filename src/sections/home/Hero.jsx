import React from 'react';
import styles from '@/styles/home-page/hero.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.title}>
              Front-End Insights: Harnessing the Power of Design and Technology
              for Web Excellence
            </h1>
            <p className={styles.description}>
              We are a team of passionate designers and developers who are
              dedicated to delivering the best possible solutions for our
              clients. We are a team of passionate designers and developers who
              are dedicated to delivering the best possible solutions for our
              clients.
            </p>
          </div>
          <div className={styles.right}>
            <Image
              src="/images/home-page/hero-image.png"
              alt="hero image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
