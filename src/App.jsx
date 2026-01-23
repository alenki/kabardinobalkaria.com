import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Discover from './components/Discover';
import QuoteSection from './components/QuoteSection';
import About from './components/About';
import FollowSection from './components/FollowSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <Hero />
        <Introduction />
        <Discover />
        <QuoteSection />
        <About />
        <FollowSection />
      </main>
      <Footer />
    </div>
  );
}
