import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Usluge">Parallax</section>
      <section>Services</section>
      <section id="Nasi Radovi">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Portfolio4</section>
      <section id="Kontakt">Contact</section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
