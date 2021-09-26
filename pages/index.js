import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import ProjectsSection from '../components/ProjectsSection';
import SkillSection from '../components/SkillSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
