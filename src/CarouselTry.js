import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselTry = () => {
  const [videos, setVideos] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Fetch videos from server
    const fetchVideos = async () => {
      const response = await fetch('http://216.48.186.249:5002/trycloning');
      const newVideos = await response.json();
      setVideos([...videos, ...newVideos]);
      setActiveIndex(videos.length);
    };

    fetchVideos();
  }, []);

  return (
    <Carousel activeIndex={activeIndex} onSelect={(index) => setActiveIndex(index)}>
      {videos.map((video, index) => (
        <Carousel.Item key={index}>
          <video src={video.url} controls />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselTry;
