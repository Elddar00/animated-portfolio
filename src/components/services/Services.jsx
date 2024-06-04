import "./services.scss";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          Posvećen sam pomaganju pacijentima
          <br /> da ostvare zdrave i lepe osmehe.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/osmeh1.CR2" alt="" />
          <h1>
            <b>Postignite</b> Osmeh
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>Svojih</b> Snova.
          </h1>
          <button>Sta mi radimo?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
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
