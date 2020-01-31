import React from "react";

import "./hero.styles.scss";

const Hero = () => {
  const images = require.context("../../assets", true);
  let imgsrc = images("./jay-heike-6AwjjrzIgRs-unsplash.jpg");

  return (
    <div className="hero">
      <div className="heropic">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imgsrc})`
          }}
        />
        <div className="content">
          <h5 className="title">Photo by Jay Heike on Unsplash</h5>
        </div>
      </div>
      <div className="heroinfo">
        <h1 className="title">What is a HERO?</h1>
        <span className="subtitle">
          "A hero is somebody who is selfless, who is generous in spirit, who
          just tries to give back as much as possible and help people. A hero to
          me is someone who saves people and who really deeply cares."
          <br /> Debi Mazar
        </span>
      </div>
    </div>
  );
};

export default Hero;
