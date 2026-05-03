import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import InternshipsSection from './components/InternshipsSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <HeroSection />
      
      <main className="relative z-10">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <InternshipsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
