import Hero from "./components/Hero/Hero";
import Hiring from "./components/Hiring/Hiring";
import Sponsors from "./components/Sponsors/Sponsors";
import Contact from "./components/Contact/Contact";
import FooterSegment from "./segments/Footer/FooterSegment";
import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <Hiring />
      <Sponsors />
      <Contact />
      <FooterSegment />
    </div>
  );
}
