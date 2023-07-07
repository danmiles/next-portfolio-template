'use client';

import styles from '@styles/home-page/history.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypingText } from '@components/CustomTexts';
import { overturnFadeIn, fadeIn, staggerContainer } from '@utils/motion';

const History = () => {
  return (
    <section className={`${styles.history} bg-linear-gradient`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.35 }}
        className="container"
      >
        <div className={styles.content}>
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className={styles.left}
          >
            <TypingText stylesClass="section-title" text="| history Us" />
            <h3 className={styles.subtitle}>
              JsCase is a software development company that provides
              high-quality software development services to its clients
              worldwide.
            </h3>

            <p className={styles.text}>
              So let's go on this wonderful digital adventure together. And we
              will bring your project to new heights and successes.
            </p>
          </motion.div>

          <motion.div
            variants={overturnFadeIn('right')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.right}
          >
            <Image
              src="/images/home-page/history/our-history.webp"
              alt="our history image"
              width={700}
              height={700}
              className={styles.historyImage}
            />
          </motion.div>
        </div>
        {/* end content */}
      </motion.div>
      {/* end container */}
    </section>
  );
};

export default History;
