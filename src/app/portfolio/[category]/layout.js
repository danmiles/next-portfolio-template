import { notFound } from 'next/navigation';
import { portfolioCategory } from '@/data/constData';

const getData = (cat) => {
  const data = portfolioCategory[cat];

  if (data) {
    return data;
  }

  return notFound();
};

// Dinamicly generated SEO metadata from first post in category
export async function generateMetadata({ params }) {
  const post = await getData(params.category);
  return {
    title: post[0].title,
    description: post[0].desc,
  };
}

export default function Layout({ children }) {
  return <>{children};</>;
}
