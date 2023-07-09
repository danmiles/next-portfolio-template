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
        viewport={{ once: false, amount: 0.45 }}
        className="container"
      >
        <div className={styles.content}>
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className={styles.left}
          >
            <TypingText stylesClass="section-title" text="| Our History" />

            <div className={styles.description}>
              <h3 className={styles.subtitle}>
                We have gone from freelance developers to a full-fledged team of
                professionals. And we are ready to help you with your project.
              </h3>

              <p className={styles.text}>
                So let's go on this wonderful digital adventure together. And we
                will bring your project to new heights and successes.
              </p>
            </div>

            <div className={styles.info}>
              <div className={styles.devider}></div>
              <div className={styles.infoContent}>
                <p className={styles.infoText}>
                  In the early days of web development, a small team of
                  enthusiastic programmers founded JS Case in 1998.
                  Armed with their passion for the emerging field and a vision
                  for the future, they set out to create innovative and
                  user-friendly websites for businesses. As the internet gained
                  popularity and businesses realized the importance of having an
                  online presence, JS Case quickly grew in reputation
                  and size. Their talented team continuously adapted to the
                  ever-evolving technologies, mastering HTML, CSS, JavaScript,
                  and other programming languages.
                  
                </p>
                <p className={styles.infoText}>
                  Over the years, JS Case solidified its position as a
                  leading web development company. Their success was attributed
                  to a customer-centric approach, with a focus on understanding
                  clients' unique needs and providing tailored solutions. The
                  company expanded its services beyond web development, offering
                  comprehensive digital strategies, e-commerce solutions, and
                  mobile app development. With a team of skilled designers,
                  developers, and digital marketers, JS Case delivered
                  projects that not only impressed clients but also achieved
                  outstanding results. 
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}    
            className={styles.right}
          >
            <Image
              src="/images/home-page/history/our-history.png"
              alt="our history image"
              width={600}
              height={400}
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
