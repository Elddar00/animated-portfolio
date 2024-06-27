import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { useNavigate } from "react-router-dom";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Services = () => {
  const ref = useRef();

  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   animate="animate"
      //   whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Posvećen sam pomaganju pacijentima
          <br /> da ostvare zdrave i lepe osmehe.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <ImgComparisonSlider hover="hover" className="imgComparisonSlider">
            <img slot="first" src="/zubi-slajder2.jpg" />
            <img slot="second" src="/zubi-slajder.CR2" />
          </ImgComparisonSlider>
          <h1>
            <motion.b whileHover={{ color: "black" }}>Postignite </motion.b>
            Osmeh
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "black" }}>Svojih</motion.b> Snova.
          </h1>
          <button>Sta mi radimo?</button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        style={{ justifyContent: "center" }}
      >
        <motion.div className="box">
          <h2>Endodoncija</h2>
          <img
            src="/endodoncija.JPG"
            alt="Opis slike"
            style={{
              width: "200px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleButtonClick("/endodoncija")}
          />
          <p>
            Endodoncija je specijalizovana grana stomatologije koja se fokusira
            na zdravlje unutrašnjih struktura zuba, posebno zubne pulpe i
            okolnog tkiva. Ako ste ikada imali bol u zubu koji se širi do vilice
            ili oticanje oko zuba, verovatno ste se susreli sa problemom koji
            zahteva endodontski tretman.
          </p>
          <button
            className="desktop-only"
            onClick={() => handleButtonClick("/endodoncija")}
          >
            Vise o Endodonciji...
          </button>
        </motion.div>
        <motion.div
          className="box"
          // whileHover={{ background: "white", color: "black" }}
        >
          <h2>Paradontologija</h2>
          <img
            src="/paradontologija.PNG"
            alt="Opis slike"
            style={{
              width: "200px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <p>
            Parodontologija je specijalizovana grana stomatologije koja se bavi
            prevencijom, dijagnostikom i lečenjem bolesti potpornih struktura
            zuba, uključujući desni, alveolarnu kost, cementum i parodontni
            ligament. Zdravlje ovih struktura je ključno za dugovečnost i
            funkcionalnost zuba, a parodontološka terapija igra vitalnu ulogu u
            očuvanju oralnog zdravlja.
          </p>
          <button>Vise o Paradontologiji...</button>
        </motion.div>
        <motion.div
          className="box"
          // whileHover={{ background: "white", color: "black" }}
        >
          <h2>Decija Stomatologija</h2>
          <img
            src="/decija_stomatologija.JPG"
            alt="Opis slike"
            style={{
              width: "200px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <p>
            Dečija stomatologija, poznata i kao pedijatrijska stomatologija,
            specijalizovana je grana stomatologije koja se fokusira na oralno
            zdravlje dece od ranog detinjstva do adolescencije. Kroz preventivne
            mere, dijagnostiku i lečenje, dečiji stomatolozi pomažu u očuvanju
            zdravlja zuba i desni kod dece, postavljajući temelje za dugoročno
            oralno zdravlje.
          </p>
          <button>Vise o Decijoj Stomatologiji...</button>
        </motion.div>
        <motion.div
          className="box"
          // whileHover={{ background: "white", color: "black" }}
        >
          <h2>Ortodoncija</h2>
          <img
            src="/ortondoncija.JPG"
            alt="Opis slike"
            style={{
              width: "200px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <p>
            Ortodoncija je specijalizovana grana stomatologije koja se bavi
            dijagnostikom, prevencijom i lečenjem nepravilnosti u položaju zuba
            i vilica. Osim estetskih poboljšanja, ortodontski tretmani doprinose
            ukupnom oralnom zdravlju, funkcionalnosti i dugovečnosti zuba.
          </p>
          <button>Vise o Ortodonciji...</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
