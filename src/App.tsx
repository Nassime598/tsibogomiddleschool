import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Statistics from './components/Statistics';
import Announcement from './components/Announcement';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Update document title
  React.useEffect(() => {
    document.title = "Tsibogo Middle School";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Statistics />
        <Announcement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;