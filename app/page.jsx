import Hero from '@sections/home/Hero';
import About from '@sections/home/About';
import History from '@sections/home/History';
import Loading from '@components/Loading';

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* About section */}
      <About />
      {/* History section */}
      <History />
    </>
  );
}
