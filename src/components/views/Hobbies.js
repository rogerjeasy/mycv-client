import React, { useEffect, useState, useRef } from 'react';
import '../../styles/views/Hobbies.scss';

const Hobbies = () => {
  const [switzerlandImages, setSwitzerlandImages] = useState([
    '/images/swiss6.jpeg',
    '/images/swiss7.jpeg',
    '/images/swiss40.jpeg',
    '/images/swiss33.jpeg',
    '/images/swiss36.jpeg',
    '/images/swiss55.jpeg',
    '/images/swiss31.jpeg',
    '/images/swiss50.jpeg',
    '/images/swiss48.jpeg',
    '/images/swiss51.jpeg',
    '/images/swiss52.jpeg',
    '/images/swiss22.jpeg',
    '/images/swiss23.jpeg',
    '/images/swiss24.jpeg',
    '/images/swiss25.jpeg',
    '/images/swiss26.jpeg'
  ]);
  const [barcelonaImages, setBarcelonaImages] = useState([
    '/images/spain1.jpeg',
    '/images/spain2.jpeg',
    '/images/spain3.jpeg',
    '/images/spain4.jpeg',
    '/images/spain5.jpeg'
  ]);
  const [italyImages, setItalyImages] = useState([
    '/images/france10.jpeg',
    '/images/france11.jpeg',
    '/images/france8.jpeg',
    '/images/france7.jpeg',
    '/images/france2.jpeg',
    '/images/france5.jpeg'
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
      <div className="hobbies-description">
        <p>
          Beyond my academic pursuits, I enjoy a variety of activities that help me maintain a balanced life. I love traveling and immersing myself in new cultures. I also find joy in playing soccer, getting lost in a good book, and watching movies. Living in the beautiful country of Switzerland, I take great pleasure in hiking and exploring its stunning landscapes. These experiences not only enrich my personal life but also inspire my professional work. Here is a collection of a few captivating places I have visited.
        </p>
      </div>
      <div className="hobbies-row"
        onMouseEnter={() => stopRotation(switzerlandIntervalRef)}
        onMouseLeave={() => startRotation(switzerlandImages, setSwitzerlandImages, switzerlandIntervalRef)}>
        {switzerlandImages.slice(0, 3).map((src, index) => (
          <img key={index} src={src} alt={`Switzerland ${index + 1}`} className="hobby-image" />
        ))}
      </div>
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


