import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Education from '../components/Education';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Education />
      <Footer />
    </main>
  );
}