import React from 'react';
import styles from '@/styles/pages/blog.module.css';
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export const metadata = {
  title: 'JsCase | Blog',
  description:
    'Our blog page of JsCase. We whrite articles about web development.',
};
const Blog = async () => {
  const data = await getData();
  return (
    <section className={styles.blog}>
      <div className="container">
        {data.map((item) => (
          <Link
            href={`/blog/${item._id}`}
            className={styles.container}
            key={item.id}
          >
            <div className={styles.imageContainer}>
              <Image
                src={item.img}
                alt=""
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
