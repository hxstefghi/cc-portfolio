import React from "react";
import "./Snowfall.css";

const SNOWFLAKE_COUNT = 50;

const getRandom = (min, max) => Math.random() * (max - min) + min;

const Snowfall = () => (
  <div className="snowfall">
    {Array.from({ length: SNOWFLAKE_COUNT }).map((_, i) => {
      const size = getRandom(4, 8); // px
      const style = {
        left: `${getRandom(0, 100)}vw`,
        animationDuration: `${getRandom(4, 10)}s`,
        animationDelay: `-${getRandom(0, 10)}s`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: getRandom(0.6, 1),
      };
      return (
        <div key={i} className="snowflake snow-dot" style={style}></div>
      );
    })}
  </div>
);

export default Snowfall;
