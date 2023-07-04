'use client';

import styles from '@/styles/home-page/hero.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypingText } from '@/components/CustomTexts';
import { fadeIn, staggerContainer } from '@/utils/motion';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='container'
      >
        <div className={styles.content}>
          {/* Left start */}
          <div className={styles.left}>
            <h2 className={styles.title}>
              Front-End Insights: Harnessing the Power of Design and
              Technology for Web Excellence
            </h2>
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
              <TypingText
                text="Our team have a proven track record of delivering high-quality
                software solutions to our clients."
                />
              
            </div>
          </div>
          {/* Left end */}
          {/* Right */}
          <motion.div
            className={styles.right}
            variants={fadeIn('left', 'tween', 0.2, 1)}
          >
            <Image
              src="/images/home-page/hero/hero-image.png"
              alt="hero image"
              width={600}
              height={600}
              className={styles.heroImage}
              priority={true}
            />
          </motion.div>
        </div>
        {/* end content */}
        {/* end container */}
      </motion.div>
    </section>
  );
};

export default Hero;
