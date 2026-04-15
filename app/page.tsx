import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Features from './components/Features';
import Products from './components/Products';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f8fc] dark:bg-[#050507]">
      <Navbar />
      <Hero />
      <Ticker />
      <Features />
      <Products />
      <CTA />
      <Footer />
    </main>
  );
}
