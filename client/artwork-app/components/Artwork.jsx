import React, { useState } from 'react';
import '../App.css';

const images = [
  'https://images6.alphacoders.com/476/476288.jpg',
  'https://images7.alphacoders.com/406/406736.jpg',
  'https://images6.alphacoders.com/341/341236.jpg',
  'https://images5.alphacoders.com/134/1345268.png',
  'https://picfiles.alphacoders.com/302/302369.jpg',
  'https://picfiles.alphacoders.com/271/271190.jpg',
  'https://picfiles.alphacoders.com/271/271190.jpg'
];

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow-container">
      <div className="slides" style={{ backgroundImage: `url(${images[currentSlide]})` }}>
        <button id='btn-nav' className="prev" onClick={prevSlide}>❮</button>
        <button id='btn-nav' className="next" onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default App;
