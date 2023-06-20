'use client';
import React from 'react';
import styles from '@/styles/home-page/about.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypingText } from '@/components/CustomTexts';
import { overturnFadeIn, fadeIn, staggerContainer } from '@/utils/motion';

import { aboutData } from '@/data/constData';

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
            <motion.div
              variants={overturnFadeIn('left')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.left}
            >
              <Image
                src="/images/home-page/about/about-us.webp"
                alt="about image"
                width={500}
                height={500}
                className={styles.aboutImage}
              />
            </motion.div>
            <motion.div
              variants={fadeIn('left', 'tween', 0.2, 1)}
              className={styles.right}
              c
            >
              <TypingText stylesClass="section-title" text="| About Us" />
              <h3 className={styles.subtitle}>
                JsCase is a software development company that provides
                high-quality software development services to its clients
                worldwide.
              </h3>
              <ul className={styles.description}>
                {aboutData.map((item) => {
                  return (
                    <li className={styles.despirionItem} key={item.id}>
                      <Image
                        src={item.image}
                        alt="icon"
                        width={50}
                        height={50}
                      />
                      <p>{item.description}</p>
                    </li>
                  );
                })}
              </ul>
              <p className={styles.text}>
                So let's go on this wonderful digital adventure together. And
                we will bring your project to new heights and successes.
              </p>
            </motion.div>
          </div>
          {/* end content */}
        </div>
        {/* end container */}
      </motion.div>
    </section>
  );
};

export default About;
