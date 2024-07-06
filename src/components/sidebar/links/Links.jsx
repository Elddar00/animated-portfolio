import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opasity: 1,
  },
  closed: {
    y: 50,
    opasity: 0,
  },
};

const Links = () => {
  const items = ["Home", "O Meni", "Usluge", "Kontakt"];

  const handleClick = (event, item) => {
    event.preventDefault();
    const targetSection = document.getElementById(item);
    targetSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={(event) => handleClick(event, item)}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
