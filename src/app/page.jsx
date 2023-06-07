import Image from 'next/image'
import styles from '@/styles/page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          src="/images/next.svg"
          alt="Next.js Logo"
          width={300}
          height={300}
        />
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

    </div>
    
  )
}
