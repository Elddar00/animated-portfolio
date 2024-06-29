import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./portfolio.scss";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Zubarski Zahvat 1",
    video: "kadir1.MP4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi harum qui error dolores. Iste cumque asperiores illum, aliquid tempore qui.",
  },
  {
    id: 2,
    title: "Zubarski Zahvat 2",
    video: "kadir2.MP4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi harum qui error dolores. Iste cumque asperiores illum, aliquid tempore qui.",
  },
  {
    id: 3,
    title: "Zubarski Zahvat 3",
    video: "kadir3.MP4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi harum qui error dolores. Iste cumque asperiores illum, aliquid tempore qui.",
  },
  {
    id: 4,
    title: "Zubarski Zahvat 4",
    video: "kadir5.MP4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi harum qui error dolores. Iste cumque asperiores illum, aliquid tempore qui.",
  },
];

const Single = ({ item }) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const vidRef = useRef();
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          vidRef.current.play();
          setPlayVideo(true);
        } else {
          vidRef.current.pause();
          setPlayVideo(false);
        }
      },
      { threshold: 0.5 }
    );

    if (vidRef.current) {
      observer.observe(vidRef.current);
    }

    return () => {
      if (vidRef.current) {
        observer.unobserve(vidRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.muted = isMuted;
      if (!isMuted) {
        vidRef.current.play(); // Ensure the video starts playing when unmuted
      }
    }
  }, [isMuted]);

  const handleVideoClick = () => {
    setPlayVideo(!playVideo);
    setIsMuted(!isMuted);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="mediaContainer" ref={ref}>
            {item.video ? (
              <div className="video-wrapper">
                <video
                  ref={vidRef}
                  src={item.video}
                  type="video/mp4"
                  loop
                  playsInline
                  autoPlay // Ensure video auto-plays
                  muted={isMuted} // Bind muted attribute to state
                  style={{ display: "block" }}
                />
                {!playVideo && (
                  <div className="video-overlay" onClick={handleVideoClick}>
                    <div className="video-overlay-circle">
                      <BsFillPlayFill color="#fff" fontSize={30} />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <img src={item.img} alt={item.title} />
            )}
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
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
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
