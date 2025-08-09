import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import Activities from '@/react-app/components/Activities';
import About from '@/react-app/components/About';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Activities />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
