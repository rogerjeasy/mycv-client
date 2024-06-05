import React, { useEffect, useState, useRef } from 'react';
import '../../styles/views/Hobbies.scss';

const Hobbies = () => {
  const [barcelonaImages, setBarcelonaImages] = useState([
    '/images/spain1.jpeg',
    '/images/spain2.jpeg',
    '/images/spain3.jpeg',
    '/images/spain4.jpeg',
    '/images/spain5.jpeg'
  ]);
  const [italyImages, setItalyImages] = useState([
    '/images/italy1.jpg',
    '/images/italy2.jpg',
    '/images/italy3.jpg'
  ]);
  const [switzerlandImages, setSwitzerlandImages] = useState([
    '/images/swiss7.jpeg',
    '/images/swiss22.jpeg',
    '/images/swiss23.jpeg',
    '/images/swiss24.jpeg',
    '/images/swiss25.jpeg',
    '/images/swiss26.jpeg',
    '/images/swiss27.jpeg'
  ]);
  const [southafricaImages, setSouthafricaImages] = useState([
    '/images/sa1.jpeg',
    '/images/sa2.jpeg',
    '/images/sa3.jpeg',
    '/images/sa4.jpeg',
    '/images/sa5.jpeg'
  ]);

  const barcelonaIntervalRef = useRef();
  const italyIntervalRef = useRef();
  const switzerlandIntervalRef = useRef();
  const southafricaIntervalRef = useRef();

  const rotateImages = (images, setImages) => {
    setImages(prevImages => [...prevImages.slice(1), prevImages[0]]);
  };

  useEffect(() => {
    barcelonaIntervalRef.current = setInterval(() => rotateImages(barcelonaImages, setBarcelonaImages), 5000);
    italyIntervalRef.current = setInterval(() => rotateImages(italyImages, setItalyImages), 5000);
    switzerlandIntervalRef.current = setInterval(() => rotateImages(switzerlandImages, setSwitzerlandImages), 5000);
    southafricaIntervalRef.current = setInterval(() => rotateImages(southafricaImages, setSouthafricaImages), 5000);

    return () => {
      clearInterval(barcelonaIntervalRef.current);
      clearInterval(italyIntervalRef.current);
      clearInterval(switzerlandIntervalRef.current);
      clearInterval(southafricaIntervalRef.current);
    };
  }, [barcelonaImages, italyImages, switzerlandImages, southafricaImages]);

  const stopRotation = (intervalRef) => {
    clearInterval(intervalRef.current);
  };

  const startRotation = (images, setImages, intervalRef) => {
    intervalRef.current = setInterval(() => rotateImages(images, setImages), 5000);
  };

  return (
    <div className="hobbies-container">
      <h1>My Hobbies</h1>
      <div className="hobbies-row"
        onMouseEnter={() => stopRotation(barcelonaIntervalRef)}
        onMouseLeave={() => startRotation(barcelonaImages, setBarcelonaImages, barcelonaIntervalRef)}>
        {barcelonaImages.slice(0, 3).map((src, index) => (
          <img key={index} src={src} alt={`Barcelona ${index + 1}`} className="hobby-image" />
        ))}
      </div>
      <div className="hobbies-row"
        onMouseEnter={() => stopRotation(italyIntervalRef)}
        onMouseLeave={() => startRotation(italyImages, setItalyImages, italyIntervalRef)}>
        {italyImages.slice(0, 3).map((src, index) => (
          <img key={index} src={src} alt={`Italy ${index + 1}`} className="hobby-image" />
        ))}
      </div>
      <div className="hobbies-row"
        onMouseEnter={() => stopRotation(switzerlandIntervalRef)}
        onMouseLeave={() => startRotation(switzerlandImages, setSwitzerlandImages, switzerlandIntervalRef)}>
        {switzerlandImages.slice(0, 3).map((src, index) => (
          <img key={index} src={src} alt={`Switzerland ${index + 1}`} className="hobby-image" />
        ))}
      </div>
      <div className="hobbies-row"
        onMouseEnter={() => stopRotation(southafricaIntervalRef)}
        onMouseLeave={() => startRotation(southafricaImages, setSouthafricaImages, southafricaIntervalRef)}>
        {southafricaImages.slice(0, 3).map((src, index) => (
          <img key={index} src={src} alt={`South Africa ${index + 1}`} className="hobby-image" />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;

