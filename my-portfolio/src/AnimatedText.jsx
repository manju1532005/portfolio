import React, { useState, useEffect } from "react";
import AnimatedText from "./AnimatedText"; // adjust the path as needed

const AnimatedText = ({ texts, speed = 150 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (index === texts.length) return;

    if (forward) {
      if (subIndex < texts[index].length) {
        const timeout = setTimeout(() => setSubIndex(subIndex + 1), speed);
        return () => clearTimeout(timeout);
      } else setForward(false);
    } else {
      if (subIndex > 0) {
        const timeout = setTimeout(() => setSubIndex(subIndex - 1), speed);
        return () => clearTimeout(timeout);
      } else {
        setForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [subIndex, index, forward, texts, speed]);

  return <h1>{texts[index].substring(0, subIndex)}<span className="cursor">|</span></h1>;
};

export default AnimatedText;
