import Header from "./components/Header";
import Hero from "./components/Hero";
import WhySport from "./components/WhySport";
import FocusAreas from "./components/FocusAreas";
import Initiatives from "./components/Initiatives";
import ImpactStats from "./components/ImpactStats";
import AssessmentCTA from "./components/AssessmentCTA";
import StoriesFromField from "./components/StoriesFormField";
import Testimonials from "./components/Testimonials";
import Milestones from "./components/Milestones";
import NewsletterPromo from "./components/NewsletterPromo";
import ResearchInsights from "./components/ResearchInsights";
import Partners from "./components/Partners";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhySport />
      <FocusAreas />
      <Initiatives />
      <ImpactStats />
      <AssessmentCTA />
      <StoriesFromField />
      <Testimonials />
      <Milestones />
      <NewsletterPromo />
      <ResearchInsights />
      <Partners />
      <FAQ />
      <Footer />
    </div>
  );
}
