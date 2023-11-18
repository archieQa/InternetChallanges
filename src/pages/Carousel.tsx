import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const kthehuMrapa = useNavigate(); 


  const handleKthehu = () => {
    kthehuMrapa('/')
  }

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="relative">
        <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="w-full h-auto" />

        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 cursor-pointer" onClick={handlePrev}>
          {'<'}
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer" onClick={handleNext}>
          {'>'}
        </div>
      </div>

      <div className="flex mt-4">
        {images.map((image, index) => (
          <div key={index} className={`w-10 h-10 mx-1 cursor-pointer ${currentImage === index ? 'border-2 border-blue-500' : ''}`} onClick={() => handleClick(index)}>
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <button className='m-7 absolute bottom-0 right-0 rounded bg-blue-400 hover:bg-blue-700' onClick={handleKthehu}>Back</button>
    </div>
  );
};

export default ImageCarousel;