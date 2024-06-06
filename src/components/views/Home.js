import React from "react";
import "../../styles/views/Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <div className="home-content">
        <div className="image-container">
          <img src="/images/roger_2.jpeg" alt="Profile" className="my-picture" />
        </div>
        <div className="description-container">
          <div className="description">
            <p>
              Hello, and thank you for visiting my page! My name is Roger Jeasy Bavibidila, and I am a PhD student at the Department of Informatics at the University of Zurich, conducting research under the esteemed supervision of Prof. Dr. Manuel Günther. My interests lie in the fields of Machine Learning, Deep Learning, Computer Vision, and Web Development.
            </p>
            <p>
              My main research aims to enhance machine learning algorithms for face and object detection and recognition using Gabor wavelets. While deep neural networks have revolutionized many research areas with their impressive power, traditional image processing and feature extraction methods, like Gabor wavelets, have often been overlooked. Inspired by the visual cortex of mammals, Gabor wavelets offer a robust approach to face detection and recognition, continuing the work of pioneers such as Wiskott et al. who demonstrated their effectiveness in these tasks.
            </p>
            <p>
              Recently, I have developed a strong passion for web development through a software engineering course where I was actively involved in a project. This experience has honed my technical skills in creating web applications using React, Node.js, and Java Spring Boot, allowing me to bridge the gap between sophisticated algorithms and practical applications. My work in web development has been both challenging and rewarding, offering new avenues to apply my machine learning expertise.
            </p>
            <p>
              Beyond my academic pursuits, I enjoy a variety of activities that help me maintain a balanced life. I love playing soccer, immersing myself in a good book, and watching movies. Living in the beautiful country of Switzerland, I also take great pleasure in hiking and exploring new places. These experiences not only enrich my personal life but also inspire my professional work. Welcome to my portfolio, where you can learn more about my research, projects, and interests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;









