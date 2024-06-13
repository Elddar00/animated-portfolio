import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Kadir Zilkic
        </motion.span>
        <div className="social">
          <a
            href="https://www.facebook.com/kadir.zilkic.752?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/kardijuve?igsh=dG9uMmJkb3RoYnNr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a
            href="https://www.youtube.com/@Kardijuve"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/youtube.png" alt="YouTube" />
          </a>
          {/* <a href="#">
            <img src="/dribbble.png" alt="Dribbble" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
