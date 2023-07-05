'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant, textVariant2 } from '@utils/motion';

export const TitleText = ({ title, stylesClass }) => (
  <motion.h2
    className={stylesClass}
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
  >
    {title}
  </motion.h2>
);


export const TypingText = ({ text, stylesClass }) => (
  <motion.p variants={textContainer} className={stylesClass}>
    {Array.from(text).map((letter, index) => (
      <motion.span variants={textContainer} key={index}>
        {letter}
      </motion.span>
    ))}
  </motion.p>
);




