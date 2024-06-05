import React from "react";
import "../../styles/views/Home.scss";

const Home = () => {
  console.log("Home component rendered");
  return (
    <div className="home-container">
      <h1>Welcome to my portfolio</h1>
      <p>Hey, thank you for visiting my page. My name is Roger Jeasy Bavibidila, a third-year PhD Student at Department of Informatics of the University of Zurich.
        I am conducted my research under the supervision of Prof. Dr. Manuel Gunther. My research interests are in the areas of Machine Learning, Deep Learning, and Computer Vision.

        I am passionate about developing and deploying Machine Learning models to solve real-world problems. 
        
        I have experience in developing web applications using React, Node.js, and Java Spring Boot.

        In my free time, I enjoy playing soccer, reading books, and watching movies. Since Switzerland is a beautiful country, I also enjoy hiking and exploring new places.
      </p>
    </div>
  );
};

export default Home;

