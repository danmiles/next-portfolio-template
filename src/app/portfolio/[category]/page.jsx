import React from 'react';
import styles from '@/styles/pages/portfolioCategory.module.css';
import ButtonLink from '@/components/ButtonLink.jsx';
import Image from 'next/image';
import { portfolioCategory } from '@/data/constData';
import { notFound } from 'next/navigation';

const getData = (cat) => {
  const data = portfolioCategory[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <section className={styles.portfolioCategory}>
      <div className="container">
        <h1 className={styles.catTitle}>{params.category}</h1>

        {data.map((item) => (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <ButtonLink text="See More" url="#" />
            </div>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                fill={true}
                src={item.image}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
