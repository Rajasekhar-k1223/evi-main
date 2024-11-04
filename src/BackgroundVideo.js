import React from "react";
import "./BackgroundVideo.css";
import vide from "../src/assets/video/video.mp4"

const BackgroundVideo = () => {
  return (
    <video autoPlay loop muted className="background-video">
      <source src={vide} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
