import Hero from "./components/Hero/Hero";
import IndustriesSegment from "./segments/Industries/IndustriesSegment";
import SocialStats from "./components/SocialStats/SocialStats";
import FeaturedSegment from "./segments/Featured/FeaturedSegment";
import Hiring from "./components/Hiring/Hiring";
import Sponsors from "./components/Sponsors/Sponsors";
import Contact from "./components/Contact/Contact";
import FooterSegment from "./segments/Footer/FooterSegment";
import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <IndustriesSegment />
      <SocialStats />
      <FeaturedSegment />
      <Hiring />
      <Sponsors />
      <Contact />
      <FooterSegment />
    </div>
  );
}
