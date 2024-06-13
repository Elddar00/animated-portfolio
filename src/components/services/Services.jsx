import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

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
        <motion.div
          className="box"
          // whileHover={{ background: "white", color: "black" }}
        >
          <h2>Endodoncija</h2>
          <img
            src="/endodoncija.JPG"
            alt="Opis slike"
            style={{
              width: "300px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur pariatur optio debitis nobis labore maxime natus
            reiciendis aspernatur repudiandae praesentium. Consequuntur pariatur
            optio debitis nobis labore maxime natus reiciendis aspernatur
            repudiandae praesentium.
          </p>
          {/* <button>Go</button> */}
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
              width: "300px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur pariatur optio debitis nobis labore maxime natus
            reiciendis aspernatur repudiandae praesentium. Consequuntur pariatur
            optio debitis nobis labore maxime natus reiciendis aspernatur
            repudiandae praesentium.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "white", color: "black" }}
        >
          <h2>Decija Stomatologija</h2>
          <img
            src="/decija_stomatologija.JPG"
            alt="Opis slike"
            style={{
              width: "300px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur pariatur optio debitis nobis labore maxime natus
            reiciendis aspernatur repudiandae praesentium. Consequuntur pariatur
            optio debitis nobis labore maxime natus reiciendis aspernatur
            repudiandae praesentium.
          </p>
          {/* <button>Go</button> */}
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
              width: "300px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur pariatur optio debitis nobis labore maxime natus
            reiciendis aspernatur repudiandae praesentium. Consequuntur pariatur
            optio debitis nobis labore maxime natus reiciendis aspernatur
            repudiandae praesentium.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
