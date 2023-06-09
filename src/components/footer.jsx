import React from 'react'
import styles from '@/styles/footer.module.css';

const Footer = () => {
  // get current year
  const year = new Date().getFullYear()
  return (
    <div>&copy;{year} - Next.js 13 portfolio</div>
  )
}

export default Footer