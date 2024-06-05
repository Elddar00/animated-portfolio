import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Zubarski Zahvat 1",
    img: "https://www.pexels.com/photo/young-woman-holding-a-dental-instrument-and-smiling-11928561/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi harum qui error dolores. Iste cumque asperiores illum, aliquid tempore qui.",
  },
  {
    id: 2,
    title: "Zubarski Zahvat 2",
    img: "https://images.pexels.com/photos/11928559/pexels-photo-11928559.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi harum qui error dolores. Iste cumque asperiores illum, aliquid tempore qui.",
  },
  {
    id: 3,
    title: "Zubarski Zahvat 3",
    img: "https://images.pexels.com/photos/11956995/pexels-photo-11956995.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi harum qui error dolores. Iste cumque asperiores illum, aliquid tempore qui.",
  },
  {
    id: 4,
    title: "Zubarski Zahvat 4",
    img: "https://images.pexels.com/photos/11956994/pexels-photo-11956994.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi harum qui error dolores. Iste cumque asperiores illum, aliquid tempore qui.",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
};

export const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Galerija osmeha :</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
