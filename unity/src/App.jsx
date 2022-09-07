import Sponsors from "./components/Sponsors/Sponsors";
import Contact from "./components/Contact/Contact";
import FooterSegment from "./segments/Footer/FooterSegment";
import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <Sponsors />
      <Contact />
      <FooterSegment />
    </div>
  );
}
