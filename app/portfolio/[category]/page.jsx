
import styles from '@styles/pages/portfolioCategory.module.css';
import ButtonLink from '@components/ButtonLink.jsx';
import Image from 'next/image';
import { portfolioCategory } from '@data/constData';
import { notFound } from 'next/navigation';

const getData = (cat) => {
  const data = portfolioCategory[cat];

  if (data) {
    return data;
  }

  return notFound();
};

// Dinamicly generated SEO metadata from first post in category
// !!NOT worcking in deploy vercel

// export async function generateMetadata({ params }) {
//   const post = await getData(params.category);
//   return {
//     title: post[0].title,
//     description: post[0].desc,
//   };
// }

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
              <h1 className={styles.title}></h1>
              <p className={styles.desc}>{item.desc}</p>
              <ButtonLink text="See More" url="#" />
            </div>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                fill={true}
                src={item.image}
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
