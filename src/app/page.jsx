import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import MoneyBack from "../components/MoneyBack";
import SuccessStories from "../components/SuccessStories";
import Support from "../components/Support";
import Dashboard from "../components/Dashboard";
import Comparison from "../components/Comparison";
import WhyTrust from "../components/WhyTrust";
import Migration from "../components/Migration";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import FooterCTA from "../components/FooterCTA";
import Footer from "../components/Footer";
import GoogleReviews from "../components/GoogleReviews";
import G2Reviews from "../components/G2Reviews";
import HeroStats from "../components/HeroStats";
import FloatingChatButton from "../components/FloatingChatButton";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <FloatingChatButton/>
      <Pricing />
      <MoneyBack />
      <SuccessStories />
      <Support />
      <GoogleReviews/>
      <Dashboard />
      <G2Reviews/>
      <Comparison />
      <WhyTrust />
      <Migration />
      <Products />
      <HeroStats/>
      <Testimonials />
      <FAQ />
      <FooterCTA />
      <Footer />
    </main>
  );
}
