import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Services } from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Usluge">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Nasi Radovi">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Kontakt">
        <Contact />
      </section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
