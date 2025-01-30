import React, { useState, useEffect } from "react";
import "../App.css"; // Import the CSS file

const ImageGallery = () => {
  const images = [
    { src: "./src/assets/images/pic1.jpeg", alt: "The Woods" },
    { src: "./src/assets/images/pic2.jpeg", alt: "Cinque Terre" },
    { src: "./src/assets/images/pic3.jpeg", alt: "Mountains and fjords" },
    { src: "./src/assets/images/pic4.jpeg", alt: "Northern Lights" },
    { src: "./src/assets/images/pic5.jpeg", alt: "Nature and sunrise" },
    { src: "./src/assets/images/pic6.jpeg", alt: "Snowy Mountains" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {/* Main Image Display */}
      <div className="mySlides fade">
        <div className="numbertext">
          {currentIndex + 1} / {images.length}
        </div>
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
      </div>

      {/* Navigation Buttons */}
      <a className="prev" onClick={prevSlide}>
        &#10094;
      </a>
      <a className="next" onClick={nextSlide}>
        &#10095;
      </a>

      {/* Caption Container */}
      <div className="caption-container">
        <p>{images[currentIndex].alt}</p>
      </div>

      {/* Thumbnail Images */}
      <div className="row">
        {images.map((image, index) => (
          <div className="column" key={index}>
            <img
              className={`demo cursor ${index === currentIndex ? "active" : ""}`}
              src={image.src}
              alt={image.alt}
              onClick={() => goToSlide(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
