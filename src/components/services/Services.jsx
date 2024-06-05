import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

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
      animate={isInView && "animate"}
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
          {/* <img src="/osmeh1.CR2" alt="" /> */}
          <img src="/osmeh01.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ color: "black" }}>Postignite</motion.b>{" "}
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
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "white", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur pariatur optio debitis nobis labore maxime natus
            reiciendis aspernatur repudiandae praesentium. Consequuntur pariatur
            optio debitis nobis labore maxime natus reiciendis aspernatur
            repudiandae praesentium.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "white", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur pariatur optio debitis nobis labore maxime natus
            reiciendis aspernatur repudiandae praesentium. Consequuntur pariatur
            optio debitis nobis labore maxime natus reiciendis aspernatur
            repudiandae praesentium.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "white", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur pariatur optio debitis nobis labore maxime natus
            reiciendis aspernatur repudiandae praesentium. Consequuntur pariatur
            optio debitis nobis labore maxime natus reiciendis aspernatur
            repudiandae praesentium.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "white", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur pariatur optio debitis nobis labore maxime natus
            reiciendis aspernatur repudiandae praesentium. Consequuntur pariatur
            optio debitis nobis labore maxime natus reiciendis aspernatur
            repudiandae praesentium.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
