// app/page.tsx
import HeroSection from '../components/home/HeroSection';
import CoreServices from '../components/home/CoreServices';
import FeaturedSolutions from '../components/home/FeaturedSolutions';
import ProjectCalculator from '../components/home/ProjectCalculator';
import HowWeWork from '../components/home/HowWeWork';
import VideoShowcase from '../components/home/VideoShowcase';
import Testimonials from '../components/home/Testimonials';
import FaqSection from '../components/home/FaqSection';
import CtaBanner from '../components/home/CtaBanner';

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 transition-colors">
      <HeroSection />
      <CoreServices />
      <FeaturedSolutions />
      <ProjectCalculator />
      <HowWeWork />
      <VideoShowcase />
      <Testimonials />
      <FaqSection />
      <CtaBanner />
    </div>
  );
}