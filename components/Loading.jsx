import React from 'react'
import Image from 'next/image'
import styles from '@styles/loading.module.css'

const Loading = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/loading.svg"
        alt="Loading"
        width={100}
        height={100}
        className={styles.image}
      />
      
    </div>
  )
}

export default Loading