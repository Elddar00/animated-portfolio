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
          <a
            href="https://www.linkedin.com/in/dr-kadir-zilkic-943237225/?originalSubdomain=rs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
