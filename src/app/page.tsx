import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { PortfolioMotion } from '@/components/animations/portfolio-motion';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Contact } from '@/components/sections/contact';
export default function Home() {
  return (
  <>
    <Navbar />
    <PortfolioMotion>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </PortfolioMotion>
    <Footer />
  </>
  );
}
