import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="h-screen snap-y snap-mandatory scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
}

export default App;
