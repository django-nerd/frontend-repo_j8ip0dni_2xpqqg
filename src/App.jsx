import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
