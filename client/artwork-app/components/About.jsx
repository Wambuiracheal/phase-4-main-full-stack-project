import React from "react";

const AboutArtwork = () => {
  return (
    <div className="about-artwork-container">
      <h2>About the Artwork</h2>
      <div className="about-artwork-content">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_640.jpg"
          alt="Artwork"
          className="about-artwork-image"
        />
        <p>
          Art is a powerful expression of creativity, emotion, and storytelling. 
          Each piece tells a unique story, capturing moments, ideas, and inspirations. 
          Our collection showcases a variety of styles, from classical paintings 
          to modern digital art, reflecting the diversity of artistic expression.
        </p>
      </div>
    </div>
  );
};

export default AboutArtwork;
